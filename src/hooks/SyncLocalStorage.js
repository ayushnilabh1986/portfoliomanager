import React, { useEffect, useState } from "react";
async function getEmail(){
  let d= await SyncLocalStorage.getItem('email');
  return d;
  }
  
   




function SyncLocalStorage() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState('')

  useEffect(() => {
   if (email === false) {
    getEmail().then((email) => {
     setEmail(email);
     setPassword(password)
    });
   }
  }, []);
  
 


  
    const onStorageUpdate = (e) => {
      const { key, newValue } = e;
      if (key === "email") {
        setEmail(newValue);
      }
    };
  
    const handleChange = (e) => {
      setEmail(e.target.value);
      localStorage.setItem("name", e.target.value);
    };
  
    useEffect(() => {
      setEmail(localStorage.getItem("name") || "");
      window.addEventListener("storage", onStorageUpdate);
      return () => {
        window.removeEventListener("storage", onStorageUpdate);
      };
    }, []);
  
    return <input value={email} onChange={handleChange} />;
  }
  
  export default SyncLocalStorage;