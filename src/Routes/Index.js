import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from '../layOuts/Navbar';
import Home from '../pages/Home';
import Error from './Error';
import BooksView from './../features/BooksView';
import AddBook from './../features/AddBook';

const Index = () => {
    return (
        <>
      <Navbar/>
            <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/show-books' element={<BooksView />}/>
                        <Route path='/add-book' element={<AddBook />}/>
                        <Route path='*' element={<Error />}/>

                        
            </Routes>
            
           
            </>
        
    );
};

export default Index;