console.log('added well');

const form = document. querySelector('form');

const name = document.querySelector('#name');
name.focus();

const email = document.querySelector('#mail');

const jobRole = document.querySelector('#title');
const otherJobOption = document.querySelector('#title option[value="other"]');
const otherJobInput = document.querySelector('#other-title');
otherJobInput.hidden = true;
jobRole.addEventListener('change', ()=>{
    if( otherJobOption.selected === true ){
        otherJobInput.hidden = false;
    } else {
        otherJobInput.hidden = true;
    }
});


const designTheme = document.querySelector('#design option');
designTheme.hidden = true;





const colorSelect = document.querySelector('#color');
const colorTheme = document.createElement('option');
colorTheme.textContent = "Please select a T-shirt theme";
colorSelect.appendChild(colorTheme);
colorTheme.selected = true;


const colors = document.querySelectorAll('#color option');
for ( let i = 0; i < colors.length; i ++ ){
    colors[i].hidden = true;
}

const designSelect = document.querySelector('#design');
const jsPuns = document.querySelector('#design option[value="js puns"]');
const heartJs = document.querySelector('#design option[value="heart js"]');

const jsPunsColor1 = document.querySelector('#color option[value="cornflowerblue"]');
const jsPunsColor2 = document.querySelector('#color option[value="darkslategrey"]');
const jsPunsColor3 = document.querySelector('#color option[value="gold"]');

const heartJsColor1 = document.querySelector('#color option[value="tomato"]');
const heartJsColor2 = document.querySelector('#color option[value="steelblue"]');
const heartJsColor3 = document.querySelector('#color option[value="dimgrey"]');

designSelect.addEventListener('change', () => {

    if( jsPuns.selected === true ){
        jsPunsColor1.hidden = false;
        jsPunsColor2.hidden = false;
        jsPunsColor3.hidden = false;
        heartJsColor1.hidden = true;
        heartJsColor2.hidden = true;
        heartJsColor3.hidden = true;
    }
    if( heartJs.selected === true ){
        heartJsColor1.hidden = false;
        heartJsColor2.hidden = false;
        heartJsColor3.hidden = false;
        jsPunsColor1.hidden = true;
        jsPunsColor2.hidden = true;
        jsPunsColor3.hidden = true;
    }  
});





const activities = document.querySelector('.activities');
const element = document.createElement('element');
activities.appendChild(element);
let totalCost = 0;

