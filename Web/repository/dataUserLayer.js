//Pré-requis
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var uuidv4 = require('uuid/v4');
var config = require('./../config.js');

//crée notre connection à la base de données
mongoose.connect(config.urlDB, function(err) {
    if (err) { throw err; } else {
        console.log('User : mongo connected');
    }
});

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true // Suppression des espaces inutiles
  },
  passwordConf: {
    type: String,
    required: true
  },
  _userId: {
    type: String,
    required:true
  }
});

//hook permettant de hasher le mot de passe
//activé avant la sauvegarde d'un utilisateur
//avec le schéma UserSchéma
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 8, function (err, hash) {
    if (err) {
      throw err;
    }
    user.password = hash;
    next();
  })
});

//UserSchema.statics.authenticate = 

var UserModel = mongoose.model('User', UserSchema);


module.exports = {

  register: function(infos, cb) {
    var userData =  new UserModel ({
      username: infos.username,
      password: infos.password,
      passwordConf: infos.passwordConf, 
      _userId: uuidv4()
    });

    userData.save(function(err) {
      if (err) {
          throw err;
      } else {
          cb();
      }
    });
  },

  authenticate : function (username, password, callback) {
    UserModel.findOne({ username : username })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('L\'utilisateur n\'existe pas');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  },

  checkForExistingUser : function(username, cb) { 
    UserModel.find({username:username}, function(err, resp) {
      if (err) throw err;
      cb(resp);
    })
  }
};