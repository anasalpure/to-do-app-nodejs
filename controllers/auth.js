const knex = require("../tools/knex");
const bcrypt = require("bcryptjs")

exports.login = async (req,res,next)=>{
    
  //you must add a check for hasTooManyLoginAttempts

  //validation

  knex('users')
    .where('email',req.body.email)
    .first()
    .then((user)=>{
      if(!user) 
        return res.status(401).json({message : "fail 1"});
      const matched = bcrypt.compareSync(req.body.password, user.password);
      if(matched)
        return res.status(200).json({
          access_token : user.token
        });
        
      return res.status(401).json({message : "fail 2"});
  })
  .catch(err=>{
      return res.status(500).json(err);
  });  
  
}

