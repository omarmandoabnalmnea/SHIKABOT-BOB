//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('*ان الرقــم المطــلوب مغلــق او خـارج نطـاق التغـطيه يرجـا منـك انو تخـلي عنـدك دم وماتستخــدمنيـش تانـي🦦*')
}
handler.help = ['بان-شات']
handler.tags = ['owner']
handler.command = ['banchat', 'حظرالشات','بان-شات']

handler.group = true
handler.owner = true


export default handler
