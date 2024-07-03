import { useState } from "react"
import Button from "./Button"
const LoginCard = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  

    // Error messages

    const [firstNameError, setFirstNameError]  = useState("");
    const [lastNameError, setLastNameError]  = useState("");
    const [emailError, setEmailError]  = useState("");
    const [passwordError, setPasswordError]  = useState("");
    const [confirmError, setConfirmError]  = useState("");

    


    const handleSubmit = (e)=>{
        e.preventDefault()

        const newUser = { firstName,lastName, email, password,confirmPassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 8) {
            setEmailError("Email must be  8 characters long");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be  8 characters long");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmError("Confirmed Password must be  8 characters long");
        } else {
            setConfirmError("");
        }
    };

        
    
    return (
        <div className="d-flex justify-content-center">
            <div className="card bg-secondary smCard align-items-center ">
                <form onSubmit={(e) => handleSubmit(e)}> 
                    <div>
                        <label htmlFor="firstName" className="lbColor smLabel" >First Name </label>
                        <input type="text" className="form-control mb-4"  placeholder="Please Enter First Name" name= "firstName" onChange ={handleFirstName} value={firstName}></input>
                        <p className="text-warning">{firstNameError}</p>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="lbColor smLabel" >Last Name </label>
                        <input type="text" className="form-control mb-4"  placeholder="Please Enter Last Name" name= "lastName" onChange ={handleLastName}value={lastName}></input>
                        <p className="text-warning">{lastNameError}</p>
                    </div>
                    <div>
                        <label htmlFor="email" className="lbColor smLabel" >Email </label>
                        <input type="text" className="form-control mb-4"  placeholder="Please Enter Email" name= "email" onChange ={handleEmail} value={email}></input>
                        <p className="text-warning">{emailError}</p>
                    </div>
                    <div>
                        <label htmlFor="password" className="lbColor smLabel" >Password </label>
                        <input type="text" className="form-control mb-4"  placeholder="Please Enter Password" name= "password" onChange={handlePassword} value={password}></input>
                        <p className="text-warning">{passwordError}</p>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="lbColor smLabel">Confirm Password</label>
                        <input type="text" className="form-control mb-4"  placeholder="Please Enter Confirmed Password" name ="confirmPassword" onChange={handleConfirmPassword} ></input>
                        <p className="text-warning">{confirmError}</p>
                    </div>
                    <Button></Button>
                </form>  
            </div>
        </div>
        )
    
}
    export default LoginCard