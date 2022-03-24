const fetch= require('../db/data')
const User= require('../models/user.model')
const index= (req,res)=>{
    res.send('/users was hit');
}

// const getAllUsers= (req,res) =>{
//     console.log('/getAllUsers was hit');
//     users= fetch.users;
//     res.json(users);
// }

const getUserApi= (req,res)=>{
    console.log('Api call -> fetching name and places corresponding')
    let users= fetch.users;
    let places= fetch.places;
    let allUsers=[]
    let placeId=[]
    users.forEach(user=>{
        let obj={}
        let placename=[]
        obj['userID']=user.userId
        obj['name']=user.name
        placeId=user.placesArray
        placeId.forEach(place => {
            for(j=0;j<places.length;j++){
                if(places[j].placeId===place){
                    placename.push(places[j].placeName)
                }
            }
        });
        obj['places']=placename
        allUsers.push(obj)
    })
    res.send(allUsers)
}

const getAllUsers = async (req,res) =>{
    const users= await User.find();
    res.json(users);
}

const signUp= async (req,res) =>{
    const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const result= await user.save();
    res.json(result)
}

module.exports= {getAllUsers, index, getUserApi, signUp}