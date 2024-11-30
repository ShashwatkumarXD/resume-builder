import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RxDividerHorizontal } from "react-icons/rx";

function ResumePreview({ resumeData }) {
  const { personal, education, experience, skills, aboutus } = resumeData;

  return (
    <div>
      <div className="flex justify-center items-center">
        <p className="text-3xl font-bold text-black">{personal.name}</p>
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-2">
        {personal.email && (
          <p className="italic text-[#052542]">{personal.email}</p>
        )}
        {personal.phone && (
          <p className="italic text-black">
            <strong className="text-[#052542]">+91</strong>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"></a> {personal.phone}
          </p>
        )}
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-5 gap-2 text-black">
        {personal.github && (
          <p className="text-sm flex flex-row justify-center items-center gap-2">
            <FaGithub />
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              {personal.github}
            </a>
          </p>
        )}
        {personal.linkedin && (
          <p className="text-sm flex flex-row justify-center items-center gap-2">
            <FaLinkedin />
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              {personal.linkedin}
            </a>
          </p>
        )}
        {personal.leetcode && (
          <p className="text-sm flex flex-row justify-center items-center gap-2">
            <SiLeetcode />
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-500"
            >
              {personal.leetcode}
            </a>
          </p>
        )}
      </div>
      <div className="px-10 pt-10 w-full  text-black">
        <p className="font-bold ">CAREER OBJECTIVE</p>
        <div className="divider divider-neutral mt-[-8px]"></div>
        <p className="font-bold"></p>
        <p className="w-full">{aboutus}</p>
      </div>
      <div>
        {/* For Small Screens */}
        <div className="block lg:hidden px-10 pt-10 w-full text-black">
          <p className="font-bold">ACADEMIC DETAILS</p>
          <div className="divider divider-neutral mt-[-8px]"></div>
          {education.map((edu, index) => (
            <div
              className="flex flex-col justify-between px-4 py-2 border-b border-gray-300"
              key={index}>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Year:</strong> {edu.year}</p>
            </div>
          ))}
        </div>

        {/* For Large Screens */}
        <div className="hidden lg:block px-10 pt-10 w-full text-black">
          <p className="font-bold">ACADEMIC DETAILS</p>
          <div className="divider divider-neutral mt-[-8px]"></div>
          <div className="flex flex-row justify-between gap-10 items-start px-10 pb-1 font-bold">
            <p>Degree</p>
            <p>Institution</p>
            <p>Year</p>
          </div>
          <div className="divider m-0"></div>
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between px-10">
                <p>{edu.degree}</p>
                <p>{edu.institution}</p>
                <p>{edu.year}</p>
              </div>
              <div className="divider m-0"></div>
            </div>
          ))}
        </div>
      </div>
      {/* <h3 className="pt-5">Skills</h3> */}
      <div className="px-10 pt-10 w-full text-black">
        <p className="font-bold">TECHNICAL PROFICIENCY/SKILLS</p>
        <div className="divider divider-neutral mt-[-8px]"></div>
        <p className="px-10">{skills.join("; ")}</p>
      </div>

      {/* Export Button */}
      <div className="mt-5">
        <button
          onClick={handleExportPDF}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Export to PDF
        </button>
      </div>

    </div>
  );
}

export default ResumePreview;
