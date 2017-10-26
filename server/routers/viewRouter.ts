import { Request, Response, Router } from "express";
import * as path from "path";

const viewRouter: Router = Router();


viewRouter.get("/", (request: Request, response: Response) => {
  response
    .sendFile(path.join(__dirname,'../../client/index.html'));
});

export { viewRouter };