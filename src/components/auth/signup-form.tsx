"use client";
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import { Button } from "@/components/ui/button";
import * as React from 'react';
import TextField from '@mui/material/TextField';

export const SignupForm = () => {
  const router = useRouter();
  const [nameField, setNamelField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [phoneField, setPhoneField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleLogin = () => {
    router.replace('/home');
  };

  return (    
      <>
        <h2 className="text-xl font-semibold "></h2>
        <TextField id="outlined-basic" label="Nome" variant="outlined" 
          className="w-full rounded-md border border-gray-300 h-12"
          value={nameField}
          onChange={(e) => setNamelField(e.target.value)}
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" 
          className="w-full rounded-md border border-gray-300 h-12"
          value={emailField}
          onChange={(e) => setEmailField(e.target.value)}
        />
        <TextField id="outlined-basic" label="Telemóvel" variant="outlined" 
          className="w-full rounded-md border border-gray-300 h-12"
          value={phoneField}
          onChange={(e) => setPhoneField(e.target.value)}
        />
        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"
          className="w-full rounded-md border border-gray-300"
          value={passwordField}
          onChange={(e) => setPasswordField(e.target.value)}
        />
        <Button className="w-full" onClick={handleLogin}>Registar</Button>        
      </>

  );
};








