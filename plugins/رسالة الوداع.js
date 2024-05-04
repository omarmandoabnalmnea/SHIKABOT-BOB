let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('*[❗] تم تكوين رسالة الوداع بشكل صحيح لهذه المجموعة*')
} else throw `*[❗] أدخل رسالة الوداع التي تريد إضافتها, 𝚄𝚂𝙴:*\n*- @user (mención)*`
}
handler.help = ['الوداع']
handler.tags = ['المطور فقط👨🏻‍💻']
handler.command = ['الوداع'] 
handler.admin = true
export default handler
