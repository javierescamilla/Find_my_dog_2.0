let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let seenDogSchema = mongoose.Schema({
    name : {type : String, required : true},
    breed : {type : String},
    picture : {type : String},
    lastSeen : {type : String},
    reward : {type : String},
    comments : {type : String}
});

let SeenDog = mongoose.model('Seen-dog', seenDogSchema);

let SeenDogList = {
    get : function(){
		return SeenDog.find()
				.then( blogs => {
					return blogs;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newBlog){
        return SeenDog.create(newBlog)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return SeenDog.updateOne(filer, updatedInfo)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return SeenDog.deleteOne(filter)
            .then( blog => {
                return blog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { SeenDogList };