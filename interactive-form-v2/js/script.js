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
paymentSelect.remove();
paymentSelect.disabled = true;
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
const userCC = document.getElementById('payment'); 
const zipInput = document.getElementById('zip');
const checkBoxes = activities.querySelectorAll('input[type ="checkbox"]')
const legendary = document.querySelectorAll('legend');
const creditCard1 = document.getElementById('credit-card');
const creditChild = creditCard1.children;
const ccNum = document.getElementById('cc-num');
const cVv = document.getElementById('cvv');
const proTip = document.getElementsByClassName('proTip');
const proTipcc = document.getElementsByClassName('proTipcc')
let CCTrue = true;
const form = document.querySelector('form');
//validate with Reg Expressions
function validateName(name) {
    return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
    

}

function validateEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+/.test(email);
}


function validateCC(creditCard) {
    return /^[0-9]{13,16}$/.test(creditCard);
}

function validateZip(zip) {
    return /^\d{5}$/.test(zip)
}


function validCv(CV) {
    return /^\d{3}$/.test(CV);
}

function activityChecker() {
for(let i = 0; i<checkBoxes.length; i++) {
    if(checkBoxes[i].checked) {
        return true;
    }
}
}

function creditCardTester(){
    return validateCC(ccNum.value);
  }
  function zipCodeTester(){
    return validateZip(zip.value);
  }
  function cvCodeTester(){
    return validCv(cVv.value);
  }
  
 function nameTester() {
     return validateName(userName.value);
 }
 
 function emailTester() {
     return validateEmail(emailInput.value);
 }
 
 
 
  for (let i=0; i<legendary.length; i++){
    const spanText = document.createElement('span');
    spanText.className = 'proTip';
    spanText.innerText = 'Error information is in the incorrect Format.';
    spanText.style.display = 'none';
    legendary[i].appendChild(spanText);
    }
  
  for (let i=0; i<creditChild.length; i++){
    const ccText = document.createElement('p');
    ccText.className = 'proTipcc';
    ccText.innerText = 'Error information is in the incorrect Format.';
    ccText.style.color = '#FF6347'
    ccText.style.display = 'none';
    creditChild[i].appendChild(ccText);
    }
  
//Submit Listener that test if all required parts of the form are filled before submitting
form.addEventListener('submit', (e)=>{
    //-------------Credit Card Section------------------//
      //CVV
       if(creditCardTester() && CCTrue && zipCodeTester() && !cvCodeTester()){
          e.preventDefault();
          cVv.focus();
          proTipcc[2].style.display = 'block';
          proTipcc[2].innerText = "Must Enter Valid 3 digit CVV code";
          cVv.style.borderColor = '#FF6347';
          //console.log('CVV field not working like you want it to');
        }else{
          proTipcc[2].style.display = 'none';
          cVv.style.borderColor = 'green';}

          if(creditCardTester() && CCTrue && !zipCodeTester()){
            e.preventDefault();
            zip.focus();
            proTipcc[1].style.display = 'block';
            proTipcc[1].innerText = "Must Enter Valid 5 digit zip code";
            zip.style.borderColor = '#FF6347';
            cVv.style.borderColor = '#FF6347';
            //console.log('Zip field not working like you want it to');
          }else {
            proTipcc[1].style.display = 'none';
            zip.style.borderColor = 'green';
          }
          if(!creditCardTester() && CCTrue){
            e.preventDefault();
            ccNum.focus();
            proTipcc[0].style.display = 'block';
            proTipcc[0].innerText = "Must Enter Valid Credit Card Number between '13-16' digits";
            ccNum.style.borderColor = '#FF6347';
            zip.style.borderColor = '#FF6347';
            cVv.style.borderColor = '#FF6347';
            //console.log('CC field not working like you want it to');
          }else{
            proTipcc[0].style.display = 'none';
            ccNum.style.borderColor = 'green';
          }

          if(!activityChecker()){
    e.preventDefault();
    const focusBox = activities.querySelector('input[type="checkbox"]');
    focusBox.focus();
    proTip[2].style.display = 'block';
    proTip[2].innerText = "Must select at least one activity";
    legendary[2].style.borderColor = '#FF6347';
    //console.log('Box field not working like you want it to');
  }else {
    proTip[2].style.display = 'none';
    legendary[2].style.borderColor = 'blue';
  }

  if(!emailTester()){
    e.preventDefault();
    emailInput.focus();
    proTip[0].style.display = 'block';
    emailInput.style.borderColor = '#FF6347';
    //console.log('eMail field not working like you want it to');
  } else {
    proTip[0].style.display = 'none';
    emailField.style.borderColor = 'green';
  }
  if(!nameTester()){
    e.preventDefault();
    userName.focus();
    proTip[0].style.display = 'block';
    userName.style.borderColor = '#FF6347'; //tomato
    //console.log('Name field not working like you want it to');
  } else if (nameTester() && !emailTester()){
    proTip[0].style.display = 'block';
    nameField.style.borderColor = 'green';
  }else {nameField.style.borderColor = 'green';}

});
