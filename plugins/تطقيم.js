import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '_*ولـد ♂️*_ \n_*ايـوا ياعمـر ياحـلاق ابقـا شوفلـي صاحبتهـا بقا او اختهـا اي حاجـه🌚❤️‍🩹*_', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '_*بنـت ♀️*_ \n_*شوفيــلي اختـك او صحبـتك او اي حاجـه ربنـا يرضـا عليكـي🦦💔*_ ', m)
}
handler.help = ['تطقيم','طقم']
handler.tags = ['anime']
handler.command = ['تطقيم','طقم'] 


export default handler
