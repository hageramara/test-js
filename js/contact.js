
let Contact=document.querySelector('#Contact')
let Categories=document.querySelector('#Categories')
let Area=document.querySelector('#Area')
let Ingredients=document.querySelector('#Ingredients')

let navContactUs=document.querySelector('#navContact')
let header=document.querySelector('#header')
navContactUs.addEventListener('click', function(){
   Contact.classList.replace('d-none', 'd-block')
header.classList.add('d-none')
Search.classList.add('d-none')
Categories.classList.add('d-none')
Area.classList.add('d-none')
Ingredients.classList.add('d-none')
})

let nameInput=document.querySelector('#nameInput');
let emailInput=document.querySelector('#emailInput');
let phoneInput=document.querySelector('#phoneInput');
let ageInput=document.querySelector('#ageInput');
let passwordInput=document.querySelector('#passwordInput');
let repasswordInput=document.querySelector('#repasswordInput');
let nameAlert=document.querySelector('#nameAlert');
let emailAlert=document.querySelector('#emailAlert');
let phoneAlert=document.querySelector('#phoneAlert');
let ageAlert=document.querySelector('#ageAlert');
let passwordAlert=document.querySelector('#passwordAlert');
let repasswordAlert=document.querySelector('#repasswordAlert')

 let userDetails=[]

 if (localStorage.getItem("info") != null) {
   userDetails = JSON.parse(localStorage.getItem("info"));
 }

 function Detailes(){
   if(inputsValidation()){
      let user={
         name:nameInput.value,
         email:emailInput.value,
         phone:phoneInput.value,
         age:ageInput.value,
         password:passwordInput.value,
         repassword:repasswordInput.value,
      }
      userDetails.push(user);
      localStorage.setItem("info", JSON.stringify(userDetails));
      console.log(userDetails);
   }
   emptyData()
 }
 Detailes()

 function emptyData() {
   if (
     nameInput.value == "" || emailInput == "" ||  phoneInput.value == ""|| ageInput.value=="" ||

     passwordInput.value=="" || repasswordInput.value=="") 
   {
    nameAlert.classList.replace("d-none", "d-block");
   emailAlert.classList.replace("d-none", "d-block");
    phoneAlert.classList.replace("d-none", "d-block");
    ageAlert.classList.replace("d-none", "d-block");
    passwordAlert.classList.replace("d-none", "d-block");
   repasswordAlert.classList.replace("d-none", "d-block");
     return false;
   } else {
      nameAlert.classList.replace("d-block", "none");
      emailAlert.classList.replace("d-block", "d-none");
       phoneAlert.classList.replace("d-block", "d-none");
       ageAlert.classList.replace("d-block", "d-none");
       passwordAlert.classList.replace("d-block", "d-none");
      repasswordAlert.classList.replace("d-block", "d-none");
     return true;
   }
 }

 function nameValidation(){
   let rex= /^[a-zA-Z ]+$/;
   if(rex.test(nameInput.value)){
      return true
   }
   else{
      return false;
   }
 }
 function emailValidation() {

   let rex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   if(rex.test(emailInput.value)){
      return true
   }

   else{
      return false;
   }
 }
 function phoneValidation() {
   let rex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
   if(rex.test(phoneInput.value)){
      return true
   }
   else{
      return false;
   }
 }
 function ageValidation() {
   let nameInputTouched = false;
   let rex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ ;
   if(rex.test(ageInput.value)){
      return true
   }
   if(nameInputTouched){
      nameAlert.classList.replace("d-none", "d-block");
   }
   else{
      return false;
   }
 }
 function passwordValidation() {
   let rex=/^(?=.\d)(?=.[a-z])[0-9a-zA-Z]{8,}$/ ;
   if(rex.test(passwordInput.value)){
      return true
   }
   else{
      return false;
   }
 }
 function repasswordValidation() {
   if(repasswordInput.value== passwordInput.value){
      return true;
   }
   else{
      return false;
   } 
 }

 let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

function inputsValidation() {
   if (nameInputTouched) {
       if (nameValidation()) {
           nameAlert.classList.replace("d-block", "d-none")
       } else {
         nameAlert.classList.replace("d-none", "d-block")
       }
   }

   if (emailInputTouched) {

       if (emailValidation()) {
           emailAlert.classList.replace("d-block", "d-none")
       } else {
         emailAlert.classList.replace("d-none", "d-block")
       }
   }

   if (phoneInputTouched) {
       if (phoneValidation()) {
          phoneAlert.classList.replace("d-block", "d-none")
       } else {
         phoneAlert.classList.replace("d-none", "d-block")
       }
   }

   if (ageInputTouched) {
       if (ageValidation()) {
          ageAlert.classList.replace("d-block", "d-none")
       } else {
          ageAlert.classList.replace("d-none", "d-block")
       }
   }

   if (passwordInputTouched) {
       if (passwordValidation()) {
          passwordAlert.classList.replace("d-block", "d-none")
       } else {
          passwordAlert.classList.replace("d-none", "d-block")
       }
   }

   if (repasswordInputTouched) {
       if (repasswordValidation()) {
           repasswordAlert.classList.replace("d-block", "d-none")
       } else {
           repasswordAlert.classList.replace("d-none", "d-block")
       }
   }

   if (nameValidation() &&
       emailValidation() &&
       phoneValidation() &&
       ageValidation() &&
       passwordValidation() &&
       repasswordValidation()) {
       submitBtn.removeAttribute("disabled")
   } else {
       submitBtn.setAttribute("disabled", true)
   }
}
