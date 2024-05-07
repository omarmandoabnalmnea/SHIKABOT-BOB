import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw ' *ابحثـلك عن اي في اليــوتيوب🦦❓_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🔗 *_الرابط :_* ${v.url}
↳ ⏱️ *_المدة :_* ${v.timestamp}
↳ 📥 *_التــاريخ :_* ${v.ago}
↳ 👁 *_المشـاهدات :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['يوتسيرش', 'yts'];
export default handler;
