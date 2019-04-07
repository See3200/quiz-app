import React from 'react'
import {Link} from 'react-router-dom'
import './FinishedQuiz.css'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={'finishedQuiz'}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = ['fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        props.results[quizItem.id]
                    ]
                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Right was {successCount} of {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Retry</Button>
                <Link to="/">
                    <Button type="success">Go to test list</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz