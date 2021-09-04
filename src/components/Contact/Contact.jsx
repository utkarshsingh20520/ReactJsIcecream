import React, { useState } from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    website: "",
    message: "",
  });
  
   let name , value;
   const getUserData = (event) =>{
       name = event.target.name;
       value = event.target.value;
       setUser({...user, [name] : value})
   }

   const postData = async (e) => {
       e.preventDefault();

       const {firstname,lastname,email,website,message} = user;

       const response = await fetch("https://contactform-23547-default-rtdb.firebaseio.com/contactForm.json",
       {
         method: "POST",
         headers:{
           "Content-Type": "application/json",
         },

         body: JSON.stringify({
          firstname,
          lastname,
          email,
          website,
          message,
         })
       }
       );

       if(response){
         setUser({
          firstname: "",
          lastname: "",
          email: "",
          website: "",
          message: "",
        })

        alert("Data Stored Successfully");
       }
   }
  return (
    <>
      <div className="bodycontact">
        <div className="containercontact">
          <div className="text">Contact us Form</div>
          <form method="POST">
            <div className="form-row">
              <div className="input-data">
                <input
                  value={user.firstname}
                  onChange={getUserData}
                  name="firstname"
                  type="text"
                  required
                />
                <div className="underline"></div>
                <label for="">First Name</label>
              </div>
              <div className="input-data">
                <input
                  value={user.lastname}
                  onChange={getUserData}
                  name="lastname"
                  type="text"
                  required
                />
                <div className="underline"></div>
                <label for="">Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input 
                value={user.email} 
                onChange={getUserData} 
                name="email"
                type="text" 
                required
                />
                <div className="underline"></div>
                <label for="">Email Address</label>
              </div>
              <div className="input-data">
                <input
                  value={user.website}
                  onChange={getUserData}
                  name="website"
                  type="text"
                  required
                />
                <div className="underline"></div>
                <label for="">Website Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea
                  rows="8"
                  cols="80"
                  value={user.message}
                  name="message"
                  onChange={getUserData}
                  required
                ></textarea>
                <br />
                <div className="underline"></div>
                <label for="">Write your message</label>
                <br />
                <div className="form-row submit-btn">
                  <div className="input-data">
                    <div className="inner"></div>
                    <input type="submit"
                    onClick={postData}
                    value="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
