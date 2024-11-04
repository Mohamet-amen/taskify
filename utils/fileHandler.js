const fs = required ('fs');
const path= required('path');

const filePath= './data/tasks.json';

const writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
}