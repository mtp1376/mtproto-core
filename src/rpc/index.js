const builderMap = require('../tl/builder');
const Serializer = require('../tl/serializer');
const Deserializer = require('../tl/deserializer');
const {
  getRandomInt,
} = require('../utils/common');
const baseDebug = require('../utils/common/base-debug');
require('../crypto/pq');

class RPC {
  constructor({ dc, context, transport }) {
    this.dc = dc;
    this.crypto = context.crypto;
    this.context = context;
    this.transport = transport;

    this.debug = baseDebug.extend(`rpc-${this.dc.id}`);
    this.debug('init');


    // this.transport.on('open', this.handleTransportOpen.bind(this));
    // this.transport.on('error', this.handleTransportError.bind(this));
    // this.transport.on('message', this.handleTransportMessage.bind(this));

  }


  handleEitaaResponse(buffer) {
    const plainDeserializer = new Deserializer(buffer);

    return plainDeserializer.predicate();
  }

  async call(method, params = {}) {
    return this.handleEitaaResponse(await this.sendPlainMessage(method, params));
  }

  async sendPlainMessage(fn, params) {
    const serializer = new Serializer(fn, params);

    const requestBytes = serializer.getBytes();

    const wrapperSerializer = new Serializer(builderMap.eitaaObject, {
      token: 'PUT YOUR TOKEN HERE', // TODO
      imei: "mtpasdxxggzzj__web", // Make it random
      packed_data: requestBytes,
      layer: 133,
      flags: 32
    })

    return this.transport.send(wrapperSerializer.getBytes());
  }

  async getMessageId() {
    // @TODO: Check timeOffset
    const timeOffset = await this.context.storage.get('timeOffset');

    const timeTicks = Date.now();
    const timeSec = Math.floor(timeTicks / 1000) + timeOffset;
    const timeMSec = timeTicks % 1000;
    const random = getRandomInt(0xffff);

    const { lastMessageId } = this;

    let messageId = [timeSec, (timeMSec << 21) | (random << 3) | 4];

    if (
      lastMessageId[0] > messageId[0] ||
      (lastMessageId[0] == messageId[0] && lastMessageId[1] >= messageId[1])
    ) {
      messageId = [lastMessageId[0], lastMessageId[1] + 4];
    }

    this.lastMessageId = messageId;

    return messageId;
  }

  getSeqNo(isContentRelated = true) {
    let seqNo = this.seqNo * 2;

    if (isContentRelated) {
      seqNo += 1;
      this.seqNo += 1;
    }

    return seqNo;
  }


  async setStorageItem(key, value) {
    return this.context.storage.set(`${this.dc.id}${key}`, value);
  }

  async getStorageItem(key) {
    return this.context.storage.get(`${this.dc.id}${key}`);
  }
}

module.exports = RPC;
