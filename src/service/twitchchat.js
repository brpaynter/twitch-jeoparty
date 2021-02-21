var irc = require('irc');

const create_twitch_chat_listener = (user, pass) => {
  var client = new irc.Client('irc.chat.twitch.tv', user, {
    userName: user,
    port: 6697,
    autoRejoin: true,
    sasl: true,
    password: pass,
  });
  return client
}

const twitch_username = 'fohgaming'
const twitch_oauth = 'oauth:cw2f5bzfx2a1vpwcnn6r29op0fy6w0'

export default {

  watch_twitch_chat(username, cb) {
    let irc_client = create_twitch_chat_listener(twitch_username, twitch_oauth)
    irc_client.join(`#${username}`)
    irc_client.addListener('message', function (from, to, message) {
      cb(from, message)
    });
  }

}
