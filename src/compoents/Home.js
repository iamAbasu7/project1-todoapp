import React from 'react'
import Todos from './Todos'

const dummyTodos = [
    {
        id:1,
        title:"todo title 1",
        desc:"todo1 description"
    },
    {
        id:2,
        title:"todo title 1",
        desc:"todo1 description"
    }
]

export default function Home() {
    return (
        <div>
            <Todos todos={dummyTodos}/>
        </div>
    )
}
