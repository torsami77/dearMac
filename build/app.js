"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = process.env.PORT || 5000;
const app = (0, _express.default)();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.text());
app.use(_bodyParser.default.json({
  type: 'application/json'
}));
app.use(_express.default.static('./ui'));
app.use((0, _cookieParser.default)());
app.get('/', (req, res) => {
  res.sendFile(_path.default.resolve('./ui/index.html'));
});
app.all('*', (req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Endpoint not found!',
    success: false
  });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
var _default = {
  app
};
exports.default = _default;