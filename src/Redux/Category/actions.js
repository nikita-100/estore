import { createAsyncThunk } from "@reduxjs/toolkit";


export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
          const categories = ["Men","Women","Kids","Best Offers","All"];
        // const categories = fetch("http://localhost:5001/productCategories").then((res)=>res.json());
         return categories;
    }
)