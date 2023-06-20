import { PUBLIC_DB_API_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

// Creating this file in src/lib/server/~ blocks it from being imported in the browser.
// Since the public Anon Key is used, this module is created in the src/lib/~ directory.

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_DB_API_KEY);
