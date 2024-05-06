let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},  مبـروك ياقلـب اخوك مزايه شقط انما اي🫦🫦 طرووش🐤*
*${toM(b)}, ماتخـافيش جوزك عنتيـل وتقيـل🐥🔥*\n\*عل فكره انا ماتــعزمتش عل الفرح🐥*`, null, {
mentions: [a, b]
})}
handler.help = ['زواج']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','زواج']
handler.group = true
export default handler
