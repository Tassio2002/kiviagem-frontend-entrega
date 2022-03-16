import React from 'react';

import '../css/testemonials.css';

const TestemonialSection = (props) => {
    return (       
        <div className="testemonial-card">
            <img src={props.testImage} alt="" />
            <p>{props.testComent}</p>
            <span className='test-nome'>{props.testName}</span>
        </div>
     );
}
 
export default TestemonialSection;