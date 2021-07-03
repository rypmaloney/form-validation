const email = document.getElementById('email')
email.addEventListener('focusout', ()=> emailValid())

const passCon = document.getElementById('passConfirm')
passCon.addEventListener('focusout', ()=> checkPassword())


function emailValid(){
    const emailWarn = document.getElementsByClassName('emailWarn')
    if(email.validity.typeMismatch){
       emailWarn[0].style.display ='block'
    } else {
       emailWarn[0].style.display ='none'
    }
}


/*
const inputs = document.getElementsByTagName('input')

Array.from(inputs).forEach(element => {
    element.addEventListener('focusout', (e)=> check(e))})

function check(e){
    const warner = document.getElementsByClassName(`${e.target.id}Warn`)
    console.log(warner[0])
    if(!e.target.checkValidity()){
       warner[0].style.display = 'block'
    } else {
        warner[0].style.display = 'none'
    }
}
*/

function checkPassword(){
    const form = document.getElementById('form');
    if(form.passConfirm.value !== form.pass.value){
        document.getElementById('passWarn').textContent ='Please enter the same password.'
    }else{
        document.getElementById('passWarn').textContent =''
    }
}