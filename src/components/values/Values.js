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
                    <p className="content"> 
                        I strive to cultivate meaningful, lasting relationships at work through the art of bad jokes, sports, board games and craft beer!
                    </p>
                </div>
                <div className="value-container">
                    <h1>Seek Discomfort</h1>
                    <p className="content">I believe that life's greatest experiences are outside of my comfort zone. Challenging myself to
                        seek discomfort daily, yields the most valuable experiences and lessons.
                    </p>
                </div>
                <div className="value-container">
                    <h1>Love The Process</h1>
                    <p className="content">Life is a series of goals, attained or not. I strive to enjoy the highs and lows
                        of the journey, not just the result; to learn anything and everything. Always Trust the Process.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Values;