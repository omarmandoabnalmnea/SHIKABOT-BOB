let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('انجلـــع ياحـب تـراك محظـــور من استخـــدامي 🦦')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i

handler.owner = true

export default handler
