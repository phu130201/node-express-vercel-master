const zego = require("../lib/zegoServerAssistant");
const tokenCtrl = {
  token: async (req, res, next) => {
    const appId = parseInt(process.env.appId);
    const userId = req.params.userId;
    const secret = process.env.secret;

    const effectiveTimeInSeconds = 7200;

    const payloadObject = {
      room_id: userId,

      privilege: {
        1: 1, // loginRoom
        2: 0, // publishStream
      },
      stream_id_list: null,
    };
    try {
      const token = zego.generateToken04(
        appId,
        userId,
        secret,
        effectiveTimeInSeconds,
        JSON.stringify(payloadObject)
      );
      res.json({ token });
    } catch (e) {
      console.log({ e });
      res.json({ e: e?.errorMessage });
    }
  },
};
module.exports = tokenCtrl;
