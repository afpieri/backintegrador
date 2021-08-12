import { application } from "express";
import express, {Application} from 'express';

import indexRoutes from './routes/indexRoutes';
import memoRoutes from './routes/memoRoutes';

class server{

   public app: Application;
    constructor (){
      this.app = express();
      this.config();
      this.routes();

    }

    config():void {
        this.app.set('port', process.env.PORT || 3000);

    }

    routes(): void{
        this.app.use(indexRoutes);
        this.app.use('/api/memos',memoRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'),() =>{
       console.log('sever on port', this.app.get('port') );
        } );
    }

}

 const servidor = new server();
 servidor.start ();
