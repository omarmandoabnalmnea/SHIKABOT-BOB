import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*اي الصــوره الي عايـزني اجيبهـالك🦦*\n\n*📌 مثــال  : ${usedPrefix + command} جورجينـان🫠*`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['بينت']
handler.tags = ['img']
handler.command = ['بينت'] 

export default handler
