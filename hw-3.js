// 6a

const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

let result = [];

for (let i = 0; i < cats.length; i++) {
    if (cats[i].adoptionStatus == 'available') {
        result.push(cats[i].name);
    }
}

// 6b

const sentence = result.join(' and ');
//console.log(sentence);

// 7  

const randomValue = Math.random() * 10;
const ternaryValue = randomValue > 5 ? 'greater than five!' : 'less than five!';

// 8 

const cat = {name:"Pinecone", age:13, type:'Munchkin', cuteness: 9001};

for(const property in cat) {
    console.log(property)
    console.log(cat[property])
  }
  

// 9 

if (1 === '1') {
    console.log('true');
}

if (1 === '1') {
    console.log('false');
}

// 10 

newCats = cats.map(callBack);

function callBack (cat) {
    return cat.name.concat(' is cute!');
}

//console.log(newCats);

