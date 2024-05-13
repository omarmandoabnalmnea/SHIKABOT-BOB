let handler = async (m, { conn }) => {

 await conn.sendMessage(m.chat, { react: { text: '🔮', key: m.key } }) 
m.reply(`‌‌⎔ ━ • 𓆩♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕𓆪• ━ ⎔
‌              *『YOU🔆TUBE』*
⎔── ━ • 
*| اهـــلا يـاحــب فـي شيـكا بـوت🦦*
*| اكتــب يوتسيرش+اســم الفيــديو🐔*
*| _مثــال_*
*|.يوتسيرش ناروتو*
*| خــد رابــط الفيــديو الـي انــت عايـزو واستخــدم الامــر video وحـط الرابــط*
*| _مثــال_*
*.video + الرابــط الي اخـدتو من البحـث*
*استمتـــع ياحــب*
‌⎔ ━ • 𓆩♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕𓆪• ━ ⎔`) 
}
handler.help = ['يوتيوب']
handler.tags = ['infobot']
handler.command = /^(يوتيوب)$/i

export default handler;
