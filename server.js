const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static("./uploads"));
const options = {
  cors: {
    origin: "http://192.168.0.15:9595",
  },
};
const server = require("http").Server(app);
const io = require("socket.io")(server, options);

// Configurar multer para el almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Define la carpeta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + "promo-china.mp4"); // Define el nombre del archivo
  },
});
const upload = multer({ storage });
let video = {};
const Nucleo = require("./nucleo");
const nucleo = new Nucleo();

// Ruta inicial
app.get("", (req, res) => {
  console.log(
    "IP: " + nucleo.ipFormat(req.ip) + " | Codigo de Etado: " + res.statusCode
  );
  nucleo.connectedMessage(nucleo.ipFormat(req.ip));
  res.send({ ipScreen: nucleo.ipFormat(req.ip) });
});

// Ruta para cargar archivos
app.post("/subir-archivo", upload.single("myFile"), (req, res) => {
  // Manejar el archivo cargado aquí
  console.log("archivo: " + req.file);
  video = req.file;
  res.send({ data: video });
});

io.on("connection", function (socket) {
  const handshake = socket.id;
  console.log(socket.handshake.query);
  let { user } = socket.handshake.query;
  socket.join("general");
  console.log(
    `Nuevo dispositivo: ${handshake} conectado con el usuario id --> ${user}`
  );
  socket.on("video", (res) => {
    const data = res;
    console.log(res);
    socket.to("general").emit("video", res);
  });
  socket.on("screen", (res) => {
    const data = res;
    console.log(res);
    socket.to("general").emit("screen", res);
  });
});

server.listen(3001, () => {
  console.log("Servidor en funcionamiento en el puerto 3001");
});
