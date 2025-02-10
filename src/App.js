import './App.css';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      <header>
        <h1 className> Terolo </h1>
      </header>
      <div>
      <Box sx={{
  width: "90%",
  padding: "24px 20px", // theme padding
  margin: 10,
  border: "1px solid rgba(0, 0, 0, 0.12)",
  
  borderRadius: 4,
  height: "1000px"
}}> 
       <h1 className> Sign In </h1>
<Box sx={{
  width: "70%",
  padding: "24px 20px", // theme padding
  margin: 20,
  border: "1px solid rgba(16, 13, 219, 0.81)",
  borderRadius: 4,
  height: "60px"
}}>
         <h2 className> Google </h2>

</Box>
      </Box>
    </div>
    
    </div>
  );
}

export default App;
