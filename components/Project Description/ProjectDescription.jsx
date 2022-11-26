import React from "react";

export default function ProjectDescription() {
  return (
    <div className="w-11/12 m-auto flex flex-col py-4">
      <div>
        <h1 className="mb-4 font-bold">
          Methodologies used for project creation
        </h1>
        <ul>
          <li>React</li>
          <li>Redux Toolkit</li>
          <li>Next.js</li>
          <li>React-Hook-Form</li>
          <li>Tailwind CSS</li>
          <li>Firebase Database</li>
        </ul>
      </div>
      <div className="mt-8">
        <h1 className="mb-4 font-bold">Usage</h1>
        <ul>
          <li>Registration</li>
          <li>Authorization</li>
          <li>Add Items in database with Fetch Api</li>
          <li>Delete Items from database</li>
        </ul>
      </div>
    </div>
  );
}
