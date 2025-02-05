import fs from 'fs/promises';
import path from 'path';

async function countFiles(directoryPath) {
    try {
        const files = await fs.readdir(directoryPath);
        const numberOfFiles = files.length;
        // Output only the number of files, no additional text
        console.log(numberOfFiles);
    } catch (error) {
        // Ensure the error is also a valid number output for testing purposes
        console.error('0');
    }
}

async function main() {
    const args = process.argv.slice(2);
    const directoryPath = args[0] || '.';
    const resolvedPath = path.resolve(directoryPath);
    await countFiles(resolvedPath);
}

main();
