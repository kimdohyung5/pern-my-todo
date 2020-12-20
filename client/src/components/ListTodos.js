import React, {useState, useEffect} from 'react'

import EditTodo from './EditTodo'

export default function ListTodos() {
    const [ todos, setTodos] = useState([]);

    useEffect( async () => {
        const response = await fetch( "/todos");
        const data = await response.json();
        setTodos( data);
    }, [])

    const handleDelete = async (todo) => {
        const response = await fetch( `/todos/${todo.todo_id}`, {
            method:'DELETE'
        });
        const data = await response.json();
        window.location = "/";
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map( todo => (<tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(todo) }> 삭제하기</button></td>
                        </tr> ))
                    }
                </tbody>
            </table>
        </>
    )
}
