let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*اكتــب رسـالتك وسارسلـها للمطـور مثل* \n\n *.ابلاغ ميســي عمي وعم الكـل🐐* `
  if (text.length < 10) throw `يجب ان تكون الرسالة فيها اكثر من اربع كلمات `
  if (text.length > 1000) throw `الحد الادنى هو 1000 حرف اختر ما تريد قوله !`
  let teks = `*${command.toUpperCase()}!*\n\nfrom : *@${m.sender.split`@`[0]}*\n\nmessage : ${text}\n`
  conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
      contextInfo: {
          mentionedJid: [m.sender]
      }
  })
  m.reply(`هبعــت رسـالتك للمطـور ، ... انتظــر الرد🦦 ._\n*هلا برو معـاك شيكـا بـون🐥*`)
}
handler.help = ['ابلاغ']
handler.tags = ['infobot']
handler.command = /^(ابلاغ)$/i
export default handler
