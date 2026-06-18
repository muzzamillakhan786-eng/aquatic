const https = require('https');
const fs = require('fs');

async function getWikiImage(title, filename) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${title}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].original && pages[pageId].original.source) {
            const imgUrl = pages[pageId].original.source;
            downloadImage(imgUrl, filename).then(resolve).catch(reject);
          } else {
            console.log('No image found for', title);
            resolve();
          }
        } catch(e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(filename);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  await getWikiImage('Emperor_angelfish', 'public/angelfish.jpg');
  await getWikiImage('Mandarin_dragonet', 'public/mandarin.jpg');
  await getWikiImage('Coral_reef', 'public/coral.jpg');
  await getWikiImage('Aquarium_lighting', 'public/led.jpg');
  await getWikiImage('Fish_food', 'public/fishfood.jpg');
  console.log('Done downloading images.');
}

run();
