const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, './data/tasks.json');

exports.writeTasksToFile = (tasks) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (Array.isArray(tasks) && tasks.length === 0) {
        fs.writeFileSync(filePath, '[]'); 
    } else {
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    }
};

exports.readTasksFromFile = () => {
    if (!fs.existsSync(filePath)) {
        this.writeTasksToFile([]);
    }

    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (error) {
        exports.writeTasksToFile([]);
        return [];
    }
};
