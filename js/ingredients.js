let rowIngredient= document.querySelector('#rowIngredient')
let mealIngredient=document.querySelector('.mealIngredient')
let rowMeals2=document.querySelector('#rowMeals2')
let navIngredients=document.querySelector('#navIngredients')

 navIngredients.addEventListener('click',function(){
  let section=document.querySelector(' #Ingredients')
  section.classList.replace('d-none', 'd-block')
  header.classList.add('d-none')
Search.classList.add('d-none')
Categories.classList.add('d-none')
Area.classList.add('d-none')
Contact.classList.add('d-none')
 })

  async function  getApi3(){
    
    let res= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let data=await res.json();
    //console.log(data);
    displayIngredient(data)
  }


getApi3()


function displayIngredient(data){
  let dataCountainer=''
  let mealIngredient =data.meals;
let arrMeals= mealIngredient.slice(0,20);
 //console.log(arrMeals);
 for(let meals of arrMeals){
    // console.log(meals);
     
     dataCountainer+=`<div class="col-md-4 ">
     <div class="rounded-2 text-center  ">
         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
         <h3>${meals.strIngredient}</h3>
         <p class="line-clamp">${meals.strDescription}</p>
     </div>
 </div> 
            `
}
//console.log(dataCountainer);
rowIngredient.innerHTML=dataCountainer
  }
 

  async function getMealsApi2(Meals){
    let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${Meals}`)
    let dataMeals= await res.json()
   // console.log(dataMeals);
   displayMeals(dataMeals)
}
  
function displayMeals(data){
    let dataCountainer=''
    let mealCountry= data.meals;
    for(let meals of mealCountry){
       // console.log(meals);
        dataCountainer+=`<div class="col-md-3">
        <div class="meal-images position-relative rounded-2 overflow-hidden ">
            <img src="${meals.strMealThumb}" alt="" class="w-100 ">
        <div class="layer d-flex  align-items-center py-2">
            <h3 class="text-black ps-2">${meals.strMeal}</h3>
        </div>
     </div>
     </div> `
    }
    console.log(dataCountainer);
   rowMeals2.innerHTML=dataCountainer
}

mealIngredient.addEventListener('click', function(e){
    // console.log(e.target);
     rowIngredient.classList.add('d-none')
     getMealsApi2('Salmon')
    
 })

 