let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title:'*قائـمة المهـام📜*'
            },
            body: {
              text: 'اضغـط لفتـح القـائمه💠\n‼️ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس عليا🦦💔',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: '🔱 قـسـم الـنـظـام',
                            title: '.النظام_كود',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: '🐥 قـسـم الـمـطـور',
                            title: '.المطور_كود',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القائمة']

export default handler
