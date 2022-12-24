
function register(){
    const form = document.forms.registration_form;
    if (validate(form) == true){
        alert('Успех:)');
    }
}

function validate(form){
    let isValid = true;

    form.querySelectorAll(".field").forEach(field => {
        isValid = checkField(field) && isValid;  
        console.log(isValid, field);
    });

    isValid = checkPasswords(form.passwordfirst, form.passwordsecond) && isValid;
     
}

function checkField(field){
    if (field.value == ''){
        field.className += " field_error";

        new tippy(".field", {
            content: "Заполните поле",
            theme: "CFD",
            inertia: true,
            animation: "scale",
            placement: "right",
            trigger: "focusin",
            duration: [100, 0],
          });
      
          field.focus();

        return false;
    }
    else{
        return true;
    }
}

function checkPasswords(firstPassword, secondPassword){
    if (firstPassword.value != secondPassword.value){
        firstPassword.setData('tooltip', 'Пароли не совпадают');
        
        return false;
    }
    return true;
}
