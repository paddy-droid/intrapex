'use client';

import { Mail, Send } from "lucide-react";
import { useFormState, useFormStatus } from 'react-dom';
import { sendContactEmail } from '@/app/actions';

const initialState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();
    
    return (
        <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
            {pending ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                </>
            ) : (
                <>
                    Nachricht senden <Send className="ml-2 h-4 w-4" />
                </>
            )}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useFormState(sendContactEmail, initialState);
    
    return (
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Senden Sie uns eine Nachricht</h2>
            <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Ihr Name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700">E-Mail</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="ihre@email.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-slate-700">Betreff</label>
                    <input type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Anfrage für..." />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Nachricht</label>
                    <textarea id="message" name="message" rows={6} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Beschreiben Sie Ihr Projekt..." />
                </div>
                <SubmitButton />
                
                {state.message && (
                    <div className={`mt-4 p-4 rounded-lg ${state.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        {state.message}
                    </div>
                )}
            </form>
        </div>
    );
}