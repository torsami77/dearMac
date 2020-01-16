import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';


const PORT = process.env.PORT || 5000;
const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(express.static('./ui'));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.sendFile(path.resolve('./ui/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send({
    status: 404,
    error: 'Endpoint not found!',
    success: false,
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

export default { app };
