import {connectedMessageHTTP} from "../core.js";

class mw_Server {
  constructor() {
    console.log("Iniciando Server Middleware...");
  }

  Request(req, res, next) {
    connectedMessageHTTP(req, res);
    next();
  };
}

export default mw_Server;
