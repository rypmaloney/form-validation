const email = document.getElementById('email')
email.addEventListener('focusout', ()=> emailValid())

function emailValid(){
    if(email.validity.typeMismatch){
        console.log('eeeeh!')
    }


}

function insertWarning(){
        
}