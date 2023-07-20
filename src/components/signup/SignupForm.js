import React, { useEffect, useState } from 'react';
import './form.css'
import Input from './Input'
import validateForm from './validateForm.js'
function SignupForm() {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    // const [error, setError] = useState({
    //     firstName: `Please enter first name`, 
    //     lastName: `Please enter last name`,
    //     email: `Please enter email`
    // })
    const [error, setError] = useState({})
    const [submit, setSubmit] = useState(false)
    useEffect(()=>{
        // console.log(Object.keys(error))
        if(Object.keys(error).length === 0){
            setData({
                firstName: '',
                lastName: '',
                email: ''
            })
        }
    }, [error])
    return (
        <form id='form-container' action='#' method='Post' onSubmit={(e)=>{
            e.preventDefault()
            console.log(e.target)
            setError(validateForm(data))
            // if(Object.keys(error).length === 0){
            //     console.log(error)
            //     setSubmit(true)
            //     setData({
            //         firstName: '',
            //         lastName: '',
            //         email: ''
            //         ...data, [data.error]: ''
            //     })
            // }
            setSubmit(true)

            
        }}>
            {Object.keys(error).length === 0 && submit && <div className='success'>Registered Sucessfully !!!</div>}
            <Input
                type="text"
                placeholder="John"
                label="First Name"
                onChange={e => setData(data => ({
                    ...data,
                    firstName: e.target.value
                }))}
                value={data.firstName}

            />
            {error.firstName ? <p className="alert">{error.firstName}</p> : <p></p>}

            <Input
                type="text"
                placeholder="Doe"
                label="Last Name"
                onChange={e => setData(data => ({
                    ...data,
                    lastName: e.target.value
                }))}
                value={data.lastName}
            />
            {error.lastName && <p className="alert">{error.lastName}</p>}

            <Input
                type="text"
                placeholder="john.doe@gmail.com"
                label="Email"
                onChange={e => setData(data => ({
                    ...data,
                    email: e.target.value
                }))}
                value={data.email}
            />
            {error.email && <div className="alert">{error.email}</div>}

            <div className="form-footer">
               <button type="submit">Register</button>
           </div>
        </form>
    )
}

export default SignupForm;

