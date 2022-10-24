import express, { Application } from "express";
import morgan from 'morgan';


import IndexRouters from './routes/index.routes';
import MosfetRoutes from './routes/mosfet.routes';

export class App{

   private app: Application;    

    constructor(private port?: number | string) {
       this.app = express(); 
       this.settings();
       this.middlewares();  
       this.routes();   
    }
    
    settings(){
        this.app.set('port', this.port || process.env.PORT || 5000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
       

    }
    routes() {
        this.app.use(IndexRouters);
        this.app.use('/mosfets', MosfetRoutes);

    }

    async listen(){
      await this.app.listen(this.app.get('port'));
      console.log('Server on Port', this.app.get('port'));

    }
}