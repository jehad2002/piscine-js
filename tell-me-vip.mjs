import fs from 'fs/promises';
import path from 'path';

// Function to filter and save VIP guests who answered "YES"
async function listGuests(directoryPath) {
    try {
        // Read the directory contents
        const files = await fs.readdir(directoryPath);

        // Filter out non-JSON files
        const jsonFiles = files.filter(file => path.extname(file) === '.json');

        // Array to hold guests who answered "YES"
        let vipGuests = [];

        // Process each JSON file
        for (const file of jsonFiles) {
            const filePath = path.join(directoryPath, file);

            // Read the file and parse JSON content
            const fileContent = await fs.readFile(filePath, 'utf8');
            const guest = JSON.parse(fileContent);

            // Check if the guest responded "YES"
            if (guest.response === 'YES') {
                const baseName = path.basename(file, '.json');
                const [firstname, lastname] = baseName.split('_');
                vipGuests.push({ firstname, lastname });
            }
        }

        // Sort guests alphabetically by Lastname then Firstname
        vipGuests.sort((a, b) => {
            if (a.lastname !== b.lastname) {
                return a.lastname.localeCompare(b.lastname);
            }
            return a.firstname.localeCompare(b.firstname);
        });

        // Format the list
        const formattedList = vipGuests.map((guest, index) =>
            `${index + 1}. ${guest.lastname} ${guest.firstname}`
        ).join('\n');

        // Define the path for vip.txt
        const outputFilePath = path.join(directoryPath, 'vip.txt');

        // Ensure the directory exists
        await fs.mkdir(directoryPath, { recursive: true });

        // Write the formatted list to the output file
        await fs.writeFile(outputFilePath, formattedList, 'utf8');
        console.log('VIP list saved to vip.txt');

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
