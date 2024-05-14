/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `🔹️ *_تم تغير لينك الحروب._*) 
handler.command = ['resetlink', 'رستر'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;