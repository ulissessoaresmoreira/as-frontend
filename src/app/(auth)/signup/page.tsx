
import { SignupForm } from '@/components/auth/signup-form';
import Link from 'next/link';
import React from 'react';



const Page = () => {
  return (
    <div 
    className="flex items-center justify-center h-screen bg-red-100 relative bg-cover bg-center"
    style={{ backgroundImage: "url('/capa.jpeg')" }}
    >
      <div className="max-w-lg mx-auto w-80 p-6 bg-white shadow-lg rounded-lg flex flex-col items-center gap-4">
        <h1 className='text-2xl text-gray-800'>Crie sua conta</h1>
        <SignupForm />
        <div className='flex flex-col items-center gap-1 justify-center '>
          <h3 className='text-lg text-gray-800'>Já tens uma conta?</h3>
          <Link className='text-xl text-blue-800 hover:underline' href="/signin">Entrar no amigo secreto</Link>
        </div>
        
      </div>
      
    </div>
  );
}

export default Page;