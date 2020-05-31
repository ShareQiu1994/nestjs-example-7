const { compile } = require('nexe');

console.log('Compiling binaries...');
compile({
  input: 'dist/main.js',
  output: `nexe_dist/nest7.exe`,
  resources: ['dist/**/*', 'views/**/*', 'public/**/*'],
  targets: ['windows-x64-12.16.3'],
})
  .then(() => {
    console.log('Finished compiling binaries');
  })
  .catch(error => {
    console.error(error);
  });
