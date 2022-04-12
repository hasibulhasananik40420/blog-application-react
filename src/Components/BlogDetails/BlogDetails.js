import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BlogDetails.css'
const BlogDetails = () => {
    const {id} = useParams()
    // console.log(id);
    const navigate = useNavigate()
    const [blog , setBlog]= useState({})
    useEffect(()=>{
      fetch(` https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data))

    } ,[id])
    return (
        <div className='main'>
             <div className='btn'>
                 <button  onClick={()=> navigate(-1)}> x Back</button>
             </div>
               <div className='blog-details'>
               <div className='blog-image'>
               <img src={blog?.imageURL} alt='' />
               </div>
               <h1>{blog?.title}</h1>
               <p>{blog?.blog}</p>
               </div>
            
        </div>
    );
};

export default BlogDetails;