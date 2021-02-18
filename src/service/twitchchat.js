var irc = require('irc');

// STILL NEED OAUTH CODE https://twitchapps.com/tmi/
const create_twitch_chat_listener = (user, pass) => {
  var client = new irc.Client('irc.chat.twitch.tv', user, {
    userName: user,
    port: 6697,
    autoRejoin: true,
    channels: [],
    sasl: true,
    password: `oauth:${pass}`,
    stripColors: false,
    channelPrefixes: "&#",
  });
  return client
}

const twitch_username = ''
const twitch_oauth = ''

export default {

  watch_twitch_chat(username, cb) {
    let irc_client = create_twitch_chat_listener()
    irc_client.join(`#${username}`)
    irc_client.addListener('message', function (from, to, message) {
      cb(from, message)
    });
  }

}
