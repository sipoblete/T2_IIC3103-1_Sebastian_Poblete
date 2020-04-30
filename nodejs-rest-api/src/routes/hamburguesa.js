import {Router} from 'express';
const router = Router();


import {createHamburguesa, getHamburguesa, getOnehamburguesa, deleteHamburguesa, updatehamburguesa, addingrediente, delingrediente} from '../controllers/hamburguesa.controller';

// Crear hamburguesa
router.post('/', createHamburguesa);

// Mostrar todas las hamburguesas
router.get('/', getHamburguesa);

// Mostrar solo una hamburguesa
router.get('/:id', getOnehamburguesa);

// Rliminar una hamburguesa con su id
router.delete('/:id', deleteHamburguesa);

// Actualizar datos hamburguesa
router.patch('/:id',updatehamburguesa);

// Agregar ingrediente a hamburguesa
router.put('/:idh/ingrediente/:idi', addingrediente);

// Eliminar ingrediente de hamburgueda
router.delete('/:idh/ingrediente/:idi', delingrediente);


export default router;