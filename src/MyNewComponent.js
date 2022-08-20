import React,{useState} from 'react';

const FormsForUser = props => {
    const [ fname,setFname] = useState("");
    const [ fnameError,setFnameError] = useState("");

    const [ lname,setLname] = useState("");
    const [ lnameError,setLnameError] = useState("");

    const [ email,setEmail] = useState("");
    const [ emailError,setEmailError] = useState("");

    const [ password,setPassword] = useState("");  
    const [ passwordError,setPasswordError] = useState("");

    const [ confpassword,setConfPassword] = useState("");
    const [ confpasswordError,setConfPasswordError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    
    const CreateUser= (e) => {
        e.preventDefault();
       const newUser={fname,lname,email,password,confpassword}
       console.log("hello",newUser);
       setHasBeenSubmitted( true );
    
    };
    //fname error 
    const handleFirstName = (e) => {
        setFname(e.target.value);
        if (e.target.value.length < 1) {
            setFnameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setFnameError("First Name must be 2 characters or longer!");
        } else {
          // an empty string is considered a "falsy" value
          setFnameError("");
        }
      }



      //last name
      const handleLastName = (e) => {
        setLname(e.target.value);
        if (e.target.value.length < 1) {
            setFnameError("Lastt Name is required!");
        } else if (e.target.value.length < 2) {
            setLnameError("Last Name must be 2 characters or longer!");
        } else {
          // an empty string is considered a "falsy" value
          setLnameError("");
        }
      }
      //email
      const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Lastt Name is required!");
        } else if (e.target.value.length < 2) {
            setEmailError("Last Name must be 2 characters or longer!");
        } else {
          // an empty string is considered a "falsy" value
          setEmailError("");
        }
      }
      //password
      const handlerPassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("password must be 8 numers or more!");
        }else{
            setPasswordError("");
        }
      }

      const matchingPass=(e)=>{
        setConfPassword(e.target.value);
        if(e.target.value.length < 8 ){
            setConfPasswordError("must be match 8 numers or more!");
        }else{
            setConfPasswordError("");
        }
      }

    
    

    return( 
    <div className='App'>
          
           {hasBeenSubmitted?<h1>form has been submitted </h1>:<h1>welcome , please submitt the form</h1>}
        <form onSubmit={CreateUser}>
            {/* firest name  */}
            <label >First name:</label>
            <input type="text"  onChange={(e) => handleFirstName(e)}  /><br/>
            {fnameError ? <p style={{color:"red"}}>{fnameError}</p> : ''}
          
          {/* last name */}
            <label >Last name:</label>
            <input type="text" onChange={ (e) => handleLastName(e)}  /><br/>
            {lnameError?<p style={{color:"red"}}>{lnameError}</p> : '' }

        {/* email */}
            <label >email:</label>
            <input type="text" onChange={(e)=>handleEmail(e)}/><br/>
            {emailError?<p style={{color:"red"}}>{emailError}</p> : '' }

          {/* password */}
            <label >Password :</label>
            <input type="password" onChange={(e)=>handlerPassword(e)}/><br/><br/>
            {passwordError?<p style={{color:"red"}}>{passwordError}</p> : '' }
        {/* conf password and matching  */}
            <label >ConfPassword :</label>
            <input type="password" onChange={(e)=>matchingPass(e)}/><br/><br/>
            {confpasswordError?<p style={{color:"red"}}>{confpasswordError}</p>:""}
            {password!==confpassword ?<p style={{color:"red"}}>passwords doesn't matches</p>:""}
                    
                    
                
{/* rendering data  */}
     <input type="submit" value="Create User"/>  
        </form>
        <br/> <br/>
        <hr/> <br/> 
        <h4>Your Form Data</h4><br/>
        <p>First name is: {fname}</p>
        <p>Last name is: {lname}</p>
        <p>Email is: {email}</p>
        <p>password is: {password}</p>
        <p>confpassword is: {confpassword}</p>
    </div>
     

    );
}
 export default FormsForUser;
