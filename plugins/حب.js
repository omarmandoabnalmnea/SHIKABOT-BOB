let handler = async (m, { conn, command, text }) => {
let love = `*مقياس الحب🥸*
*حب ${text} بالنسبة لك هو عليه*${Math.floor(Math.random() * 100)}%* *بواحد 100%*
*هل يجب أن تطلب منها أن تكون صديقتك🦦🌚؟* 
`.trim()
m.reply(حب, فارغ, { mentions: conn.parseMention(حب) })}
handler.help = ['حب']
handler.tags = ['fun']
handler.command = /^(حب)$/i
export default handler
