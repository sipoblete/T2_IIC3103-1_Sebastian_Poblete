import {Router} from 'express';
const router = Router();
import {getingrediente, createingrediente, getOneingrediente, deleteingrediente} from '../controllers/ingrediente.controller';

router.get('/', getingrediente);
router.get('/:id', getOneingrediente);
router.post('/', createingrediente);
router.delete('/:id', deleteingrediente);


export default router;