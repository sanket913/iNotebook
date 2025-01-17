import React,{useContext,useState} from 'react';
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote}=context;

    const [note, setnote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setnote({title:"",description:"",tag:""});
        props.showAlert("Added  Successfully","success");
    }
    const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add Note</h2>

            <form className='my-3'>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onChange} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} required/>
            </div>
            <button disabled={note.title.length===0 || note.description.length<5 || note.tag.length===0} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note<i className="fa-solid fa-circle-plus mx-2"></i></button>
            </form>
            </div>
  )
}

export default AddNote
