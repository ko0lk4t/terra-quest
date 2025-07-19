import type { Metadata } from 'next';
import { MagnifyingGlassIcon, UserGroupIcon, GlobeAltIcon, ChartBarIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive executive search services specializing in technology leadership roles, diversity hiring, and global placements.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent via-accent-light to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive executive search solutions tailored for the technology industry
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:gap-16">
            
            {/* Executive Search */}
            <div id="executive-search" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent to-accent-light p-8 text-white">
                    <div className="flex items-center mb-6">
                      <MagnifyingGlassIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">Executive Search</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      Premier executive search services for technology leadership roles
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Leadership Placement</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our executive search practice focuses exclusively on technology leadership roles, from C-suite positions 
                          to VP-level executives. We understand that exceptional technology leadership requires more than just 
                          technical expertise—it demands vision, strategic thinking, and the ability to inspire and scale teams 
                          in rapidly evolving environments.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Roles We Fill</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <ul className="space-y-2 text-gray-600">
                            <li>• Chief Technology Officer (CTO)</li>
                            <li>• Chief Product Officer (CPO)</li>
                            <li>• VP of Engineering</li>
                            <li>• VP of Product</li>
                            <li>• Head of Data/AI</li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Chief Information Officer (CIO)</li>
                            <li>• VP of Platform Engineering</li>
                            <li>• Head of DevOps/Infrastructure</li>
                            <li>• Technical Co-founders</li>
                            <li>• VP of Quality/Security</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Process</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          We employ a rigorous, multi-stage process that combines deep technical assessment with cultural fit evaluation. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                          anim id est laborum.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                              <p className="font-medium">Discovery & Requirements</p>
                            </div>
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                              <p className="font-medium">Candidate Sourcing</p>
                            </div>
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                              <p className="font-medium">Assessment & Placement</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diversity & Inclusion */}
            <div id="diversity-inclusion" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8 order-2 md:order-1">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Diverse Leadership Teams</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our Diversity & Inclusion practice is built on the fundamental belief that diverse leadership teams 
                          drive better business outcomes. We've developed specialized methodologies and partnerships that 
                          ensure comprehensive candidate pools while maintaining the highest standards of excellence.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Our D&I Approach</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <ShieldCheckIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Bias-Free Assessment Framework</p>
                              <p className="text-gray-600 text-sm">Structured evaluation processes that minimize unconscious bias while identifying exceptional talent.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <UserGroupIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Expanded Network Access</p>
                              <p className="text-gray-600 text-sm">Partnerships with diversity organizations, HBCUs, and professional networks focused on underrepresented groups.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <ChartBarIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Data-Driven Insights</p>
                              <p className="text-gray-600 text-sm">Regular reporting on diversity metrics and market intelligence to track progress and identify opportunities.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Impact by the Numbers</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-accent">300%</div>
                            <div className="text-sm text-gray-600">Increase in diverse leadership placements</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">50+</div>
                            <div className="text-sm text-gray-600">Partner organizations</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">85%</div>
                            <div className="text-sm text-gray-600">Client satisfaction rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white order-1 md:order-2">
                    <div className="flex items-center mb-6">
                      <UserGroupIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">Diversity & Inclusion</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      Specialized programs for building diverse technology leadership teams
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Placements */}
            <div id="global-placements" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white">
                    <div className="flex items-center mb-6">
                      <GlobeAltIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">Global Placements</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      Cross-border executive recruitment for expanding technology companies
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">International Executive Search</h3>
                        <p className="text-gray-600 leading-relaxed">
                          As technology companies increasingly operate on a global scale, the need for executives who can 
                          navigate diverse markets, cultures, and regulatory environments has never been greater. Our global 
                          placement practice specializes in identifying leaders who thrive in international contexts while 
                          handling all the complexities of cross-border recruitment.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Global Capabilities</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Regional Expertise</h5>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• North America (US, Canada)</li>
                              <li>• Europe (UK, Germany, France, Nordics)</li>
                              <li>• Asia-Pacific (Singapore, Japan, Australia)</li>
                              <li>• Emerging Markets (India, Brazil, Israel)</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Specialized Services</h5>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• Visa and immigration support</li>
                              <li>• Cultural integration consulting</li>
                              <li>• International compensation benchmarking</li>
                              <li>• Remote leadership assessment</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Global Placements Matter</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui 
                          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-900 mb-2">Success Story</h5>
                        <p className="text-green-800 text-sm">
                          Recently placed a CTO from Silicon Valley to lead the European expansion of a unicorn fintech startup, 
                          navigating GDPR requirements and establishing engineering centers in London and Berlin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Additional Services
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CogIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interim Leadership</h3>
              <p className="text-gray-600">
                Experienced technology executives available for interim roles during transitions, 
                acquisitions, or while conducting permanent searches. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ChartBarIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation services for existing executives, including 360-degree 
                reviews, leadership development recommendations, and succession planning. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ShieldCheckIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Board Advisory</h3>
              <p className="text-gray-600">
                Strategic guidance on board composition, director searches, and governance best 
                practices for technology companies from startup through IPO. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Proven Process</h2>
            <p className="text-lg text-gray-600 mb-12">
              Every search follows our systematic approach, refined through hundreds of successful placements
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">Deep dive into company culture, technical requirements, and strategic objectives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sourcing</h3>
                <p className="text-gray-600 text-sm">Leverage our network and research capabilities to identify top candidates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600 text-sm">Rigorous technical and cultural evaluation through multiple interview rounds</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement</h3>
                <p className="text-gray-600 text-sm">Negotiation support and onboarding assistance to ensure successful integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your executive search needs and how our specialized approach can help you find exceptional technology leadership.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Start a Search
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
