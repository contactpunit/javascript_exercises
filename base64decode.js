function decodeString(data) {
    const b = Buffer.from(data, 'base64')
    const btoString = b.toString()
    const cards = btoString.split('\n')
    const allCards = cards.filter(card => {
        if (card.trim()) {
            if (/\d+/.test(card.trim())) return card.trim()
        }
    }).map(card => card.split(',')[2])
    return allCards
}

data = `
Zmlyc3RfbmFtZSxsYXN0X25hbWUsY3JlZGl0X2NhcmQKS2VlbGJ5LE1hY0NhZmZlcmt5LD
YzOTM3MTk0MzMzMjk5MjQKTGlubmVsbCxDbGVtbWV0dCwzNTU1NTg0OTI0MDkzOTU0CkVs
eXNoYSxNZWlnaGFuLDYzODU3OTU3OTM4OTcxMDYKS2F0YWxpbixFdGhlcnRvbiwzNTg0Mj
MwMDExNjgwNzAwCkZpbmEsUGFzZWssNTEwMDEzNjYzMTY2NDY4NwpBcmRlbGxhLEJyYXpp
ZXIsMjAxNzEyNjEzNjUzMzc0CkRvcnRoZWEsS2FycGluc2tpLDMwNTAyNjYxMjUxMTcyCl
Jhbm5hLER1ZmYsMzU3NjM5MzA1NjQ5MzMxMgpDaW5uYW1vbixLYWFzbWFuLDU0NDIwMjgx
NTA4MDg1NzAKSmFjbGluLFRvbmdlLDM1NDk4NTIxMDQ3MjQ1MjcK`

console.log(decodeString(data))