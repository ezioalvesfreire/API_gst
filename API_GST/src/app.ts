import express, { Application } from "express";
import morgan from 'morgan';


import IndexRouters from './routes/index.routes';
import MosfetRoutes from './routes/mosfet.routes';
import PowerTransistorRoutes from "./routes/powerTransistor.routes";

//import MosfetService from './services/mosfet.service';


const cors = require('cors')


export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express().use(cors());
        this.settings();
        this.middlewares();

        this.routes();

        /*    this.app.get('/testando', (req, res) => {  //criado rotas e controlles próprios
             return res.json([
                 { description: 'FQP50N06'},
                 { description: 'BUK457'}
             ])
         }) */

    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 5000)
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());

    }

    routes() {
        this.app.use(IndexRouters);
        this.app.use('/mosfets', MosfetRoutes);
        this.app.use('/powerTransistors', PowerTransistorRoutes);
        //this.app.use('/mosfetService', MosfetService)
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on Port', this.app.get('port'));

    }
}