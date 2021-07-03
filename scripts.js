const email = document.getElementById('email')
email.addEventListener('focusout', ()=> emailValid())

const passCon = document.getElementById('passConfirm')
passCon.addEventListener('focusout', ()=> checkPassword())


function emailValid(){
    const emailWarn = document.getElementById('emailWarn')
    if(email.validity.typeMismatch){
       emailWarn.textContent= "Please enter a valid email address."
    } else {
       emailWarn.textContent= ''
    }
}




function checkPassword(){
    const form = document.getElementById('form');
    if(form.passConfirm.value !== form.pass.value){
        document.getElementById('passConfirmWarn').textContent ='Please enter the same password.'
    }else{
        document.getElementById('passConfirmWarn').textContent =''
    }
}



let submit = document.getElementById('submitButton');
submitButton.addEventListener('click', ()=> checkAll())

function checkAll(){
    const inputs = document.getElementsByTagName('input')
    Array.from(inputs).forEach(element => {check(element)});
}

function check(element){
    const warner = document.getElementById(`${element.id}Warn`)
    if(!element.checkValidity()){
       warner.textContent = 'This field is required'
    } else {
        warner.textContent = ' '
    }
}