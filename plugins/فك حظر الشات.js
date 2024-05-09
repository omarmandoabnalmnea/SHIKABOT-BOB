let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*تبـا كنت مستــريح وقاعــد في هــدوء 🗿💔*')
  }
  
  handler.help = ['unbanchat']
  handler.tags = ['owner']
  handler.command = ['chaton', 'فك-الشات','الغاءحظرالشات']
  handler.group = true
  handler.owner = true
  export default handler
  

