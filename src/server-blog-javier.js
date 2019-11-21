let express = require ('express');
let session = require('express-session')
let morgan = require ('morgan');
let mongoose = require('mongoose');
let uuid = require("uuid4");

let app = express();
let bodyParser = require( "body-parser" );
let jsonParser = bodyParser.json();

let {FoundDogList} = require('./found-dogs-model');
let {LostDogList} = require('./lost-dogs-model');
let {SeenDogList} = require('./seen-dogs-model');
let {UserList} = require('./users-model');
let {DATABASE_URL, PORT} = require('./config');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
app.use( morgan( 'dev' ) );

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get( '/found-dogs/:id', ( req, res, next ) => {
    let id = req.params.id;
    if (id = 'noFilter'){
        FoundDogList.get()
		.then( foundDogs => {
			return res.status( 200 ).json( foundDogs );
		})
		.catch( error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status( 500 ).json({
				status : 500,
				message : "Something went wrong with the DB. Try again later."
			})
		});
    }
    else{
        console.log('else');
    }
});

app.get( '/lost-dogs/:id', ( req, res, next ) => {
    let id = req.params.id;
    if(id = 'noFilter'){
        LostDogList.get()
		.then( lostDogs => {
			return res.status( 200 ).json( lostDogs );
		})
		.catch( error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status( 500 ).json({
				status : 500,
				message : "Something went wrong with the DB. Try again later."
			})
		});
    }
    else{
        console.log('else');
    }
});

app.get( '/seen-dogs/:id', ( req, res, next ) => {
    let id = req.params.id;
    if(id = 'noFilter'){
        SeenDogList.get()
		.then( seenDogs => {
			return res.status( 200 ).json( seenDogs );
		})
		.catch( error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status( 500 ).json({
				status : 500,
				message : "Something went wrong with the DB. Try again later."
			})
		});
    }
    else{
        console.log('else');
    }
});

app.get( '/users/:id', ( req, res, next ) => {
    let user = req.params.id;
    UserList.get({ id : user })
    .then( users => {
        return res.status( 200 ).json( users );
    })
    .catch( error => {
        res.statusMessage = "Something went wrong with the DB. Try again later.";
        return res.status( 500 ).json({
            status : 500,
            message : "Something went wrong with the DB. Try again later."
        })
    });
});

app.post('/found-dogs', jsonParser, (req, res, next) => {
    let image = req.body.image;
    let breed = req.body.breed;
    let color = req.body.color;
    let date = req.body.date;
    let comments = req.body.comments;
    let address = req.body.address;
    let zipCode = req.body.zipCode;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;

    if(!image){
        res.statusMessage = "Missing field in body";
        return res.status(406).json({
            message: "Missing field in body",
            status: 406
        });
    }

     let newBlog = {
        image: image,
        breed: breed,
        color: color,
        date: date,
        comments: comments,
        address: address,
        zipCode: zipCode,
        city: city,
        state: state,
        country: country
     };

     FoundDogList.post(newBlog)
        .then(blog => {
            res.status(201).json(blog);
        })
        .catch(err => {
            res.statusMessage = "Something went wrong with the data base";
            return res.status(500).json({
                "error" : "Something went wrong with the data base",
                "status" : 500
            });
        });
});

app.post('/lost-dogs', jsonParser, (req, res, next) => {
    let image = req.body.image;
    let name = req.body.name;
    let breed = req.body.breed;
    let color = req.body.color;
    let date = req.body.date;
    let reward = req.body.reward;
    let comments = req.body.comments;
    let address = req.body.address;
    let zipCode = req.body.zipCode;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;

    if(!image){
        res.statusMessage = "Missing field in body";
        return res.status(406).json({
            message: "Missing field in body",
            status: 406
        });
    }

     let newBlog = {
        image: image,
        name: name,
        breed: breed,
        color: color,
        date: date,
        reward: reward,
        comments: comments,
        address: address,
        zipCode: zipCode,
        city: city,
        state: state,
        country: country
     };

     LostDogList.post(newBlog)
        .then(blog => {
            res.status(201).json(blog);
        })
        .catch(err => {
            res.statusMessage = "Something went wrong with the data base";
            return res.status(500).json({
                "error" : "Something went wrong with the data base",
                "status" : 500
            });
        });
});

