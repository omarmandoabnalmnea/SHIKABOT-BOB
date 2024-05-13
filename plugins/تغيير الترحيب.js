let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*تم عمــل رســالة التـرحيــب للمجــموعه🦦*')
} else throw `*ااكتــب رســالة التــرحيـب الـي انت عايــزها🦦, استخـدم:*\n*- @user (mención)*\n*- @group (اسم الجمــوعه)*\n*- @desc (وصـف المجمـوعه)*`
}
handler.help = ['تغيير-الترحيب']
handler.tags = ['owner']
handler.command = ['تغيير-الترحيب'] 
handler.admin = true
export default handler
