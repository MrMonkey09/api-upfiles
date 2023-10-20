const Department_ = require("./department/department.routes");
const General_ = require("./general/general.routes");
const GroupScreen_ = require("./group-screen/group-screen.routes");
const Location_ = require("./location/location.routes");
const Screen_ = require("./screen/screen.routes");
const User_ = require("./user/user.routes");
const Video_ = require("./video/video.routes");

class Router_ {
  app;
  _core;
  _db;

  // Enrutadores
  department_;
  general_;
  groupScreen_;
  location_;
  screen_;
  user_;
  video_;

  constructor(app, core, db) {
    this.app = app;
    this._core = core;
    this._db = db;
    this.department_ = new Department_(this.app, this._core, this._db);
    this.general_ = new General_(this.app, this._core, this._db);
    this.groupScreen_ = new GroupScreen_(this.app, this._core, this._db);
    this.location_ = new Location_(this.app, this._core, this._db);
    this.screen_ = new Screen_(this.app, this._core, this._db);
    this.user_ = new User_(this.app, this._core, this._db);
    this.video_ = new Video_(this.app, this._core, this._db);
  }

  matchRoute() {
    this.general_.routes();
    this.department_.routes();
    this.groupScreen_.routes();
    this.location_.routes();
    this.screen_.routes();
    this.user_.routes();
    this.video_.routes();
  }
}

module.exports = Router_;
