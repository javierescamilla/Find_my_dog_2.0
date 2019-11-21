let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
    userName : {type : String},
    firstName : {type : String},
    lastName : {type : String},
    email : {type : String},
    password : {type : String},
    address : {type : String},
    zipCode : {type : String},
    city : {type : String},
    state : {type : String},
    country : {type : String}
});

let Uservar = mongoose.model('User', userSchema);

let UserList = {
    get : function(filter){
		return Uservar.findOne(filter)
				.then( blog => {
					return blog;
				})
				.catch( error => {
					throw Error( error );
				});
	},
    post : function(newBlog){
        return Uservar.create(newBlog)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    put : function(filer, updatedInfo){
        return Uservar.updateOne(filer, updatedInfo)
                .then( blog => {
                    return blog;
                })
                .catch( err=> {
                    throw Error(err);   
                });
    },
    delete :  function(filter){
        return Uservar.deleteOne(filter)
            .then( blog => {
                return blog;
            })
            .catch( err=> {
                throw Error(err);   
            });
    }
}

module.exports = { UserList };