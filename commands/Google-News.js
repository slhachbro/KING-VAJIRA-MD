smd({
        pattern: 'news',
        category: "search",
        react: "📃",
        desc: "search hirunews",
        filename: __filename,
    },
    async(Suhail, citel,) ==> {
        const hirunews = await fetchJson(`https://queen-api.onrender.com/api/news/hiru-news`)

const buttonMessage = {
    image: {url: hirunews.image },
    caption: `*${hirunews.title}*\n\n${hirunews.description}\n\n📅 ᴅᴀᴛᴇ ᴀɴᴅ ᴛɪᴍᴇ : *${hirunews.date_time}*\n*⚠️
