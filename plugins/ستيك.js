import fetch from 'node-fetch'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
let handler = async (m, {
    command,
    usedPrefix,
    conn,
    args
}) => {
    await m.reply(wait)
    let res = await YesNo()
    let stiker = await createSticker(false, res.image, "♕𝙎𝙃𝙄𝙆𝘼🐥ᵇᵒᵗ♕ ", (res.answer).toUpperCase(), 30)
        
    try {
        await m.reply(stiker)
    } catch (e) {
        throw eror
    }
}
handler.help = ["ستيك"]
handler.tags = ["sticker"]
handler.command = /^(ستيك)$/i

export default handler

async function YesNo() {
    const response = await fetch(
        `https://yesno.wtf/api`
    );
    const data = await response.json();
    return data;
}

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}
