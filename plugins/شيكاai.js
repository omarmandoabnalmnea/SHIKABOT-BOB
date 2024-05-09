//Chatgpt & GeminiImg:

import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

const handler = async (m, { conn, text, command, usedPrefix }) => {
    try {
        if (!text) {
            throw `*اكتـب سـؤالك ياحتــه🐥*\n\n*مثال . .شيكا كيف حالك*`;
        }

        let BK9api, BK9img;
        if (m.quoted && /image/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '') && !/webp/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '')) {
            let BK0 = await m.quoted.download();
            BK9img = await uploader(BK0);
            BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json();
        } else {
            BK9api = await (await fetch(`https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`)).json();
        }

        if (BK9api.status && BK9api.BK9) {
            const respuestaAPI = BK9api.BK9;
            conn.reply(m.chat, respuestaAPI, m);
        } else {
            throw "*حصلت مشكـله وانا بعمـلك طلبـك🦦.*";
        }
    } catch (error) {
        if (typeof error === 'string') throw error;
        throw `*حصــلت مشكـله وانا بعمـلك طلبـك🦦.*`;
    }
};

handler.help = ['شيكا'];
handler.tags = ['ai'];
handler.command = /^(شيكا)$/i;

export default handler;
