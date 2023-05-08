const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("918005453017,917355573228")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'wtour2255@gmail.com'
global.github = 'https://github.com/hello'
global.location = 'india'
global.gurl = 'https://instagram.com/arjunupadhyay555' // add your username
global.sudo = process.env.SUDO || '918005453017'
global.devs = '918005453017,917355573228';
global.website = 'https://github.com/hello' //wa.me/+918005453017
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  botname: process.env.BOT_NAME || 'LUFFY BOT',
  autosticker: process.env.AUTO_STICKER || 'false',
  autovoice: process.env.AUTO_VOICE || 'false',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*The bot developer is arjun upadhyay* 🎊',
  ownername:process.env.OWNER_NAME || 'ARJUN',
  sessionName: process.env.SESSION_ID || 'UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV85OGI5MTAwZWQ2NmRiX3ZpOjpGb3J0ZVNvbG9tb24KOjoxMGE4YzY1MmQyMGFjODVhOGVlYTRkMzIxYzc4',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'created by arjun upadhyay owner',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'LUFFY BOT',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
