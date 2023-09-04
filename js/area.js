
let rowCountries= document.getElementById("rowCountries");
let innerArea=document.querySelector('.inner-area')
let countries=document.querySelector('.countries')
let rowMeals=document.querySelector('#rowMeals')

navArea.addEventListener('click',function(){
    Area.classList.replace('d-none','d-block')
    Contact.classList.replace('d-none', 'd-block')
header.classList.add('d-none')
Search.classList.add('d-none')
Categories.classList.add('d-none')
Ingredients.classList.add('d-none')
Contact.classList.add('d-none')
    })
/* fetch area*/
 async function  getCountries(){
    
        let res= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        if(!res.ok) throw new Error('Falied to Fetch')
        let data=await res.json();
       // console.log(data);
        displayCountries(data)  
       
}

getCountries()

  function displayCountries(data){
 let dataCountainer=''
 let mealArea =data.meals;
// console.log(meal);
 for(let meals of mealArea){
   // console.log(meals);
    dataCountainer+=`<div class="col-md-3">
    <div class="inner-area">
    <i class="fa-solid fa-house-laptop fs-1"></i>
    <h3 class="fs-5" dataset>${meals.strArea}</h3>
</div>
    </div>           
   `
 }
//console.log(dataCountainer);
rowCountries.innerHTML=dataCountainer;


}




async function getMealsApi(country){
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
    let dataMeals= await res.json()
   // console.log(dataMeals);
    displayMealsCountry(dataMeals)
}



function displayMealsCountry(data){
    let dataCountainer=''
    let mealCountry= data.meals;
    for(let meals of mealCountry){
        console.log(meals);
        dataCountainer+=`<div class="col-md-3">
        <div class="meal-images position-relative rounded-2 overflow-hidden ">
            <img src="${meals.strMealThumb}" alt="" class="w-100 ">
        <div class="layer d-flex  align-items-center py-2">
            <h3 class="text-black ps-2">${meals.strMeal}</h3>
        </div>
     </div>
     </div> `
    }
   // console.log(dataCountainer);
   rowMeals.innerHTML=dataCountainer
}

countries.addEventListener('click', function(e){
    if(e.target!== countries){
       rowCountries.classList.add('d-none')
      // console.log(e.target.innerText);
 getMealsApi('American')/* e.target.innerText  مش راضيه تشتغل معايا يابشمهندس اسامه لما احط */
    }
    else{
        rowCountries.classList.add('d-block')
        getCountries()
    }
 })
