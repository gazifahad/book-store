import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBook } from './BooksSlice';

const EditBook = () => {
    const location=useLocation();
    const [id,setId]=useState(location.state.id);
    const [title,setTitle]=useState(location.state.title);
    const [author,setAuthor]=useState(location.state.author);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(editBook({id,title,author}));
        navigate('/show-books',{replace:true});

    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">title</label>
                    <input type="text" id='title' name='title' value={title} required onChange={(e)=>setTitle(e.target.value)} />

                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' name='author' value={author}  required onChange={(e)=>setAuthor(e.target.value)} />

                </div>
                <button type='submit'>Update Book</button>
            </form>
        </div>
    );
};

export default EditBook;