app.post('/seen-dogs', jsonParser, (req, res, next) => {
    let image = req.body.image;
    let breed = req.body.breed;
    let color = req.body.color;
    let date = req.body.date;
    let comments = req.body.comments;
    let address = req.body.address;
    let zipCode = req.body.zipCode;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;

    if(!image){
        res.statusMessage = "Missing field in body";
        return res.status(406).json({
            message: "Missing field in body",
            status: 406
        });
    }

     let newBlog = {
        image: image,
        breed: breed,
        color: color,
        date: date,
        comments: comments,
        address: address,
        zipCode: zipCode,
        city: city,
        state: state,
        country: country
     };

     SeenDogList.post(newBlog)
        .then(blog => {
            res.status(201).json(blog);
        })
        .catch(err => {
            res.statusMessage = "Something went wrong with the data base";
            return res.status(500).json({
                "error" : "Something went wrong with the data base",
                "status" : 500
            });
        });
});

app.post('/users', jsonParser, (req, res, next) => {
    let userName = req.body.userName;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;
    let address = req.body.address;
    let zipCode = req.body.zipCode;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;

     let newBlog = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        address: address,
        zipCode: zipCode,
        city: city,
        state: state,
        country: country
     };

     UserList.post(newBlog)
        .then(blog => {
            res.status(201).json(blog);
        })
        .catch(err => {
            res.statusMessage = "Something went wrong with the data base";
            return res.status(500).json({
                "error" : "Something went wrong with the data base",
                "status" : 500
            });
        });
});

app.put('/found-dogs/:id', jsonParser, (req, res, next) => {
    let filterID = req.params.id;
    if(!filterID || !req.body){
        res.statusMessage = "Missing field id";
        return res.status(406).json({
           "error" : "Missing id",
           "status" : 406
       });
    }
    FoundDogList.put({ id : filterID }, req.body)
       .then(blog => {
           res.status(201).json(blog);
       })
       .catch(err => {
           res.statusMessage = "Missing field in body";
           return res.status(500).json({
               "error" : "Something went wrong with the data base",
               "status" : 500
           });
       });
});

app.delete('/found-dogs/:id', (req, res) => {
    let filterID = req.params.id;
    console.log(filterID)
    if(!filterID){
        res.statusMessage = "Missing field id";
        return res.status(406).json({
           "error" : "Missing id",
           "status" : 406
       });
    }
    FoundDogList.delete({ id : filterID })
       .then(blog => {
           res.status(201).json(blog);
       })
       .catch(err => {
           res.statusMessage = "Something went wrong with the data base";
           return res.status(500).json({
               "error" : "Something went wrong with the data base",
               "status" : 500
           });
       });
});


let server;

function runServer(port, databaseUrl){
    return new Promise( (resolve, reject ) => {
    mongoose.connect(databaseUrl, response => {
    if ( response ){
    return reject(response);
    }
    else{
    server = app.listen(port, () => {
    console.log( "App is running on port " + port );
    resolve();
    })
    .on( 'error', err => {
    mongoose.disconnect();
    return reject(err);
    })
    }
    });
    });
}
   
function closeServer(){
    return mongoose.disconnect()
            .then(() => {
return new Promise((resolve, reject) => {
console.log('Closing the server');
server.close( err => {
if (err){
    return reject(err);
    }
    else{
    resolve();
    }
    });
    });
    });
   }
   
runServer( PORT, DATABASE_URL )
    .catch( err => {
    console.log( err );
});
   
module.exports = { app, runServer, closeServer };