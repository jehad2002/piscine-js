import fs from 'fs';
import path from 'path';

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length < 2 || args.length > 3) {
  console.error('Usage: node tell-it-cypher.mjs <file> <encode|decode> [newfile]');
  process.exit(1);
}

const filePath = args[0];
const command = args[1];
const newFileName = args[2] || (command === 'encode' ? 'cypher.txt' : 'clear.txt');

// Read file contents
let fileContent;
try {
  fileContent = fs.readFileSync(filePath);
} catch (error) {
  console.error(`Error reading file: ${error.message}`);
  process.exit(1);
}

// Process file based on command
let output;
switch (command) {
  case 'encode':
    output = Buffer.from(fileContent).toString('base64');
    break;
  case 'decode':
    output = Buffer.from(fileContent.toString(), 'base64').toString();
    break;
  default:
    console.error('Invalid command. Use "encode" or "decode".');
    process.exit(1);
}

// Write result to new file
try {
  fs.writeFileSync(newFileName, output);
  console.log(`File successfully written to ${newFileName}`);
} catch (error) {
  console.error(`Error writing file: ${error.message}`);
  process.exit(1);
}
