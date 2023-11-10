export let constants = {
  cnCounterHTTP: 0,
  cnCounterSocket: 0,
  newIp: "",
};

export const ipFormat = (ip) => {
  constants.newIp = "";
  if (ip === "::1") {
    constants.newIp = "localhost";
    return constants.newIp;
  } else {
    constants.newIp = ip.replace("::ffff:", "");
    return constants.newIp;
  }
};

export const connectedMessageHTTP = (req, res) => {
  const ip = ipFormat(req.ip);
  constants.cnCounterHTTP++;
  let message = {
    Tipo: "HTTP",
    Metodo: req.method,
    Numero: constants.cnCounterHTTP,
    IP: ip,
    "Codigo de Estado": res.statusCode,
    "Ruta solicitada": req.url,
  };
  console.info({ Petición: message });
  return message;
};

export const connectedMessageSOCKET = (client, session) => {
  constants.cnCounterSocket++;
  let message = {
    Tipo: "WebSocket",
    Numero: constants.cnCounterSocket,
    IP: client.conn.remoteAddress,
    ConexionID: session,
    Dispositivo: client.id,
  };
  console.info("Peticion: ", message);
  return message;
};
