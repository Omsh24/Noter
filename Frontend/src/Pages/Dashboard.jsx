// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import API from "../API";
import Button from "../Components/Button";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

    function rev(){
        let temp = [...notes];
        temp.reverse()
        setNotes(temp)
    }

  // Fetch the user's noteHistory when the component mounts
  useEffect(() => {
    const fetchNotes = async () => {
        try {
            const response = await API.get("/getNoteHist", {
                withCredentials: true, 
            });
            console.log(response);
            setNotes(response.data.data); 
        } catch (err) {
            console.log("Error fetching Notes", err);
            toast.error("Error fetching notes");
        }   
    };
    fetchNotes();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen p-[100px] bg-green-200">
      <h1 className="text-3xl font-bold mb-4">Your Notes</h1>
      {
        notes.length === 0 
        ?   <p className="text-gray-500">No notes found</p>
        :   (
                <ul className="flex flex-col gap-y-10">
                    {
                        notes.slice().reverse().map((note, index) => (
                            <li key={index} className="bg-white p-4 shadow-md rounded-lg">
                                <h3 className="text-xl font-semibold">{note.title}</h3>
                                <p className="text-gray-700">{note.content}</p>
                            </li>
                        ))
                    }
                </ul>
            )
      }
      <Button navto="create" name="Create New Note" para="fixed bottom-10 left-[40%]" trans="hover:bg-green-700 hover:font-white transition:all duration-300" clr="#0ab71b" />
    </div>
  );
};

export default Dashboard;
