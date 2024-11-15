import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `أدخل الأمر`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw `لا يمكنك حذف هذا الأمر`
    delete sticker[hash]
    m.reply(`*✅ تم حذف الأمر*`)
}


handler.help = ['cmd'].map(v => 'del' + v + ' <text>')
handler.tags = ['cmd']
handler.command = ['حذف_أمر']
handler.owner = true

export default handler
