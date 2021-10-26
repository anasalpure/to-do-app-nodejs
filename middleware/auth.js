const knex = require("../tools/knex");

const AuthenticateMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        knex('users')
        .where('token',token)
        .first()
        .then((user)=>{
            if(user) {
                req.user = user;
                next();
            }
            else{
                return res.sendStatus(403);
            }
        })
        .catch(err=>{
            return res.sendStatus(403);
        }); 

    } else {
        return res.sendStatus(401);
    }
};


module.exports = AuthenticateMiddleware;