// tell-me-how-many.mjs

import fs from 'fs/promises';
import path from 'path';

async function countFiles(directoryPath) {
    try {
        // Read the directory
        const files = await fs.readdir(directoryPath);

        // Count the number of entries (files) in the directory
        const numberOfFiles = files.length;

        // Print the result
        console.log(`Number of files in directory '${directoryPath}': ${numberOfFiles}`);
    } catch (error) {
        console.error(`Error reading directory '${directoryPath}':`, error);
    }
}

// Main execution logic
async function main() {
    // Get directory path from command-line arguments
    const args = process.argv.slice(2); // First two arguments are node and script path
    const directoryPath = args[0] || '.'; // Default to current directory if no path provided

    // Resolve the directory path to handle relative paths correctly
    const resolvedPath = path.resolve(directoryPath);

    // Call function to count files
    await countFiles(resolvedPath);
}

// Execute main function
main();
