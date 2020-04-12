//add focus to the first input on load
document.getElementById('name').focus();

//hide other option with JS
const otherTitle = document.getElementById('other-title');
otherTitle.style.display = "none";

//hide the select theme option  //what they want???
const design = document.getElementById('design');
design.firstElementChild.style.display = 'none'

//update color to select theme
const color = document.getElementById('color');
const addOption = document.createElement('option');
addOption.textContent = "Please Select a Tshirt Theme";
color.insertBefore(addOption,color.childNodes[0])
//lets select theme display first 
addOption.selected = true;

//hide colors
for(let i =0; i<color.children.length; i++) {
    if(i !== 0)
    color.children[i].style.display = 'none';
}

//event listener for button to display correct color options
design.addEventListener('change', (event) => {
    if(event.target.value === "js puns"){
        for(let i =0; i<color.children.length; i++) {
            if(i === 1 || i=== 2 || i===3) {
            color.children[1].selected = true;
            color.children[i].style.display = 'block'; 
        }   else {
            color.children[i].style.display = 'none';
        }
    }
    
    } else if (event.target.value === 'heart js') { 
        for(let i =0; i<color.children.length; i++) 
            if(i === 4 || i=== 5 || i===6) {
            color.children[4].selected = true;
            color.children[i].style.display = 'block';
         }  else {
            color.children[i].style.display = 'none';
         }
    }

});


//activites section
const activities = document.querySelector('.activities');
let totalCost = 0;
const costElement = document.createElement('p');
costElement.textContent = `Total of your activities: ${totalCost}`;
activities.appendChild(costElement);

//checkbox event handlers
activities.addEventListener('change', (event) => {
    

});



