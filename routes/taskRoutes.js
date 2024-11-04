const taskRoutes = (req,res)=>{
    if (req.method == 'GET') {
        getTasks(req, res);
    }
    else if (req.method == 'POST' ) {
        createTask(req, res);
    }
    else if (req.method == 'PATCH') {
        updateTask(req, res);
    }
    else if (req.method == 'DELETE') {
        deleteTask(req, res);
    }
    else {
        res.status(404).send('Data Not Found', {'content-type':'application/json'});
        res.end(Json.stringify({
            message: 'Unknown Method Required!'
        }))
    }
}

module.exports = taskRoutes;