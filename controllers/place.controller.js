const fetch = require('../db/data')
const Place= require('../models/place.model')
let users= fetch.users
let places=fetch.places
const index =(req,res) =>{
    res.send('/places was hit');
};
const getAllPlaces =(req,res) =>{
    console.log('/getAllPlaces' + 'was hit');
    res.send(places)
}
const getplaces =(req,res) =>{
    let placeIds=[]
    let name=[]
    userNumber= req.params.id;
    for(i=0;i<users.length;i++){
        if(users[i].userId==userNumber){
            placeIds= users[i].placesArray
            const name = temp(placeIds);
            res.send(name);
        }
        else{
            if(i==users.length)
                res.send("No User found");
            }
        }
}
function temp(placeIds) {
    const name= [];
    placeIds.forEach(placeId => {
        const { placeName } = places.find(place => place.placeId === placeId);
        name.push(placeName);
    });
    return name;
}
const deletePlace = async (req,res) =>{
    titlePassed= req.body.title
    searchedPlace= await Place.find({title: titlePassed})
    gottenId= searchedPlace[0]._id
    console.log(gottenId)
    await Place.deleteOne({_id: gottenId})
    res.send("Hello")
}
const addPlace = async (req,res) =>{
    const place= new Place({
        title: req.body.title,
        description: req.body.description,
        address: req.body.address,
    })
    const result = await place.save()
    res.send(result)
}
module.exports = { getAllPlaces,index,getplaces,deletePlace,addPlace};

