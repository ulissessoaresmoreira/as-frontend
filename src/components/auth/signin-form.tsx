"use client";
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import { Button } from "@/components/ui/button";
import * as React from 'react';
import TextField from '@mui/material/TextField';

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLogin = () => {
    router.replace('/home');
  };

  return (    
      <>
        <h2 className="text-xl font-semibold "></h2>
        
        <TextField id="outlined-basic" label="Email" variant="outlined" 
          className="w-full rounded-md border border-gray-300 h-12"
          value={emailField}
          onChange={(e) => setEmailField(e.target.value)}
        />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
          className="w-full rounded-md border border-gray-300"
          value={passwordField}
          onChange={(e) => setPasswordField(e.target.value)}
        />
        <Button className="w-full" onClick={handleLogin}>Entrar</Button>        
      </>

  );
};



// export const LoginForm = () => {
//   return (
//     <Box
//       component="form"
//       sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Email" variant="outlined" />
//       <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" />
//     </Box>
//   );
// }






