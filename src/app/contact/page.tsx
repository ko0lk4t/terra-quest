"use client";
import type { Metadata } from 'next';
import { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check URL parameters for pre-selecting inquiry type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'company' || type === 'candidate') {
      setFormData(prev => ({ ...prev, inquiryType: type }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Mock API call - replace with actual Formspree endpoint or API
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          inquiryType: 'general',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to find exceptional technology leadership or advance your executive career?
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="company">I'm a Company - Looking for Executives</option>
                    <option value="candidate">I'm a Candidate - Seeking Opportunities</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media & Press</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-vertical"
                    placeholder="Tell us about your needs, requirements, or how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to our privacy policy. We'll never share your information 
                  with third parties and will only use it to respond to your inquiry and provide relevant 
                  information about our services.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Locations</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <MapPinIcon className="w-5 h-5 text-accent mr-2" />
                      San Francisco (HQ)
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1 ml-7">
                      <p>123 Technology Street</p>
                      <p>Suite 4500</p>
                      <p>San Francisco, CA 94105</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <a href="tel:+14155551234" className="flex items-center text-accent hover:text-accent-light">
                          <PhoneIcon className="w-4 h-4 mr-1" />
                          +1 (415) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <MapPinIcon className="w-5 h-5 text-accent mr-2" />
                      New York
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1 ml-7">
                      <p>456 Executive Avenue</p>
                      <p>Floor 22</p>
                      <p>New York, NY 10017</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <a href="tel:+12125559876" className="flex items-center text-accent hover:text-accent-light">
                          <PhoneIcon className="w-4 h-4 mr-1" />
                          +1 (212) 555-9876
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <MapPinIcon className="w-5 h-5 text-accent mr-2" />
                      London
                    </h4>
                    <div className="text-gray-600 text-sm space-y-1 ml-7">
                      <p>789 Leadership Lane</p>
                      <p>Canary Wharf</p>
                      <p>London E14 5AB, UK</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <a href="tel:+442075551111" className="flex items-center text-accent hover:text-accent-light">
                          <PhoneIcon className="w-4 h-4 mr-1" />
                          +44 20 7555 1111
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Direct Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">General Inquiries</p>
                      <a href="mailto:hello@terraquest.com" className="text-accent hover:text-accent-light">
                        hello@terraquest.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">New Business</p>
                      <a href="mailto:business@terraquest.com" className="text-accent hover:text-accent-light">
                        business@terraquest.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <EnvelopeIcon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Candidates</p>
                      <a href="mailto:candidates@terraquest.com" className="text-accent hover:text-accent-light">
                        candidates@terraquest.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <PhoneIcon className="w-5 h-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Main Line</p>
                      <a href="tel:+14155551234" className="text-accent hover:text-accent-light">
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-accent text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Response Time</h3>
                <p className="text-accent-light mb-4">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call our main line directly.
                </p>
                <div className="text-sm opacity-90">
                  <p><strong>Business Hours:</strong></p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM (PST)</p>
                  <p>Sat: 10:00 AM - 2:00 PM (PST)</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                    Newsletter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
