import express from "express";
import { engine } from "express-handlebars";
import routes from "./routes/index.routes.js";
import path from "path";
import morgan from 'morgan';

const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));

// engine: indicar el motor de plantillas
app.engine(".hbs", engine({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'porciones'),
  defaultLayout: 'main',
  extname: ".hbs",
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));


// Routes
app.use(routes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;
