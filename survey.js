// Profile Generator

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const answers = {};

rl.question('What would your profile name be?', (answer1) => {
  answers.name = answer1;

  rl.question('What is an activity you like doing??', (answer2) => {
    answers.activity = answer2;

    rl.question('What do you listen to while doing that?', (answer3) => {
      answers.listen = answer3;

      rl.question('Which meal is your favourite, eg: dinner, brunch, etc.?', (answer4) => {
        answers.meal = answer4;

        rl.question('What is your favourite thing to eat for that meal?', (answer5) => {
          answers.food = answer5;

          rl.question('Which sport is your absolute favourite?', (answer6) => {
            answers.sport = answer6;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              answers.superpower = answer7;

              rl.close();

              console.log(`Hi there, welcome to my profile, this is ${answers.name}. 
                          One of the things I enjoy doing is ${answers.activity}~
                          If you like listen to ${answers.listen} like I do, why not do both at the same time~!
                          Meals === Food, who doesn't like food. Umm..
                          I prefer ${answers.meal} over other meals, and my favourtie go-to is ${answers.food}. 
                          What do we have next? Sport! Hmmm..
                          I like ${answers.sport}. 
                          Everyone has superpower, and mine is ${answers.superpower}. Voila~! Here's my profile. Nice to meet you~! :)`)

            })

          })

        })

      })

    })

  })

});



