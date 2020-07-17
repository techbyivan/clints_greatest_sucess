const animals = [
    {
        id: 1,
        name: "Rainbow",
        age: 3,
        color: 'white',
        type: "cat"
    },
    {
        id: 2,
        name: "Shadow",
        age: 2,
        color: 'brown',
        type: "cat"
    },
    {
        id: 3,
        name: "puddles",
        age: 4,
        color: 'brown',
        type: "cat"
    },
    {
        id: 4,
        name: "Sir Barks Alot",
        age: 5,
        color: 'black',
        type: "dog"
    },
    {
        id: 5,
        name: "Daisy",
        age: 6,
        color: 'Yellow',
        type: "dog"
    },
    {
        id: 6,
        name: "Molly",
        age: 4,
        color: 'white',
        type: "dog"
    }
];

const filterBy = (filters) => {
    return animals.filter(animal=>{
        for(attrib in filters){
            if(animal[attrib] != filters[attrib]){ 
                return false;
            }
        }
        return true;
    })
}

const findBy = (attribute,value)=>{
    return animals.filter(animal=>{
        if(typeof(animal[attribute]) === 'number'){
            return animal[attribute] === parseInt(value)
        } 
        
        if(typeof(animal[attribute]) === 'string') {
            return animal[attribute].toLowerCase() === value.toLowerCase()
        }
        
        return attribute[attribute] === value;
    })
}

const getAnimal = (id)=>animals.find(animal=>animal.id === parseInt(id))

module.exports = {
    animals,
    findBy,
    getAnimal,
    filterBy
};