import React, {useState} from 'react'
import API from '../API'
import Button from './Button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateNote = () => {

    const [note, setNote] = useState({title: "", content: ""})
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        e.preventDefault();
        setNote({...note, [e.target.name]: e.target.value})
    }

    const clearStuff = () => {
        let temp = {title: "", content: ""}
        setNote(temp);
    }

    const handleSubmit = async () => {
        try {
            const res = await API.post("/note", note);
            console.log(res.data)
            clearStuff();
            toast.success(res.data.message);
        } catch (error) {
            console.log("Error while creating the Note")
            toast.error(error.response?.data?.message || "Note creation Failed");
        }
    }

  return (
    <div className="flex flex-col w-full min-h-screen p-[100px] bg-purple-300 gap-y-[50px]">
        <h1 className="text-3xl font-bold mb-4">Create Your Notes here</h1>
        <input onChange={handleChange} value={note.title} className='bg-white rounded-lg p-[5px]' placeholder='Title' type="text" name='title'/>
        <input onChange={handleChange} value={note.content} className='bg-white rounded-lg p-[5px] ' type="text" placeholder='Content' name='content' />
        <Button fxn={handleSubmit} name="Create" />
        <button onClick={() => navigate('/dashboard')} 
            className='px-[10px] w-fit py-[5px] rounded-lg border-[2px] text-black bg-red-400 hover:bg-red-600 transition-all duration-500 border-black'
            >Dashboard</button>
    </div>
  )
}

export default CreateNote