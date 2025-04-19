/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables. And don't forget to rest, for even the relentless must recharge.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RJK0J5TDVibGw5ZEk1enZuZVBMZzhWUHFicWRuUGhnNGFaemlQQzBVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWldLY1o2cmlNaWMvTU14SCs2Tmwyd2wydnJDakxqcktCMGJnU2ljb3JpWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSGxUb3F3bW1rcERhQ21hWktzK1R5K1RmQzBLWWlYdzBHZnNPWERFNWxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMenlwNklKRHVGY0VXM0lYcFF0TW9PWmNaODY4emZVRUViS2h1RnZqc0dVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPbXZBM1VyYU5SdzRORUNRSm5xVVVnNWFjL1NaNVpnTnk0b2h4STk0VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFibGl0YjVOT1k1dDJMQmJLdGEzbmhaZUxVb2VuSGRQQnNiM3NONExuVUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0sreDNnbkJDTm9mczBXT0RDUzEzaDI5VzRTQVRhZWVLTFpDOFRjYThVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9PV0VCS05CTi94ZmZtYTI2a0FDVWt5cnI5UVh5NWFESXQ4ZnhBV2VVaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFuRU9WLy9WTzA5VEMrVlZ3eGVSVm9pbS9nS3BNcFRFVVM0WElWQlg1M0kzblFKOXFWL0FEOEFZTHdWTVNXRkt3bmZFYUswYUtFbEhVQ09sbCtuSUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6Iisra1VBUEhDZjlWODNNbHZBQ0RNWnVQNkNKM1dWT0RYdDdaOVRadG9WRXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzU4NDQzMTExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhDMTU2RkFFMDFCNUE0RUE3MTBBQ0VFQ0U3NEFGMDQ3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDUwNjYwNzR9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjdFa29YWDRuUnpHU1l2aWJpV1lyQmciLCJwaG9uZUlkIjoiNWIyZDMyMjAtZDQzOS00YWRhLTlhM2EtZWYxYTA3ZTg3N2YyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5XRitlbGJWQ1BxN2RTNU96TWlubXpsRERDYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiYjdLY09FbDlVVjlsUWdhKzNpQzZtRjNXV3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjg2MUQ1RkYiLCJtZSI6eyJpZCI6IjI1NDc1ODQ0MzExMTo2MEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFdsb004Q0VNaXdqc0FHR0JFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3lFWWh1Wk1hSG1uck9RUkQvU0g4TDBZUWYzZGhXNEk0U3JrcDJOVFBrTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSlRyU2I5MW51YVVQM3VxVHBjUHNyVHpiVGVqNVF4b1hiTS9hTkVSZy95MWFyK2U3azZIczlYUG4zZnNJM21Hbnp5VkpBU0Rpd2Jjb3AxMWgycWJKREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJiajRQUUR4R1BFa090aWVNZEx3TDFmejAxaWZNb011TytoRU81emNENWk4cnpxV3JSTEtwK1lEUWYrQWhKbXo5L0xnYWdHMzdLVkgrdU80RkpvSkJnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU4NDQzMTExOjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJzaEdJYm1UR2g1cDZ6a0VRLzBoL0M5R0VIOTNZVnVDT0VxNUtkalV6NUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDUwNjYwNzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFV2In0=';
const autobio = process.env.AUTOBIO || 'FALSE';
const autolike = process.env.AUTOLIKE_STATUS || 'TRUE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';

const prefix = process.env.PREFIX || '*';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'Private';
const antidel = process.env.ANTIDELETE || 'TRUE';

const botname = process.env.BOTNAME || '𝗠𝗭𝗔𝗭𝗜-𝗫𝗠𝗗';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗠𝗭𝗔𝗭𝗜';
const dev = process.env.DEV || '254758443111';

const menu = process.env.MENU_TYPE || 'VIDEO';
const DevMzazi = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';

const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 ★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫ 𝙤𝙣𝙡𝙮!☠️';

const wapresence = process.env.WA_PRESENCE || 'typing';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

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
  
