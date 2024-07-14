/// <reference types="../@types/jquery" />

import {  getMealOfCatogery ,getDetailesCatogeryWithId ,mealDetails , meals ,getcatogery ,getMealOfArea ,getDetailesAreaWithId ,getMealOfingredients,getDetailesingredientsWithId} from "./index.js"

const rowMeals = document.getElementById('rowMeals')
const SearchRowMeals = document.getElementById('SearchRowMeals')
const catogerymeal = document.getElementById('catogerymeal')
const mealsAreaIcon = document.getElementById('mealsAreaIcon')
const mealsCatogery = document.getElementById('mealsCatogery')
const mealsarea = document.getElementById('mealsarea')
const rowDetails = document.getElementById('rowDetails')
const SearchRowDetails = document.getElementById('SearchRowDetails')
const catogerydetails = document.getElementById('catogerydetails')
const areadetails = document.getElementById('areadetails')
const mealsingredientsIcon = document.getElementById('mealsingredientsIcon');
const mealsingredients = document.getElementById('mealsingredients')







export function displayMainMeals(meals) {
    
  let container = ``

  for (let i = 0; i < meals.length; i++) {
      container +=`
      <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
            <div class="home-img position-relative overflow-hidden">
              <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
              <div
                class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
              >
                <p class="ps-2 ">${meals[i].strMeal}</p>
              </div>
            </div>
          </div>`
      
  }

  rowMeals.innerHTML=container

  


 $('.meal').on('click',function(e){

  // console.log(meals[1]);
  console.log(this.id);
  $('.meals').addClass('d-none');
  displayDetailsMainMeals(meals[this.id])
  // console.log('hello');
 })

}
 
export function displayDetailsMainMeals(list){

  console.log(list.strTags);

  
  let container=`
  <div class="col-sm-4 text-white py-4">
               <div class="img-details">
                 <img src="${list.strMealThumb}" alt="${list.strMeal}" class="w-100" />
                 <p class="p-details">${list.strMeal}</p>
               </div>
             </div>
            <div class="col-sm-8 text-white py-4">
              <h3 class="Instructions">Instructions</h3>
              <p class="Instructions-details">
                ${list.strInstructions}
              </p>

              <p class="catogery-size">
                <span>Area :</span><span>${list.strArea                  }</span>
              </p>
              <p class="catogery-size">
                <span>Category :</span><span>${list.strCategory}</span>
              </p>
              <p class="catogery-size">Recipes :</p>
              <div class="recipes">
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure1} Lentils</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure2} Onion</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure3} Carrots</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure4} Tomato Puree</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure5} Cumin</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure6} Paprika</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure7} Mint</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure8} Thyme</p>
                <p class="badge bage-recipes p-2 me-2">
                  ${list.strMeasure9} Black Pepper
                </p>
                <p class="badge bage-recipes p-2 me-2">
                  ${list.strMeasure10} Red Pepper Flakes
                </p>
                <p class="badge bage-recipes p-2 me-2">
                  ${list.strMeasure11} Vegetable Stock
                </p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure12} Water</p>
                <p class="badge bage-recipes p-2 me-2">${list.strMeasure13}</p>
              </div>

              <p class="catogery-size">Tags :</p>
              <div class="tags mb-2">
                <p class="p-2 badge bage-tags">${list.strTags}</p>
              </div>

              <button class="btn btn-success text-white">
                <a target="_blank" href="${list.strSource}" class="text-decoration-none text-white">Source</a>
              </button>
              <button class="btn btn-danger text-white">
                <a target="_blank" href="${list.strYoutube}" class="text-decoration-none text-white">Youtube</a>
              </button>
            </div>`

          

            rowDetails.innerHTML=container
            if (list.strTags==null) {
              $('.tags').addClass('d-none')
          }
  
}





