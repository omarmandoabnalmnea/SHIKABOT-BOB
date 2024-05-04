import { Chess } from 'chess.js';

const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.chess = conn.chess || {};
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  conn.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'حذف') {
    delete conn.chess[key];
    return conn.reply(m.chat, '『𝔐𝔦𝔨𝔲 𝔅𝔒𝔗』 *تم حذف اللعبه*', m);
  }

  if (feature === 'صمم') {
    if (gameData) {
      return conn.reply(m.chat, '『𝔐𝔦𝔨𝔲 𝔅𝔒𝔗』 *اللعبه قائمه بالفعل*', m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return conn.reply(m.chat, '『𝔐𝔦𝔨𝔲 𝔅𝔒𝔗』 *تم تصميم الغرقه*\nفي انتظار اللاعبين للانضمام.', m);
  }

  if (feature === 'ادخل') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '『𝔐𝔦𝔨𝔲 𝔅𝔒𝔗』 *انت لقد قمت بالانضمام بالفعل*', m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return conn.reply(m.chat, '『𝔐𝔦𝔨𝔲 𝔅𝔒𝔗』 *لا يوجد لعبه شطرنج في انتظار اللاعبين حاليا*', m);
    }
    if (players.length >= 2) {
