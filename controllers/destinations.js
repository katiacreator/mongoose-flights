import { Destination } from "../models/destination.js";

export { newDestination as new, create };

function create(req,res){
  if(!Destination.exists(req.body)){
    Destination.create(req.body)
             .then(destination=>{
              res.redirect('/destinations/new')
             })
             .catch(err => {
              console.log(err)
              res.redirect("/")
            })
  }else{
    Destination.find({})
    .then(destinations=>{
     res.render('destinations/new', {
       title: 'Add Destinations',
       destinations,
     })
   })
   .catch(err => {
    console.log(err)
    res.redirect("/")
  })
  }
}

function newDestination(req, res) {
  Destination.find({})
    .then((destinations) => {
      res.render("destinations/new", {
        title: "Add Destination",
        destinations,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}
