// Question 6 
window.addEventListener('click', function(e) {

    const unorderedList = document.querySelectorAll('#ul-list')


    unorderedList.forEach(list => {
    list.addEventListener('click', function(e) {
        unorderedList.forEach(li => li.style.color = 'blue');
    });
    });

});

// Question 7 

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

window.addEventListener('load', function () {
        for (let i = 0; i < cats.length; i++) {
            const newCat = document.createElement('li');
            newCat.appendChild(document.createTextNode(cats[i].name));
            document.getElementById('cats-list').appendChild(newCat);
        }
});

//Question 8, 9, 10 

window.addEventListener('load', function(e) {

    const buttonElement = document.getElementById('submit-button')
    const errorMsgDiv = this.document.getElementById('error-message')

    buttonElement.addEventListener('click', function(e) {

        e.preventDefault();
        const userInput = document.getElementById("user-text").value;
        console.log(userInput);

        let errorMsg = "";
        if (userInput == "") {
            errorMsg = "Please Provide a Value";
            errorMsgDiv.style.display = "block";
            errorMsgDiv.style.background = "red";
            errorMsgDiv.textContent = errorMsg;
        } 

        if (userInput != "") {
            errorMsg = "Sucess";
            errorMsgDiv.style.display = "block";
            errorMsgDiv.style.background = "green";
            errorMsgDiv.textContent = errorMsg;
        }




    });

});
