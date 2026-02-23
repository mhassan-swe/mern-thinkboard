import mongoose from "mongoose";

// 1 create a schema for note
//2 model of that schema


// define the structure of your model 
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type : String,
        required:true
    },

},
{timestamps:true} // createdAt,updatedAt
);

const Note = mongoose.model("Note",noteSchema); // model will be use to interact with database

export default Note;