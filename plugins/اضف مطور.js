let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw '*منشــن الشخـص الي عـايز تضـيفو للمطـورين🦦*'
    if (global.owner.includes(who.split('@')[0])) throw 'لقد أصبح هذا الشخص هو المالك!'
    global.owner.push([who.split('@')[0], m.name, true])
    const caption = `الآن @${who.split('@')[0]}   *فـي اخـر الـزمن دا يبقـا مطـور عليـا🦦💔*`
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['اضف-مطور']
handler.tags = ['owner']
handler.command = /^اضف-مطور$/i
handler.owner = true

export default handler
