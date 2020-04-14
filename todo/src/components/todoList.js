import React from 'react'
import { Todo } from './todo';

export function TodoList(props) {

    return (
        <div className="Body">
            {props.state.map((item) => {
                return <Todo item={item} key={item.id} handleComplete={props.handleComplete} />
            })}
        </div>
    )
}