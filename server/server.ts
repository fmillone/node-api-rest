

import * as express from "express";
import config from "./config/config";
import { json, urlencoded } from "body-parser";
import * as compression from "compression";
import * as path from "path"
import { viewRouter } from "./routers/viewRouter";
import apiRouter from "./routers/apiRouter"


const server = express();
server.set("port", config.port);

server.disable("x-powered-by");

server.use(json());
server.use(compression());
server.use(urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname, "/../client/")));
server.use('/', viewRouter);
server.use('/api', apiRouter);


export default server ;
