//var declaration
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var uuidv4 = require('uuid/v4');
var config = require('./../config.js');

//create connection
mongoose.connect(config.urlDB, function(err) {
    if (err) { throw err; } else {
        console.log('Task : mongo connected');
    }
});

//Declare schemaTASK
var TaskSchema = Schema({
    _id: String,
    _userid: String,
    name: String,
    done: Boolean
});

//Init model
var TaskModel = mongoose.model('tasks', TaskSchema);

module.exports = {
   
    getTaskSet: function(user, cb) {
        TaskModel.find({_userid:user.id}, function (err, taskSet) {
            if (err) throw err;
            else cb(taskSet);
        });
    },

    addTask: function (taskName, user, cb) {
        
        var maTask = new TaskModel ({
            _id : uuidv4(),
            _userid: user.id,
            name: taskName,
            done: false
        });

        maTask.save(function(err) {
            if (err) {
                throw err;
            } else {
                cb();
            }
        });
    },

    removeTask : function (id, cb) {
        TaskModel.findById(id, function(err, task) {
            if (err) {
                throw err;
            } else {
                if (task != null) {
                    TaskModel.findByIdAndRemove(id, function(err, todo) {
                        if (err) {
                            throw err;
                        } else {
                            cb();
                        }
                    });
                } 
            }
        });
    },

    updateTask : function(task, cb) {
        
        TaskModel.findByIdAndUpdate(task._id, task, function (err, todo) {
        
            if (err) {
                console.log("err");
                throw err;
            } else  {
                console.log ("ok");
                cb();
            }
        });
    }
};