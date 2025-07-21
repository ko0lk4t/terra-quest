import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TQ</span>
              </div>
              <span className="text-xl font-bold">TerraQuest</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
              Leading airborne geophysical survey company delivering precision data for natural resource exploration, environmental monitoring, and geological mapping worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:hello@terraquest.com" className="text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors" aria-label="Email">
                <EnvelopeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="/services#aeromagnetics" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                Aeromagnetics
              </Link>
              <Link href="/services#lidar" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                LiDAR Surveys
              </Link>
              <Link href="/services#gravity-seepfinder" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                Gravity & Seepfinder
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-gray-300 dark:text-gray-400 hover:text-accent dark:hover:text-accent-light transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-gray-300 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} TerraQuest Airborne Geophysical Services Ltd (TAGS). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
