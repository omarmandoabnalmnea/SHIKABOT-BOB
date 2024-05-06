import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw ` *اكتـب اسم التطبيـق ياحتـه زي كدا🦦* \n*.تطبيــق whatsapp*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `* • ╌─━┇تطبيـق🔮*\n\n📌 *اسم التطبيق:* ${data5.name}\n🔰 *البـاكج:* ${data5.package}\n⏱️ *تاريـخ التحديث:* ${data5.lastup}\n📥 *حجم التطبيق:* ${data5.size}\n\n*ياحظـك فاضي تلعــب انا في 3 ثانوي ادعيلـي🦦💔*`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*[🗿 ]الملف كبيـر والنـت مش ببـلاش فامش باعـت*.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*[🦦] مش لاقيها دورت في كل حته وملقتهاش.*`;
  }    
};
handler.help = ["تطبيق"]
handler.tags = ["applications"]
handler.command = ["تطبيق"] 
export default handler;
