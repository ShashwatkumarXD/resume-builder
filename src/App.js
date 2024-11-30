// App.js
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResumePreview from "./components/ResumePreview";

function App() {
  // State declaration for resume data
  const [resumeData, setResumeData] = useState({
    personal: { name: "", email: "", phone: "", github: "", linkedin: "", leetcode: "" },
    aboutus:"",
    education: [{ degree: "", institution: "", year: "" }],
    experience: [{ company: "", role: "", duration: "" }],
    skills: [],
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Resume Builder
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Input Form */}
        <div className="flex lg:w-[20%] bg-white shadow-lg rounded-lg p-6">
          <InputForm resumeData={resumeData} setResumeData={setResumeData} />
        </div>
        {/* Resume Preview */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
