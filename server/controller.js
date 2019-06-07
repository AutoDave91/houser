function getHouses(req, res){
    const db = req.app.get('db');

    db.getAll_houses()
        .then(result=> res.status(200).json(result))
        .catch(()=>{res.status(500).json('getAll failed in controller')})
}
function deleteHouse(){

}

module.exports ={
    getHouses, deleteHouse
}