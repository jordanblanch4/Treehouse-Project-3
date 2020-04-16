//add focus to the first input on load
document.getElementById('name').focus();

//hide other option with JS
const otherTitle = document.getElementById('other-title');
otherTitle.hidden = true;
const title = document.getElementById('title');
title.addEventListener('change', (e) => {
    if(e.target.value === "other") {
    otherTitle.hidden = false;
    
} else {
    otherTitle.hidden = true;
}

});

//hide the select theme option 
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
costElement.textContent = `Total cost of your activities: $${totalCost}`;
activities.appendChild(costElement);

//checkbox event handlers
activities.addEventListener('change', (event) => {
    const button = event.target; 
    const cost = parseInt(button.getAttribute("data-cost"));
    const activity = button.getAttribute("data-day-and-time");
    const selected = document.querySelectorAll(".activities input")
        if(button.checked){
            totalCost+=cost;
            costElement.textContent = `Total cost of your activities: $${totalCost}`;
        }
        else {
            totalCost-=cost;
            costElement.textContent = `Total cost of your activities: $${totalCost}`;
}
    //disable conflicting time slots 
    for(let i = 0; i<selected.length; i++) {
        const calender = selected[i].getAttribute('data-day-and-time');
        if(calender === activity && button !==selected[i]) {
            if(button.checked) {
                selected[i].disabled = true;
                selected[i].parentElement.style.color = "red";
            }
            else {
                selected[i].disabled = false;
                selected[i].parentElement.style.color = "inherit";
            }
        }

    }
});

const paymentSelect = document.getElementById('payment').firstElementChild;
paymentSelect.style.display = 'none';
let payType = document.getElementById('payment');
let CC = document.getElementById('credit-card');

let payPal = document.getElementById('paypal');
payPal.style.display = 'none';

let bitCoin = document.getElementById('bitcoin');
bitCoin.style.display = 'none';

payType.addEventListener('change', (event) => {
 if(payType.value === 'credit card') {
    CC.style.display = 'block';
    bitCoin.style.display = 'none';
    payPal.style.display = 'none';
} else if(payType.value === 'paypal') {
    payPal.style.display = 'block';
    CC.style.display = 'none';
    bitCoin.style.display = 'none';
} else {
    bitCoin.style.display = 'block';
    CC.style.display = 'none';
    payPal.style.display = 'none';
}
});

//define elements to validate 
const userName = document.getElementById('name');
const emailInput = document.getElementById('mail');
const activityInput = document.getElementById('');
const userCC = document.getElementById('payment'); //FIXME
const zipInput = document.getElementById('zip');

//validate with Reg Expressions
function validateName(name) {
    return /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);

}

function validateEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

//check if any checkboxes selected
// function validateActivity() {
//     for(let i=0; i<activityInput.length; i++)
//         if(activities.checkbox === checked){
//             return true;
//          } else{
//             return false;
// }    
// }

function validateCC(creditCard) {
    return /^\d{4}-?\d{4}-?\d{4}-?\d{4}|\d{3}-?\d{3}-?\d{3}-?\d{3}$/.test(creditCard);
}

function validateZip(zip) {
    return /^\d{5}$/.test(zip)
}

//Show tip when not filled out
function showOrHideTip(show, element) {
    //show element when true hide when false
    if(show) {
        element.style.borderColor = 'red'; //create style for tool tip
        element.textContent = "Please provide a valid name";
        element.style.color = 'red'
    } else{
        element.style.display = "none"; //create style for good
    }


}

//add a tool tip function to use for the differnet inputs
function createListener(validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = text!= " " && !valid;
        const toolTip = e.target.nextElementSibling;
        showOrHideTip(showTip, toolTip);
    };
}

userName.addEventListener("input", createListener(validateName));
emailInput.addEventListener('input', createListener(validateEmail));
//userCC.addEventListener("input", createListener(validateCC));
zipInput.addEventListener("input", createListener(validateZip));

