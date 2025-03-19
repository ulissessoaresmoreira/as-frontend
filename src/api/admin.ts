import { getCookie } from 'cookies-next';
import {req} from './axios';
import { Event } from '@/types/Event';

export const login = async (password: string) => {
  try {
    const json = await req.post('/admin/login', {password});
    return json.data.token as string ?? false;
  } catch (error) {
    return false;
  }
}

//EVENTS
export const getEvents = async (id_user: number) => {
  const token = getCookie('token');
  const json = await req.get('/admin/events', {
    params: {id_user},
    headers: {
      'Authorization': `Token ${token}`
    }
  });
  return json.data.events as Event[] ?? [];
}