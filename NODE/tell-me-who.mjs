import fs from 'fs/promises';
import path from 'path';

async function listGuests(directoryPath) {
    try {
        // Read the directory contents
        const files = await fs.readdir(directoryPath);

        // Filter out non-JSON files
        const jsonFiles = files.filter(file => path.extname(file) === '.json');

        // Map the filenames to names
        const namesPromises = jsonFiles.map(async (file) => {
            // Extract base name without extension
            const baseName = path.basename(file, '.json');
            // Split the base name to get lastname and firstname
            const [firstname, lastname] = baseName.split('_');
            return `${lastname} ${firstname}`;
        });

        // Wait for all promises to resolve
        const names = await Promise.all(namesPromises);

        // Sort names alphabetically
        const sortedNames = names.sort();

        // Print names in the desired format
        sortedNames.forEach((name, index) => {
            console.log(`${index + 1}. ${name}`);
        });
    } catch (error) {
        console.error('Error reading directory or processing files:', error);
    }
}

// Main execution logic
async function main() {
    const args = process.argv.slice(2);
    const directoryPath = args[0] || '.';
    const resolvedPath = path.resolve(directoryPath);
    await listGuests(resolvedPath);
}

// Execute main function
main();
