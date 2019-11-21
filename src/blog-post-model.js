let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let foundDogSchema = mongoose.Schema({
    breed : {type : String, required : true},
    picture : {type : String},
    color : {type : String},
    foundOn : {type : String},
    comments : {type : String}
});

let FoundDog = mongoose.model('Found-dog', foundDogSchema);

let FoundDogList = {
    get : function(){
		return FoundDog.find()
				.then( blogs => {
					return blogs;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newBlog){
        return FoundDog.create(newBlog)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return FoundDog.updateOne(filer, updatedInfo)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return FoundDog.deleteOne(filter)
            .then( blog => {
                return blog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { FoundDogList };