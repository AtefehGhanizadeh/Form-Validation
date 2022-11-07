const signUpForm=document.querySelector('#signUpForm')
const nameInp=document.querySelector('#FullName')
const phoneNumberInp=document.querySelector('#phoneNumber')
const emailInp=document.querySelector('#email')
const passwordInp=document.querySelector('#password')
const passwordConfirmInp=document.querySelector('#passwordConfirm')
const registerBtn=document.querySelector('button')
const massageContainer=document.querySelector(".message-container")
const massage=document.querySelector("#message")


let isValid=false;
let passwordsMatch=false;

function validateForm(){
    //Using Contrait API

    isValid=signUpForm.checkValidity()

    //style massage for an error

    if(!isValid){
        massage.textContent="Please fill out all fields."
        massage.style.color='red'
        massageContainer.style.borderColor='red'
        return;
    }

    //check if two passwords math


    if(passwordInp.value===passwordConfirmInp.value){
        passwordsMatch=true
        passwordInp.style.borderColor='green'
        passwordInp.style.borderColor='green'
    }
    else{
        passwordsMatch=false
        massage.textContent='Make sure passwords match.'
        massage.style.color='red'
        massageContainer.style.borderColor='red'
        passwordInp.style.borderColor='red'
        passwordInp.style.borderColor='red'
        return;
    }

    if(isValid&&passwordsMatch){
        massage.textContent='Successfuly Registered!'
        massage.style.color='green'
        massageContainer.style.borderColor='green '
    } 

}

function storeFormDate(){
    const user={
        name:signUpForm.name.value,
        phoneNumber:signUpForm.phoneNumber.value,
        email:signUpForm.email.value,
        webUrl:signUpForm.webUrl.value,
        password:signUpForm.passwordValue.value
    }

    console.log(user)
}


function processFormData(e){
    e.preventDefault()
    //Validation
    validateForm()
    if(isValid&&passwordsMatch){
       storeFormDate() 
    }
    
}



//Form Event Listener

signUpForm.addEventListener('submit',processFormData)