const { tlang } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.github.com/prabathLK/f602911954a959c8730aeb00a588d15d/raw'

/**
CODED BY MR.CHAMODH
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
**/ 

cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
