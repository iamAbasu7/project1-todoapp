import React from 'react'

export default function Todo(props) {
    const {title,desc} = props.todo
    return (
        <article>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            
        </article>
    )
}
