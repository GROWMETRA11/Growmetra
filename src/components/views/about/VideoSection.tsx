
import React from 'react';
import vid from '../../../app/assets/vid.png'
const VideoSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-cover bg-center text-white" style={{ backgroundImage: "url('../vid.png')" }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          
          <h2 className="text-3xl font-bold mb-8">ECO-Friendly Products can be Made from Scratch</h2>
          
          <button 
            className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition duration-300 mx-auto"
            aria-label="Play video"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-4-4a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-2.293 2.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;