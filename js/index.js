/// <reference types="../@types/jquery" />

import { displayMealArea, displayMainMeals ,displaySearchMeals ,displaySearchMealsByFirstLetter ,displaycatogery,displayMealCatogery ,displayDetailscaogery,displayArea ,displayDetailsArea,displayingredients,displayMealingredients,displayDetailsingredients} from "./ui.js";

const nameInput=document.getElementById('nameInput');
const emailInput=document.getElementById('emailInput');
const phoneInput=document.getElementById('phoneInput');
const ageInput=document.getElementById('ageInput');
const passwordInput=document.getElementById('passwordInput');
const repasswordInput=document.getElementById('repasswordInput');
const msgName=document.getElementById('msgName');
const msgEmail=document.getElementById('msgEmail');
const msgPhone=document.getElementById('msgPhone');
const msgAge=document.getElementById('msgAge');
const msgPassword=document.getElementById('msgPassword');
const msgRepassword=document.getElementById('msgRepassword');
const btnSubmit=document.getElementById('btnSubmit');






async function getMainMeals() {

    try {
        

        $('.loading-screen').removeClass('d-none');
        


        let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

    let data = await response.json()

    // console.log(data);
    $('.contact').addClass('d-none');
    displayMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }

    
}


getMainMeals()



async function getSeacrchMeals(meal) {

   try {
        $('.loading-screen').removeClass('d-none');

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);

    let data = await response.json()

    // console.log(data);

    displaySearchMeals(data.meals);
    console.log('search');
    // displayDetailsMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');
    
   } catch (error) {
    console.error(error)
   }
}



async function getSeacrchMealsByFirstLetter(meal) {

    try {
                $('.loading-screen').removeClass('d-none');

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`);

    let data = await response.json()

    // console.log(data);

    displaySearchMealsByFirstLetter(data.meals);
    // displayDetailsMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }
}



export async function getcatogery() {

   try {
            $('.loading-screen').removeClass('d-none');


    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

    let data = await response.json()

    // console.log(data);

    displaycatogery(data.categories);
    $('.loading-screen').addClass('d-none');
    // displayDetailsMainMeals(data.meals);

   } catch (error) {
    console.error(error);
   }
}


export async function getMealOfCatogery(meal) {

    try {
                $('.loading-screen').removeClass('d-none');


        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);

    let data = await response.json()

    // console.log(data);

    displayMealCatogery(data.meals);
    // displayDetailsMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }
}



export async function getDetailesCatogeryWithId(meal) {

    try {
        $('.loading-screen').removeClass('d-none');



        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);

    let data = await response.json()

    // console.log(data);

    displayDetailscaogery(data.meals);
    // displayDetailsMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');


    } catch (error) {
        console.error(error);
    }
}





export async function getarea() {

   try {
        $('.loading-screen').removeClass('d-none');


    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

    let data = await response.json()

    // console.log(data);

    displayArea(data.meals);
    // displayDetailsMainMeals(data.meals);

    $('.loading-screen').addClass('d-none');


   } catch (error) {
    console.error(error);
   }
}






export async function getMealOfArea(meal) {

    try {
        $('.loading-screen').removeClass('d-none');


        
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${meal}`);

    let data = await response.json()

    // console.log(data);

    displayMealArea(data.meals);
    // displayDetailsMainMeals(data.meals);

    $('.loading-screen').addClass('d-none');


    } catch (error) {
        console.error(error);
    }
}







export async function getDetailesAreaWithId(meal) {

    try {
                $('.loading-screen').removeClass('d-none');


        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);

    let data = await response.json()

    // console.log(data);

    displayDetailsArea(data.meals);
    // displayDetailsMainMeals(data.meals);

    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }
}










export async function getingredients() {

    try {
                $('.loading-screen').removeClass('d-none');


        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);

    let data = await response.json()

    // console.log(data.meals);

    // for (let i = 0; i < 25; i++) {
        // console.log(data.meals[i]);
        displayingredients(data.meals);
    // }

    
    // displayDetailsMainMeals(data.meals);
    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }
}






