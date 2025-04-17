import React, { useEffect, useState } from "react";
import API from "../API";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await API.get("/getNoteHist", {
          withCredentials: true,
        });
        setNotes(response.data.data);
      } catch (err) {
        console.error("Error fetching Notes", err);
        toast.error("Error fetching notes");
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 px-4 py-16 sm:px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          📝 Your Notes
        </h1>

        {notes.length === 0 ? (
          <div className="text-center text-gray-600 mt-24">
            <p className="text-lg">You haven't written any notes yet.</p>
            <p className="text-sm mt-2">Click the button below to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.slice().reverse().map((note, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">{note.title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-wrap">{note.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Button */}
      <button
        onClick={() => navigate("/create")}
        className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300 flex items-center gap-2"
      >
        <PlusCircle size={20} />
        Create Note
      </button>
    </div>
  );
};

export default Dashboard;
