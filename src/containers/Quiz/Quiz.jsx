import React, { Component } from 'react';
import ActiveQuiz from '../../copmonents/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../copmonents/FinishedQuiz/FinishedQuiz'



import classes from './Quiz.module.css'

class Quiz extends Component {
    state = {
        results: {},
        isFinish: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Легко ли выучить REACT js?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: 'Да', id: 1 },
                    { text: 'Нет', id: 2 },
                    { text: 'Придется чуть-чуть попотеть', id: 3 },
                    { text: 'Очень сложно!', id: 4 },
                ]
            },
            {
                question: 'Легко ли выучить js?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    { text: 'Да', id: 1 },
                    { text: 'Нет', id: 2 },
                    { text: 'Придется чуть-чуть попотеть', id: 3 },
                    { text: 'Очень сложно!', id: 4 },
                ]
            }
        ],
    }

    onAnsewClickHandler = (answerId) => {
        console.log(answerId);

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {

            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState({
                answerState: { [answerId]: 'success' },
                results,
            })


            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    console.log('ВСЕ!!!');
                    this.setState({
                        isFinish: true,
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null,
                    })
                }

                window.clearTimeout(timeout);
            }, 1000)


        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: { [answerId]: 'error' },
                results,
            })
        }
    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onRetryHandler = () => {
        this.setState({
            activeQuestion: 0,
            isFinish: false,
            answerState: null,
            results: {},

        })
    }






    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы!</h1>

                    {
                        this.state.isFinish
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.onRetryHandler}
                            />
                            : <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnsewClick={this.onAnsewClickHandler}
                                quizLenght={this.state.quiz.length}
                                anserNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }



                </div>
            </div>
        );
    }
}

export default Quiz;
