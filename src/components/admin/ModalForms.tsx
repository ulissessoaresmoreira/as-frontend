"use client";

import { ModalScreens } from "@/types/ModalScreens";
import React, {useState} from 'react';
import { Modal } from "./Modal";
import { Button, FormControl, Input, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
  modalForms: string | null
};

export const ModalForms = ({modalForms}: Props) => {
  // const [modalScreen, setModalScreen] = useState<ModalScreens | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    
      <div className=" ">
        
        {modalForms === 'searchEvent' && 
          <>
          <div className="flex flex-row w-full gap-1 justify-space-around">
            <div className="w-4/5">
              <FormControl fullWidth sx={{ m: 1 }}  >
              <InputLabel htmlFor="outlined-adornment-amount" >Nome do evento</InputLabel>
              <OutlinedInput
          
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                label="Nome do evento"
              />          
              </FormControl>
            </div>

            <div className="text-white">
              <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined">Senha de Convite</InputLabel>
              <OutlinedInput
              
                id="outlined-adornment-password"
                endAdornment={
                <InputAdornment position="end" className="text-white">                    
                </InputAdornment>
                }
                label="Senha de Convite"
              />
              </FormControl>
            </div>  
            
          </div>

          <Button variant="contained" disableElevation>
            Confirmar
          </Button>  
          </>
        }
        {modalForms === 'eventList' && 
          <>
          <div className="flex flex-row w-full gap-1 justify-space-around">
            <div className="w-4/5">
              <FormControl fullWidth sx={{ m: 1 }}  >
              <InputLabel htmlFor="outlined-adornment-amount" >Nome do evento</InputLabel>
              <OutlinedInput
          
                id="outlined-adornment-amount"
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                label="Nome do evento"
              />          
              </FormControl>
            </div>

            <div className="text-white">
              <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined" className="text-white">
              <InputLabel htmlFor="outlined">Senha de Convite</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                <InputAdornment position="end">                    
                </InputAdornment>
                }
                label="Senha de Convite"
              />
              </FormControl>
            </div>  
            
          </div>
          <Button variant="contained" disableElevation>
            Confirmar
          </Button>  
          </>
        
        }
        {modalForms === 'newEvent' && 
                    <>
                    <div className="flex flex-row w-full gap-1 justify-space-around">
                      <div className="w-4/5">
                        <FormControl fullWidth sx={{ m: 1 }}  >
                        <InputLabel htmlFor="outlined-adornment-amount" >Nome do evento</InputLabel>
                        <OutlinedInput
                    
                          id="outlined-adornment-amount"
                          endAdornment={<InputAdornment position="end"></InputAdornment>}
                          label="Nome do evento"
                        />          
                        </FormControl>
                      </div>
          
                      <div className="text-white">
                        <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined" className="text-white">
                        <InputLabel htmlFor="outlined">Senha de Convite</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          endAdornment={
                          <InputAdornment position="end">                    
                          </InputAdornment>
                          }
                          label="Senha de Convite"
                        />
                        </FormControl>
                      </div>  
                      
                    </div>
                    <Button variant="contained" disableElevation>
                      Confirmar
                    </Button>  
                    </>
        
        }
        {modalForms === 'profile' && 
                    <>
                    <div className="flex flex-row w-full gap-1 justify-space-around">
                      <div className="w-4/5">
                        <FormControl fullWidth sx={{ m: 1 }}  >
                        <InputLabel htmlFor="outlined-adornment-amount" >Nome do evento</InputLabel>
                        <OutlinedInput
                    
                          id="outlined-adornment-amount"
                          endAdornment={<InputAdornment position="end"></InputAdornment>}
                          label="Nome do evento"
                        />          
                        </FormControl>
                      </div>
          
                      <div className="text-white">
                        <FormControl sx={{ m: 1, width: '20ch' }} variant="outlined" className="text-white">
                        <InputLabel htmlFor="outlined">Senha de Convite</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          endAdornment={
                          <InputAdornment position="end">                    
                          </InputAdornment>
                          }
                          label="Senha de Convite"
                        />
                        </FormControl>
                      </div>  
                      
                    </div>
                    <Button variant="contained" disableElevation>
                      Confirmar
                    </Button>  
                    </>
        }
      </div>  

    
  );  
};  