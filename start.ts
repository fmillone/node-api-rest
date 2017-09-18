#!/usr/bin/env node

import * as http from "http";
import app from "./server/server";
import config from "./server/config/config"


const server = http.createServer(app);

server.listen(config.port);
server.on("error", onError);
server.on("listening", onListening);

console.log('');
console.log('App running at http://localhost:' + config.port);


function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            abort(`${config.port} requires elevated privileges`);
            break;
        case "EADDRINUSE":
            abort(`${config.port} is already in use`);
            break;
        default:
            throw error;
    }
}

function abort(message: String){
    console.error(message);
    process.exit(1);
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;

    console.log(`Listening on ${bind}`)
}
