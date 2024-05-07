let handler = async (m, { conn }) => {
await conn.sendMessage(m.chat, { react: { text: '🦦', key: m.key } })
m.reply(`*المطـور ♕𝙎𝙃𝙄𝙆𝘼🐥♕:*\n
*『 https://instagram.com/shika17sm... 』*
*اعمــل فولـو ياحـب رونالـدو بينـافسني في عدد الفلـورز🦦* `)
}
handler.help = ['انستا-المطور']
handler.tags = ['infobot']
handler.command = /^(انستا-المطور)$/i

export default handler;
