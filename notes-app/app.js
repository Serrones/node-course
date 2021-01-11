//
// Challenge: Append a message  to notes.txt
//
// 1. Use appendFileSync to append to the file
//
// 2. Run the Script
//
// 3. Check your work by opening the file and viewing the appended text


const fs = require('fs')


fs.writeFileSync('notes.txt', 'NodeJS Course!\n')

fs.appendFileSync('notes.txt', '-------------')

fs.appendFileSync('notes.txt', '\n\n')

fs.appendFileSync('notes.txt', 'First app builded with node')
