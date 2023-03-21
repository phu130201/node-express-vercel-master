const express = require("express");
const router = express.Router();
const zego = require("../../lib/zegoServerAssistant");

router.get("/alo", async (req, res, next) => {
  const appId = process.env.appId;
  const userId = req.params.userId;
  const secret = process.env.secret;
  console.log(appId + "alo");

  const effectiveTimeInSeconds = 2 * 60;

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
});

module.exports = router;
