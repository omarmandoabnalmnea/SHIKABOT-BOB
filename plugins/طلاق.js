let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, بقيت سنجل😂🫵🏻--احمم زيي يعني🦦💔*
*${toM(b)}*,*متزعليش🐤*\n\ *خيرها في غيرها🦦*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['الطلاق','طلاق']
handler.group = true
export default handler

