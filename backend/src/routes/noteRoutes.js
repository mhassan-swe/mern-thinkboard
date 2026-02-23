import express from "express";
import {getAllNotes,getNotesById,createNote,updateNote,deleteNote} from "../controllers/notesController.js";
const route = express.Router();


// When someone visits "/api/notes", send them a message with the notes count
route.get("/",getAllNotes);

route.get("/:id",getNotesById);

route.post("/",createNote);

route.put("/:id",updateNote);

route.delete("/:id",deleteNote);

export default route;