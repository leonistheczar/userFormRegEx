// Variables Parsing
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userZIP = document.getElementById('postal-code');
let userCity = document.getElementById('city');
let nameError = document.getElementById('nameValidation');
let emailError = document.getElementById('emailValidation');
let zipError = document.getElementById('zipValidation');
let form = document.getElementById('form'); 
let loader = document.getElementById('loader');
let saveCard = document.getElementById('saved');

// Event Listeners
userName.addEventListener('blur', userNameRegExTest);
userEmail.addEventListener('blur', userEmailRegExTest);
userZIP.addEventListener('blur', userZIPRegExTest);

// Form Submission function
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (userNameRegExTest() && userEmailRegExTest() && userZIPRegExTest()) {
        loaderDisplay();        //Displays the spinner for specific period of time        
        setTimeout(() => {
            successDisplay();   //Displays the success notification for specific period of time 
        }, 3000);    
        // Reset all inputs
      setTimeout(() => {
        userName.value = '';
        userEmail.value = '';
        userZIP.value = '';
        userCity.value = '';
      }, 6000); 
    }
    else{
        alert('Please fill out all the fields correctly!');
    }
})


// Functions
function userNameRegExTest() {
    let reName = /^[a-zA-Z\s\-']{2,50}$/;
    const nameInput = userName.value;
    userName.classList.remove('border-2', 'border-green-600', 'border-red-600');
    nameError.classList.add('hidden');
    if (reName.test(nameInput)) {        
        userName.classList.add('border-2', 'border-green-600');
        return true;
    }
    else{
        userName.classList.add('border-2', 'border-red-600');
        nameError.classList.remove('hidden');
        return false;
    }
}
function userEmailRegExTest() {
    let reEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = userEmail.value;
    userEmail.classList.remove('border-2', 'border-green-600', 'border-red-600');
    emailError.classList.add('hidden');
    if (reEmail.test(emailInput)) {        
        userEmail.classList.add('border-2', 'border-green-600');
        return true;
    }
    else{
        userEmail.classList.add('border-2', 'border-red-600');
        emailError.classList.remove('hidden');
        return false;
  }
}
function userZIPRegExTest(){
    let reZIP = /^\d{5}$/;
    const zipInput = userZIP.value;
    userZIP.classList.remove('border-2', 'border-green-600', 'border-red-600');
    zipError.classList.add('hidden');
    if (reZIP.test(zipInput)) {        
        userZIP.classList.add('border-2', 'border-green-600');
        return true;
    }
    else{
        userZIP.classList.add('border-2', 'border-red-600');
        zipError.classList.remove('hidden');
        return false;
    }
}
// Loader
function loaderDisplay(){
    loader.classList.remove('invisible')
    loader.classList.add('overflow-hidden');
    setTimeout(() => {
        loader.classList.add('invisible');
        loader.classList.remove('overflow-hidden');
    }, 2500);
}
// Succes notification
function successDisplay(){
    saveCard.classList.remove('hidden');
    setTimeout(() => {
        saveCard.classList.add('hidden');
    }, 3000);
}
