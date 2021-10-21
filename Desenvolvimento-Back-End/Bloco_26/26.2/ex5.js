const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const fs = require('fs').promises;

function writingFiles() {
  array.forEach(async (string, index) => {
    try {
      await fs.writeFile(`./file${index + 1}.txt`, string);
    } catch (e) {
      console.log(e.message);
    }
  })
}

// writingFiles();

const promises = [
  fs.readFile('file1.txt', 'utf-8'),
  fs.readFile('file2.txt', 'utf-8'),
  fs.readFile('file3.txt', 'utf-8'),
  fs.readFile('file4.txt', 'utf-8'),
  fs.readFile('file5.txt', 'utf-8')
];

async function readingFiles() {
  try {
    const results = await Promise.all(promises);
    let string = '';
    results.forEach((result) => {
      string += `${result} `;
    });
    await fs.writeFile('./fileAll.txt', string);
  } catch (e) {
    console.log(e.message);
  }
}

readingFiles();
