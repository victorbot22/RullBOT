import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `â *ð® Script VICTOR BOT*\nââ¢ *Script :*\nââ³ Private ya hihihiã¾(ã^â^)ï¾\nââ¢ *Node_Modules:*\nââ³ https://semawur.com/mwuPPdYT\nââ³ Ato tekan *npm  i/yarn install*\nââ¢ *Base :* \nââ³ github.com/bochilgaming/games-wabot-md/\n *â¢ Free Panel:*\n http://bit.ly/3VehFES\n ââââââââââââââââââââââââ\n\nâ¢ *Mau script? Chat Owner!*\nâ¢ Jika menemukan bug Bot, harap lapor owner\nâ¢ Websites VICTOR BOT: https://www.tiktok.com/@leviatnansyah?_t=8UnaVTcn97p&_r=1 Jangan, lupa join grup ya\nâ¢ Bot ini free untuk digunakan di grup ini, kalo mau memasukan BOT ke grup lain minta izin owner dulu ya:)`
let kled = `https://telegra.ph/file/ff053a2dff6c14bcb0578.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script><.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'VICTOR BOT',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'https://instagram.com/levisuaran?igshid=YmMyMTA2M2Y='}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
