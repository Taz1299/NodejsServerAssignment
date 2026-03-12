const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    if (req.url === "/") {

        fs.readFile("index.html", (err, data) => {

            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"})
                res.end("Error loading page")
                return
            }

            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        })

    }

    else if (req.url === "/api/student") {

        const student = {
            name: "nsralla",
            studentId: "12428610"
        }

        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(student))
    }

    else {

        res.writeHead(404, {"Content-Type": "text/plain"})
        res.end("Page not found")

    }

})

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})