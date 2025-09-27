const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🔧 Rebuilding SQLite3 for Electron...');

const appDir = path.join(__dirname, '../../release/app');
const nodeModulesPath = path.join(appDir, 'node_modules');

// Verificar se o diretório release/app existe
if (!fs.existsSync(appDir)) {
  console.log('📁 Creating release/app directory...');
  fs.mkdirSync(appDir, { recursive: true });
}

// Verificar se node_modules existe
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies in release/app...');
  execSync('npm install', { cwd: appDir, stdio: 'inherit' });
}

// Rebuild SQLite3 especificamente
console.log('🔨 Rebuilding SQLite3 native module...');
try {
  execSync('npx electron-rebuild --only sqlite3 --module-dir release/app', { 
    stdio: 'inherit',
    cwd: path.join(__dirname, '../..')
  });
  console.log('✅ SQLite3 rebuild completed successfully!');
} catch (error) {
  console.error('❌ Error rebuilding SQLite3:', error.message);
  process.exit(1);
}
