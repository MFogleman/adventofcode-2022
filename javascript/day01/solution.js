const fs = require('fs')
const { pipe } = require('ramda')
const R = require('ramda');

const byBigger = (a, b) => b - a;
const coerceAdd = (b, a) => Number(b) + Number(a);

const addElements = pipe(
    R.replace(/\r\n?/g, ','),
    R.split(','),
    R.reduce(coerceAdd, 0)
)
const main = async () => {
    console.log('starting')
    const file = fs.readFileSync('day01/input.txt', 'utf-8')

    const results = pipe(
        R.split(/\r\n\r\n/), // each element is a group of newline separated numbers
        R.map(addElements),
        R.sort(byBigger)
    )(file)
    
    const part1 = Math.max(...results);

    const part2 = pipe(
        R.take(3),
        R.reduce(coerceAdd, 0)
    )(results)
    
    console.log({ part1, part2 })
}

main()
