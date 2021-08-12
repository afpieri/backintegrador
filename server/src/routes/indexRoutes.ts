import { Router } from 'express';

class indexRoutes {

   public router: Router = Router();

   constructor(){

   }

   config():void{
       this.router.get('/', (req, res) => res.send('algo') );
   }
}

const inRoutes = new indexRoutes();
export default inRoutes.router;