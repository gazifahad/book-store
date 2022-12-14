import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {addBook}  from './BooksSlice';
import {useNavigate} from 'react-router-dom'
const { v4: uuidv4 } = require('uuid');

const AddBook = () => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
       e.preventDefault() ;
       const book={
        id:uuidv4(),
        title,author
       };
       dispatch(addBook(book))
        navigate('/show-books',{replace:true})
    }
    return (
        <div>
            <h2>add Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">title</label>
                    <input type="text" id='title' name='title' value={title} required onChange={(e)=>setTitle(e.target.value)} />

                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author</label>
                    <input type="text" id='author' name='author' required onChange={(e)=>setAuthor(e.target.value)} />

                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;