export function displaySearchMeals(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <p class="ps-2 ">${meals[i].strMeal}</p>
                </div>
              </div>
            </div>`
        
    }

    SearchRowMeals.innerHTML=container

    

 
   $('.meal').on('click',function(e){

    // console.log(meals[1]);
    console.log(this.id);
    $('.searchCatogery .meals').removeClass('d-none');
    $('.searchCatogery .mealDetails').addClass('d-none');
    displayDetailsSearchMeals(meals[this.id])
    console.log('hello');
   })

}

export function displayDetailsSearchMeals(list){

    console.log(list.strTags);
  
    
    let container=`
    <div class="col-sm-4 text-white py-4">
                 <div class="img-details">
                   <img src="${list.strMealThumb}" alt="${list.strMeal}" class="w-100" />
                   <p class="p-details">${list.strMeal}</p>
                 </div>
               </div>
              <div class="col-sm-8 text-white py-4">
                <h3 class="Instructions">Instructions</h3>
                <p class="Instructions-details">
                  ${list.strInstructions}
                </p>

                <p class="catogery-size">
                  <span>Area :</span><span>${list.strArea                  }</span>
                </p>
                <p class="catogery-size">
                  <span>Category :</span><span>${list.strCategory}</span>
                </p>
                <p class="catogery-size">Recipes :</p>
                <div class="recipes">
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure1} Lentils</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure2} Onion</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure3} Carrots</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure4} Tomato Puree</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure5} Cumin</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure6} Paprika</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure7} Mint</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure8} Thyme</p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure9} Black Pepper
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure10} Red Pepper Flakes
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure11} Vegetable Stock
                  </p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure12} Water</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure13}</p>
                </div>

                <p class="catogery-size">Tags :</p>
                <div class="tags mb-2">
                  <p class="p-2 badge bage-tags">${list.strTags}</p>
                </div>

                <button class="btn btn-success text-white">
                  <a target="_blank" href="${list.strSource}" class="text-decoration-none text-white">Source</a>
                </button>
                <button class="btn btn-danger text-white">
                  <a target="_blank" href="${list.strYoutube}" class="text-decoration-none text-white">Youtube</a>
                </button>
              </div>`

            

              SearchRowDetails.innerHTML=container
              if (list.strTags==null) {
                $('.tags').addClass('d-none')
            }

            $('.searchCatogery .meals').addClass('d-none');
            $('.searchCatogery .mealDetails').removeClass('d-none');
    
}






export function displaySearchMealsByFirstLetter(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <p class="ps-2 ">${meals[i].strMeal}</p>
                </div>
              </div>
            </div>`
        
    }

    SearchRowMeals.innerHTML=container

    

 
   $('.meal').on('click',function(e){

    // console.log(meals[1]);
    console.log(this.id);
    $('.meals').addClass('d-none');
    displayDetailsSearchMeals(meals[this.id])
    console.log('hello');
   })

}

export function displayDetailsSearchMealsByFirstLetter(list){

    console.log(list.strTags);
  
    
    let container=`
    <div class="col-sm-4 text-white py-4">
                 <div class="img-details">
                   <img src="${list.strMealThumb}" alt="${list.strMeal}" class="w-100" />
                   <p class="p-details">${list.strMeal}</p>
                 </div>
               </div>
              <div class="col-sm-8 text-white py-4">
                <h3 class="Instructions">Instructions</h3>
                <p class="Instructions-details">
                  ${list.strInstructions}
                </p>

                <p class="catogery-size">
                  <span>Area :</span><span>${list.strArea                  }</span>
                </p>
                <p class="catogery-size">
                  <span>Category :</span><span>${list.strCategory}</span>
                </p>
                <p class="catogery-size">Recipes :</p>
                <div class="recipes">
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure1} Lentils</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure2} Onion</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure3} Carrots</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure4} Tomato Puree</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure5} Cumin</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure6} Paprika</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure7} Mint</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure8} Thyme</p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure9} Black Pepper
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure10} Red Pepper Flakes
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list.strMeasure11} Vegetable Stock
                  </p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure12} Water</p>
                  <p class="badge bage-recipes p-2 me-2">${list.strMeasure13}</p>
                </div>

                <p class="catogery-size">Tags :</p>
                <div class="tags mb-2">
                  <p class="p-2 badge bage-tags">${list.strTags}</p>
                </div>

                <button class="btn btn-success text-white">
                  <a target="_blank" href="${list.strSource}" class="text-decoration-none text-white">Source</a>
                </button>
                <button class="btn btn-danger text-white">
                  <a target="_blank" href="${list.strYoutube}" class="text-decoration-none text-white">Youtube</a>
                </button>
              </div>`

            

              SearchRowDetails.innerHTML=container
              if (list.strTags==null) {
                $('.tags').addClass('d-none')
            }
    
}








