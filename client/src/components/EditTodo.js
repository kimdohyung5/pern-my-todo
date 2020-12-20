import React, {useState} from 'react'

export default function EditTodo(props) {
    const {todo} = props;
    const [description, setDescription] = useState( todo.description );

    const handleChangeText = e => {
        setDescription( e.target.value);
    }

    const handleModify = async e => {
        try{
            const response = await fetch( `/todos/${todo.todo_id}`, {
                method:'PUT',
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify( { description })
                }
            )
            window.location = "/"
        } catch( ex) {
            console.error( ex.message );
        }
    }

    const handleClose = e => {
        console.log("handleClose... ");
        setDescription(todo.description);
    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#my${todo.todo_id}`}>
            수정하기
            </button>

            <div className="modal" id={`my${todo.todo_id}`} onClick={handleClose}>
                <div className="modal-dialog" >
                    <div className="modal-content" >

                    
                        <div className="modal-header">
                            <h4 className="modal-title">수정하세요</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>&times;</button>
                        </div>

                        
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={handleChangeText}/>
                        </div>

                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={handleModify}>수정하기</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={handleClose}>닫기</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
