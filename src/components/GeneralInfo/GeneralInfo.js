import  React, { useState } from 'react';
// import React, { useState } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./GeneralInfo.css"
import { amber, blue, blueGrey, brown, common, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@mui/material/colors';

export default function GeneralInfo() {
    const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1,width: '50%' },
          }}
        //   noValidate
        >
          
            <div>
            <div className="generalInfo">
               <h2>General Info</h2> 
               <TextField
              
              defaultValue="18276447958"
              InputProps={{
                endAdornment: (
                  <InputAdornment sx={{ color: grey[900] }} position="start">
                    <CheckCircleIcon sx={{ color: green[600] }} />
                    verified
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment sx={{ color: grey[900] }} position="start">
                    CR Number
                  </InputAdornment>
                ),
                
              }}
            />
            <p>Do you have international CR ? <span>Edit</span> </p>
            </div>
            <div>
               <h2>General company information</h2> 
               <TextField
              label="Company Name(English)"
              type="text"
              defaultValue="Al-Emdad LLc"
            />
             <TextField
              label="Company Name(Arabic)"
              type="text"
              defaultValue="Healthcare"
            />
             <TextField
              label="Address"
              type="text"
              defaultValue="Healthcare"
            />
             <TextField
              label="PO Box Address"
              type="text"
              defaultValue="Healthcare"
            />
            </div>
            <div>
               <h2>Communication</h2> 
               <TextField
              label="Mobile Number"
              type="tel"
              defaultValue="531338493"
              InputProps={{
                
                startAdornment: (
                  <InputAdornment sx={{ color: grey[900] }} position="start">
                    +966
                  </InputAdornment>
                ),
                
              }}
            />
             <TextField
              label="Phone Number"
              type="tel"
              defaultValue="+966 531338493"
              InputProps={{
                
                startAdornment: (
                  <InputAdornment sx={{ color: grey[900] }} position="start">
                    +966
                  </InputAdornment>
                ),
                
              }}
            />
             <TextField
              label="Email address"
              type="email"
              defaultValue="Healthcare@domain.com"
            />
             <TextField
              label="Website(Optional)"
              type="url"
              defaultValue="https://www.domain.com"
            />
            </div>
            <div>
               <h2>Vendor Type</h2>  
               <FormControl >
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <div className="row" >
    <FormControlLabel value="smallAndMediumEnterprise" control={<Radio />}/>
    <p>Small & Medium Enterprise</p>
    </div>
    <div className="row" >
    <FormControlLabel value="trade" control={<Radio />}/>
    <p>Trade</p>
    </div>
    <div className="row" >
    <FormControlLabel value="manufacturer" control={<Radio />}/>
    <p>Manufacturer</p>
    </div>
    <div className="row" >
    <FormControlLabel value="contractor" control={<Radio />}/>
    <p>Contractor</p>
    </div>
    <div className="row" >
    <FormControlLabel value="agent" control={<Radio />}/>
    <p>Agent</p>
    </div>
    <div className="row" >
    <FormControlLabel value="nonSupplyingManufacturer" control={<Radio />}/>
    <p>Non Supplying Manufacturer</p>
    </div>
  </RadioGroup>
</FormControl>
            </div>
            </div>
          
          
        </Box>
      );
}