export async function getMealOfingredients(meal) {

    try {
                $('.loading-screen').removeClass('d-none');

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);

    let data = await response.json()

    console.log(data);

    displayMealingredients(data.meals);
    $('.loading-screen').addClass('d-none');

    } catch (error) {
        console.error(error);
    }
    
}







export async function getDetailesingredientsWithId(meal) {

    try {
                $('.loading-screen').removeClass('d-none');


        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`);

    let data = await response.json()

    console.log(data);

    displayDetailsingredients(data.meals);
    $('.loading-screen').addClass('d-none');
    // displayDetailsMainMeals(data.meals);

    } catch (error) {
        console.error(error);
    }
}









$('#search').on('click',function() {
    $('.home').addClass('d-none');
    $('.searchCatogery').removeClass('d-none');
    $('.catogery').addClass('d-none');
    $('.area').addClass('d-none');
    $('.ingredients').addClass('d-none');
    $('.contact').addClass('d-none');
    $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
    $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
    
})



$('#searchName').on('input',function(){
    getSeacrchMeals($('#searchName').val())

    $('.searchCatogery .mealDetails').addClass('d-none');
    $('.searchCatogery .meals').removeClass('d-none');

    // console.log($('#searchName').val());
})


$('#searchFirstLetter').on('input',function(){
    getSeacrchMealsByFirstLetter($('#searchFirstLetter').val())
    $('.searchCatogery .mealDetails').addClass('d-none');
    $('.searchCatogery .meals').removeClass('d-none');
    // console.log($('#searchName').val());
})

// export let categories =$('#categories');
 $('#categories').on('click',function() {

    $('.home').addClass('d-none');
    $('.searchCatogery').addClass('d-none');
    $('.catogery').removeClass('d-none');
    $('.area').addClass('d-none');
    $('.ingredients').addClass('d-none');
    $('.contact').addClass('d-none');
    $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
    $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
    getcatogery();
    $('.mealDetails').addClass('d-none')
    $('.mealsCatogery').addClass('d-none')
    $('.meals').removeClass('d-none')

    // linkCatogery()
})


// export function linkCatogery(){
//     $('.home').addClass('d-none');
//     $('.searchCatogery').addClass('d-none')
    
//     $('.catogery').removeClass('d-none')
   

    
//     
// }


export let mealDetails = $('.mealDetails');
export let meals = $('.meals');




$('#area').on('click',function() {
    $('.home').addClass('d-none');
    $('.searchCatogery').addClass('d-none');
    $('.catogery').addClass('d-none');
    $('.area').removeClass('d-none');
    $('.ingredients').addClass('d-none');
    $('.contact').addClass('d-none');


    $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
    $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
    getarea();


    $('.mealsarea').addClass('d-none')
    $('.mealDetailsArea').addClass('d-none')
    $('.mealsAreaIcon').removeClass('d-none')


})




$('#ingredients').on('click',function() {
    $('.home').addClass('d-none');
    $('.searchCatogery').addClass('d-none');
    $('.catogery').addClass('d-none');
    $('.area').addClass('d-none');
    $('.ingredients').removeClass('d-none');
    $('.contact').addClass('d-none');
    
    $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
    $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
    getingredients();

    $('.mealsingredients').addClass('d-none')
    $('.mealDetailsingredients').addClass('d-none')
    $('.mealsingredientsIcon').removeClass('d-none')

})



$('#contact').on('click',function() {
    $('.home').addClass('d-none');
    $('.searchCatogery').addClass('d-none');
    $('.catogery').addClass('d-none');
    $('.area').addClass('d-none');
    $('.ingredients').addClass('d-none');
    $('.contact').removeClass('d-none');

    
    $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
    $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
  
})

function validName() {
    let regex=/^[a-zA-Z]*$/;
    let text = nameInput.value;

    if (regex.test(text)===true) {
        
        msgName.classList.replace('d-block','d-none');
        return true
    }else{
        
        msgName.classList.replace('d-none','d-block');
    }
    
}

nameInput.addEventListener('input', function () {
    validName();
});


function validEmail() {
    let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    let text = emailInput.value;

    if (regex.test(text)===true) {
        
        msgEmail.classList.replace('d-block','d-none');
        return true
    }else{
        
        msgEmail.classList.replace('d-none','d-block');
    }
    
}

emailInput.addEventListener('input', function () {
    validEmail();
    
});


function validPhone() {
    let regex=/^01[0125][0-9]{8}$/;
    let text = phoneInput.value;

    if (regex.test(text)===true) {
        
        msgPhone.classList.replace('d-block','d-none');
        return true
    }else{
        
        msgPhone.classList.replace('d-none','d-block');
    }
    
}

phoneInput.addEventListener('input', function () {
    validPhone();
    
});


function validAge() {
    let regex=/^(?:1[01][0-9]|120|[1-9]?[0-9])$/;
    let text = ageInput.value;

    if (regex.test(text)===true) {
        
        msgAge.classList.replace('d-block','d-none');
        return true
        
    }else{
        
        msgAge.classList.replace('d-none','d-block');
    }
    
}

ageInput.addEventListener('input', function () {
    validAge();
    
});


function validPassword() {
    let regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let text = passwordInput.value;

    if (regex.test(text)===true) {
        
        msgPassword.classList.replace('d-block','d-none');
    return true
    }else{
        
        msgPassword.classList.replace('d-none','d-block');
    }
    
}

passwordInput.addEventListener('input', function () {
    validPassword();
    
});



function validRepassword() {
    
if (passwordInput.value===repasswordInput.value) {
    msgRepassword.classList.replace('d-block','d-none');
    return true
}else{
    msgRepassword.classList.replace('d-none','d-block');
}


}


repasswordInput.addEventListener('input', function () {
    validRepassword();
    btnSubmitt()
    
});


 function btnSubmitt() {
    if (validName(true) && validEmail(true) && validPhone(true) && validAge(true) && validPassword(true) && validRepassword(true)) {
        btnSubmit.classList.replace('disabled','d-block');
        
    }
    else{
        btnSubmit.classList.add('disabled');
        
    }
}

const widthSideBar = $('.sideBar').css('marginLeft');


    


console.log(widthSideBar);

console.log();
$('.sideBar-X-icon').on('click',function(){


    if ($('.sideBar').css('marginLeft')<'0px') {
        $('.sideBar').animate({marginLeft:0},500);
        $('.icon-list').addClass('d-none');
        $('.icon-x').removeClass('d-none');
        // $('li').animate({top:'0px'},500)
        $('#searchh').animate({top:'0px'},100,function(){
            $('#categoriess').animate({top:'0px'},100,function(){
                $('#areaa').animate({top:'0px'},100,function(){
                    $('#ingredientss').animate({top:'0px'},100,function(){
                        $('#contactt').animate({top:'0px'},100)
                    })
                })
            })
        })
        
        
        
        console.log('dd');
        console.log(widthSideBar);
    }else{
        $('.sideBar').animate({marginLeft:`${widthSideBar}`},500)
        console.log('rr');
        $('.icon-x').addClass('d-none');
        $('.icon-list').removeClass('d-none');
        $('li').animate({top:'300px'},200)
        
       
    }

        
})



// $('.sideBar').animate({marginLeft:`-${widthSideBar}`})

// $(function(){
//     $('.loading').slideUp(1000,function(){
//         $('body').css('overflow','auto')
//     })
    
    
// })

document.addEventListener('DOMContentLoaded',function(){
    
        $('body').addClass('overflow-auto')

    
})