import express from 'express';
import bearerToken from 'express-bearer-token';
import bodyParser from 'body-parser';
import routes from './routes.js';

const app = express();

app.enable('trust proxy');

app.use(bearerToken());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
