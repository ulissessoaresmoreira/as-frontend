"use client";

import { Modal } from "@/components/admin/Modal";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { ModalScreens } from "@/types/ModalScreens";
import { EventAdd } from "../event/EventAdd";
import * as api from "@/api/admin";
import { SearchEvents } from "../event/SearchEvent";
import { ListEvents } from "../event/EventList";
import { Profile} from '../user/Profile'
import { ModalForms } from "@/components/admin/ModalForms";


const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalScreen, setModalScreen] = useState<ModalScreens | null>(null);
  const id_user = 3

  const loadEvents = async () => {
    setLoading(true);
    const eventList = await api.getEvents(id_user)
  }
 


  return (
    <main className="text-center mx-auto max-w-full w-full p-5">
      <header>
        <h2 className="text-center mx-auto max-w-full p-5 bg-slate-200 text-2xl text-yellow-400 ">
          Amigo Secreto
        </h2>
      </header>

      <div className="text-center mx-auto p-5 flex flex-col items-center justify-center bg-white max-w-full w-full ">
        <div className="flex flex-col gap-2 w-full mx-auto items-center justify-center ">
            <Button
              className="w-96 "
              variant="contained"
              onClick={() => setModalScreen("searchEvent")}
            >
              <div className="w-full h-full ">
                <p>Tenho o convite para um evento.</p>
              </div>
            </Button>

 
            <Button
              className="flex flex-row text-base mb-4 w-96 rounded-sm"
              variant="contained"
              onClick={() => setModalScreen("newEvent")}
            >
              <div className="">
                <p>Quero criar um evento.</p>
              </div>
            </Button>           
          

          <Button
            className="flex flex-row text-base text-yellow-400 mb-4 bg-blue-400 w-96 rounded-sm"
            variant="contained"
            onClick={() => setModalScreen("eventList")}
          >
            <div className="">
              <p>Eventos que participo.</p>
            </div>
          </Button>

          <Button
              className="flex flex-row text-base text-yellow-400 mb-4 bg-blue-400 w-96 rounded-sm"
              variant="contained"
              onClick={() => setModalScreen("profile")}
            >
            <div className="">
              <p>Minha conta.</p>
            </div>
          </Button>

        </div>
      </div>

      {/* Modal */}
      {modalScreen && (
          <Modal onClose={() => setModalScreen(null)} modalScreen={modalScreen}>            
          {modalScreen === 'searchEvent' && <SearchEvents /> }
          {modalScreen === 'eventList' && <ListEvents />}
          {modalScreen === 'newEvent' && <EventAdd refreshAction={loadEvents}/>}
          {modalScreen === 'profile' && <Profile />}
        </Modal>
      )}

      <footer className="mt-5 text-sm">Criado por Ulisses Moreira</footer>
    </main>
  );
};

export default Page;
