const EventEmitter = require('events');
const RPC = require('./rpc');
const Crypto = require('./crypto');
const Storage = require('./storage');
const baseDebug = require('./utils/common/base-debug');

const debug = baseDebug.extend('main');

const TEST_DC_LIST = [
  {
    id: 2,
    ip: '2.189.58.32',
    port: 443,
    test: true,
  },
];

const PRODUCTION_DC_LIST = [
  {
    id: 2,
    ip: '2.189.58.32',
    port: 443,
    test: true,
  },
];

function makeMTProto(envMethods) {
  const requiredEnvMethods = [
    'SHA1',
    'SHA256',
    'PBKDF2',
    'getRandomBytes',
    'getLocalStorage',
    'createTransport',
  ];

  const envMethodsIsValid = requiredEnvMethods.every(
    (methodName) => methodName in envMethods
  );

  if (!envMethodsIsValid) {
    throw new Error('Specify all envMethods');
  }

  return class {
    constructor(options) {
      const { storageOptions } = options;

      this.dcList = !!options.test ? TEST_DC_LIST : PRODUCTION_DC_LIST;

      this.envMethods = envMethods;

      this.rpcs = new Map();
      this.crypto = new Crypto(this.envMethods);
      this.storage = new Storage(
        storageOptions,
        this.envMethods.getLocalStorage
      );
      this.updates = new EventEmitter();
    }

    async call(method, params = {}, options = {}) {
      const dcId = 2;

      const rpc = this.getRPC(dcId);

      return await rpc.call(method, params);
    }

    getRPC(dcId) {
      if (this.rpcs.has(dcId)) {
        return this.rpcs.get(dcId);
      }

      const dc = this.dcList.find(({ id }) => id === dcId);

      if (!dc) {
        debug(`don't find DC ${dcId}`);

        return;
      }

      const transport = this.envMethods.createTransport(dc, this.crypto);

      const rpc = new RPC({
        dc,
        context: this,
        transport,
      });

      this.rpcs.set(dcId, rpc);

      return rpc;
    }
  };
}

module.exports = makeMTProto;
