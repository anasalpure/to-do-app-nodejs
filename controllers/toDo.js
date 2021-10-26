const knex = require("../tools/knex");


exports.add = async (req,res,next)=>{
    
    const authUserId = req.user.id;

    //validation

    knex('todos')
    .insert({
        'user_id' : authUserId,
        'name' : req.body.name,
        'is_complated' : false,
    })
    .then((id)=>{
        return res.status(200).json(`New item has created[${id}]`);
    })
    .catch(err=>{
        return res.status(500).json();
    }); 
}

exports.update = async (req,res,next)=>{
    
    //validation

    const authUserId = req.user.id;

    knex('todos')
    .where('id' , req.params.id)
    .where('user_id' , authUserId)
    .update({
       name : req.body.name,
       is_complated : req.body.is_complated,
    })
    .then((done)=>{
        if(done)
            return res.status(200).json(`item has updated`);
        else
            return res.status(404).json(`not found`);
    })
    .catch(err=>{
       return res.status(500).json();
    }); 
}


exports.show = async (req,res,next)=>{
   
   const authUserId = req.user.id;
    
   knex('todos')
   .where('id' , req.params.id)
   .where('user_id' , authUserId)
   .first()
   .then((todo)=>{
       if (todo) {
            return res.status(200).json(todo); 
       }
       return res.status(404).json();
   })
   .catch(err=>{
       return res.status(500).json();
   }); 
}


exports.delete = async (req,res,next)=>{
     
    const authUserId = req.user.id;

    knex('todos')
    .where('id' , req.params.id)
    .where('user_id' , authUserId)
    .delete()
    .then(() => {
        return res.status(200).json("Item deleted successfully!" );
    })
    .catch(err => {
        return res.status(500).json();
    }); 
 
}

exports.index = async (req,res,next)=>{

    const authUserId = req.user.id;
     
    knex('todos')
    .where('user_id' , authUserId)
    .then((todos)=>{
        if (todos) {
             return res.status(200).json(todos); 
        }
        return res.status(200).json({});
    })
    .catch(err=>{
        return res.status(500).json();
    }); 
}
