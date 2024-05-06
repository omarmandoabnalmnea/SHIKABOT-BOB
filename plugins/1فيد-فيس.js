//Dont delete this credit!!!
//Script by ShirokamiRyzen

import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw '*فين الرابط بتاع الفيديو🦦*\n;
    const sender = m.sender.split(`@`)[0];

    m.reply(wait)

    try {
        const url = args[0];
        const result = await fbdown(url);

        if (!result) {
            throw '*مش عارف انزلو🥸*';
        }

        const videoBuffer = await fetch(result.hdLink).then(res => res.buffer());

        const caption = `
*📍عنوان الفيديو*: ${result.title}

${result.description}

*🔗رابط الفيديو بجودة متوسطة*\n: ${result.sdLink}
*🔗رابط الفيديو بجودة عالية*: \n${result.hdLink}
`;

        await conn.sendMessage(
            m.chat, {
            video: videoBuffer,
            mimetype: "video/mp4",
            fileName: `video.mp4`,
            caption: `*الفيديو بتاعك ياحب* @${sender} \n${caption}`,
            mentions: [m.sender],
        }, {
            quoted: m
        },
        );
    } catch (error) {
        console.error('Handler Error:', error);
        conn.reply(m.chat, `وقع خطأ`, m);
    }
};

handler.help = ['فيد-فيس']
handler.tags = ['downloader']
handler.command = /^فيد-فيس$/i

export default handler

async function fbdown(url) {
    try {
        const postOptions = {
            method: 'POST',
            body: new URLSearchParams({
                URLz: url,
            }),
        };

        const response = await fetch('https://fdown.net/download.php', postOptions);
        const html = await response.text();

        const $ = cheerio.load(html);

        return {
            title: $('.lib-row.lib-header').text().trim(),
            description: $('.lib-row.lib-desc').text().trim(),
            sdLink: $('#sdlink').attr('href'),
            hdLink: $('#hdlink').attr('href'),
        };
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
