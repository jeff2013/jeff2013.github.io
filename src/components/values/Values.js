import React from 'react';
import './Values.scss';
import '../../index.scss';

function Values() {
    return (
        <div className="fullscreen-container values">
            <h1 className="title">Values I Live By</h1>
            <div className="values-content">
                <div className="value-container">
                    <h1>People First</h1>
                    <p> 
                        Cultivating meaningful, lasting relationships at work increases productivity, happiness and
                        work satisfaction! Cracking jokes and working with friends is reason enough 
                        to get up in the morning. 
                    </p>
                </div>
                <div className="value-container">
                    <h1>Seek Discomfort</h1>
                    <p>Life's greatest experiences are outside the comfort zone. Challenging myself to
                        seek discomfort daily, yields the most valuable experiences and lessons.
                    </p>
                </div>
                <div className="value-container">
                    <h1>Love The Process</h1>
                    <p>Life is a series of goals, attained or not. I strive to enjoy the highs and lows
                        of the journey, not just the result. Learn anything and everything, don't
                        forget to have fun and always Trust the Process.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Values;