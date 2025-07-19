// API layer for headless CMS integration
// This file provides a clean interface for fetching content from a CMS
// Currently using mock data, but can be easily swapped for real CMS calls

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    avatar: string;
  };
  featuredImage?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  image: string;
  email: string;
  phone?: string;
  specializations: string[];
  linkedin?: string;
  twitter?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  offices: Array<{
    city: string;
    address: string;
    phone: string;
    isPrimary: boolean;
  }>;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}

// Mock data - replace with actual CMS calls
const mockData = {
  company: {
    name: "TerraQuest Executive Search",
    tagline: "We connect tech executives with leading companies",
    description: "Leading executive search firm specializing in technology leadership roles. We connect visionary tech executives with innovative companies seeking transformational growth.",
    mission: "At TerraQuest, we believe that exceptional technology leadership is the cornerstone of innovation. Our mission is to connect visionary executives with organizations that are ready to transform their industries through technological excellence and forward-thinking strategies.",
    values: [
      {
        title: "Excellence",
        description: "We maintain the highest standards in every search, ensuring only exceptional candidates meet our rigorous evaluation process.",
        icon: "CheckCircleIcon"
      },
      {
        title: "Innovation",
        description: "We leverage cutting-edge recruitment technologies and methodologies to identify talent that others miss.",
        icon: "LightBulbIcon"
      },
      {
        title: "Global Reach",
        description: "Our network spans continents, enabling us to source the best talent regardless of geographical boundaries.",
        icon: "GlobeAltIcon"
      },
      {
        title: "Relationships",
        description: "Long-term partnerships are at the heart of our business. We invest in understanding our clients and candidates.",
        icon: "UsersIcon"
      }
    ],
    offices: [
      {
        city: "San Francisco",
        address: "123 Technology Street, Suite 4500, San Francisco, CA 94105",
        phone: "+1 (415) 555-1234",
        isPrimary: true
      },
      {
        city: "New York",
        address: "456 Executive Avenue, Floor 22, New York, NY 10017",
        phone: "+1 (212) 555-9876",
        isPrimary: false
      },
      {
        city: "London",
        address: "789 Leadership Lane, Canary Wharf, London E14 5AB, UK",
        phone: "+44 20 7555 1111",
        isPrimary: false
      }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/company/terraquest",
      twitter: "https://twitter.com/terraquest",
      email: "hello@terraquest.com"
    }
  },

  services: [
    {
      id: "executive-search",
      title: "Executive Search",
      slug: "executive-search",
      description: "Premier executive search services for technology leadership roles",
      fullDescription: "Our executive search practice focuses exclusively on technology leadership roles, from C-suite positions to VP-level executives. We understand that exceptional technology leadership requires more than just technical expertise—it demands vision, strategic thinking, and the ability to inspire and scale teams in rapidly evolving environments.",
      icon: "SearchIcon",
      features: [
        "C-suite and VP-level placements",
        "Technical and cultural assessment",
        "Global candidate network",
        "Industry expertise",
        "Comprehensive evaluation process"
      ],
      benefits: [
        "Access to top-tier talent",
        "Reduced time-to-hire",
        "Cultural fit guarantee",
        "Executive coaching support",
        "Long-term partnership"
      ]
    },
    {
      id: "diversity-inclusion",
      title: "Diversity & Inclusion",
      slug: "diversity-inclusion",
      description: "Specialized programs for building diverse technology leadership teams",
      fullDescription: "Our Diversity & Inclusion practice is built on the fundamental belief that diverse leadership teams drive better business outcomes. We've developed specialized methodologies and partnerships that ensure comprehensive candidate pools while maintaining the highest standards of excellence.",
      icon: "UserGroupIcon",
      features: [
        "Bias-free assessment framework",
        "Expanded network access",
        "Data-driven insights",
        "Partnership with diversity organizations",
        "Inclusive hiring best practices"
      ],
      benefits: [
        "More diverse candidate pools",
        "Better business outcomes",
        "Enhanced company reputation",
        "Improved team performance",
        "Greater innovation"
      ]
    },
    {
      id: "global-placements",
      title: "Global Placements",
      slug: "global-placements",
      description: "Cross-border executive recruitment for expanding technology companies",
      fullDescription: "As technology companies increasingly operate on a global scale, the need for executives who can navigate diverse markets, cultures, and regulatory environments has never been greater. Our global placement practice specializes in identifying leaders who thrive in international contexts.",
      icon: "GlobeAltIcon",
      features: [
        "International candidate sourcing",
        "Visa and immigration support",
        "Cultural integration consulting",
        "Global compensation benchmarking",
        "Remote leadership assessment"
      ],
      benefits: [
        "Access to global talent",
        "Seamless international transitions",
        "Cultural fit assurance",
        "Regulatory compliance support",
        "Faster market expansion"
      ]
    }
  ],

  teamMembers: [
    {
      id: "sarah-chen",
      name: "Sarah Chen",
      role: "Managing Partner & Founder",
      shortBio: "Former VP of Engineering at three unicorn startups, Sarah brings deep technical expertise to executive search.",
      fullBio: "Sarah Chen is the visionary founder of TerraQuest Executive Search, bringing over 15 years of technology leadership experience to executive recruitment. Prior to founding TerraQuest, Sarah served as VP of Engineering at three successful unicorn startups, including two that went public during her tenure.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face",
      email: "sarah@terraquest.com",
      phone: "+1 (555) 123-4567",
      specializations: ["CTO Search", "VP Engineering", "Technical Co-founders", "AI/ML Leadership"],
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen"
    }
    // Additional team members would be here...
  ]
};

