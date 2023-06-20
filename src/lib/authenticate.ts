import type { toast } from '@zerodevx/svelte-toast';
import { supabase } from './supabase';

type Toast = typeof toast;

export const signUp = async ({
	email,
	password,
	user_name,
	toast
}: {
	email: string;
	password: string;
	user_name: string;
	toast: Toast;
}) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: { user_name: user_name }
		}
	});

	if (error) {
		console.error(error);
		toast.push(error.message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(187,72,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	} else {
		console.log(data);
		location.replace('login');
	}
};

export const signIn = async ({
	email,
	password,
	toast
}: {
	email: string;
	password: string;
	toast: Toast;
}) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});
	if (error) {
		console.error('Error : ' + error.message);
		toast.push('Sign in fail' + error.message, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(187,72,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		});
	} else {
		console.log(data);
		location.reload();
	}
};

export const getSession = async () => {
	const { data } = await supabase.auth.getSession();
	return data.session;
};

export const getEmail = async () => {
	const { data } = await supabase.auth.getSession();
	return data.session?.user.email;
};

export const logOut = async (): Promise<void> => {
	const { error } = await supabase.auth.signOut();
	if (error) console.error(error);
};
