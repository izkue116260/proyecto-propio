import { supabase } from '../../lib/supabaseClient';
import type { Localidad } from '../models/Localidad';

export const getRepertorio = async (): Promise<Localidad[]> => {
  const { data, error } = await supabase
        .from('Localidades')
        .select('*');
 
  if (error) throw error;
  return data;
}