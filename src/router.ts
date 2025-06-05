import { Router } from "express"
import { createAccunt } from "./handlers";

 const router  = Router();

 router.post('/auth/register', createAccunt)
  
export default router;
