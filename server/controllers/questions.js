let mongoose = require('mongoose');

let Question = mongoose.model('Question');
let User = mongoose.model('User');

class QuestionsController {

    create(req, res){
        console.log(req.body);
        Question.create(req.body, (err, question) => {
            
            if(err) { return res.json(err) }
            User.findByIdAndUpdate(req.body.user, {$push: { questions: question._id,  }}, { new: true }, (err, user) => {
                if(err){
                    return res.json(err)
                }
                return res.json(question);
            })
        })

    }

    index(req, res){
        Question.find({})
        .populate('user')
        .exec((err, questions) => {
            if(err){
                return res.json(err);
            }
            return res.json(questions);
        })
    
    }

    show(req, res){
        Question.findById(req.params.id)
        
        .populate('user')
        .exec((err, question) => {
            if(err){return res.json(err)}
            return res.json(question)
        })
    }

    upVote(req, res){
        Question.findByIdAndUpdate(req.params.id, { $inc: { option1, option2, option3, option4: {votes: 1 }}}, { new: true }, (err, answer) => {
            if(err){ return res.json(err) };
            return res.json(answer);
        })
    }
       
    


}

module.exports = new QuestionsController()