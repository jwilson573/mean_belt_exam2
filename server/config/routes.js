let path = require('path');
let Users = require('./../controllers/users');
let Questions = require('./../controllers/questions');



module.exports = function(app){

      //Users
    app.post('/users', Users.create);

    //Questions
    console.log(Questions);
    app.get('/questions', Questions.index);
    app.post('/new_question', Questions.create);
    app.get('/question/:id', Questions.show);

    app.put('/poll_/:id', Questions.upVote)



    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })





}

