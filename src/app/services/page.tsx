import type { Metadata } from 'next';
import { MagnifyingGlassIcon, GlobeAltIcon, MapIcon, BeakerIcon, CogIcon, ShieldCheckIcon, RadioIcon, CameraIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Survey Services',
  description: 'Advanced airborne geophysical survey services including aeromagnetics, LiDAR, gravity surveys, and seepfinder technology for natural resource exploration and environmental monitoring.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent via-accent-light to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Airborne Survey Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Advanced geophysical survey solutions for natural resource exploration, environmental monitoring, and geological mapping
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:gap-16">
            
            {/* Aeromagnetics */}
            <div id="aeromagnetics" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-accent to-accent-light p-8 text-white">
                    <div className="flex items-center mb-6">
                      <MagnifyingGlassIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">Aeromagnetic Surveys</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      High-precision airborne magnetic surveys for geological mapping and resource exploration
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Magnetic Survey Technology</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our aeromagnetic surveys utilize state-of-the-art cesium vapor magnetometers mounted on fixed-wing aircraft 
                          to measure variations in the Earth's magnetic field. This technology reveals subsurface geological structures, 
                          mineral deposits, and hydrocarbon seepage indicators with exceptional precision and resolution.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Applications</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <ul className="space-y-2 text-gray-600">
                            <li>• Mineral exploration and mapping</li>
                            <li>• Oil and gas exploration</li>
                            <li>• Geological structure mapping</li>
                            <li>• Basement topography studies</li>
                            <li>• Archaeological surveys</li>
                          </ul>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Environmental contamination detection</li>
                            <li>• Volcanic hazard assessment</li>
                            <li>• Regional geological surveys</li>
                            <li>• Mining exploration support</li>
                            <li>• Geothermal resource identification</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Survey Capabilities</h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          TAGS operates a fleet of survey aircraft equipped with high-sensitivity magnetometers capable of detecting 
                          magnetic field variations as small as 0.001 nanotesla. Our experienced pilots and geophysicists ensure 
                          optimal flight patterns and data quality for maximum geological insight.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                              <p className="font-medium">Flight Planning & Setup</p>
                            </div>
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                              <p className="font-medium">Data Acquisition</p>
                            </div>
                            <div className="text-center">
                              <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                              <p className="font-medium">Processing & Analysis</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LiDAR Surveys */}
            <div id="lidar" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/3 p-8 order-2 md:order-1">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Light Detection and Ranging Technology</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our LiDAR (Light Detection and Ranging) surveys utilize cutting-edge laser scanning technology mounted on 
                          aircraft to create highly detailed 3D models of terrain and surface features. This technology provides 
                          unprecedented accuracy for topographic mapping, infrastructure assessment, and environmental monitoring.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">LiDAR Applications</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Topographic Mapping</p>
                              <p className="text-gray-600 text-sm">High-resolution digital elevation models for engineering design, flood modeling, and urban planning.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <ShieldCheckIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Infrastructure Monitoring</p>
                              <p className="text-gray-600 text-sm">Precise measurement of building foundations, bridges, and critical infrastructure for safety assessments.</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <BeakerIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Environmental Analysis</p>
                              <p className="text-gray-600 text-sm">Vegetation mapping, forest inventory, and environmental impact studies for conservation projects.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Capabilities</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-accent">±5cm</div>
                            <div className="text-sm text-gray-600">Vertical accuracy</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">1000+</div>
                            <div className="text-sm text-gray-600">Points per m²</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-accent">24/7</div>
                            <div className="text-sm text-gray-600">Survey capability</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-indigo-600 p-8 text-white order-1 md:order-2">
                    <div className="flex items-center mb-6">
                      <MapIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">LiDAR Surveys</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      Precision laser scanning for detailed topographic mapping and 3D terrain modeling
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gravity & Seepfinder */}
            <div id="gravity-seepfinder" className="scroll-mt-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-teal-600 p-8 text-white">
                    <div className="flex items-center mb-6">
                      <GlobeAltIcon className="w-12 h-12 mr-4" />
                      <h2 className="text-2xl md:text-3xl font-bold">Gravity & Seepfinder</h2>
                    </div>
                    <p className="text-lg opacity-90">
                      Advanced gravity surveys and hydrocarbon seepage detection for subsurface analysis
                    </p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialized Gravity and Seepage Detection</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our gravity surveys measure minute variations in the Earth's gravitational field to detect subsurface 
                          density changes, while our Seepfinder technology identifies hydrocarbon microseepage from underground 
                          reservoirs. These complementary techniques provide critical insights for oil & gas exploration, 
                          water resource mapping, and environmental monitoring.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Survey Applications</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Gravity Surveys</h5>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• Freshwater aquifer mapping</li>
                              <li>• Seawater intrusion detection</li>
                              <li>• Subsurface structure analysis</li>
                              <li>• Geological boundary mapping</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Seepfinder Technology</h5>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• Hydrocarbon seepage detection</li>
                              <li>• Buried wellhead location</li>
                              <li>• Pipeline leak detection</li>
                              <li>• Carbon storage monitoring</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Environmental & Resource Applications</h4>
                        <p className="text-gray-600 leading-relaxed">
                          These technologies are essential for water resource management, environmental protection, and sustainable 
                          energy development. Our surveys help identify freshwater resources, detect contamination plumes, 
                          locate carbon sequestration storage areas, and support renewable energy site selection.
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h5 className="font-semibold text-green-900 mb-2">Project Highlight</h5>
                        <p className="text-green-800 text-sm">
                          Successfully mapped freshwater aquifers across 15,000 km² in drought-affected regions, helping 
                          local communities identify sustainable water resources for agricultural and municipal use.
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
            Additional Capabilities
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <RadioIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Remote Sensing</h3>
              <p className="text-gray-600">
                Advanced remote sensing technologies for natural resource management, disaster response, 
                and urban planning. Utilizing multispectral and hyperspectral imaging to provide 
                detailed environmental and geological insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CameraIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aerial Photography</h3>
              <p className="text-gray-600">
                High-resolution aerial photography services for mapping, surveying, and 
                environmental monitoring. Ideal for detailed visualization and analysis 
                of terrain and surface features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <ChartBarIcon className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Processing</h3>
              <p className="text-gray-600">
                Full-service data processing and interpretation solutions, offering cutting-edge 
                analytical techniques to derive actionable insights from complex geophysical data 
                for informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Survey Process</h2>
            <p className="text-lg text-gray-600 mb-12">
              Each survey employs a meticulous process, ensuring the highest quality of data acquisition and analysis.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pre-Flight Planning</h3>
                <p className="text-gray-600 text-sm">Comprehensive mission design, including flight path optimization and equipment setup</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Collection</h3>
                <p className="text-gray-600 text-sm">Utilizing cutting-edge sensors and technologies for precision data acquisition</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
                <p className="text-gray-600 text-sm">In-depth analysis and interpretation using advanced processing algorithms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Final Reporting</h3>
                <p className="text-gray-600 text-sm">Comprehensive reports with actionable insights and detailed visualizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Survey Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact TAGS to discuss how our state-of-the-art geophysical survey solutions can meet your exploration and monitoring needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-accent font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
              Request a Survey
            </a>
            <a href="/about" className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-accent transition-colors">
              Our Experience
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
