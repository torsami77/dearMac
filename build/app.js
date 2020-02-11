"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
const PORT = process.env.PORT || 5000; // Create global app object

const app = (0, _express.default)();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}; // Normal express config defaults


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
const isProduction = process.env.NODE_ENV === 'production'; // base route response

app.get('/', (req, res) => {
  res.sendFile(_path.default.resolve('./ui/index.html'));
});
app.use('/api/v1/', _routes.default); // catch 404 and forward to error handler

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}); // development error handler
// will print stacktrace

if (!isProduction) {
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(err.stack);
    res.status(err.status || 500).json({
      errors: {
        message: err.message,
        error: err
      }
    });
  });
} // production error handler
// no stacktraces leaked to user


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map