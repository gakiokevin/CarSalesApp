import Header from "./Header";
import axios from 'axios'
import { useState } from "react";
import SideBar from "./Sidebar";
import Form from "./Form";
import Main from "./mainPage";
import "./App.css";
const App = () => {
const [carimage,setCarImage]= useState()
  const [carDetails, setDetails] = useState({
    make: '',
    mileage: '',
    year: '',
    image: '',
    model: '',
    price: '',
  });
  // a function to collect the value of the input fields
  const carInfo = (e) => {
    setDetails({ ...carDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
      const {make,mileage,year,image,model,price} = carDetails
      const formdata = new FormData();
      console.log(carimage)
      formdata.append("image",carimage)
      formdata.append("make", make); // Add other form fields as needed
      formdata.append("mileage", mileage);
      formdata.append("year", year);
      formdata.append("model", model);
      formdata.append("price", price);
      const result = await axios.post('http://localhost:3000/register-cars',
      formdata,
        {
        headers:{"Content-Type":"multipart/form-data"}
      }
      
      )
  };
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="side">
        <SideBar />
      </div>
      <div className="main">
        <Form
          onFormsubmit={handleSubmit}
          onCarInfoChange={carInfo}
          carDetails={carDetails}
        />
         <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          accept="image/*"
          id="image"
          onChange={(e)=>setCarImage(e.target.files[0])}
         />
      </div>
      </div>
     
      <div>
        
      </div>
     
      </div>
    
  );
};
export default App;
