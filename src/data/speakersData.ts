export interface Speaker {
  id: string;
  name: string;
  roleTitle: string;
  company: string;
  topicTitle: string;
  bio: string;
  avatarUrl: string;
  socials?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const speakersData: Speaker[] = [
  {
    id: "speaker-1",
    name: "Dr. Irvan Syahputra, M.Kom",
    roleTitle: "Head of AI Research & Senior Data Scientist",
    company: "Google Cloud Indonesia / Tech Innovator",
    topicTitle: "Generative AI Architecture & Industrial Applications in 2026",
    bio: "Pakar Artificial Intelligence dengan pengalaman lebih dari 12 tahun meneliti Large Language Models dan penerapan AI dalam efisiensi industri digital skala global.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    socials: {
      linkedin: "https://linkedin.com/in/example-irvan",
      instagram: "@irvan_ai"
    }
  },
  {
    id: "speaker-2",
    name: "Maya Anggraini, B.Sc., CISSP",
    roleTitle: "Principal Cyber Security Strategist",
    company: "BSSN & National Cyber Defense Specialist",
    topicTitle: "Defending Digital Ecosystems: Cyber Resilience & Zero Trust Framework",
    bio: "Spesialis keamanan siber nasional yang aktif memberikan konsultasi insiden keamanan siber dan perlindungan data pribadi untuk institusi publik & swasta.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    socials: {
      linkedin: "https://linkedin.com/in/example-maya",
      twitter: "@maya_sec"
    }
  }
];
