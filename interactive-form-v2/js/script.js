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
    const button = event.target; 
    const cost = parseInt(button.getAttribute("data-cost"));
    const activity = button.getAttribute("data-day-and-time");
    const selected = document.querySelectorAll(".activities input")
        if(button.checked){
            totalCost+=cost;
            costElement.textContent = `Total of your activities: ${totalCost}`;
        }
        else {
            totalCost-=cost;
            costElement.textContent = `Total of your activities: ${totalCost}`;
}
    //disable conflicting time slots 
    for(let i = 1; i<selected.length; i++) {
        const calender = selected[i].getAttribute('data-day-and-time');
        if(calender === activity && button !==selected[i]) {
            if(button.checked) {
                selected[i].disabled = true;
                selected[i].parentElement.syle.color = "dark-grey";
            }
            else {
                selected[i].disabled = false;
                selected.parentElement.style.color = "inherit";
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
const userName = document.getElementById('');
const emailInput = document.getElementById('');
const activityInput = document.getElementById('');
const userCC = document.getElementById('');
const zipInput = document.getElementById('');

//validate with Reg Expressions
function validateName(name) {
    return / /.test(name);

}

function validateEmail(email) {
    return /    /.test(email);
}

function validateActivity(activityy) {
    return /    /.test(activityy);
}

function validateCC(creditCard) {
    return / /.test(creditCard);
}

function validateZip(zip) {
    return / /.test(zip)
}

//Show tip when not filled out
function showOrHideTip(show, element) {
    //show element when true hide when false
    if(show) {
        element.style.display = "inherit"
    } else{
        element.style.display = "none";
    }


}

//add a tool tip function to use for the differnet inputs
function createListener(validator) {
    return e => {
        const text = e.target.value;
        const valid = validator(text);
        const showTip = e.target.nextElementSibling;
        showOrHideTip(showTip, tooltip);
    };
}

userName.addEventListener("input", createListener(validateName));
emailInput.addEventListener('input', createListener(validateEmail));
activityInput.addEventListener('input', createListener(validateActivity));
userCC.addEventListener("input", createListener(validateCC));
zipInput.addEventListener("input", createListener(validateZip));

