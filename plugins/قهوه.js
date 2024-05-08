
let handler = async (m, {
    conn,
    isOwner,
    usedPrefix,
    command,
    args
}) => {
    try {
       await conn.sendMessage(m.chat, { react: { text: '☕', key: m.key } })
 
        await m.reply(wait)
        let cofe = "https://coffee.alexflipnote.dev/random"
        await conn.sendFile(m.chat, cofe, "", "*⌬ قهـوة شيكــا بـوت ☕ —— هتخليـــك عنتيـل وحـوت 🐳*", m)
    } catch (e) {
        throw eror
    }
}
handler.help = ["قهوه"]
handler.tags = ["tools"]
handler.command = /^(قهوه)$/i
export default handler
