let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*☬↫الرسـاله🦦:* ${pesan}`
let teks = `*☬↫• ╌─━┇منشن جماعي🦦* \n\n ${oi}\n\n*منشن┊🐥┊الاعضاء :⇣*\n`
for (let mem of participants) {
teks += `*💠☬↫* @${mem.id.split('@')[0]}\n`}
teks += `*♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕*\n\n*المطـور🦦: +201005603546*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
