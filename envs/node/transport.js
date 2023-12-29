const Obfuscated = require('../../src/transport/obfuscated');

class Transport extends Obfuscated {
  constructor(dc, crypto) {
    super();

    this.connect();
  }

  get isAvailable() {
    return true;
  }

  connect() {
    this.stream = new Uint8Array();
    this.emit('open');
  }


  async send(bytes) {
    const response = await fetch('https://fateme.eitaa.com/eitaa/', {
      method: 'POST', body: bytes,
    });

    return await response.arrayBuffer();
  }
}

module.exports = Transport;
