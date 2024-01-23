const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async (req, res)=>{
    const toDos = await ToDoModel.find()
    res.send(toDos)
};


module.exports.saveToDos = (req, res)=>{
    const { toDo } = req.body

    ToDoModel.create({ toDo })
    .then(data =>{
        console.log("Saved Successfully...");
        res.status(201).send(data)
    })
    .catch((err)=> {console.log(err)
        res.send({error: err, msg: "Something went wrong!"});
    });
};

module.exports.updateToDos = (req, res)=>{
    const {id} = req.params
    const { toDo } = req.body

    ToDoModel.findByIdAndUpdate(id , {toDo}).then(data =>{
        res.send("Update Successfully...")
    })
    .catch((err)=> {console.log(err)
        res.send({error: err, msg: "Something went wrong!"});
    });
};

module.exports.deleteToDos = (req, res)=>{
    const {id} = req.params

    ToDoModel.findByIdAndDelete(id).then(() =>{
        res.send("Delete Successfully...")
    })
    .catch((err)=> {console.log(err)
        res.send({error: err, msg: "Something went wrong!"});
    });
};