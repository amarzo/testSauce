// conf.js
var username = "Cyborg",
    accessKey = "83006b9b-f79e-4f60-8866-0c9ed66eecac";
exports.config = {
    framework: 'jasmine',

    sauceUser: 'amarzo',
    sauceKey: 'e00ecff9-37ce-4590-a0e4-ccf10610bcf9',

     specs: [
        //TODO: add here other suites
        './exercise1/calculator.solution.js',
        './exercise2/todo.solution.js'
    ],

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
    }

};
