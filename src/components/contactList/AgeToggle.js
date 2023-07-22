import React, { useState } from "react";

export default function AgeToggle({contact}){
    // function handleShow(email){
    //     // const userAge = contacts.filter((contact)=>{
    //     //     return email === contact.email
    //     // })
    //     setShowAge(true)
        
    // }
    // onClick={()=>handleShow(index, contact.email)}
    const [showAge, setShowAge] = useState(false);

    return (
        <>
            {showAge && <h3>Age: {contact.age}</h3>}
            <button onClick={()=>{setShowAge(!showAge)}}>Toggle Age</button>
        </>
        
    )
}