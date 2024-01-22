"use client" 
import { Hero, Footer } from "@/components";
import CompanyDescription from "@/components/CompanyDescription";
import Services from "@/components/Services"; 
import React from 'react';
import SocialTemp from "@/components/SocialTemp";
import QrTemp from "@/components/QrTemp";

const services = [
  { title: 'How to love someone', description: 'Okay, I awaw you.' },
  { title: 'When we start?', description: 'When we are reday!'},
  { title: 'More push more belive!', description: 'Yse bro!' },
];

export default function Home() {
  return (
   <main className="overflow-hiiden">
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div>
          <Hero />
        </div>
        
        <div>
          <CompanyDescription />
        </div>

        <div>
          <QrTemp />
        </div>

        <div>
          <SocialTemp />
        </div>
    

        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4 text-green-500 pb-5">Explore more about our Services</h1>
          {services.map((service, index) => (
            <Services key={index} {...service} />
          ))}
        </div>

        <div>
          <Footer />
        </div> 

         </div>
        </div>
   </main>
  );
}
