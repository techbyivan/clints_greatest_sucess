const express = require("express");
const app = express();
const port = 3445;
const db = require("./db");

const allowedQueries = ['names-only'];

app.use(express.static('site'));

app.get("/animals", (req,res)=>{
    
    let filtersBy = {...req.query};
    allowedQueries.forEach(a=>delete filtersBy[a]);
    
    let animals = [];
    if(filtersBy === 0) {
        animals = db.animals; 
    } else {        
        animals = db.filterBy(filtersBy);
    }

    if(req.query['names-only']){
        animals = animals.map(a=>a.name)
    }
    res.json(animals)
})

//theses must be first
app.get("/animals/cats", (req,res)=>res.json(db.findBy("type", "cat")))
app.get("/animals/dogs", (req,res)=>res.json(db.findBy("type", "dog")))

//because if not.. it assumes cats and dogs are the ids
app.get("/animals/:id", (req,res)=>res.json(db.getAnimal(req.params.id)))



app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})