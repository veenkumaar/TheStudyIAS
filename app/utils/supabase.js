import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://edntzsrxoexhgozsrfiw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbnR6c3J4b2V4aGdvenNyZml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Nzc1NDgsImV4cCI6MjA2MDQ1MzU0OH0.vL0RaNQn0XtNurFSTS6Z5s6CyTTxXFo5QDG6ztntZUs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
