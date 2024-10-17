import React from 'react';
import './Wrapper.css'; // Import your CSS file for styling
import ResumeShortlist from '../ResumeShortlist/ResumeShortlist';

const Wrapper = () => {
    return (
        <div className="form-wrapper">
            <div className="text-section">
            <img 
                    src="https://media.licdn.com/dms/image/v2/D560BAQGvjnTk87kwYQ/company-logo_200_200/company-logo_200_200/0/1705605846187/edcults_consulting_solutions_logo?e=2147483647&v=beta&t=a2_inh4D72XJu0hE9QQ9fODfEYiE1c6KkNrtz0RzuDo" // Replace with your image URL
                    alt="Descriptive Alt Text" 
                    className="form-image" // Class for styling
                />
                <h1>Welcome to Hiremitra!</h1>
                <p>
                    Get your resume shortlisted using our application.
                </p>
            </div>
            
            <div className="form-section">
            <ResumeShortlist/>
            </div>
        </div>
    );
};

export default Wrapper;
