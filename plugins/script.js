/*created by Kgtech 🕵
contact dev1 237656520674 ♻️
contact dev2 237650564445 ♻️
© Copy coder alert ⚠
*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *LEYON*

> *LEYON TELEGRAM:*
*|* *https://t.me/World4kMovie*

> *SUPPORT GROUP:*
*|* *https://chat.whatsapp.com/De9UilLmnJwE0AvnK20Hl8*
*╰──────────────●●►*

> *CREATED BY LEYON*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "ᴋᴇʀᴍ ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'ʟᴇʏᴏɴ-ᴍᴅ',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://t.me/World4kMovie" ,
thumbnailUrl: "https://files.catbox.moe/osriwc.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
