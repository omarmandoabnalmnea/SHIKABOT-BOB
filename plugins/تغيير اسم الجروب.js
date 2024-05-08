var handler = async (m, { conn, text, isROwner, isOwner }) => {

if (!text) return conn.reply(m.chat, '*عايز تغير اسم الجروب ل اي ياحب 🦦؟ لو مش فاهم فا دا مثال🐤 * \n\n *. تغيير-الاسم ميسي عمكم*', m,  )
await conn.groupUpdateSubject(m.chat, text)
conn.reply(m.chat, `🚩 ${text ? `${text} *دا الاسـم الجـديد للجـروب🦦*\n` : '*لم يعطوا اسما*'}`, m,  )
}
handler.help = ['تغيير-الاسم']
handler.tags = ['owner']
handler.command = /^تغيير-الاسم$/i

handler.botAdmin = true
handler.group = true
handler.admin = true

export default handler
