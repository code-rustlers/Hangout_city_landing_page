import React, { useState } from 'react'

const Footer = () => {
    const [email, setEmail] = useState('');    
      const handleEmailSubmit = (e:any) => {
        e.preventDefault();
        alert(`Thanks for subscribing with: ${email}`);
        setEmail('');
      };
  return (
    <footer id="get-started" className="py-16" style={{backgroundColor:"#6C8A7C"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Hangout logo</h3>
              
              <div className="mb-8">
                <h4 className="text-xl text-white mb-4">
                  Stay in <span className="italic">touch</span>
                </h4>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Get the latest updates on new hangouts, community events, and tips for making meaningful connections. Join our newsletter and never miss out on the fun!
                </p>
              </div>

              <div className="border-t border-gray-500 pt-6">
                <p className="text-gray-300 text-sm">
                  © 2024 Hangout City. All rights reserved.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-start space-y-4 lg:items-end">
              <a href="#get-started" className="text-white hover:text-gray-200 transition">
                Join in your city
              </a>
              <a href="#become-guide" className="text-white hover:text-gray-200 transition">
                Become a guide
              </a>
              <p className="text-gray-300">
                Building communities, one hangout at a time
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer