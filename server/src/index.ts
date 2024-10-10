import express from 'express';
import cors from "cors";
import { appRoute } from './shared/infra/routes/external.routes';

const app = express();
const port = 8080;

app.use(cors())
app.use(appRoute)

app.listen(port, (err?: Error) => err ? console.error(`Unable to start server:${err}`) : console.log(`Server running at: ${port}`));
