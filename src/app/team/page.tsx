"use client";
import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  image: string;
  email: string;
  phone?: string;
  specializations: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Managing Partner & Founder",
    shortBio: "Former VP of Engineering at three unicorn startups, Alexandra brings deep technical expertise to executive search.",
    fullBio: "Alexandra Chen is the visionary founder of TerraQuest Executive Search, bringing over 15 years of technology leadership experience to executive recruitment. Prior to founding TerraQuest, Alexandra served as VP of Engineering at three successful unicorn startups, including two that went public during her tenure. Her unique perspective as both a technology executive and recruitment expert allows her to identify the nuanced qualities that distinguish exceptional leaders. Alexandra holds an MS in Computer Science from Stanford University and an MBA from Wharton. She is frequently invited to speak at technology conferences about building high-performing engineering organizations and scaling technical teams. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://picsum.photos/400/400?random=1",
    email: "alexandra@terraquest.com",
    phone: "+1 (555) 123-4567",
    specializations: ["CTO Search", "VP Engineering", "Technical Co-founders", "AI/ML Leadership"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Senior Partner",
    shortBio: "Expert in C-suite placements with 20+ years in executive search, specializing in scaling technology companies.",
    fullBio: "Michael Rodriguez brings two decades of executive search expertise to TerraQuest, with a particular focus on C-suite placements in high-growth technology companies. Before joining TerraQuest as a founding partner, Michael was a Principal at a top-tier executive search firm where he led over 200 successful placements, including CEOs, CTOs, and CPOs at companies ranging from Series B startups to Fortune 100 enterprises. His deep understanding of what it takes to scale organizations from startup to IPO makes him invaluable to both clients and candidates navigating critical growth phases. Michael earned his JD from Harvard Law School and began his career as a corporate attorney before transitioning to executive search. He maintains active board positions with several technology companies and is a frequent mentor to startup founders. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "https://picsum.photos/400/400?random=2",
    email: "michael@terraquest.com",
    phone: "+1 (555) 234-5678",
    specializations: ["CEO Search", "Board Advisory", "Scale-up Leadership", "Digital Transformation"]
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    role: "Partner, D&I Practice Lead",
    shortBio: "PhD in Organizational Psychology, leading our diversity and inclusion initiatives with data-driven approaches.",
    fullBio: "Dr. Priya Patel leads TerraQuest's Diversity & Inclusion practice, bringing a unique combination of academic rigor and practical experience to building diverse leadership teams. With a PhD in Organizational Psychology from MIT and over 12 years of experience in talent acquisition, Priya has developed proprietary methodologies for identifying and attracting underrepresented talent in technology leadership roles. Prior to joining TerraQuest, she served as Head of Diversity Recruiting at a major technology company where she increased leadership diversity by 300% over four years. Her research on unconscious bias in executive hiring has been published in several peer-reviewed journals and featured in Harvard Business Review. Priya is a sought-after speaker on inclusive leadership and serves on the advisory boards of several organizations focused on increasing diversity in tech. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    image: "https://picsum.photos/400/400?random=3",
    email: "priya@terraquest.com",
    specializations: ["D&I Leadership", "Organizational Psychology", "Inclusive Hiring", "Board Diversity"]
  },
  {
    id: 4,
    name: "Robert Thompson",
    role: "Principal Consultant",
    shortBio: "Former startup founder and product leader, specializing in product management and growth executive roles.",
    fullBio: "Robert Thompson brings a unique founder's perspective to executive search, having built and sold two successful technology companies before joining TerraQuest. His experience as a product leader and entrepreneur gives him deep insights into the challenges facing scaling technology companies and the type of leadership needed to navigate rapid growth. At TerraQuest, Robert focuses primarily on product management and growth executive roles, including CPOs, VPs of Product, and Head of Growth positions. His network spans the entire product ecosystem, from early-stage startups to public companies. Robert holds a BS in Engineering from UC Berkeley and an MBA from Stanford Graduate School of Business. He remains active in the startup community as an angel investor and advisor to several early-stage companies. His blog on product leadership and company building is widely read in the tech community. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    image: "https://picsum.photos/400/400?random=4",
    email: "robert@terraquest.com",
    specializations: ["Product Leadership", "Growth Executives", "Startup Advisory", "GTM Strategy"]
  },
  {
    id: 5,
    name: "Sofia Martinez",
    role: "Associate Principal",
    shortBio: "Global recruitment expert with extensive experience in international executive placements and cultural intelligence.",
    fullBio: "Sofia Martinez leads TerraQuest's global expansion efforts, bringing extensive experience in international executive placements and cross-cultural leadership assessment. With fluency in five languages and having worked across four continents, Sofia understands the nuances of placing executives in diverse cultural contexts. Before joining TerraQuest, she spent eight years at a global executive search firm where she opened their Eastern European and Asian practices. Her expertise in navigating visa requirements, international compensation structures, and cultural fit has made her invaluable for companies expanding globally or seeking international talent. Sofia holds degrees from the London School of Economics and INSEAD, and maintains active relationships with executive search partners in over 20 countries. She regularly publishes research on global talent mobility and speaks at international HR conferences. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    image: "https://picsum.photos/400/400?random=5",
    email: "sofia@terraquest.com",
    specializations: ["Global Placements", "International Expansion", "Cross-cultural Leadership", "EMEA/APAC Markets"]
  },
  {
    id: 6,
    name: "Jonathan Kim",
    role: "Research Director",
    shortBio: "Former investment banker turned recruitment researcher, leading our market intelligence and candidate sourcing.",
    fullBio: "Jonathan Kim serves as TerraQuest's Research Director, combining his background in financial analysis with deep expertise in talent market intelligence. Prior to joining TerraQuest, Jonathan spent seven years as an investment banker specializing in technology sector M&A, giving him unique insights into market dynamics and executive compensation trends. His analytical approach to candidate sourcing and market research has revolutionized how TerraQuest identifies and attracts top talent. Jonathan leads a team of researchers who maintain comprehensive databases of technology executives and provide market intelligence that informs search strategies. His quarterly reports on technology executive compensation and market trends are widely circulated among venture capital firms and technology companies. Jonathan holds a BA in Economics from Harvard and an MBA in Finance from Columbia Business School. He is also a CFA charterholder and regularly speaks at industry conferences about technology sector talent trends. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
    image: "https://picsum.photos/400/400?random=6",
    email: "jonathan@terraquest.com",
    specializations: ["Market Research", "Executive Compensation", "Data Analytics", "Talent Intelligence"]
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Expert consultants with deep technology industry experience and proven track records in executive placement
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.shortBio}</p>
                  <div className="mt-4">
                    <button className="text-accent hover:text-accent-light font-medium text-sm">
                      View Full Profile →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedMember.name}</h2>
              <button
                onClick={() => setSelectedMember(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative h-64 w-full md:h-80 mb-4">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedMember.name}</h3>
                  <p className="text-accent font-medium mb-4">{selectedMember.role}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                      <a href={`mailto:${selectedMember.email}`} className="text-accent hover:text-accent-light">
                        {selectedMember.email}
                      </a>
                    </div>
                    {selectedMember.phone && (
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-5 h-5 text-gray-400" />
                        <a href={`tel:${selectedMember.phone}`} className="text-accent hover:text-accent-light">
                          {selectedMember.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specializations.map((spec, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-accent-light bg-opacity-10 text-accent text-sm rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">About {selectedMember.name.split(' ')[0]}</h4>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {selectedMember.fullBio.split('. ').map((sentence, index) => {
                      if (sentence.trim()) {
                        return (
                          <p key={index}>
                            {sentence.endsWith('.') ? sentence : sentence + '.'}
                          </p>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced consultants are ready to help you find the perfect executive leader 
            or advance your career to the next level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-accent hover:bg-accent-light text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Start a Search
            </a>
            <a href="/services" className="border border-accent text-accent hover:bg-accent hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
