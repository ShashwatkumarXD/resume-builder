// // components/InputForm.js
// import React from "react";

// function InputForm({ resumeData, setResumeData }) {
//   // Handle changes for the "personal" section
//   const handlePersonalChange = (field, value) => {
//     setResumeData((prev) => ({
//       ...prev,
//       personal: {
//         ...prev.personal,
//         [field]: value,
//       },
//     }));
//   };

//   // Handle changes for the "skills" field

//   const handleSkillsChange = (value) => {
//     setResumeData((prev) => ({
//       ...prev,
//       skills: value,
//     }));
//   };

//   // Handle changes for education and experience
//   const handleSectionChange = (section, index, field, value) => {
//     setResumeData((prev) => {
//       const updatedSection = [...prev[section]];
//       updatedSection[index][field] = value;
//       return { ...prev, [section]: updatedSection };
//     });
//   };

//   // Add a new education entry
//   const handleAddEducation = () => {
//     setResumeData((prev) => ({
//       ...prev,
//       education: [
//         ...prev.education,
//         { degree: "", institution: "", year: "" }, // Add a new empty education object
//       ],
//     }));
//   };

//   // Remove an education entry
//   const handleRemoveEducation = (index) => {
//     setResumeData((prev) => {
//       const updatedEducation = prev.education.filter((_, i) => i !== index); // Remove by index
//       return { ...prev, education: updatedEducation };
//     });
//   };

//   return (
//     <div>
//       <h2>Personal Details</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={resumeData.personal.name}
//         onChange={(e) => handlePersonalChange("name", e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={resumeData.personal.email}
//         onChange={(e) => handlePersonalChange("email", e.target.value)}
//       />
//       <input
//         type="tel"
//         placeholder="Phone"
//         value={resumeData.personal.phone}
//         onChange={(e) => handlePersonalChange("phone", e.target.value)}
//       />

//       <h2>Education</h2>
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Degree"
//             value={edu.degree}
//             onChange={(e) =>
//               handleSectionChange("education", index, "degree", e.target.value)
//             }
//           />
//           <input
//             type="text"
//             placeholder="Institution"
//             value={edu.institution}
//             onChange={(e) =>
//               handleSectionChange(
//                 "education",
//                 index,
//                 "institution",
//                 e.target.value
//               )
//             }
//           />
//           <input
//             type="text"
//             placeholder="Year"
//             value={edu.year}
//             onChange={(e) =>
//               handleSectionChange("education", index, "year", e.target.value)
//             }
//           />
//           <button onClick={() => handleRemoveEducation(index)}>Remove</button>
//         </div>
//       ))}
//       <button onClick={handleAddEducation}>Add Education</button>

//       <h2>Skills</h2>
//       <input
//         type="text"
//         placeholder="Skills (comma-separated)"
//         value={resumeData.skills}
//         onChange={(e) => handleSkillsChange(e.target.value)}
//       />
//     </div>
//   );
// }

// export default InputForm;

import React from "react";

function InputForm({ resumeData, setResumeData }) {
  // Handle changes for the "personal" section
  const handlePersonalChange = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  // Handle changes for education and experience
  const handleSectionChange = (section, index, field, value) => {
    setResumeData((prev) => {
      const updatedSection = [...prev[section]];
      updatedSection[index][field] = value;
      return { ...prev, [section]: updatedSection };
    });
  };

  // Add a new education entry
  const handleAddEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institution: "", year: "" }, // Add a new empty education object
      ],
    }));
  };

  // Remove an education entry
  const handleRemoveEducation = (index) => {
    setResumeData((prev) => {
      const updatedEducation = prev.education.filter((_, i) => i !== index); // Remove by index
      return { ...prev, education: updatedEducation };
    });
  };

  // Handle changes for skills
  const handleSkillChange = (index, value) => {
    setResumeData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = value; // Update a specific skill
      return { ...prev, skills: updatedSkills };
    });
  };

  // Add a new skill
  const handleAddSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""], // Add an empty skill
    }));
  };

  // Remove a skill
  const handleRemoveSkill = (index) => {
    setResumeData((prev) => {
      const updatedSkills = prev.skills.filter((_, i) => i !== index); // Remove skill by index
      return { ...prev, skills: updatedSkills };
    });
  };

  const handleaboutus = (value) => {
    setResumeData((prev) => ({
      ...prev,
      aboutus: value,
    }))
  }
  return (
    <div>
      <div className="">
        <h2 className="text-lg font-bold">Personal Details</h2>
        <input
          type="text"
          placeholder="Name"
          value={resumeData.personal.name}
          onChange={(e) => handlePersonalChange("name", e.target.value)}
          className="bg-slate-500 placeholder:text-white p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={resumeData.personal.email}
          onChange={(e) => handlePersonalChange("email", e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={resumeData.personal.phone}
          onChange={(e) => handlePersonalChange("phone", e.target.value)}
        />
        <input
          type="url"
          placeholder="GitHub URL"
          value={resumeData.personal.github}
          onChange={(e) => handlePersonalChange("github", e.target.value)}
        />
        <input
          type="url"
          placeholder="LinkedIn URL"
          value={resumeData.personal.linkedin}
          onChange={(e) => handlePersonalChange("linkedin", e.target.value)}
        />
        <input
          type="url"
          placeholder="LeetCode URL"
          value={resumeData.personal.leetcode}
          onChange={(e) => handlePersonalChange("leetcode", e.target.value)}
        />
        <h2>About Us</h2>
        <input
          type="text"
          placeholder="Intro"
          value={resumeData.aboutus || ""}
          onChange={(e) => handleaboutus(e.target.value)} // Fixed `onChange` attribute
        />

        <h2>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleSectionChange("education", index, "degree", e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleSectionChange(
                  "education",
                  index,
                  "institution",
                  e.target.value
                )
              }
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) =>
                handleSectionChange("education", index, "year", e.target.value)
              }
            />
            <button onClick={() => handleRemoveEducation(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>

        <h2>Skills</h2>
        {resumeData.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <button onClick={() => handleRemoveSkill(index)}>Remove</button>
          </div>
        ))}
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
}

export default InputForm;
