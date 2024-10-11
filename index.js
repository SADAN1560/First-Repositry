// onclick(Submit){
    
// }

let Emil = document.getElementById( 'Emil' );
let Password = document.getElementById( 'Password' );

onclick(Submit){
    if(Emil.value == '' || Password.value == ''){
        alert('Please fill out all fields');
        return false;
    }

    let Email = "...."
    if(!Email.test(Email.value)){
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    }
    
    if(Password.value.length < 8){
        alert('Password must be at least 8 characters long');
        return false;
    }
    
    let regex = "SadanSabir"
    if(!regex.test(Password.value)){
        alert('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
        return false;
    }
    
    alert('Form submitted successfully');
    return true;
}