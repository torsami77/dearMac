import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';

config();

const PORT = process.env.PORT || 5000;
// Create global app object
const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

// Normal express config defaults
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('./ui'));
app.use(cookieParser());

const isProduction = process.env.NODE_ENV === 'production';

// base route response
app.get('/', (req, res) => {
  res.sendFile(path.resolve('./ui/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.log(err.stack);
    res.status(err.status || 500).json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default app;
