import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  console.log('Building client...');
  await execAsync('npm run build:client');
  
  console.log('Building server...');
  await execAsync('npm run build:server');
  
  console.log('Build completed!');
}

build().catch(console.error);