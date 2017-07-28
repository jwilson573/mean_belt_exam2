let mongoose = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        minlength: [8, "Question must be at least 8 characters"],
        required: [true, "Question cannot be blank"],
    },
    option1: {
        type: Object,
        required: [true, " Option cannot be blank"],
        minlength: [3, "- Option must be at least 3 characters -"],
        
    },
    opt1Votes: {
            type: Number,
            default: 0
    },
    option2: {
        type: Object,
        required: [true, " Option cannot be blank"],
        minlength: [3, "- Option must be at least 3 characters -"],
        votes: {
            type: Number,
            default: 0
        }
    },
    opt2Votes: {
            type: Number,
            default: 0
    },
    option3: {
        type: Object,
        required: [true, " Option cannot be blank"],
        minlength: [3, "- Option must be at least 3 characters -"],
        votes: {
            type: Number,
            default: 0
        }
    },
    opt3Votes: {
            type: Number,
            default: 0
    },
    option4: {
        type: Object,
        required: [true, " Option cannot be blank"],
        minlength: [3, "- Option must be at least 3 characters -"],
        votes: {
            type: Number,
            default: 0
        }
    },
    opt4Votes: {
            type: Number,
            default: 0
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

mongoose.model("Question", QuestionSchema);