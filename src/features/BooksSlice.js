const { createSlice } = require("@reduxjs/toolkit")

const initialBooks={
    books:[
        {
            id:1, title:"New Book",author: "Name less"
        },
        {
            id:2, title:"Second Book",author: "Name less"
        },
    ]
}
export const booksSlice=createSlice({
   name:"books",
   initialState:initialBooks,
   reducers:{
    showBooks:(state)=>state,
   
   addBook:(state,action)=>{
    state.books.push(action.payload);
   }
}

});

export const {showBooks,addBook}=booksSlice.actions;
export default booksSlice.reducer;