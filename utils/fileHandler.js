const { JSONParser } = require("formidable/parsers");

const fs = required ('fs');
const path= required('path');

const filePath= './data/tasks.json';

exports.writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}
exports.readTasksFromFile=()=>{
    if (fs.existsSync(filePath)) {
        writeTasksToFile ([])
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}