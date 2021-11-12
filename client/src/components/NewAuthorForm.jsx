import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const NewAuthorForm = (props) => {
    const history = useHistory();

    const [formInfo,setFormInfo] = useState({
        name:"",
    })

    const [formErrors, setFormErrors] = useState({
        name:"",
    })

    const changeHandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/create", formInfo)
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
            .catch(err=>console.log("Error adding an author:", err))
    }

    return (
        <div>
            <h1>Add A New Author</h1>
            <form onSubmit= {submitHandler}>
                <div>
                    <label htmlFor="">Author Name:</label>
                    <input onChange={changeHandler} type="text" name="name" value={formInfo.name}/>
                    <p>{formErrors.name?.message}</p>
                </div>
                <input type="submit" value="Submit New Author"/>
                <Link to="/"><button>Cancel</button></Link>
            </form>
        </div>
    );
};

export default NewAuthorForm;