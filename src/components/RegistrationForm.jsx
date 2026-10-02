import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { motion } from 'framer-motion';
import { Feather, Send, CheckCircle2, AlertCircle, ExternalLink, Loader2 } from 'lucide-react';

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe4Q040n0IA1sCW8Wij_aRpPqGvtXkqovWiPbxVxs_ILXqFqg/viewform?usp=header";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        college: '',
    });
    const [fieldErrors, setFieldErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: '' }

    const validate = () => {
        const errors = {};
        const trimmedName = formData.full_name.trim();
        const trimmedPhone = formData.phone.trim().replace(/\D/g, '');

        if (!trimmedName || trimmedName.length < 2) {
            errors.full_name = 'Please enter your pirate name (at least 2 letters).';
        }

        if (!trimmedPhone || trimmedPhone.length < 10) {
            errors.phone = 'Please enter a valid 10-digit mobile number.';
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            // Check if Supabase has placeholder credentials
            const isPlaceholder = !import.meta.env.VITE_SUPABASE_URL ||
                import.meta.env.VITE_SUPABASE_URL.includes('your-project') ||
                import.meta.env.VITE_SUPABASE_URL.includes('placeholder');

            if (isPlaceholder) {
                // Friendly fallback to Google Form when database is not configured
                setSubmitStatus({
                    type: 'info',
                    message: 'Official registrations are processed through the Odyssey Google Form. Please complete your registration below.'
                });
                setIsSubmitting(false);
                return;
            }

            const { error } = await supabase
                .from('registrations')
                .insert([
                    {
                        full_name: formData.full_name.trim(),
                        phone: formData.phone.trim(),
                        college: formData.college.trim(),
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) throw error;

            setSubmitStatus({
                type: 'success',
                message: 'Welcome to the Crew! Your scroll has been delivered to the Captain.'
            });
            setFormData({ full_name: '', phone: '', college: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Could not send the pigeon! Please register using the Official Google Form.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="register" className="py-16 sm:py-24 relative z-10 flex items-center justify-center overflow-hidden">
            {/* Standardized Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="parchment-panel burnt-edge p-6 sm:p-10 md:p-12 rounded-sm shadow-2xl relative"
                >
                    {/* Decorative Ink Splat */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-black opacity-15 rounded-full blur-[40px] pointer-events-none"></div>

                    <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8 text-center">
                        <Feather className="text-wood-brown shrink-0" size={28} />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-pirata text-center text-wood-brown text-blood-shadow">
                            Step into Ship
                        </h2>
                    </div>

                    <p className="text-center text-wood-brown/80 font-cinzel text-xs sm:text-sm mb-8">
                        Enter the voyage. Claim your spot aboard Odyssey 2K26.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-wood-brown font-cinzel">
                        {/* Name Input */}
                        <div className="space-y-1.5">
                            <label htmlFor="reg-full-name" className="text-xs sm:text-sm uppercase tracking-wider font-bold block text-wood-brown/80">
                                Full Name <span className="text-blood-red">*</span>
                            </label>
                            <input
                                id="reg-full-name"
                                type="text"
                                name="full_name"
                                required
                                autoComplete="name"
                                value={formData.full_name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={`w-full bg-white/40 border-b-2 py-2.5 px-3 rounded-t-sm focus:outline-none focus:bg-white/60 transition-colors text-wood-brown font-semibold placeholder-wood-brown/40 ${
                                    fieldErrors.full_name ? 'border-blood-red' : 'border-wood-brown/50 focus:border-wood-brown'
                                }`}
                                placeholder="e.g. Jack Sparrow"
                            />
                            {fieldErrors.full_name && (
                                <p className="text-blood-red text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle size={12} /> {fieldErrors.full_name}
                                </p>
                            )}
                        </div>

                        {/* Phone Input */}
                        <div className="space-y-1.5">
                            <label htmlFor="reg-phone" className="text-xs sm:text-sm uppercase tracking-wider font-bold block text-wood-brown/80">
                                Mobile Number <span className="text-blood-red">*</span>
                            </label>
                            <input
                                id="reg-phone"
                                type="tel"
                                inputMode="tel"
                                name="phone"
                                required
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={`w-full bg-white/40 border-b-2 py-2.5 px-3 rounded-t-sm focus:outline-none focus:bg-white/60 transition-colors text-wood-brown font-semibold placeholder-wood-brown/40 ${
                                    fieldErrors.phone ? 'border-blood-red' : 'border-wood-brown/50 focus:border-wood-brown'
                                }`}
                                placeholder="10-digit mobile number"
                            />
                            {fieldErrors.phone && (
                                <p className="text-blood-red text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle size={12} /> {fieldErrors.phone}
                                </p>
                            )}
                        </div>

                        {/* College / Institution Input */}
                        <div className="space-y-1.5">
                            <label htmlFor="reg-college" className="text-xs sm:text-sm uppercase tracking-wider font-bold block text-wood-brown/80">
                                College / Department <span className="text-wood-brown/50 text-xs normal-case">(optional)</span>
                            </label>
                            <input
                                id="reg-college"
                                type="text"
                                name="college"
                                autoComplete="organization"
                                value={formData.college}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full bg-white/40 border-b-2 border-wood-brown/50 py-2.5 px-3 rounded-t-sm focus:outline-none focus:border-wood-brown focus:bg-white/60 transition-colors text-wood-brown font-semibold placeholder-wood-brown/40"
                                placeholder="e.g. Suguna College of Engineering"
                            />
                        </div>

                        {/* Status Message */}
                        {submitStatus && (
                            <div
                                role="alert"
                                aria-live="polite"
                                className={`p-3.5 rounded-sm text-sm font-cinzel font-bold flex items-start gap-2 ${
                                    submitStatus.type === 'success'
                                        ? 'bg-green-900/15 text-green-950 border border-green-800/40'
                                        : submitStatus.type === 'error'
                                        ? 'bg-blood-red/15 text-blood-red border border-blood-red/40'
                                        : 'bg-gold-doubloon/20 text-wood-brown border border-wood-brown/30'
                                }`}
                            >
                                {submitStatus.type === 'success' && <CheckCircle2 size={18} className="text-green-800 shrink-0 mt-0.5" />}
                                {submitStatus.type === 'error' && <AlertCircle size={18} className="text-blood-red shrink-0 mt-0.5" />}
                                {submitStatus.type === 'info' && <ExternalLink size={18} className="text-wood-brown shrink-0 mt-0.5" />}
                                <span>{submitStatus.message}</span>
                            </div>
                        )}

                        {/* Quick Register / Direct Google Form Button */}
                        <a
                            href={GOOGLE_FORM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3.5 sm:py-4 bg-wood-brown text-gold-doubloon font-pirata text-xl sm:text-2xl tracking-widest border-2 border-gold-doubloon shadow-lg hover:bg-black hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 text-center rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-doubloon"
                        >
                            <span>Open Official Registration Form</span>
                            <ExternalLink size={20} />
                        </a>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-wood-brown/30"></div>
                            <span className="flex-shrink mx-4 text-xs font-cinzel uppercase text-wood-brown/60">or quick crew sign-up</span>
                            <div className="flex-grow border-t border-wood-brown/30"></div>
                        </div>

                        {/* Fast Submit button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-parchment-dark/60 text-wood-brown font-cinzel font-bold text-sm tracking-wider uppercase border border-wood-brown hover:bg-wood-brown hover:text-gold-doubloon disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 rounded-sm"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={16} className="animate-spin" />
                                    <span>Sending Pigeon...</span>
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    <span>Send Registration Scroll</span>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default RegistrationForm;
