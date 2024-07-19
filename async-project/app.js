const fs = require('fs');
const path = require('path');

// Function to read a file asynchronously
function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Function to write content to a file asynchronously
function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

// Async function to demonstrate asynchronous file operations
async function main() {
    try {
        // File paths
        const file1Path = path.join(__dirname, 'file1.txt');
        const file2Path = path.join(__dirname, 'file2.txt');
        const file3Path = path.join(__dirname, 'file3.txt');
        const file4Path = path.join(__dirname, 'file4.txt');

        // Read file 1 asynchronously
        const file1Content = await readFileAsync(file1Path);
        console.log('File 1 content:');
        console.log(file1Content);

        // Read file 2 asynchronously
        const file2Content = await readFileAsync(file2Path);
        console.log('\nFile 2 content:');
        console.log(file2Content);

        // Write content to file 3 asynchronously
        const contentToWrite = 'New content for file 3';
        await writeFileAsync(file3Path, contentToWrite);
        console.log('\nSuccessfully wrote to file 3.');

        // Read file 3 asynchronously to verify
        const file3Content = await readFileAsync(file3Path);
        console.log('\nFile 3 content after write:');
        console.log(file3Content);

        // Perform some asynchronous operation (simulated delay)
        console.log('\nPerforming another asynchronous operation...');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay of 2 seconds
        console.log('Second asynchronous operation completed.');

        // Example of reading file 4 asynchronously (not used further)
        const file4Content = await readFileAsync(file4Path);
        console.log('\nFile 4 content:');
        console.log(file4Content);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the main function
main();
