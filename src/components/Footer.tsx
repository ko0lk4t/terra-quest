import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting visionary technology leaders with innovative companies. 
              Specializing in executive search for the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <Link href="/services#executive-search" className="block text-gray-300 hover:text-accent transition-colors">
                Executive Search
              </Link>
              <Link href="/services#diversity-inclusion" className="block text-gray-300 hover:text-accent transition-colors">
                D&I Hiring
              </Link>
              <Link href="/services#global-placements" className="block text-gray-300 hover:text-accent transition-colors">
                Global Placements
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/team" className="block text-gray-300 hover:text-accent transition-colors">
                Our Team
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-accent transition-colors">
                Contact
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} TerraQuest Executive Search. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
