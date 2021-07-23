const fs = require('fs')
const csv = require('csv-parser')
const util = require('util')
const stream = require('stream')
const pipeline = util.promisify(stream.pipeline)

const results = []

async function get_movies_by_directors() {
    const moviesByDirectors = new Map()
    for (const record of results) {
        if (!record['director_name'] ||
            !record['movie_title'] ||
            !record['title_year'] ||
            !record['imdb_score']) continue
        if (+record['title_year'] > 1960) {
            if (!moviesByDirectors.has(record['director_name'])) {
                moviesByDirectors.set(record['director_name'], [])
            }
            const rec = {
                title: record['movie_title'],
                year: +record['title_year'],
                score: parseFloat(record['imdb_score'])
            }
            const data = moviesByDirectors.get(record['director_name'])
            data.push(rec)
            moviesByDirectors.set(record['director_name'], data)
        }
    }
    return moviesByDirectors
}

async function run() {
    try {
        let moviesByDirectors = new Map()
        await pipeline(
            fs.createReadStream('./data/movie_metadata.csv'),
            csv()
                .on('data', (data) => results.push(data))
                .on('end', async () => {
                    moviesByDirectors = await get_movies_by_directors(moviesByDirectors)
                    find
                })
        )
        console.log('pipeline succedded')
        console.log(moviesByDirectors.get('Scott Smith'))
    }
    catch (err) {
        console.log('pipeline failed' + err)
    }
}

run()

