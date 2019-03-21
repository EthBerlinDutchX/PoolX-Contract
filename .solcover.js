module.exports = {
  copyNodeModules: true,
  norpc: true,
  testCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle test --network coverage',
  compileCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle compile --network coverage',
  skipFiles: [
    'Migrations.sol',
    'mocks'
  ]
}