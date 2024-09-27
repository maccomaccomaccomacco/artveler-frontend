const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const dataPath = path.join(__dirname, '../data/output.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  for (const artwork of data) {
    await prisma.artwork.create({
      data: {
        link: artwork.link,
        title: artwork.title,
        artist: artwork.artist,
        artworkImg: artwork.artworkImg,
        date: artwork.date,
        style: artwork.style,
        genre: artwork.genre,
        media: artwork.media,
        location: artwork.location,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });