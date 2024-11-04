const taskRoutes = require("./routes/taskRoutes");

const http = required("http");

const HOSTNAME = 'localhost'
const PORT = 9000;

const server = http.createServer((req,res)=>{
    if (req.url.startwith('/tasks')) {
        taskRoutes(req, res) 
    }
    else{
        res.writeHead(404, 'Not Found', {'content-type':'application/json'})
        res.end(Json.stringify({
            message: 'Sorry you got lost!'
        }))
    }
});

server.listen(PORT ,HOSTNAME , ()=>{
    console.log(`Server Running on Port ${PORT}`)
})