// API functions that can be easily swapped for real CMS calls
export async function getCompanyInfo(): Promise<CompanyInfo> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/company`);
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.company), 100);
  });
}

export async function getServices(): Promise<Service[]> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/services`);
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.services), 100);
  });
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/services/${slug}`);
  // return response.json();
  
  return new Promise((resolve) => {
    const service = mockData.services.find(s => s.slug === slug);
    setTimeout(() => resolve(service || null), 100);
  });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/team`);
  // return response.json();
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData.teamMembers), 100);
  });
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/team/${id}`);
  // return response.json();
  
  return new Promise((resolve) => {
    const member = mockData.teamMembers.find(m => m.id === id);
    setTimeout(() => resolve(member || null), 100);
  });
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/blog?limit=${limit || 10}`);
  // return response.json();
  
  // Mock blog posts for demonstration
  const mockPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Technology Leadership",
      slug: "future-of-technology-leadership",
      excerpt: "How technology leadership roles are evolving in 2024 and what companies should look for in their next CTO.",
      content: "Content would be loaded from CMS...",
      publishedAt: "2024-01-15",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop&crop=face"
      },
      featuredImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      tags: ["Leadership", "Technology", "CTO"]
    }
  ];
  
  return new Promise((resolve) => {
    const posts = limit ? mockPosts.slice(0, limit) : mockPosts;
    setTimeout(() => resolve(posts), 100);
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // In production, this would be:
  // const response = await fetch(`${process.env.CMS_URL}/blog/${slug}`);
  // return response.json();
  
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === slug);
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(post || null), 100);
  });
}

// Utility function for form submissions
export async function submitContactForm(formData: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  inquiryType: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  try {
    // In production, this could be:
    // 1. Formspree integration:
    // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    
    // 2. Or your own API endpoint:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    
    // Mock successful submission
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          success: true, 
          message: "Thank you for your message! We'll get back to you within 24 hours." 
        });
      }, 1000);
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      message: "Sorry, there was an error sending your message. Please try again." 
    };
  }
}

// SEO and metadata helpers
export async function getPageMetadata(page: string) {
  const company = await getCompanyInfo();
  
  const pageMetadata = {
    home: {
      title: `${company.name} | Technology Leadership Recruitment`,
      description: company.description,
    },
    about: {
      title: `About Us | ${company.name}`,
      description: `Learn about ${company.name} - our mission, values, and story in technology leadership recruitment.`,
    },
    services: {
      title: `Our Services | ${company.name}`,
      description: "Comprehensive executive search services specializing in technology leadership roles, diversity hiring, and global placements.",
    },
    team: {
      title: `Our Team | ${company.name}`,
      description: "Meet our expert consultants with deep technology industry experience and proven track records in executive placement.",
    },
    contact: {
      title: `Contact Us | ${company.name}`,
      description: "Ready to find exceptional technology leadership or advance your executive career? Get in touch with our expert team.",
    }
  };

  return pageMetadata[page as keyof typeof pageMetadata] || pageMetadata.home;
}
