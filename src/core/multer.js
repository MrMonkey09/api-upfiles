import multer from "multer";

class _Multer {
  constructor() {
    console.log("Iniciando el manejo de archivos...");
  }

  // Configurar multer para el almacenamiento de archivos
  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log({ file });
      cb(null, "src/uploads"); // Define la carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      console.log({ req, file });
      cb(null, Date.now() + "-" + "promo-china.mp4"); // Define el nombre del archivo
    },
  });

  upload = multer({ storage: this.storage });
}

export default _Multer;
