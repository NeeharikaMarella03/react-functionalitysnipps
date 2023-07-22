import React, { useState } from 'react';
import './styles.css';

export default function HandleInputs(){
    const initialData = {
        name: '',
        age: '',
        gender: 'female',
        occupation: 'none',
        isCool: 'no'
    }
    const [formData, setFormData] = useState(initialData)

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData, [name]: value})
        
        // if(e.target.checked) {
        //     setFormData({...formData,[name]: 'yes'})
        // }else{
        //     setFormData({...formData,[name]: 'no'})
        // }
    }
    const handleChecked=(e)=>{
        const checkValue = e.target.checked ? 'yes' : 'no';
        console.log(e.target.checked)
        setFormData({...formData, [e.target.name]: checkValue})

    }
    console.log(formData)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsModalOpen(true)
    }
    return (
        <div>
            <div className='form-vals'>
                <pre style={{"padding":"40px 0px"}}>
                    {JSON.stringify(formData)}
                </pre>
            </div>
            
            <form action='#' method='post' id='form-container' onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label><br/>
                <input 
                    id='name'
                    placeholder='Name'
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                /><br/>
                <label htmlFor="age">Age: </label><br/>
                <input 
                    id='age'
                    placeholder='age'
                    name='age'
                    onChange={handleChange}
                    value={formData.age}
                /><br/>
                <label htmlFor='gender'>Gender: </label><br/>

                <input type="radio" id="male" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange}/>
                <label htmlFor="male">Male</label>

                <input type="radio" id="female" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange}/>
                <label htmlFor="female">Female</label>

                <input type="radio" id="other" name="gender" value="other" checked={formData.gender === "other"} onChange={handleChange}/>
                <label htmlFor="other">Other</label><br/>
                <label htmlFor="occupation">Occupation</label><br/>
                <select id='occupation' name='occupation' value={formData.occupation} onChange={handleChange}>
                    <option value='frontend'>Frontend</option>
                    <option value='backend'>Backend</option>
                    <option value='fullstack'>Fullstack</option>
                </select><br/>
                <label htmlFor="personality">Are u cool?</label><br/>
                <input type='checkbox' id='personality' name="isCool" value={formData.isCool} onChange={handleChecked}/><br/>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

            {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h4>Your Input Details</h4>
                <p>Name: {formData.name}</p>
                <p>Age: {formData.age}</p>
                <p>Gender: {formData.gender}</p>
                <p>Occupation: {formData.occupation}</p>
                <p>Are u cool ? : {formData.isCool}</p>

                <button onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </div>
          )}
        </div>
        
    )
}