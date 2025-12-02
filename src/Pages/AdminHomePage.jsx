import React from 'react'
import AdminSideBar from '../Components/AdminSideBar'
import { useState } from "react";
import { Label, TextInput, Textarea, Button, FileInput } from "flowbite-react";
function AdminHomePage() {

     const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);

  const addSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };
  return (
    <>
{/* side bar */}

<div className='flex'>
    <div>
        <AdminSideBar/>
        </div>
 <div className="w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
       <h2 className="text-xl font-semibold mb-2">Edit  </h2>

         {/* PROFILE PIC */}
      <div className="text-center mb-6">
        <img
          src={"https://img.freepik.com/free-photo/businessman-curly-haired-young-businessman-blue-shirt_259150-58623.jpg?semt=ais_hybrid&w=740&q=80"}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover  border mb-3"
        />

        <div className="flex flex-col items-center">
          <Label htmlFor="profilePic" value="Upload Profile Picture" />
          <FileInput
            id="profilePic"
            onChange={""}
            accept="image/*"
            className="mt-2"
          />
        </div>
      </div>

      {/* Editable Inputs */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <Label htmlFor="name" value="Your Name" />
          <TextInput
            id="name"
            name="name"
            placeholder="John Doe"
       
          />
        </div>

        {/* Title */}
        <div>
          <Label htmlFor="title" value="Your Title" />
          <TextInput
            id="title"
            name="title"
            placeholder="Frontend Developer"
          
          />
        </div>

        {/* One-line Bio */}
        <div>
          <Label htmlFor="bio" value="One-line Bio" />
          <TextInput
            id="bio"
            name="bio"
            placeholder="Passionate developer specializing in React."
        
          />
        </div>
      </div>

    

      <hr className="my-6" />

      {/* ABOUT SECTION */}
      <div>
        <h2 className="text-xl font-semibold mb-2">About Me</h2>

        {/* First Line */}
        <TextInput
          placeholder="Write a short intro line"
          className="mb-3"
        />

        {/* Paragraph */}
        <Textarea
          rows={4}
          placeholder="Write a detailed about me paragraph..."
        />
      </div>

      <hr className="my-6" />

      {/* SKILLS SECTION */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>

        {/* Skill Input */}
        <div className="flex items-center gap-2">
          <TextInput
            placeholder="Enter a skill (e.g., React)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />

          <Button onClick={addSkill}>
            Add
          </Button>
        </div>

        {/* Skill List */}
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="text-red-500 hover:text-red-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>

</div>




 
   </>
  )
}

export default AdminHomePage