import type { Metadata } from 'next';
import { CheckCircleIcon, CogIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TerraQuest Airborne Geophysical Services Ltd (TAGS) - our mission, values, and story in delivering precision airborne surveys worldwide.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TerraQuest</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pioneering precision airborne geophysical surveys for natural resource exploration and environmental monitoring
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At TerraQuest Airborne Geophysical Services Ltd (TAGS), we believe that precision data is the foundation 
              of successful exploration and environmental stewardship. Our mission is to deliver the most accurate and 
              comprehensive airborne geophysical surveys, enabling our clients to make informed decisions about natural 
              resource exploration, environmental monitoring, and geological mapping.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We specialize in advanced aeromagnetic surveys, LiDAR mapping, and gravity/seepfinder technology that 
              reveals subsurface insights others cannot detect. With over 40 years of experience and 2,400+ surveys 
              completed across 24 countries, we combine cutting-edge technology with unparalleled expertise to support 
              mining companies, oil & gas exploration, environmental consultants, and government agencies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Precision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deliver the highest level of accuracy in every survey, utilizing advanced instruments 
                and rigorous quality control processes. Our precision data enables confident decision-making 
                for critical exploration and environmental projects.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CogIcon className="w-12 h-12 text-accent dark:text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Advanced Technology</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continuously invest in cutting-edge geophysical equipment and survey technologies, 
                from cesium vapor magnetometers to high-resolution LiDAR systems, ensuring we provide 
                the most comprehensive subsurface insights available.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GlobeAltIcon className="w-12 h-12 text-accent dark:text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Global Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                With operations across 5 continents and surveys completed in 24 countries, we bring 
                unparalleled international experience to every project. Our global perspective enables 
                us to tackle diverse geological challenges worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-accent dark:text-accent-light" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Safety & Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Safety is paramount in all our operations. We maintain the highest safety standards 
                for our flight crews and ground teams while ensuring reliable, on-time delivery of 
                accurate geophysical data for every client project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* 1980s */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1980s - Foundation</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        TerraQuest Airborne Geophysical Services Ltd (TAGS) was founded with a vision to provide 
                        precision airborne geophysical surveys for natural resource exploration. Our founders, 
                        experienced geophysicists and pilots, recognized the growing need for accurate subsurface 
                        data in mining and oil & gas exploration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1990s */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1990s - Technology Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pioneered the use of cesium vapor magnetometers and advanced GPS navigation systems for 
                        aeromagnetic surveys. These technological advances significantly improved survey accuracy 
                        and enabled more precise geological mapping for our mining and exploration clients.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2000s */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2000s - Global Expansion</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Expanded operations internationally, establishing partnerships across Africa, South America, 
                        and Asia. Completed major survey projects for multinational mining corporations including 
                        Shell, Chevron, and BP, cementing our reputation for excellence in geophysical surveying.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2010s */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2010s - LiDAR & Environmental Services</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Added advanced LiDAR surveying capabilities and expanded into environmental monitoring 
                        services. This diversification allowed us to serve environmental consultants, government 
                        agencies, and infrastructure development projects with high-precision topographic mapping.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2020s */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2020s - Digital Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Integrated cutting-edge digital processing systems and real-time data analysis capabilities. 
                        Enhanced our gravity and seepfinder technologies for hydrocarbon exploration and groundwater 
                        mapping, maintaining our position at the forefront of geophysical survey technology.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Present */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Today - Industry Leadership</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        With over 40 years of experience and 2,400+ surveys completed across 24 countries on 5 continents, 
                        TAGS is recognized as a leading provider of airborne geophysical services. We continue to invest 
                        in advanced technologies and expand our global reach to meet evolving exploration needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Survey Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you need precision aeromagnetic surveys, LiDAR mapping, or environmental monitoring, 
            our experienced team is ready to deliver the accurate geophysical data your project demands.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Request Quote
            </a>
            <a href="/services" className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-accent transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
