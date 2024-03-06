// MultiStepProgressBar.jsx
import React, { useState } from "react";
import "./MultiStepProgressBar.css"; // Import your CSS file

const MultiStepProgressBar = ({ steps, currentStepForm, stageNames }) => {
  return (
    <div>
        <div className="progress-bar col-12" >
            {Array.from({ length: steps }, (_, index) => (
                <div style={{ display: "flex", marginTop: "25px",  }}>
                    <div key={index} className={`progress-step ${index < currentStepForm ? "completed" : ""}`}>

                        {index < currentStepForm - 1 ? "✔" : index + 1}
                    </div>
                    <div className="stage-name" style={{  marginTop: "5px" }}>{stageNames[index]}</div>
                </div>
            ))}
        </div>
    </div>
);
};

export default MultiStepProgressBar;