export function displaycatogery(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strCategoryThumb}" alt="${meals[i].strCategory}" />
                <div
                  class="home-detailes rounded-3 h-100 text-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <h3 class="ps-2 ">${meals[i].strCategory}</h3>
                  <h6 class="ps-2 ">${meals[i].strCategoryDescription}</h6>
                </div>
              </div>
            </div>`
        
    }
    console.log('thanks');

    catogerymeal.innerHTML=container

    

 
   $('.meal').on('click',function(e){


    
    console.log(this.id);
    $('.meals').addClass('d-none');
    mealDetails.addClass('d-none');
    $('.mealsCatogery').removeClass('d-none');
    getMealOfCatogery(meals[this.id].strCategory)
    console.log('hello');
   })

}




export function displayMealCatogery(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <p class="ps-2 ">${meals[i].strMeal}</p>
                </div>
              </div>
            </div>`
        
    }

    mealsCatogery.innerHTML=container

    

 
   $('.meal').on('click',function(e){

    // console.log(meals[1]);
    console.log(this.id);
    $('.meals').addClass('d-none');
    $('.mealsCatogery').addClass('d-none');
    
    getDetailesCatogeryWithId(meals[this.id].idMeal)
    
    console.log(meals[this.id]);
   })

}




export function displayDetailscaogery(list){

    console.log(list[0]);
  
    
    let container=`
    <div class="col-sm-4 text-white py-4">
                 <div class="img-details">
                   <img src="${list[0].strMealThumb}" alt="${list[0].strMeal}" class="w-100" />
                   <p class="p-details">${list[0].strMeal}</p>
                 </div>
               </div>
              <div class="col-sm-8 text-white py-4">
                <h3 class="Instructions">Instructions</h3>
                <p class="Instructions-details">
                  ${list[0].strInstructions}
                </p>

                <p class="catogery-size">
                  <span>Area :</span><span>${list[0].strArea                  }</span>
                </p>
                <p class="catogery-size">
                  <span>Category :</span><span>${list[0].strCategory}</span>
                </p>
                <p class="catogery-size">Recipes :</p>
                <div class="recipes">
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure1} Lentils</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure2} Onion</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure3} Carrots</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure4} Tomato Puree</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure5} Cumin</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure6} Paprika</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure7} Mint</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure8} Thyme</p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure9} Black Pepper
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure10} Red Pepper Flakes
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure11} Vegetable Stock
                  </p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure12} Water</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure13}</p>
                </div>

                <p class="catogery-size">Tags :</p>
                <div class="tags mb-2">
                  <p class="p-2 badge bage-tags">${list[0].strTags}</p>
                </div>

                <button class="btn btn-success text-white">
                  <a target="_blank" href="${list[0].strSource}" class="text-decoration-none text-white">Source</a>
                </button>
                <button class="btn btn-danger text-white">
                  <a target="_blank" href="${list[0].strYoutube}" class="text-decoration-none text-white">Youtube</a>
                </button>
              </div>`

            

              catogerydetails.innerHTML=container
              if (list[0].strTags==null) {
                $('.tags').addClass('d-none')
            }


          //   categories.on('click',function() {
    
              
              
              mealDetails.removeClass('d-none');
              meals.addClass('d-none');
              $('.mealsCatogery').addClass('d-none');
              
               

          // })
          
    
}










