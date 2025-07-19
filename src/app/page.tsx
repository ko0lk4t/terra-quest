"use client";
import Link from 'next/link';
import { MagnifyingGlassIcon, UserGroupIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow leading-tight">
            We connect tech executives with leading companies
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
            TerraQuest specializes in executive search for technology leadership roles. We bridge the gap between visionary leaders and innovative companies seeking transformational growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link href="/contact?type=company" 
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              For Companies
            </Link>
            <Link href="/contact?type=candidate" 
                  className="bg-white hover:bg-gray-100 text-accent font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              For Candidates
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-16">
            Key Services
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Executive Search */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <MagnifyingGlassIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Executive Search</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive executive search process identifies and attracts top-tier technology leaders who drive innovation and growth. We specialize in C-suite positions including CEO, CTO, CPO, and VP Engineering roles across startups to Fortune 500 companies.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link href="/services#executive-search" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
                Learn more →
              </Link>
            </div>

            {/* D&I Hiring */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <UserGroupIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Diversity & Inclusion Hiring</h3>
              <p className="text-gray-600 mb-4">
                Building diverse leadership teams that reflect the communities they serve. Our D&I-focused approach ensures comprehensive candidate pools while maintaining the highest standards of excellence and cultural fit.
              </p>
              <p className="text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link href="/services#diversity-inclusion" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
                Learn more →
              </Link>
            </div>

            {/* Global Placements */}
            <div className="bg-white p-8 border border-gray-200 rounded-lg card-hover shadow-sm">
              <div className="text-accent mb-4">
                <GlobeAltIcon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Global Placements</h3>
              <p className="text-gray-600 mb-4">
                Cross-border executive placements for companies expanding internationally or seeking global talent. We navigate cultural nuances, visa requirements, and international compensation structures to ensure successful placements.
              </p>
              <p className="text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <Link href="/services#global-placements" className="text-accent hover:text-accent-light font-medium mt-4 inline-block">
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
            Ready to Find Your Next Executive Leader?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're scaling your technology team or seeking your next career opportunity, 
            TerraQuest is here to make the perfect connection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" 
                  className="bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Start Your Search
            </Link>
            <Link href="/about" 
                  className="border border-accent text-accent hover:bg-accent hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
