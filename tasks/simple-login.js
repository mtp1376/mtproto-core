const MTProto = require('../envs/node/index.js');
const path = require("path");
const builderMap = require("../src/tl/builder");


const mtproto = new MTProto({
  storageOptions: {
    path: path.resolve(__dirname, './data/1.json'),
  },
});
(async () => {
    // const codeResult = await mtproto.call(builderMap["auth.sendCode"], {
    //   phone_number: "+989333186941",
    //   api_id: "94575",
    //   api_hash: "a3406de8d171bb422bb6ddf3bbd800e2",
    //   settings: {
    //     _: "codeSettings",
    //   },
    // });
    //
    const loginResult = await mtproto.call(builderMap["auth.signIn"], {
      phone_number: "+989333186941",
      phone_code: '1234',
    });
    console.log(loginResult);
    console.log('token:', loginResult.token)
  }
)()
