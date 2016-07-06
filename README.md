# Number to words converter
The task is to write a program that given any number between 0 and 1,000 shows the grammatically-correct English phrase for this number (e.g. given 111 it shows "one hundred and eleven", given 21 it shows "twenty-one"). The code should be production ready and you can choose to complete the task using any technologies you want.

## Features

* Webpack based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so it works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Getting started
1. Clone the repo `git clone https://github.com/xavifuefer/num2words.git`
2. Install all dependencies `cd num2words; npm i`

## Scripts

* `npm run build` - produces production version of the converter under the `lib` folder
* `npm run dev` - produces development version and runs a watcher
* `npm run test` - well ... it runs the tests :)
