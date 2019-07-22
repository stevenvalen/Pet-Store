const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/beltexam");

var SkillSchema = new mongoose.Schema({
    skill: { type: String },
    skill: { type: String },
    skill: { type: String }
})

var PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Pet must have a name!"],
        minlength: [3, "Need more info!" ],
        unique: [true, "This pet is already registered, please enter another name!"], 
        dropDups: true },
    type: { 
        type: String, 
        required: [true, "Pet must have a type!"], 
        minlength: [3, "Need more info!"], 
    },
    description: { 
        type: String, 
        required: [true, "Please provide a description for your pet!"], 
        minlength: [3, "Need more info!"], 
    },
    likes: { 
        type: Number, 
        default: 0 },
    skills: [SkillSchema],
}, { timestamps: true }, { strict: true });

module.exports = mongoose.model("Pet", PetSchema);

