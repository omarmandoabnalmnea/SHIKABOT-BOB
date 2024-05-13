let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    react: {
      text: "🪩",
      key: m.key,
    },
  });

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m });
};

handler.help = ['ايديت'];
handler.tags = ['anime'];
handler.command = /^(ايديت|اديت|edit)$/i;
handler.limit = false;

export default handler;

const dir = [
  'https://telegra.ph/file/5fb7c13a4d93917f97ff3.mp4',
  'https://telegra.ph/file/2a4e007bec39cc66385b0.mp4',
  'https://telegra.ph/file/a22d5d23a85c4d7b2cdac.mp4',
  'https://telegra.ph/file/148dcadb72c631e0a9d1c.mp4',
  'https://telegra.ph/file/6699964c4f9486bafac22.mp4',
  'https://telegra.ph/file/aec768d540e249ceb0c5b.mp4',
  'https://telegra.ph/file/b2f92a40a7b869896d360.mp4',
  'https://telegra.ph/file/cd611bb1e76ceac182de8.mp4',
  'https://telegra.ph/file/0c4046c6477431bbed40d.mp4',
  'https://telegra.ph/file/d84e53e96fb44ec4cbd23.mp4',
  'https://telegra.ph/file/1286e1bf83c9901308cd8.mp4',
  'https://telegra.ph/file/d06207228975772c72a57.mp4',
  'https://telegra.ph/file/a9bdb37e94ffb1bf33e2d.mp4',
  'https://telegra.ph/file/0cb7efa196ee69cfefbc9.mp4',
  'https://telegra.ph/file/c3a1a52e91f29695a314c.mp4',
  'https://telegra.ph/file/908fd35689cddc1adff4a.mp4',
  'https://telegra.ph/file/b41dc197b1b5ff4ab187f.mp4',
  'https://telegra.ph/file/112a86d291a6940495ea2.mp4',
  'https://telegra.ph/file/16adf7c719b6824664539.mp4',
  'https://telegra.ph/file/dea7c92444adc87a62f26.mp4',
  'https://telegra.ph/file/c154d8d4b2808ead62417.mp4',
  'https://telegra.ph/file/3f860055a78d813df6c5c.mp4',
  'https://telegra.ph/file/ab4c5694e0b631cf4bc86.mp4',
  'https://telegra.ph/file/ed3a1d6d419369192852b.mp4',
  'https://telegra.ph/file/33bfe672f00f01fd6d35e.mp4',
  'https://telegra.ph/file/788a655bab547f6751fd6.mp4',
];
