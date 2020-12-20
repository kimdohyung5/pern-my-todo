import React, {useState} from 'react'

export default function InputTodo() {

    const [description, setDescription] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const body = {description};
            const response = await fetch("/todos", {
                method:"POST", 
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            console.log("response", response);
            
            setDescription('');
            
            window.location = "/";
        } catch(ex) {
            console.error(ex.message);
        }
    }


    return (
        <>
            <h1 className="text-center mt-5"> Pern Todo List </h1>
            <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={description} onChange={e=> setDescription(e.target.value)} />
                <button className="btn btn-success"> Add </button>
            </form>
        </>
    )
}
