let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*「♕ ❤️ نـسـبـة الـحـب ❤️ ♕」◣*

*「♕ تـسـت ♕」◣${text}「♕ الـنـسـبـة ♕」◣* *${Math.floor(Math.random() * 100)}%* 「♕ مـن ♕」◣ 100%*
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.command = /^(love|الحب)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
