let handler = async (m, { conn }) => {

  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {

    global.DATABASE._data.users[m.sender].exp += 50000000

    m.reply('+50000000 XP')

    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1

  } else m.reply('You have claimed daily claims today')

}

handler.help = ['nsiit hh 😛']

handler.tags = ['xp']

handler.command = /^(nsiit hh 😛)$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

module.exports = handler
