const axios = require("axios");

exports.homeRoutes= (req,res)=>{
    //make get request to axios library
    axios.get(`${process.env.BASE_URL}:80/api/users`)
        .then( function(response){
            res.status(200).render('index',{users : response.data});
        })
        .catch(err => res.send(err))
}

exports.add_userRoutes= (req,res)=>{
    res.status(200).render('add-user');
}

exports.update_userRoutes= (req,res)=>{
    axios.get(`${process.env.BASE_URL}:80/api/users`,{params:{id: req.query.id}})
        .then(function(userdata){
            res.render("update-user",{user : userdata.data})
        })
        .catch(err =>{
            res.send(err)
        })
}