import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*فيــن الرابــــــــط فيـــن هيكــون في طـ... يعنـي خلـص ابعـت الـرابط🗿*`;

  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `*حـصـل خطــاء ولاتسـالني شـو هـو🐥:* ${error.message}`;
  }

  let api_response = await res.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `*دروت في كل مكـان ومالقيتــو🗿💔*`;
  }

  let cap = `*اتفضــل ياحــب🦦🤍*`;

  conn.sendFile(m.chat, api_response.result[0], 'instagram.mp4', cap, m);
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|انستا|ig|instagramdl)$/i

export default handler
