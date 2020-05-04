// import ingrediente from '../models/ingrediente';
const models = require('../models').default;

export async function createingrediente(req, res) {
    const { nombre, descripcion } = req.body;
    // Cambiar el path por la url de la pgina de heroku
    const path = 'https://burgerapirest.herokuapp.com/';
    if (nombre!="" && descripcion!="" && nombre!=null && descripcion!=null){
        let newingrediente = await models.Ingrediente.create({
                nombre,
                descripcion,
                path,
            }, {
                fields: ['nombre', 'descripcion', 'path']
            });
            newingrediente.update({'path':path+'ingrediente/' +newingrediente.id }) ;
            return (res.status(201).json(newingrediente));
    } else{
        res.status(400).send('input invalido');
    }
}
    

export async function getingrediente(req, res) {
    try {
        const ingredientes = await models.Ingrediente.findAll(
            {
                attributes:['id', 'nombre', 'descripcion']
            }
        );
        res.status(200).json(ingredientes);
    } catch (e) {
        console.log(e);
    }
}


export async function deleteingrediente(req, res) {
    const {id} = req.params;
    if(isNaN(id)){
      
        return res.status(400).send('input invalido');
    }
    const ingrediente = await models.Ingrediente.findOne({where: {id:id}});
    if(ingrediente === null){
        return res.status(404).send("ingrediente inexistente")
    } 
    const check = await ingrediente.countHamburguesas();
    if(check>0){
        return res.status(409).send("Ingrediente no se puede borrar, se encuentra presente en una hamburguesa")
    }
    ingrediente.destroy();
    return res.status(200).send("ingrediente eliminado");
    
    
    
    
}
export async function getOneingrediente(req, res) {
    const { id } = req.params;
    if(isNaN(id)){
      
        return res.status(400).send('id invalido');
    }
    const check = await models.Ingrediente.findAll({where: {id:id}});
    if(check.length == 0){
        res.status(404).send("ingrediente inexistente")
    } else{
        const ingrediente1 = await models.Ingrediente.findOne({
            where: {
                id: id
            },
            attributes:['id', 'nombre', 'descripcion']
        });
        res.status(200).json(ingrediente1);
    }



    // const ingrediente1 = await models.Ingrediente.findOne({
    //     where: {
    //         id: id
    //     }
    // });
    // res.json({
    //     data: ingrediente1
    // });
}