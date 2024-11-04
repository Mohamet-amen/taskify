const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './data/tasks.json');

exports.writeTasksToFile = (tasks) => {
    // Ensure the 'data' directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (Array.isArray(tasks) && tasks.length === 0) {
        fs.writeFileSync(filePath, '[]'); // Write an empty array if tasks is empty
    } else {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    }
};

exports.readTasksFromFile = () => {
    // Check if the file exists; if not, create it with an empty array
    if (!fs.existsSync(filePath)) {
        exports.writeTasksToFile([]);
    }

    try {
        const data = fs.readFileSync(filePath, 'utf-8'); // Specify 'utf-8' encoding
        return JSON.parse(data);
    } catch (error) {
        // If JSON parsing fails, reset to an empty array
        exports.writeTasksToFile([]);
        return [];
    }
};
