import express, { Application } from "express";
import morgan from 'morgan';


export class App{

   private app: Application;    

    constructor(private port?: number | string) {
       this.app = express(); 
       this.settings();
       this.middlewares();     
    }
    
    settings(){
        this.app.set('port', this.port || process.env.PORT || 5000)
    }

    middlewares(){
        this.app.use(morgan('dev'));
    }

    async listen(){
      await this.app.listen(this.app.get('port'));
      console.log('Server on Port', this.app.get('port'));

    }
}