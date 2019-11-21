let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let lostDogSchema = mongoose.Schema({
    image : {type : String},
    name : {type : String},
    breed : {type : String},
    color : {type : String},
    date : {type : String},
    reward : {type : String},
    comments : {type : String},
    address : {type : String},
    zipCode : {type : String},
    city : {type : String},
    state : {type : String},
    country : {type : String}
});

let LostDog = mongoose.model('Lost-dog', lostDogSchema);

let LostDogList = {
    get : function(){
		return LostDog.find()
				.then( blogs => {
					return blogs;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newBlog){
        return LostDog.create(newBlog)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return LostDog.updateOne(filer, updatedInfo)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return LostDog.deleteOne(filter)
            .then( blog => {
                return blog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { LostDogList };