import React, { useState } from 'react';
import API from '../API';
import Button from './Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const clearStuff = () => {
    setNote({ title: "", content: "" });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post("/note", note);
      console.log(res.data);
      clearStuff();
      toast.success(res.data.message || "Note created successfully!");
    } catch (error) {
      console.log("Error while creating the Note");
      toast.error(error.response?.data?.message || "Note creation failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-violet-200 flex justify-center items-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl flex flex-col gap-y-6">
        <h1 className="text-3xl font-bold text-purple-800 text-center mb-4">Create Your Note</h1>

        <input
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          type="text"
          name="title"
          className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />

        <textarea
          onChange={handleChange}
          value={note.content}
          placeholder="Write your note content here..."
          name="content"
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-purple-300 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          required
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <Button
            fxn={handleSubmit}
            name="Create Note"
            clr="#a855f7"
            trans="hover:bg-purple-600 hover:text-white transition duration-300 font-semibold"
          />

          <button
            onClick={() => navigate('/dashboard')}
            className="text-purple-700 border border-purple-300 rounded-lg px-4 py-2 hover:bg-purple-100 transition duration-300 font-medium"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
