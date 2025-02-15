// import {req} from '@/api/axios';
// import { Event } from '@/types/event';

// export const getEvent = async (id: number): Promise<Event | false> => {
//   const json = await req.get(`/events/${id}`);
//   console.log(json);
//   return json.data.event as Event?? false;
// }


import { req } from '@/api/axios';
import { Event } from '@/types/Event';
import { Person } from '@/types/Person';
import { SearchResult } from '@/types/SearchResult';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API;  // Certifique-se de que está definida corretamente
 const url = `${baseUrl}`;  // URL completa para o backend

export const getEvent = async (id: number): Promise<Event | false> => {
  try {
    const json = await req.get(`${url}/events/${id}`);  // Chamada para http://localhost:4000/events/${id}
    console.log(json);
    return json.data.event as Event ?? false;
  } catch (error) {
    console.error('Failed to fetch event:', error);
    return false;
  }
};

export const searchByPhone = async (id_event: number, phone: string): Promise<SearchResult | false> => {
  const json = await req.get(`${url}/events/${id_event}/search?phone=${phone}`);
  if(json.data.person && json.data.personMatched){
    return json.data as SearchResult ?? false;
  }
  return false;
}
