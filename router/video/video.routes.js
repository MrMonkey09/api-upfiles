const _Multer = require("../../core/multer");
const _multer = new _Multer();
const videos = require("../../data/videos.data");

class Video_ {
  app;
  video;
  _core;
  videoList;

  constructor(app, core) {
    this.app = app;
    this._core = core;
  }

  // Enrutador
  routes() {
    this.root();
    this.uploadFile();
    this.allVideo();
  }

  // Rutas raiz
  root() {
    this.app.get("/video", (req, res) => {
      res.send({ "Ruta solicitada": req.url });
    });
  }

  // Ruta para cargar archivos
  uploadFile() {
    this.app.post(
      "/subir-archivo",
      _multer.upload.single("myFile"),
      (req, res) => {
        // Manejar el archivo cargado aquí
        console.log("archivo: ", req.file);
        this.video = req.file;
        res.send({ data: this.video });
      }
    );
  }

  createVideo() {}

  getVideo() {}

  allVideo() {
    this.app.get("/video/all", (req, res) => {
      if (this.videoList) {
        res.send({ videos: this.videoList });
      } else {
        this.videoList = videos;
        res.send({ videos: this.videoList });
      }
    });
  }

  updateVideo() {}

  deleteVideo() {}
}

module.exports = Video_;
