let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let foundDogSchema = mongoose.Schema({
    breed : {type : String, required : true},
    picture : {type : String},
    color : {type : String},
    foundOn : {type : String},
    comments : {type : String}
});

let FoundDog = mongoose.model('FoundDog', foundDogSchema);

let BlogList = {
    get : function(){
		return FoundDog.find()
				.then( foundDogs => {
					return foundDogs;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newFoundDog){
        return FoundDog.create(newFoundDog)
                .then( foundDog => {
                    return foundDog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return FoundDog.updateOne(filer, updatedInfo)
                .then( foundDog => {
                    return foundDog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return FoundDog.deleteOne(filter)
            .then( foundDog => {
                return foundDog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { BlogList };