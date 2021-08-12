import { Router } from 'express';

class memoRoutes {

   public router: Router = Router();

   constructor(){

   }

   config():void{
       this.router.get('/',function (req, res, next)  {
        res.send('memos');
    } );
   }
}

const meRoutes = new memoRoutes();
export default meRoutes.router;