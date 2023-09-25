

// // Task: Build a command-line tool that asks users for their movie preferences (genre, year, actor) and uses the OMDB API to 
// //          recommend movies based on their input.
// // // NPM Modules: axios for making API requests, inquirer for user input. (https://github.com/SBoudrias/Inquirer.js)






import axios from "axios";
import inquirer from "inquirer";

const omdbUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=a15814c4`;



 

const askPreferences = [

  {
    type: "input",
    name: "title",
    message: " preferred Movie title",
  },

  {
    type: "input",
    name: "year",
    message: "  release year",
  },

];

 

const fetchMovies = (preferences) => {

  axios.get(omdbUrl
    
     , {

       params: {
    
      y: preferences.year,   
      s:preferences.title

       },

     }
    
    )

    .then((response) =>
      response.data ? console.log(response.data) : console.log("No movies found for your preferences")
    )
    
};


inquirer.prompt(askPreferences)

  .then((preferences) => {
  fetchMovies(preferences);

  })

  .catch((error) => {

    console.log(error);

  });
 




















// const { squareNumber,  addNumber  } = require('./calculator');

// //console.log(calculateMethods);

// const squareResponse = squareNumber(2);
// console.log(`Square Response :-${squareResponse}`);

// const addResponse = addNumber(2,5);
// console.log(`Add Response :-${addResponse}`);








// retrevie data from db 
// process data 
// send email 


// processData = (cb)=>{

//     setTimeout(()=>{
//         console.log(2)
//      cb()
    
//     },1000
//     )

// }


// function sendEmail(){
//     console.log(3**2)
// }

// processData(sendEmail)


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


 






