'use client';
import React from 'react';
import { Mail, Phone, Building, Clock } from 'lucide-react';
import ContactHero from '@/components/ContactHero';
import InfoCard from '@/components/InfoCard';
import FaqItem from '@/components/FaqItem';

const ContactPage = () => {
  const faqs = [
    { q: "Do I need an appointment?", a: "<p>While we do our best to accommodate walk-ins, we highly recommend scheduling an appointment to ensure we can dedicate the appropriate time and expertise to your specific needs without interruption.</p>" },
    { q: "What should I bring to my first consultation?", a: "<p>For an initial consultation, it's helpful to bring any relevant financial statements, tax documents, CIPC documents, or specific correspondence you wish to discuss. This allows us to have a more productive and insightful meeting.</p>" },
    { q: "Is there parking available?", a: "<p>Yes, there is ample and secure parking available for our clients at our offices in Eldoraigne, Centurion.</p>" },
  ];

  return (
    <>
      <ContactHero />

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Column: Contact Form --- */}
          <div className="bg-slate-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" name="full-name" id="full-name" autoComplete="name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone-number" className="block text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Column: Contact Details & Map --- */}
          <div className="space-y-12">
            <div className="space-y-8">
              <InfoCard icon={<Mail size={24}/>} title="Email Address">
                <a href="mailto:info@vnr.co.za" className="text-teal-600 hover:text-teal-700">info@vnr.co.za</a>
              </InfoCard>
              <InfoCard icon={<Phone size={24}/>} title="Phone Number">
                <a href="tel:+27126531633" className="text-teal-600 hover:text-teal-700">+27 12 653 1633</a>
              </InfoCard>
              <InfoCard icon={<Building size={24}/>} title="Office Address">
                <p>1022 Saxby Avenue, Eldoraigne<br/>Centurion, 0157, South Africa</p>
              </InfoCard>
              <InfoCard icon={<Clock size={24}/>} title="Business Hours">
                <p>Mon - Fri: 08:00 - 16:30</p>
                <p>Sat - Sun: Closed</p>
              </InfoCard>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.666601413813!2d28.17116537540679!3d-25.912756877253535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95645517f6923b%3A0x6288602b9348d613!2s1022%20Saxby%20Ave%2C%20Eldoraigne%2C%20Centurion%2C%200157!5e0!3m2!1sen!2sza!4v1720947781358!5m2!1sen!2sza"
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VNR Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="container mx-auto px-4 py-16 sm:py-24 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Quick Questions</h2>
            {faqs.map((faq, index) => (
                <FaqItem key={index} question={faq.q}>
                    {faq.a}
                </FaqItem>
            ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;