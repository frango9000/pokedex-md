import * as fs from 'fs';

function trim(): void {
  const path = process.argv[-1] || './dist/apps/pokedex/assets/api';

  fs.readdir(path, (err: NodeJS.ErrnoException | null, files: string[]) => {
    if (err) {
      console.error('Path not found:', path);
    } else {
      let sizeSaved = 0;
      files.forEach((fileName) => {
        const initialSize = fs.statSync(`${path}/${fileName}`).size;
        const file = fs.readFileSync(`${path}/${fileName}`, 'utf8');
        const cont = JSON.stringify(JSON.parse(file));
        fs.writeFileSync(`${path}/${fileName}`, cont, 'utf8');
        const finalSize = fs.statSync(`${path}/${fileName}`).size;
        sizeSaved += initialSize - finalSize;
      });
      console.log('API bundle reduction:', String(sizeSaved / (1024 * 1024)).slice(0, 5), 'mb');
    }
  });
}

trim();
