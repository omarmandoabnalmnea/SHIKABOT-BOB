import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*عايـز صورة اي ياحـب وياريت اكتـ طلبـك بالانجليـزي🦦*\n📌 مثال  : ${usedPrefix + command} shikamaru`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢ صورتك ياحب🐥🪩:*  ${text}
`.trim(), m)
}
handler.help = ['بينت']
handler.tags = ['img']
handler.command = ['بينت'] 

export default handler
