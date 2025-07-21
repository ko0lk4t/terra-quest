"use client";
import Link from 'next/link';
import { MagnifyingGlassIcon, GlobeAltIcon, MapIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow leading-tight">
            Advanced Airborne Geophysical Surveys
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            TerraQuest Airborne Geophysical Services Ltd (TAGS) delivers precision airborne surveys for natural resource exploration, environmental monitoring, and geological mapping across 5 continents.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/contact?type=survey" 
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Request Survey
            </Link>
            <Link href="/services" 
                  className="bg-white hover:bg-gray-100 text-accent font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-16">
            Core Survey Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Aeromagnetics */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <MagnifyingGlassIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Aeromagnetics</h3>
              <p className="text-gray-600 mb-4">
                High-precision airborne magnetic surveys for mineral exploration, geological mapping, and natural resource identification. Our advanced magnetometer systems detect subsurface geological structures with exceptional accuracy.
              </p>
              <p className="text-gray-600">
                Essential for mapping geological structure, locating mineral deposits, and supporting oil & gas exploration. Used by major clients including Shell, Chevron, and BP for resource exploration worldwide.
              </p>
              <Link href="/services#aeromagnetics" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
                Learn more →
              </Link>
            </div>

            {/* LiDAR */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <MapIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">LiDAR Surveys</h3>
              <p className="text-gray-600 mb-4">
                Advanced Light Detection and Ranging technology for precise topographic mapping, infrastructure assessment, and environmental monitoring. Creates detailed 3D models of terrain and surface features.
              </p>
              <p className="text-gray-600">
                Critical for earthquake hazard assessment, building foundation analysis, infrastructure monitoring, and environmental impact studies. Supports engineering and environmental consultants globally.
              </p>
              <Link href="/services#lidar" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
                Learn more →
              </Link>
            </div>

            {/* Gravity & Seepfinder */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <GlobeAltIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Gravity & Seepfinder</h3>
              <p className="text-gray-600 mb-4">
                Specialized gravity surveys and hydrocarbon seepage detection for oil & gas exploration, water resource mapping, and subsurface structure analysis. Advanced sensors detect subtle density variations.
              </p>
              <p className="text-gray-600">
                Used for mapping freshwater aquifers, detecting seawater intrusion, locating buried wellheads, and identifying carbon sequestration storage areas. Essential for water resource management and environmental protection.
              </p>
              <Link href="/services#gravity-seepfinder" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Survey Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            With 40+ years of experience and 2400+ surveys completed across 24 countries, 
            TAGS delivers the precision and expertise your project demands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" 
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Request Quote
            </Link>
            <Link href="/about" 
                  className="border border-accent text-accent hover:bg-accent hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Our Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
