
   let navCategories=document.querySelector('#navCategories')

navCategories.addEventListener('click',function(){
  Categories.classList.replace('d-none','d-block')
  Contact.classList.replace('d-none', 'd-block')
  header.classList.add('d-none')
  Search.classList.add('d-none')
  Area.classList.add('d-none')
  Ingredients.classList.add('d-none')
  })

let dataCategory=document.querySelector('#dataCategory')

let data;

 async function getAppi(){
 let res= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  data= await res.json();
// console.log(data);
 displayData2()
}
getAppi()

function displayData2(){
   let container=''
   let catData= data.categories
   for(let category of catData){
    //  console.log(category);
     container+=` <div class="col-md-3 ">
     <div class="meal-images position-relative rounded-2 overflow-hidden mt-5">
         <img src="${category.strCategoryThumb}" alt="" class="w-100 ">
     <div class="layer d-flex  flex-column justify-content-center align-items-center py-2">
         <h3 class="text-black ps-2">${category.strCategory}</h3>
         <p class="py-2 text-black fw-medium text-center line-clamp">${category.strCategoryDescription} <br/></p>
     </div>
  </div>
  </div>`
   }
 // console.log(container);
dataCategory.innerHTML=container;
}

