
var nameEr = document.getElementById('name-error')
var contactEr = document.getElementById('contact-error')
var postalEr = document.getElementById('postal-error')
var emailEr = document.getElementById('email-error')
var passEr = document.getElementById('pass-error')
var submitEr = document.getElementById('submit-error')


let validateName =()=>{

    var name = document.getElementById('inputName').value;

    if (nameEr.length == 0){
        nameEr.innerHTML = 'Invalid, be sure you include both first and last name ';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameEr.innerHTML = 'Invalid, be sure you include both first and last name ';
        return false;
    }
    else{
        nameEr.innerHTML =  '<i class="bi bi-check2-circle">Valid</i>'
        return true;
    }
}

let validateContact =()=>{
    var contact = document.getElementById('inputContact').value;

    if(contact.length == 0 || contact.length!=11){
        contactEr.innerHTML = "Invalid Contact"
        return false;
    }
    if(!contact.match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)){

        contactEr.innerHTML = "Invalid Contact"
        return false;
    }
    else{
        contactEr.innerHTML = '<i class="bi bi-check2-circle">Valid</i>'
        return true;
    }
}

let validatePostal =()=>{
    var postcode = document.getElementById('inputPostalCode').value

    if(postcode.length == 0 || postcode.length!=4){
        postalEr.innerHTML = "Invalid Post Code"
        return false;
    }
    if(!postcode.match(/^\d{4}$/ )){
        postalEr.innerHTML = "Invalid Post Code"
        return false;
    }
    else{
        postalEr.innerHTML = '<i class="bi bi-check2-circle">Valid</i>'
        return true
    }
}

let validateEmail =()=>{
    var email = document.getElementById('inputEmail1').value

    if(email.length == 0 ){
        emailEr.innerHTML = 'Invalid Email Address'
        return false
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailEr.innerHTML = 'Invalid Email Address'
        return false
    }
    else{
        emailEr.innerHTML = '<i class="bi bi-check2-circle">Valid</i>'
        return true
    }
}

let validatePass =()=>{
    var password = document.getElementById('inputPassword').value

    if(password.length == 0){
        passEr.innerHTML = 'Invalid password'
        return false
    }
    if(!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        passEr.innerHTML = 'Invalid password'
        return false
    }
    else{
        passEr.innerHTML = '<i class="bi bi-check2-circle">Valid</i>'
        return true
    }
}


let validateForm = ()=>{
    var button = document.getElementById('fsubmit')
    if(!validateContact() || !validateEmail() || !validateName() || !validatePass() || ! validatePostal()){
        submitEr.style.display = 'block';
        submitEr.innerHTML = 'Please check again!';
        setTimeout(function(){submitEr.style.display='none';},3000);
        return false
    }
    else{
        submitEr.style.display = 'block';
        submitEr.innerHTML = 'Sucessfully Done!'
        setTimeout(function(){submitEr.style.display='none';},3000);
        return true;
    }
}