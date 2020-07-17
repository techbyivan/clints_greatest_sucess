const express = require("express");
const app = express();
const port = 3445;
const db = require("./db");

const allowedQueries = ['names-only'];

app.get("/", (req,res)=>{
    res.json({
        "title":"Animals List",
        "version":"0.1",
        "instructions":`/animals = lists animals. \n /animals/{animal-type} = list animal types \n /animals/{id} = get animal by id`
    })
})

app.get("/animals", (req,res)=>{
    let keys = Object.keys(req.query);
    let filterBy = [...Object
        .keys(req.query)
        .filter(q=>!allowedQueries.includes(q))]
    
    console.log(filterBy)
    filtersBy.forEach(item=>{})

    if(keys.length === 0) return res.json(db.animals); 
    res.json(db.filterBy(req.query));
    
})

app.get("/animals/:id", (req,res)=>res.json(db.getAnimal(req.params.id)))

app.get("/animals/cats", (req,res)=>res.json(db.findBy("type", "cat")))
app.get("/animals/dogs", (req,res)=>res.json(db.findBy("type", "dog")))

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})