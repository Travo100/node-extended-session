var inquirer = require('inquirer');
var weather = require('weather-js');
var moment = require('moment');

function userConfirm() {
    inquirer.prompt([
        {
            "type": "confirm",
            "message": "Would search again?",
            "name": "again"
        }
    ]).then(function(answers){
        if(answers.again) {
            askQuestions();
        } else {
            console.log("Good bye!");
        }
    });
}

function askQuestions() {
    inquirer.prompt([
        {
            "type": "list",
            "message": "Would you like to check the time or the weather?",
            "name": "weatherOrTime",
            "choices": ["time", "weather"]
        }
    ]).then(function (answers) {
        // if our user picks the weather show the weather data
        if (answers.weatherOrTime === "weather") {
            inquirer.prompt([
                {
                    "type": "input",
                    "message": "What city do you want to look for the weather in?",
                    "name": "city"
                }
            ]).then(function (answers) {
                // console.log("show the weather")
                weather.find({ search: answers.city, degreeType: 'F' }, function (err, result) {
                    if (err) console.log(err);
                    console.log("The weather in " + result[0].location.name + " is currently " + result[0].current.skytext + " and " + result[0].current.temperature + " degrees.");
                    userConfirm();
                });
            });

        } else {
            // if they pick the time show the current time to the user
            console.log(moment().format("h:mm:ss a"));
            userConfirm();
        }
    }).catch(function (error) {
        console.log(error);
    });
}

askQuestions();