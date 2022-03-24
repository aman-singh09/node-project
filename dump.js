//user object
const users =[
    {userId: 1, name: 'Rakesh', placesArray: [1,3,5]},
    {userId: 2, name: 'John', placesArray: [6,7]},
    {userId: 3, name: 'Sam', placesArray: [2,4]},
]

//places object
const places =[
    {placeId: 1, placeName: 'Bangalore'},
    {placeId: 2, placeName: 'Delhi'},
    {placeId: 3, placeName: 'Mumbai'},
    {placeId: 4, placeName: 'Pune'},
    {placeId: 5, placeName: 'Kolkata'},
    {placeId: 6, placeName: 'Vizag'},
    {placeId: 7, placeName: 'Goa'}
]


app.get('/',(req,res)=>{
    res.send('Welcome to our App!')
})

app.get('/getplaces',(req,res)=>{
    res.json(places);
})

app.get('/getUsers',(req,res)=>{
    res.json(users);
});

app.post('/signup', (req,res) => {
    console.log(req.body.email);
    res.send("Thanks for sending")
});

//api to fetch places for a specific user
app.get('/api/places/:id',(req,res) =>{
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
    })

function temp(placeIds) {
    const name= [];
    placeIds.forEach(placeId => {
        const { placeName } = places.find(place => place.placeId === placeId);
        name.push(placeName);
    });
    return name;
}

// api to fetch all the users with their places:
app.get('/api/allUsers/',(req,res) =>{
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

})

// delete a place without Auth
app.delete('/api/deletePlace/:id',(req,res) =>{
    placeId= Number(req.params.id)
    let updatedplaces = places.filter(place =>{
        return place.placeId !== placeId
    })
    res.send(updatedplaces)
})

app.put('api/addPlaces/',(req,res) =>{
    const newPlace={
        id: places.length+1,
        placeName: req.body.placeName
    }
    places.push(newPlace)
    send.res(places)
})