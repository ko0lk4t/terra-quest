import type { Metadata } from 'next';
import { CheckCircleIcon, LightBulbIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TerraQuest Executive Search - our mission, values, and story in technology leadership recruitment.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent-light text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TerraQuest</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pioneering the future of executive search in technology leadership
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At TerraQuest, we believe that exceptional technology leadership is the cornerstone of innovation. 
              Our mission is to connect visionary executives with organizations that are ready to transform 
              their industries through technological excellence and forward-thinking strategies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in identifying leaders who don't just manage technology—they leverage it to create 
              competitive advantages, drive digital transformation, and build sustainable growth in an ever-evolving 
              digital landscape. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircleIcon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every search, ensuring only exceptional candidates 
                meet our rigorous evaluation process. Excellence is not just our goal—it's our baseline.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <LightBulbIcon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We leverage cutting-edge recruitment technologies and methodologies to identify talent 
                that others miss. Our innovative approach ensures we stay ahead of market trends.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GlobeAltIcon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Reach</h3>
              <p className="text-gray-600">
                Our network spans continents, enabling us to source the best talent regardless of 
                geographical boundaries. We think globally while acting locally in every market.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <UsersIcon className="w-12 h-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Relationships</h3>
              <p className="text-gray-600">
                Long-term partnerships are at the heart of our business. We invest in understanding 
                our clients and candidates to create lasting, successful placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* 2018 */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2018 - Foundation</h3>
                      <p className="text-gray-600">
                        TerraQuest was founded with a vision to revolutionize executive search in the technology sector. 
                        Our founders, veterans of both tech and recruitment, identified a gap in the market for 
                        specialized technology leadership placement. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2019 */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2019 - First Major Placements</h3>
                      <p className="text-gray-600">
                        Successfully placed our first Fortune 500 CTO and established partnerships with leading 
                        venture capital firms. This milestone validated our unique approach to technology leadership 
                        recruitment. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2020 */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2020 - Global Expansion</h3>
                      <p className="text-gray-600">
                        Expanded operations to Europe and Asia, establishing our global recruitment network. 
                        Despite challenges, we adapted our processes for remote executive assessments and 
                        digital-first recruitment strategies. Ut enim ad minim veniam, quis nostrud exercitation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2021 - D&I Initiative Launch</h3>
                      <p className="text-gray-600">
                        Launched our comprehensive Diversity & Inclusion program, partnering with organizations 
                        focused on underrepresented groups in technology leadership. This initiative has since 
                        become a cornerstone of our service offering. Duis aute irure dolor in reprehenderit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2023 - AI Integration</h3>
                      <p className="text-gray-600">
                        Integrated advanced AI tools for candidate matching and assessment while maintaining 
                        our human-centric approach. This hybrid model has improved our precision in executive 
                        matching while reducing time-to-placement. Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Present */}
                <div className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:ml-auto md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Today - Industry Leadership</h3>
                      <p className="text-gray-600">
                        TerraQuest is now recognized as a leading executive search firm in technology leadership, 
                        with over 500 successful placements and partnerships with companies from startups to 
                        global enterprises. Our journey continues as we shape the future of tech leadership.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're seeking exceptional technology leadership or looking to advance your executive career, 
            we're here to make the perfect connection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Get Started
            </a>
            <a href="/team" className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-accent transition-colors">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
