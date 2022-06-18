//Get All necessary element 

const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dataOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput=document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit')
const cities = document.querySelectorAll('.city');

//defaut city --> when the page loads
let cityInput="London";

//Add click event to each city in the panel
cities.forEach((city) => {
    city.addEventListener ('click',(e) =>{
        //change from default city to the cliked one
        cityInput=e.target.innerHTML;
        //Function that fetches and displays all the data from the weather API 
        fetchWheaterData();
        //fade out the app (simple animation)
        app.style.opacity = "0";
    });
})

//Add submit event to the form
form.addEventListener('submit',(e) =>{
    //if the input field (search bar) is empty throw an alert
    if(search.value.length == 0){
        alert('Please type in a city name');
    }
    else{
        // change from default City to the one written in the input field
        cityInput.search.value;
        //Function that fetches and displays all the data from the wheather API-- Will write still learning
        fetchWheaterData();
        //remove all text from the input field
        search.value="";
        //fade out the app (simple animation)
        app.style.opacity = "0";
    }

    //Prevent the default behaviour of the form
    e.preventDefault();
});

//Function that returns a day of the week (m-t-w-th-f) from a date -- keep it mind that u will use it later ---again
function dayOfTheWeek(day,month,year){
    const weekday =[
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
    ];

    return weekday [new Date (`${day}/${month}/${year}`).getDate()];
};

//Function that fetches and displays the data from the wheater API

function fetchWheaterData(){

    // Fetch the data  and dynamicaly add the city name with template literals
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=50aed889c82e5f3f3664084f29d0ab1a=${cityInput}`)
    
    //Convert it to regular JS Object
    .then(response => response.json())
    .then(data =>)

}