export function displayArea(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal text-center" id=${i}>
              <div class="home-icon ">
                  <i class="fa-solid fa-house-laptop fa-6x text-white"></i>
                  <h2 class="text-white">${meals[i].strArea}</h2>
                
              </div>
            </div>`
        
    }

    mealsAreaIcon.innerHTML=container

    

 
   $('.meal').on('click',function(e){


    
    console.log(this.id);
    $('.mealsarea').removeClass('d-none');
    $('.mealDetailsArea').addClass('d-none');
    $('.mealsAreaIcon').addClass('d-none');
    getMealOfArea(meals[this.id].strArea)
    console.log(meals[this.id].strArea);
   })

}




export function displayMealArea(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <p class="ps-2 ">${meals[i].strMeal}</p>
                </div>
              </div>
            </div>`
        
    }

    mealsarea.innerHTML=container

    

 
   $('.meal').on('click',function(e){

    // console.log(meals[1]);
    console.log(this.id);
    $('.mealsarea').addClass('d-none');
    $('.mealDetailsArea').removeClass('d-none');
    $('.mealsAreaIcon').addClass('d-none');
    
    getDetailesAreaWithId(meals[this.id].idMeal)
    
    console.log(meals[this.id]);
   })

}




export function displayDetailsArea(list){

    console.log(list[0]);
  
    
    let container=`
    <div class="col-sm-4 text-white py-4">
                 <div class="img-details">
                   <img src="${list[0].strMealThumb}" alt="${list[0].strMeal}" class="w-100" />
                   <p class="p-details">${list[0].strMeal}</p>
                 </div>
               </div>
              <div class="col-sm-8 text-white py-4">
                <h3 class="Instructions">Instructions</h3>
                <p class="Instructions-details">
                  ${list[0].strInstructions}
                </p>

                <p class="catogery-size">
                  <span>Area :</span><span>${list[0].strArea                  }</span>
                </p>
                <p class="catogery-size">
                  <span>Category :</span><span>${list[0].strCategory}</span>
                </p>
                <p class="catogery-size">Recipes :</p>
                <div class="recipes">
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure1} Lentils</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure2} Onion</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure3} Carrots</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure4} Tomato Puree</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure5} Cumin</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure6} Paprika</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure7} Mint</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure8} Thyme</p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure9} Black Pepper
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure10} Red Pepper Flakes
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure11} Vegetable Stock
                  </p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure12} Water</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure13}</p>
                </div>

                <p class="catogery-size">Tags :</p>
                <div class="tags mb-2">
                  <p class="p-2 badge bage-tags">${list[0].strTags}</p>
                </div>

                <button class="btn btn-success text-white">
                  <a target="_blank" href="${list[0].strSource}" class="text-decoration-none text-white">Source</a>
                </button>
                <button class="btn btn-danger text-white">
                  <a target="_blank" href="${list[0].strYoutube}" class="text-decoration-none text-white">Youtube</a>
                </button>
              </div>`

            

              areadetails.innerHTML=container
              if (list[0].strTags==null) {
                $('.tags').addClass('d-none')
            }

            $('.mealsarea').addClass('d-none');
            $('.mealsAreaIcon').addClass('d-none');
            $('.mealDetailsArea').removeClass('d-none');


    
}
















