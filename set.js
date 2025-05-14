/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables. And don't forget to rest, for even the relentless must recharge.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBJZFZHWnQ0bnU3cFFhalgvMi9ucjhCcHl3VHY2S2NYL0NMVkN2UlVuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkdXZU1tdDVHbDdwcng3eFAzZkpnYTlkZE5TeCsyMGZQQWI2YWNZRFRsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQWRXRlgwMS9xdXg2UTVlc3BFRHJ4TVdZZjIwUmk5K1Q4YUpZUVMxaGtjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKREVRWkE3Nk5iMjljRFVxSUpkTTRoRWdiUWRzQWVMdFg4cEZzeFd1RmlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCYmpXSEh1a3pRR3BEcU1MWGZvaXczRkJ4aFhtQmZJY2FySzB0STNWRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx5RFhPdnBIcXJpbC9qSmxTcmthWTJQZkhsekdKRUpSNkxiUW1XM2RsbmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxZcG5oYzhrU1JtTytGdmJQQ21wbi9oTlVMWCtLN0ZiSVlYUWVvUUVYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURNbjZPQ2lIWElsc0Z2NThXZ0lybVlzOTJxOS92YkRPcUpWcms0YjVUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV4YXNXQUpCRUttUENRb2wvTWdQZWViTW5yQ09mSVhRb3VXeWRkTTNPU09oelRJUWl2am9zY0plL1YxbG05dFRkdGpWM3FJeW9DU2YyYXhwaEg3VWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM0LCJhZHZTZWNyZXRLZXkiOiJkUnNtc3ZudUViY25meUtvNGdWNVFnZ1RseElqU1VmZGZQdEZ0TWpURko0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZc25ydW42cVFWbTlpVE1Qb1ctSWd3IiwicGhvbmVJZCI6ImJkNjE5YTk3LTQ3YmEtNDJiNC1hNzAwLTRjZTNhZmI1ZGExYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MEpOamJxZitqRlBjZWxZZmpEazQ2d2ZOVGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDEyaUl3Sm9VNHZ5ODZ2azdMTE5vOTBQZi93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE3NjJaTktTIiwibWUiOnsiaWQiOiIyNTQ3NTg0NDMxMTE6ODlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01EUjhva0VFS09Ra3NFR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhSN0JnS3hidk9ON0dualNWWFJjTnNFM0N6Q0ZsMWhnbWQ1OE9Ha3pSbGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitPRkR2WlNqQjRONG9NSlV1eituUWo5REJja3JqVjRnd3lzTkdSQ3FuR2NmZ2V6bmEzWVFDUEFaUkpQL3g3MGRNNTByK3dvbkkyVFJGYmZ4OHRPVENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4TDlxclRUZFRldGxpS0RPN09DS2xaSkNhMTZyUWFvY0o2SXE1T1Z0YVNnWGM1YzFKdXQxdVViSUFLTzlLMEsvUWtaNUhPN3A3azg5N1k4T1RPM3VpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc1ODQ0MzExMTo4OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmRWV3WUNzVzd6amV4cDQwbFYwWERiQk53c3doWmRZWUpuZWZEaHBNMFpYIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3MjI0NjI1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUw4NyJ9';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || FALSE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';

const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const antidel = process.env.ANTIDELETE || 'FALSE';

const botname = process.env.BOTNAME || '𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗';
const antibot = process.env.ANTIBOT || 'TRUE';
const author = process.env.STICKER_AUTHOR ||'🦂★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫';
const packname = process.env.STICKER_PACKNAME || '✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎';
const dev = process.env.DEV || '254758443111';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';

const menu = process.env.MENU_TYPE || 'VIDEO';
const DevMzazi = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';

const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || 'ᎽᎾU ℂᎯℕT ℬℰ ✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎!';

const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'FALSE';

module.exports = {
  session,
  antidel,
  sessionName,
  autobio,
  author,
  packname,
  dev,
  DevMzazi,
  badwordkick,
  anticall,
  bad,
  mode,
  group,
  NotOwner,
  botname,
  botAdmin,
  menu,
  autoread,
  antilink,
  admin,
  mycode,
  antilinkall,
  wapresence,
  welcomegoodbye,
  antibot,
  herokuapi,
  prefix,
  port,
  gptdm,
  appname,
  autolike,
  autoviewstatus,
};
  