activities.addEventListener('change', (e) => {

    const inputClicked = event.target;
    const inputAtt = inputClicked.getAttribute('data-cost');
    const inputCost = parseInt(inputAtt);
    

    if( inputClicked.checked ){
        totalCost += inputCost;
    } else {
        totalCost -= inputCost;
    }
    element.innerHTML = "Total : $" + totalCost;

    const dayAndTime = inputClicked.getAttribute('data-day-and-time');
    const checkboxes = document.querySelectorAll('.activities input');

    for ( let i = 0; i < checkboxes.length; i ++ ){
        const currentCheckbox = checkboxes[i].getAttribute('data-day-and-time');
        if( dayAndTime === currentCheckbox && inputClicked !== checkboxes[i] ){
            if( inputClicked.checked ){
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});




const payment = document.querySelector('#payment');
const paymentMethod = document.querySelector('#payment option[value="select method"]');

const creditcard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

const creditcardOption = document.querySelector('#payment option[value="credit card"]');
const paypalOption = document.querySelector('#payment option[value="paypal"]');
const bitcoinOption = document.querySelector('#payment option[value="bitcoin"]');

paymentMethod.hidden = true;
paypal.style.display = 'none';
bitcoin.style.display = 'none';

payment.addEventListener('change', () => {
    if( creditcardOption.selected === true ){
        creditcard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if( paypalOption.selected === true ){
        creditcard.style.display = 'none';
        paypal.style.display = 'block';
        bitcoin.style.display = 'none';
    } else if( bitcoinOption.selected === true ){
        creditcard.style.display = 'none';
        paypal.style.display = 'none';
        bitcoin.style.display = 'block';
    }
});



const nameValidator = () => {

    const nameValue = name.value;
    let nameLabel = document.querySelector('label[for="name"]');

    
    if( nameValue.length > 0 ){
        name.style.border = '';
        nameLabel.style.color = '';
        nameLabel.textContent = "Name:";
        return true;
    } else {
        name.style.border = "3px solid red";
        nameLabel.style.color = "red";
        nameLabel.innerHTML = "<strong>Please enter your name</strong>";
        return false;
    }
    
}

const emailValidator = () => {

    const emailValue = email.value;
    const emailLabel = document.querySelector('label[for="mail"]');

    
    if( /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue)){
        email.style.border = '';
        emailLabel.style.color = '';
        emailLabel.textContent = "Email:";
        return true;
    } else {
        email.style.border = "3px solid red";
        emailLabel.style.color = "red";
        emailLabel.innerHTML = "<strong>Please enter your email address</strong>";
        return false;
    }
    
}


const activityValidator = () => {

    const activityLegend = document.querySelector('.activities legend');
    const checkboxes = document.querySelectorAll('.activities input');

    for( let i = 0; i < checkboxes.length; i ++ ){
        if(checkboxes[i].checked){
            activityLegend.style.color = '';
            activityLegend.textContent = "Register for Activities";
            return true;
        }
    }

    activityLegend.style.color = 'red';
        activityLegend.innerHTML = "<strong>Please choose at least one activity</strong>"
        return false;

    
}


const ccNumvalidator = () => {

    const creditcardNumber = document.querySelector('#cc-num');
    const ccNumValue = creditcardNumber.value;
    const ccNumLabel = document.querySelector('label[for="cc-num"]');

    if( creditcardOption.selected ){
        if( /^\d{13,16}$/.test(ccNumValue)){
            creditcardNumber.style.border = '';
            ccNumLabel.style.color = '';
            ccNumLabel.textContent = "Card Number:";
            return true;
        }else{
            creditcardNumber.style.border = '3px solid red';
            ccNumLabel.style.color = 'red';
            ccNumLabel.textContent = "Unvalid Card Number";
            return false;
        }
    }
}

const ccZipValidator = () => {

    const creditcardZip = document.querySelector('#zip');
    const ccZipValue = creditcardZip.value;
    const ccZipLabel = document.querySelector('label[for="zip"]');

    if( creditcardOption.selected ){
        if( /^\d{5}$/.test(ccZipValue)){
            creditcardZip.style.border = '';
            ccZipLabel.style.color = '';
            ccZipLabel.textContent = "Zip Code:";
            return true;
        }else{
            creditcardZip.style.border = '3px solid red';
            ccZipLabel.style.color = 'red';
            ccZipLabel.textContent = "Unvalid Zip Code";
            return false;
        }
    }
}


const cvvValidator = () => {

    const creditcardCvv = document.querySelector('#cvv');
    const cvvValue = creditcardCvv.value;
    const cvvLabel = document.querySelector('label[for="cvv"]');

    if( creditcardOption.selected ){
        if( /^\d{3}$/.test(cvvValue)){
            creditcardCvv.style.border = '';
            cvvLabel.style.color = '';
            cvvLabel.textContent = "CVV:";
            return true;
        }else{
            creditcardCvv.style.border = '3px solid red';
            cvvLabel.style.color = 'red';
            cvvLabel.textContent = "Unvalid CVV";
            return false;
        }
    }
}





form.addEventListener('submit', (e)=> {

    if( ! nameValidator() ){
        e.preventDefault();
    }

    if( ! emailValidator() ){
        e.preventDefault();
    }

    if( ! activityValidator() ){
        e.preventDefault();
    }

    if( ! ccNumvalidator() ){
        e.preventDefault();
    }

    if( ! ccZipValidator() ){
        e.preventDefault();
    }

    if( ! cvvValidator() ){
        e.preventDefault();
    }


});

