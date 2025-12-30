'use client'
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Navbar from '@/components/Navbar';
import Questions from '@/components/Questions';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/Works';


export default function HangoutsLanding() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: "#F8F6F3" }}>
      
      <Navbar/>
      <Hero/>    
      <Info/>
      <Cards/>
      <HowItWorks/>
      <Testimonials/>
      <Questions/>
      <Footer/>
    </div>
  );
}