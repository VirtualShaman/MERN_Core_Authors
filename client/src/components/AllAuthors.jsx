import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Link} from "react-router-dom"
import e from 'cors';

const AllAuthors = (props) => {

    const [allAuthors, setAllAuthors] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/")
            .then(response=>{
                console.log("All authors response:", response)
                setAllAuthors(response.data.sort((a, b) => a.name.localeCompare(b.name)))
            })
            .catch(err=>console.log("Error Message:", err))
    },[props.formSubmitted, deleteToggle])

    const deleteAuthor = (authorID)=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${authorID}`)
            .then(response=>{
                console.log("Response after deletion:", response)
                setDeleteToggle(!deleteToggle)
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            <h1>Author List</h1>
            {
                allAuthors.map((author,i)=>{
                    return (
                        <div key = {i}>
                            <h2>{author.name}</h2>
                            <div>
                                <button onClick = {(e)=>deleteAuthor(author._id)} >Delete</button>
                                <Link to = {`/editAuthor/${author._id}`}>
                                <button>Edit</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllAuthors;