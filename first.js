/*  validate form*/
function validate(form){
    let firstname=form.firstname.value.trim();
    let secondname=form.secondname.value.trim();
    let email=form.email.value.trim();
    let password=form.password.value.trim();
    if(firstname ===""){
        alert("Please enter your first name");
        return false;
    }
    if(secondname===""){
        alert("Please enter your second name");
        return false;
    }
    if(email===""){
        alert("Please enter your email address");
        return false;
    }
    if(password===""){
        alert("Please enter your password");
        return false;
    }
    alert("form submitted successfully!");
    return true;
}

