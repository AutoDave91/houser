function getHouses(req, res){
    const db = req.app.get('db');

    db.getAll_houses()
        .then(result=> res.status(200).json(result))
        .catch(()=>{res.status(500).json('getAll failed in controller')})
}
function deleteHouse(){
    const db = req.app.get('db'),
    {id} = req.params

    db.deleteHouse(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.status(500).json('deleteHouse failed in controller'))
}
function addHouse(req, res){
    const db = req.app.get('db');
    const {name, address, city, state, zipcode} = req.body;

    db.addHouse(name, address, city, state, zipcode)
        .then(result=> res.status(200).json(result))
        .catch(()=>{res.status(500).json('addHouse failed in controller')})
}
function editHouse(req, res){

}

module.exports ={
    getHouses, deleteHouse, addHouse, editHouse
}