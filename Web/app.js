
/*
######################################
### Configuration & Initialisation ###
######################################
*/

path = require ('path')
var express = require ('express');
var bodyparser = require ('body-parser');
var jwt = require('jsonwebtoken');
var uuidv4 = require('uuid/v4');

var dataTaskLayer = require('./repository/dataTaskLayer.js');
var dataUserLayer = require('./repository/dataUserLayer.js');
var config = require('./config.js')

var app = express();
var port = config.port;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

//autorise l'acces au public directory
app.use(express.static(path.join(__dirname, 'public')));

//Haeders pour l'application Ionic
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100'); //ici être plus restrictif, genre le lien de l'app mobile
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

/*
#####################################
### Partie réservée à la todoList ###
#####################################
*/
app.post('/getTaskSet', function(req, res){
    if (!req.body.token) {
        res.send({
            success: false,
            errorSet: ['Token_Inexistant']
        });
    } else {
        jwt.verify(req.body.token, config.secret, function(err, out) {
            if (err) {
                res.send({
                    success: false,
                    errorSet: ['Probleme_Token']
                });
            } else {
                dataTaskLayer.getTaskSet(out, function(taskSet){
                    var obj = {
                        success: true,
                        taskSet: taskSet
                    };
                    res.send(obj);
                });
            }
        })
    }
});

app.post('/removeTask', function (req, res) {
    if (!req.body._id) {
        res.send( {
            success:false,
            errorSet: ['No_ID']
        });
    } else {
        dataTaskLayer.removeTask(req.body._id, function() {
            res.send({success:true});
        });
    }
});

app.post('/addTask', function (req, res) {

    if (!req.body.taskName) {
        res.send({success: false, errorSet: ['TaskName_Empty']});
    } else if (!req.body.token) {
        res.send({success: false, errorSet: ['Token_Empty']});
    } else {
        
        jwt.verify(req.body.token, config.secret, function (err, out) {
            if (err) {
                res.send({success: false, errorSet: ['Token_Invalide']});
            } else {

                dataTaskLayer.addTask(req.body.taskName, out, function () {
                    res.send({success : true});
                });
            }
        });
    }
});

app.post('/updateTask', function(req, res) {
    if (!req.body.name && !req.body._id && req.body.done != null) {
        res.send (
            {
            success : false,
            errorSet: ['One_Field_IS_EMPTY']
        });
    } else {
        var task = {
            _id : req.body._id,
            name: req.body.name,
            done: req.body.done
        };
        dataTaskLayer.updateTask(task, function() {
            res.send({success: true});
        });
    }
});
/*
################################################
### Partie réservée à la gestion des comptes ###
################################################
*/

//Renvoie la page d'accueil
app.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '/public/index.html'))
});

//Enregistrement de l'utilisateur
app.post('/register', function (req, res) {
    if (req.body.username && req.body.password && req.body.passwordConf) {
        dataUserLayer.checkForExistingUser(req.body.username, function(resp) {
            if (resp.length > 0) {
                res.send({
                    success:false,
                    errorSet: ['User_already_exist']
                });
            } else {
                dataUserLayer.register(req.body, function (err, user) {
                    if (err) {
                      res.send({
                          success:false,
                          errorSet: [err]
                      });
                    } else {
                      res.send({success : true});
                    }
                });
            }
        });
        
    } else {
        res.send( {
            success:false,
            errorSet: ['All_field_required']
        });
    }
});

//Connection de l'utilisateur
app.post('/login', function (req, res) {
    if (req.body.username && req.body.password) {

        dataUserLayer.authenticate(req.body.username, req.body.password, function (error, user) {
                if (error || !user) {
                    res.send( {
                        success:false,
                        errorSet: ['Error_or_User_do_not_exist']
                    });
                } else {
                    
                    const payload = {
                        id: user._userId,
                        user: {
                            username: user.username
                        }
                    };

                    var token = jwt.sign(payload, config.secret, {
                        expiresIn : "1 days"
                    });
                    
                    var obj = {
                        success : true,
                        token: token,
                        user: payload.user
                    }

                    res.send(obj);
                }
        });
    } else {
        res.send( {
            success:false,
            errorSet: ['All_field_required']
        });
    }
});

//Deconnection de l'utilisateur
app.get('/logout', function(req, res, next) {
    if (req.session) {
      // destruction des infos de session
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
            res.send({success : true});
        }
      });
    }
});


console.log('serveur demarre port : '+port);

app.listen(port);