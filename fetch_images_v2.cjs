const https = require('https');
const fs = require('fs');

async function searchWikiImage(query, filename) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1&prop=imageinfo&iiprop=url&format=json`;
  
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pages[pageId].imageinfo && pages[pageId].imageinfo[0].url) {
              const imgUrl = pages[pageId].imageinfo[0].url;
              console.log(`Downloading ${query} from ${imgUrl}`);
              downloadImage(imgUrl, filename).then(resolve).catch(reject);
            } else {
              console.log('No image url found for', query);
              resolve();
            }
          } else {
            console.log('No results found for', query);
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
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
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
  await searchWikiImage('Pomacanthus imperator', 'public/angelfish.jpg');
  await searchWikiImage('Macroramphosus scolopax', 'public/snipefish.jpg');
  await searchWikiImage('Synchiropus splendidus', 'public/mandarin.jpg');
  await searchWikiImage('Paracheirodon innesi', 'public/tetra.jpg');
  await searchWikiImage('Symphysodon', 'public/discus.jpg');
  await searchWikiImage('Euphyllia', 'public/torch_coral.jpg');
  await searchWikiImage('Fish food flakes', 'public/fish_food_new.jpg');
  await searchWikiImage('LED aquarium lighting', 'public/led_light.jpg');
  await searchWikiImage('Calcium reactor', 'public/calcium.jpg');
  console.log('Done downloading accurate images.');
}

run();
