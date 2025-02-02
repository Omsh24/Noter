import { asyncHandler } from "../utilis/asyncHandler.js"
import { Note } from "../models/note.model.js"
import { ApiError } from "../utilis/ApiError.js"
import { ApiResponse } from "../utilis/ApiResponse.js"
import { User } from "../models/user.model.js"

const createNote = asyncHandler( async (req, res) => {
    const { title, content } = req.body;

    const titlecheck = (title?.trim() === "")
    const contentcheck = (content?.trim() === "")

    if(titlecheck || contentcheck){
        throw new ApiError(401, "Title and content can not be null");
    }

    const existingNote = await Note.findOne({ title, user: req.user._id });
    if (existingNote) {
        throw new ApiError(400, "A note with this title already exists");
    }

    const note = await Note.create({
        title,
        content,
        user: req.user._id
    })

    await User.findByIdAndUpdate(req.user._id, {
        $push: {
            noteHistory: {
                noteId: note._id,
                title: note.title,
                content: note.content,
                createdAt: Date.now()
            }
        }
    })

    if(!note){
        throw new ApiError(402, "Note cannot be created")
    }

    return res.status(201).json(
        new ApiResponse(200, note, "Note created Successfully")
    )
} )

const getNotes = asyncHandler( async (req, res) => {
    const note = await Note.find({ user: req.user._id });

    return res.status(201).json(
        new ApiResponse(200, note, "Note fetched Successfully")
    )
} )



export {
    createNote,
    getNotes
}
