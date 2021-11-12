import React, {useEffect, useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useParams } from "react-router";
import axios from 'axios';

const EditAuthorForm = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const [formInfo,setFormInfo] = useState({
        name:"",
    })

    const [formErrors, setFormErrors] = useState({
        name:"",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
                console.log(response)
                setFormInfo(response.data)
            })
            .catch(err=> console.log(err))
    }, [id]);

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/update/${id}`, formInfo)
            .then(response=>{
                console.log(response)
                if(response.data.err){
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        name:"",
                    })
                    history.push("/")
                }
            })
            .catch(err=>console.log("Error creating a author:", err))
    }

    return (
        <div>
            {
                formInfo.name!=null?
                <form onSubmit= {submitHandler}>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                        <p>{formErrors.name?.message}</p>
                    </div>
                    <input type="submit" value="Update Author"/>
                    <Link to="/"><button>Cancel</button></Link>
                </form>
                :
                <div>
                    <h1>Sorry the author you are looking for is no longer listed. If you would like to add this author or any others please go to the link above.</h1>
                </div>
            }
        </div>
    );
};

export default EditAuthorForm;