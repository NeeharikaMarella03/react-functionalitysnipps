// const validateForm=(data)=>{
//     console.log(data);
//     const errors={}
//     if(!data.firstName){
//         errors.firstName = 'Please enter your first name'
//     }else if(/\d+/.test(data.firstName)){
//         errors.firstName = 'Name should not be alpha Numeric'
//     }if(!data.lastName){
//         errors.lastName = 'Please enter your last name'
//     }else if(data.lastName){
//         errors.lastName = 'Name should not be alpha Numeric'
//     }if(!data.email){
//         errors.email = 'Please enter email'
//     }else if(!/@/.test(data.Email)){
//         errors.email ='Email must contain @'
//     }
//     // else return ""
//     console.log(errors)
//     return errors
// }

export default function validateForm(data){
    console.log(data);
    const errors={}
    if(!data.firstName){
        errors.firstName = 'Please enter your first name'
    }else if(/\d+/.test(data.firstName)){
        errors.firstName = 'Name should not be alpha Numeric'
    }if(!data.lastName){
        errors.lastName = 'Please enter your last name'
    }else if(/\d+/.test(data.lastName)){
        errors.lastName = 'Name should not be alpha Numeric'
    }if(!data.email){
        errors.email = 'Please enter email'
    }else if(! /@/.test(data.email)){
        errors.email ='Email must contain @'
    }
    // else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)){
    //     errors.email ='Email must contain @'
    // }
    // else return ""
    console.log(errors)
    return errors
}


// export default validateForm