export function displayingredients(list) {
  console.log(list);
    
    let container = ``

    for (let i = 0; i < 25; i++) {
      console.log(list[i]);
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal text-center" id=${i}>
              <div class="home-icon ">
                  <i class="fa-solid fa-drumstick-bite fa-6x text-white"></i>
                  <h2 class="text-white">${list[i].strIngredient}</h2>
                  <h6 class="text-white">${list[i].strDescription.slice(0,70)}</h6>
                
              </div>
            </div>`
        
    }

    mealsingredientsIcon.innerHTML=container

    

 
   $('.meal').on('click',function(e){


    
    console.log(this.id);
    $('.mealsingredients').removeClass('d-none');
    $('.mealDetailsingredients').addClass('d-none');
    $('.mealsingredientsIcon').addClass('d-none');
    getMealOfingredients(list[this.id].strIngredient)
    console.log(list[this.id].strIngredient);
   })

}




export function displayMealingredients(meals) {
  console.log(meals);
    
    let container = ``

    for (let i = 0; i < meals.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6 mb-3 meal" id=${i}>
              <div class="home-img position-relative overflow-hidden">
                <img class="w-100 rounded-3" src="${meals[i].strMealThumb}" alt="${meals[i].strMeal}" />
                <div
                  class="home-detailes rounded-3 h-100 d-flex align-items-center position-absolute top-0 start-0 end-0 bottom-0"
                >
                  <p class="ps-2 ">${meals[i].strMeal}</p>
                </div>
              </div>
            </div>`
        
    }

    mealsingredients.innerHTML=container

    

 
   $('.meal').on('click',function(e){

    // console.log(meals[1]);
    console.log(this.id);
    $('.mealsingredients').addClass('d-none');
    $('.mealDetailsingredients').removeClass('d-none');
    $('.mealsingredientsIcon').addClass('d-none');
    
    getDetailesingredientsWithId(meals[this.id].idMeal)
    
    console.log(meals[this.id]);
   })

}




export function displayDetailsingredients(list){

    console.log(list[0]);
  
    
    let container=`
    <div class="col-sm-4 text-white py-4">
                 <div class="img-details">
                   <img src="${list[0].strMealThumb}" alt="${list[0].strMeal}" class="w-100" />
                   <p class="p-details">${list[0].strMeal}</p>
                 </div>
               </div>
              <div class="col-sm-8 text-white py-4">
                <h3 class="Instructions">Instructions</h3>
                <p class="Instructions-details">
                  ${list[0].strInstructions}
                </p>

                <p class="catogery-size">
                  <span>ingredients :</span><span>${list[0].stringredients                  }</span>
                </p>
                <p class="catogery-size">
                  <span>Category :</span><span>${list[0].strCategory}</span>
                </p>
                <p class="catogery-size">Recipes :</p>
                <div class="recipes">
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure1} Lentils</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure2} Onion</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure3} Carrots</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure4} Tomato Puree</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure5} Cumin</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure6} Paprika</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure7} Mint</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure8} Thyme</p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure9} Black Pepper
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure10} Red Pepper Flakes
                  </p>
                  <p class="badge bage-recipes p-2 me-2">
                    ${list[0].strMeasure11} Vegetable Stock
                  </p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure12} Water</p>
                  <p class="badge bage-recipes p-2 me-2">${list[0].strMeasure13}</p>
                </div>

                <p class="catogery-size">Tags :</p>
                <div class="tags mb-2">
                  <p class="p-2 badge bage-tags">${list[0].strTags}</p>
                </div>

                <button class="btn btn-success text-white">
                  <a target="_blank" href="${list[0].strSource}" class="text-decoration-none text-white">Source</a>
                </button>
                <button class="btn btn-danger text-white">
                  <a target="_blank" href="${list[0].strYoutube}" class="text-decoration-none text-white">Youtube</a>
                </button>
              </div>`

            

              ingredientsdetails.innerHTML=container
              if (list[0].strTags==null) {
                $('.tags').addClass('d-none')
            }

            $('.mealsingredients').addClass('d-none');
            $('.mealsingredientsIcon').addClass('d-none');
            $('.mealDetailsingredients').removeClass('d-none');


    
}











