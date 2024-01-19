"use client" 
import { Hero, Footer } from "@/components";
import CompanyDescription from "@/components/CompanyDescription";
import Services from "@/components/Services"; 
import React, { useState } from 'react';
import QrCodePopUp from "@/components/QrCodePopUp";
import Qr from "@/components/Qr";

export default function Home() {
  return (
   <main className="overflow-hiiden">
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div>
          <Hero />
        </div>
        
        <div>
          <CompanyDescription />
        </div>

        <div>
          <Qr />
        </div>


        <div>
          <Services />
        </div>

        <div>
          <Footer />
        </div> 

         </div>
        </div>
   </main>
  );
}
