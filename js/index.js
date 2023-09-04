$("#header").ready(function(){
    $(".spinner").fadeOut(500, function(){
        $("#loadind").fadeOut(1000);
        $("#loadind").remove(1000)

    })
})


let dataRow=document.getElementById("dataRow");
let infodata=document.querySelector('#infodata');
let rowCountries= document.getElementById("rowCountries");
let header=document.querySelector('#header');
let spinner=document.querySelector('.spinner');
let loading= document.querySelector('.loading');
 let home= document.querySelector("#home-inner")

  

/* fetch api header*/
 async function addApi(){
        let res=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        let data=await res.json();
       // console.log(data);
        displayData(data)
        infoMeals(data)
}
addApi()

function displayData(dataMeals){
    let box=''
  let meal=dataMeals.meals;
  // console.log(meal);
   for(let meals of meal){
  // console.log(meals);
   box+=`<div class="col-md-3">
   <div class="meal-images position-relative rounded-2 overflow-hidden ">
   
       <img src="${meals.strMealThumb}" alt="" class="w-100 ">
   
   <div class="layer d-flex  align-items-center py-2">
       <h3 class="text-black ps-2">${meals.strMeal}</h3>
   </div>
</div>
</div>  `  
}
//console.log(box);
dataRow.innerHTML=box
let images= document.querySelectorAll('.meal-images')
for(let image of images){
    image.addEventListener('click',function(eventinfo){
   console.log(eventinfo.target3);
    dataRow.classList.add('d-none');
     infodata.classList.replace('d-none', 'd-blcok')
     })
}
}
 
 

  function infoMeals(data){
    let box=''
    let meal=data.meals;
    //console.log(meal);
    for(let meals of meal){
        box+=`<div class="col-md-4">
        <div class="content-images">
            <img src="${meals.strMealThumb}" alt="" class="w-100 rounded-3">
            <h3>${meals.strMeal}</h3>
        </div>
    </div>
    <div class="col-md-8">
        <div class="content ">
            <h2>Instructions</h2>
            <p>${meals.strInstructions}</p>
            <div class="d-flex flex-column">
              <h3> <span>Area :${meals.strArea}</span></h3> 
              <h3><span>Category:${meals.strCategory}</span></h3>  
               <h3><span>Recipes :</span></h3>
               <ul class="list-unstyled d-flex  flex-wrap py-2">
                <li class="shape border rounded-2 p-1 me-2">${meals.strMeasure1} Lentils</li>
                <li  class="shape border rounded-2 p-1 me-2">${meals.strMeasure2} Onion</li>
                <li class="shape border rounded-2 p-1 me-2" >${meals.strMeasure3} Carrots</li>
                <li class="shape border rounded-2 p-1 me-2">${meals.strMeasure4} Tomato Puree </li>
                <li class="shape border rounded-2 p-1 me-2">${meals.strMeasure5} Cumin</li>
                <li class="shape border rounded-2 p-1 me-2">${meals.strMeasure6} Paprika</li>
                <li class="shape border rounded-2 p-1 me-2 ">${meals.strMeasure7} Mint</li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure8} Thyme</li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure9} Black Pepper</li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure10} Red Pepper Flakes</li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure11} Vegetable Stock </li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure12} Water </li>
                <li class="shape border rounded-2 p-1 me-2 mt-3">${meals.strMeasure13} Sea Salt</li>
               </ul>

               <div class="tages  ">
                <h3><span>Tags :</span></h3>
                <ul class="list-unstyled d-flex  flex-wrap">
                    <li class="border btn btn-warning rounded-2 p-2 text-black">${meals.strTags}</li>
                </ul>
                <a href="#source" class=" source border btn btn-success rounded-2 p-2 text-black text-decoration-none" onclick="${meals.strSource}">Source</a>
                <a href="#youtube" class=" youtube border btn btn-danger rounded-2 p-2 text-black text-decoration-none" onclick="${meals.strYoutube}">YouTube</a>
               </div>
            </div>
        </div>
    </div>`
    }
//console.log(box);
infodata.innerHTML=box
}





 
 

/* fetch area
 async function  getCountries(){
    try{
        let res= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        if(!res.ok) throw new Error('Falied to Fetch')
        let data=await res.json();
        console.log(data);
        displayCountries(data)
    }
    catch(err){
console.log('Falied to Fetch!');
    }
    
}
getCountries()

  function displayCountries(data){
 let dataCountainer=''
 let mealArea =data.meals;
// console.log(meal);
 for(let meals of mealArea){
    console.log(meals);

    dataCountainer+=`<div class="col-md-3">
    <i class="fa-solid fa-house-laptop fs-1"></i>
    <h3 class="fs-5">${meals.strArea}</h3>
</div>`
 }
console.log(dataCountainer);
//rowCountries.innerHTML=dataCountainer;
}

*/

/*let searchRow=document.querySelector('#searchRow');
 
 async function searchData(){
    try{
        let res=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
        if(!res.ok) throw new Error('Falied to Fetch')
        let data= await res.json()
         console.log(data);
         displayName(data)
    }
catch(err){
showError(err)
}
 }
 


 function displayName(dataName){
    let searchConatiner=''
let searchName= dataName.meals;
for(search of searchName){
   console.log(search);
  searchConatiner+=` <div class="col-md-3">
  <div class="meal-images position-relative rounded-2 overflow-hidden mt-5 ">
      <img src="${search.strMealThumb}" alt="" class="w-100 image-item">
  <div class="layer d-flex  align-items-center py-2">
      <h3 class="text-black ps-2">${search.strMeal}</h3>
  </div>
</div>
</div>`
}
console.log(searchConatiner);
  searchRow.innerHTML=searchConatiner
}

let searchByName=document.querySelector('#searchByName');
searchByName.addEventListener('keydown',  function(){
    searchData(this.value)
})

 /* first letter
async function getData(){
    
        let res=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        let data= await res.json()
         console.log(data);
         displayLetter(data)
    }
getData()

function displayLetter(dataletter){
    let letterbox=''
    let letters= dataletter.meals;
    for(let letter of letters){
        console.log(letter);
    }
}
*/
