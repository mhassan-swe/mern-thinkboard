
import Note from "../../models/Note.js";

// to get all the notes at once
 export  const getAllNotes =async (req,res)=>{
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
        
    }
    catch(error){
        console.log("Error in getAllnotes controller:",error);
        res.status(500).json({message:"Internal server error"});
    }
}
 

// to get a notes by it's id
export  const getNotesById =async (req,res)=>{
    try{
        const notesById = await Note.findById(req.params.id);
        if(!notesById){
            res.status(404).json({message:"Note not found"});
        }
        res.status(200).json({message:"desired note get fetched", notesById});

    }
    catch(error){
        console.log("Error in getAllnotes controller:",error);
        res.status(500).json({message:"Internal server error"});
    }
}


// create a new note 
export const createNote = async(req,res)=>{
    try{
        const{title,content} = req.body;
        console.log(title,content);
        const newNote = new Note({title,content});

       const savedNote = await newNote.save();

        res.status (201).json(savedNote);

    }
    catch(error){
        console.log ("Error in createNote controller:",error);
        res.status(500).json({message:"Internal server error"});
    }   
};

// update notes
export const updateNote = async(req,res)=>{

    try{
        const {title,content}=req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!updatedNote){
            res.status(404).json({message:"Note not found"});
        } 
        res.status(200).json({message:"Note updated successfully"});
    }
    catch(error){
        console.log ("Error in updatedNote controller:",error);
        res.status(500).json({message:"Internal server error"});
    }
}

// delete notes
export const deleteNote =async (req,res)=>{

    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
           if(!deletedNote){
            res.status(404).json({message:"Note not found"});
        } 
        res.status(200).json({message:"Note deleted successfully"});
    }
    catch(error){

        console.log ("Error in deleteNote controller:",error);
        res.status(500).json({message:"Internal server error"});

    }
    
}

