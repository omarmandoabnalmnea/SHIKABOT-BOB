await conn.sendMessage(m.chat, {
        audio: {
            url: "غوجو.mp3"
        },
        seconds: 65,
        ptt: true,
        mimetype: "audio",
        fileName: "vn.mp3",
        waveform: []
    }, {
        quoted: m
    })
}
handler.customPrefix = /^(غوجو)$/i
handler.command = new RegExp

export default handler
