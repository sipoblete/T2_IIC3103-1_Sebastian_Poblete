// import Hamburguesa from '../models/hamburguesa';
// import Ingrediente from '../models/ingrediente';

// import { INTEGER } from 'sequelize/types';

// import HamburguesaIngrediente from '../models/hamburguesaingrediente';
const models = require('../models').default;

export async function createHamburguesa(req, res) {
    const { nombre, precio, descripcion, imagen } = req.body;
    if (nombre!="" && precio!="" && descripcion!="" && imagen!="" && nombre!=null && precio!=null && descripcion!=null && imagen!=null){
        let newhmburguesa = await models.Hamburguesa.create({
                nombre,
                precio,
                descripcion,
                imagen
            }, {
                fields: ['nombre', 'precio', 'descripcion', 'imagen']
            });
            return (res.status(201).json(newhmburguesa));
    } else{
        res.status(400).send('input invalido');
    }
}



export async function getHamburguesa(req, res) {
    try {
        const hamburguesas = await models.Hamburguesa.findAll({
 
            include: [{model: models.Ingrediente, as:"ingredientes", attributes:["path"], through: { attributes: [] }}]
         
        });

        console.log(hamburguesas);
        
        res.status(200).json(hamburguesas);
        
    } catch (e) {
        console.log(e);
    }
  
}

export async function getOnehamburguesa(req, res){
    const {id} = req.params;
    if(isNaN(id)){
      
        return res.status(400).send('id invalido');
    }
    const check = await models.Hamburguesa.findAll({where: {id:id}});

    if(check.length == 0){
        res.status(404).send("hamburguesa inexistente")
    } else{
        const hamburguesa1 = await models.Hamburguesa.findOne({
            where: {
                id: id
            },
            include: [{model: models.Ingrediente, as:"ingredientes", attributes:["path"], through: { attributes: [] }}]

        });
        res.status(200).json(hamburguesa1);
    }

}


export async function deleteHamburguesa(req, res){
    const {id} = req.params;
    if(isNaN(id)){
      
        return res.status(400).send('input invalido');
    }
    const check = await models.Hamburguesa.findAll({where: {id:id}});
    if(check.length == 0){
        res.status(404).send("hamburguesa inexistente")
    } else{
       models.Hamburguesa.destroy({
            where: {
                id: id
            }
        });
        res.status(200).send("hamburguesa eliminada");
    }
    
    
    
}

export async function updatehamburguesa(req, res) {
    const {id} = req.params;
    const {nombre, precio, descripcion, imagen} = req.body;
    if(isNaN(id)){
      
        return res.status(400).send('Parametros invalidos');
    }
    const check = await models.Hamburguesa.findAll({where: {id:id}});
    if(check.length == 0){
        res.status(404).send("Hamburguesa inexistente")
    } else{
        if (nombre!="" && precio!="" && descripcion!="" && imagen!="" && nombre!=null && precio!=null && descripcion!=null && imagen!=null){
            check.forEach(async hamburguesa2 => {
                await hamburguesa2.update({
                    nombre,
                    precio,
                    descripcion,
                    imagen
                });
            })
            return res.status(200).json(check);
        } else{
            return res.status(400).send('Parametros invalidos');
        }
        

    }

}
      


export async function addingrediente(req, res) {
    const {idh} = req.params;
    const {idi} = req.params;
    
    if(isNaN(idh) || isNaN(idi)){
        return res.status(400).send('input invalido');
    }
    const hamburguesa = await models.Hamburguesa.findOne({where: {id:idh}});
    if (hamburguesa === null){
        return res.status(404).send('Hamburguesa inexistente')
    }
    const ingrediente = await models.Ingrediente.findOne({where: {id:idi}});
    if (ingrediente === null){
        return res.status(404).send('Ingrediente inexistente')
    }
    hamburguesa.addIngrediente(ingrediente);
    return res.status(201).send('Ingrediente agregado')

}


export async function delingrediente(req, res) {
    const {idh} = req.params;
    const {idi} = req.params;
    
    if(isNaN(idh) || isNaN(idi)){
        return res.status(400).send('input invalido');
    }
    const hamburguesa = await models.Hamburguesa.findOne({where: {id:idh}});
    if (hamburguesa === null){
        return res.status(404).send('Hamburguesa inexistente')
    }
    const ingrediente = await models.Ingrediente.findOne({where: {id:idi}});
    if (ingrediente === null){
        return res.status(404).send('Ingrediente inexistente')
    }
    const check = await hamburguesa.hasIngrediente(ingrediente);
    if(check){
        hamburguesa.removeIngrediente(ingrediente);
        return res.status(200).send('Ingrediente retirado')
    }else{
        return res.status(404).send('Ingrediente inexistente en la hamburguesa')
    }
    
}



    

    

