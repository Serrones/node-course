//
// Challenge: Append a message  to notes.txt
//
// 1. Use appendFileSync to append to the file
//
// 2. Run the Script
//
// 3. Check your work by opening the file and viewing the appended text

/*
Common javascript module import

const fs = require('fs')

fs.writeFileSync('notes.txt', 'NodeJS Course!\n')

fs.appendFileSync('notes.txt', '-------------')

fs.appendFileSync('notes.txt', '\n\n')

fs.appendFileSync('notes.txt', 'First app builded with node')
*/


// es6 module import
import { writeFileSync, appendFileSync } from 'fs'


writeFileSync('notes.txt', 'NodeJS Course!\n')

appendFileSync('notes.txt', '-------------')

appendFileSync('notes.txt', '\n\n')

appendFileSync('notes.txt', 'First app builded with node')
