const _Multer = require("../../core/multer");
const _multer = new _Multer();

class Video_ {
  app;
  video;
  _core;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.uploadFile();
  }

  // Rutas raiz
  root() {
    this.app.get("/video", (req, res) => {
      res.send(this._core.connectedMessage(req, res));
    });
  }

  // Ruta para cargar archivos
  uploadFile() {
    this.app.post(
      "/subir-archivo",
      _multer.upload.single("myFile"),
      (req, res) => {
        // Manejar el archivo cargado aquí
        console.log("archivo: " + req.file);
        video = req.file;
        res.send({ data: video });
      }
    );
  }
}

module.exports = Video_;
