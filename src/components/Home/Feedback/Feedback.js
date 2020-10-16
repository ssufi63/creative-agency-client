import React from 'react';
import './Feedback.css'
import ceo1 from '../../../images/customer-1.png'
import ceo2 from '../../../images/customer-2.png'
import ceo3 from '../../../images/customer-3.png'
import FeedbackList from '../FeedbackList/FeedbackList'


const feedbackInfo = [
    {
        image: `${ceo1}`,
        name: 'Elizabeth Baker',
        title: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, excepturi'

    },
    {
        image: `${ceo2}`,
        name: 'Steven Gerard',
        title: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, excepturi'

    },    {
        image: `${ceo3}`,
        name: 'Peter Moore',
        title: 'CEO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, excepturi'

    }
]
const Feedback = () => {
    return (
        <div className="container">
            <h1>
					Clients <span style={{color: 'green'}}>Feedback</span>
				</h1>
           {
                feedbackInfo.map(data => <FeedbackList data={data}></FeedbackList>)
           }
        </div>
    );
};

export default Feedback;