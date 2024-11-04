const { IncomingForm } = require('formidable');
const { readTasksFromFile } = require("../utils/fileHandler")
const { copyFileSync } = require('fs');
exports.getTasks = (req, res)=>{
    const tasks = readTasksFromFile();
    res.writeHead(200,  {'content-type':'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTask = (req, res)=>{
    const form = new IncomingForm ();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(400, {'content-type':'application/json'});
            res.end(JSON.stringify({
            message:'Error Passing Form'
        })) 
        }
        const tasks = readTasksFromFile()
        const newTask = {
            id: Date.now(),
            title: fields.title[0],
            description: fields?.description || '',
            status: fields?.status || 'Pending',
            image: fields.image ? `/uploads/${files.image.name}`: null ,
        }

        tasks.push(newTask)
        writeTasksToFile(tasks)

        if (files.image) {
            copyFileSync(files.image.path, path.join(__dirname, '../uploads', files.image.name));
            res.end(JSON.stringify(newTask))
        }
        
})
}