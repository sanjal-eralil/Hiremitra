import React from 'react';
import './Wrapper2.css'; // Import your CSS file for styling

import Interview from '../Interview/Interview';

const Wrapper2 = () => {
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
                    Get customised questions specific to your job role and skillset.
                </p>
            </div>
            
            <div className="form-section">
            <Interview/>
            </div>
        </div>
    );
};

export default Wrapper2;
