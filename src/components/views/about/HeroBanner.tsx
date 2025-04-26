// components/HeroBanner.tsx
import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  url: string;
}

interface HeroBannerProps {
  title: string;
  backgroundImage: string;
  breadcrumbs?: BreadcrumbItem[];
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, backgroundImage, breadcrumbs }) => {
  return (
    <div 
      className="relative py-16 bg-cover bg-center text-white"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        
        {breadcrumbs && (
          <div className="flex justify-center gap-2">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <Link href={item.url}>
                  <span className="hover:text-green-300">{item.label}</span>
                </Link>
                {index < breadcrumbs.length - 1 && <span>/</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;