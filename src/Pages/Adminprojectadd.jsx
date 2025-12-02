import { useState } from "react";
import { Label, TextInput, Select, Textarea, FileInput, Button } from "flowbite-react";
import AdminSideBar from "../Components/AdminSideBar";
import { addprojectsAPI } from "../services/allAPIs";

function Adminprojectadd() {
     const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    projectStatus: "",
    projectType: "",
    attachments: null,
    skills:[]
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Project Form Data:", formData);
  // };

  const [tag, setTag] = useState("");
const [tags, setTags] = useState([]);

// Add a tag
const addTag = () => {
  if (tag.trim() !== "") {
    const newTag = tag.trim();

    // Update tags for UI
    setTags(prev => [...prev, newTag]);

    // Update skills in formData
    setFormData(data => ({
      ...data,
      skills: [...data.skills, newTag]
    }));

    setTag(""); // clear input
  }
};

// Remove a tag
const removeTag = (removeIndex) => {
  setTags(prev => prev.filter((_, i) => i !== removeIndex));

  setFormData(data => ({
    ...data,
    skills: data.skills.filter((_, i) => i !== removeIndex)
  }));
};

// console.log( tags);
// console.log( formData);

// Add data 

const Addproject = async () => {
  try {
    const response = await addprojectsAPI(formData); 
    console.log(response);
  } catch (error) {
    console.error("Error adding project:", error);
  }
};
  return (
    <>

  <div className="w-full flex">
       <div className="w-50"> <AdminSideBar/>   </div>
        
          <div className="w-full p-6 bg-white shadow-lg rounded-lg mt-3 ml-15" >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Project Details Form</h2>
    
          <form onSubmit={Addproject} className="space-y-5">
    
            {/* Project Name */}
            <div>
              <Label htmlFor="projectName" value="Project Name" />
              <TextInput
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                onChange={handleChange}
                required
              />
            </div>
    
            {/* Project Description */}
            <div>
              <Label htmlFor="projectDescription" value="Project Description" />
              <Textarea
                id="projectDescription"
                name="projectDescription"
                placeholder="Enter project description"
                onChange={handleChange}
                required
              />
            </div>
    
    
            {/* Project Type */}
            <div>
              <Label htmlFor="projectType" value="Project Type" />
              <Select id="projectType" name="projectType" onChange={handleChange} required>
                <option value="">Select type</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>Software Development</option>
                <option>UI/UX Design</option>
                <option>Marketing</option>
                <option>Other</option>
              </Select>
            </div>
    
            {/* Project Status */}
            <div>
              <Label htmlFor="projectStatus" value="Project Status" />
              <Select id="projectStatus" name="projectStatus" onChange={handleChange} required>
                <option value="">Select status</option>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>On Hold</option>
              </Select>
            </div>
    
    
      {/* Category */}
            <div>
              <Label htmlFor="category" value="Category" />
              <Select
                id="category"
                name="category"
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option>React</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Fullstack</option>
                <option>Mobile App</option>
                <option>UI/UX</option>
              </Select>
            </div>
    
           {/* Tags */}
            <div>
              <TextInput
              id="tags"
              placeholder="Enter the Technology used"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button className="mt-5" type="button" onClick={addTag}>
              Add
            </Button>
            </div>
    
             <div>
                 {tags.map((t, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex  items-center gap-2 mb-3"
              >
                {t}
                <button
                  onClick={() => removeTag(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
             </div>
         
    
          
    
          
            {/* File Upload */}
            <div>
              <Label htmlFor="attachments" value="Attachments / Project Files" />
              <FileInput id="attachments" name="attachments" onChange={handleChange} />
            </div>
    
            {/* Submit Button */}
            <Button type="submit" className="w-full" >
              Submit Project Details
            </Button>
    
          </form>
        </div>
  </div>
    </>
  )
}

export default Adminprojectadd