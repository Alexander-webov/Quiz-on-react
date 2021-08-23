import React from 'react';
import AnswersList from './AnswersList/AnswersList'


import classes from './ActiveQuiz.module.css'

const ActiveQuiz = (props) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1. </strong>
                    {props.question}
                </span>
                <small> {props.anserNumber} из {props.quizLenght}</small>
            </p>

            <AnswersList
                onAnsewClick={props.onAnsewClick}
                answers={props.answers}
                state={props.state}
            />
        </div>
    );
}

export default ActiveQuiz;
