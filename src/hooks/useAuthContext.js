import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"


export var useAuthContext = () => {
  var context = useContext(AuthContext);
  //console.log("INITIAL CONTEXT=",context)
  // if(context){
  //   // Check in local storage
  //   console.log("LOCALSTORAGE=" +localStorage.getItem('user'));
  //   context=localStorage.getItem('user');
  //   console.log("CONTEXT= " +context)


  // }
// console.log("CONTEXT=" +context)
  

  return context
}












