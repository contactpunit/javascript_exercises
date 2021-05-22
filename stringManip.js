function generate_affiliation_link(urls) {
    const convertedUrls = urls.map(url => {
        const base = url.split('/')
        const final = `http://www.amazon.com/${base[4]}/${base[5]}?tag=pyb0f-20`
        console.log(final)
    })
}

const urls = [
    'https://www.amazon.com/War-Art-Through-Creative-Battles/dp/1936891026/?keywords=war+of+art',
    'https://amazon.com/War-Art-Through-Creative-Battles/dp/1936891026/ref=sr_1_1',
    'https://www.amazon.es/War-Art-Through-Creative-Battles/dp/1936891026/?qid=1537226234',
    'https://www.amazon.co.uk/Pragmatic-Programmer-Andrew-Hunt/dp/020161622X',
    'https://www.amazon.com.au/Python-Cookbook-3e-David-Beazley/dp/1449340377/'
]

generate_affiliation_link(urls)