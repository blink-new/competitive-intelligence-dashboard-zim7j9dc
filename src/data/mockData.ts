export interface Competitor {
  id: string;
  name: string;
  color: string;
  logo?: string;
}

export interface ContentItem {
  id: string;
  title: string;
  competitor: string;
  category: string;
  topic: string;
  industry: string;
  technology: string;
  contentType: 'blog' | 'whitepaper' | 'case-study' | 'webinar' | 'podcast' | 'video';
  publishDate: string;
  url: string;
  summary: string;
  tone: 'professional' | 'casual' | 'technical' | 'promotional';
  engagement: number;
  keywords: string[];
}

export interface HeatmapData {
  competitor: string;
  category: string;
  value: number;
  content: ContentItem[];
}

export const competitors: Competitor[] = [
  { id: 'accenture', name: 'Accenture', color: '#A100FF' },
  { id: 'tcs', name: 'TCS', color: '#004B87' },
  { id: 'deloitte', name: 'Deloitte', color: '#86BC25' },
  { id: 'mckinsey', name: 'McKinsey', color: '#1F4E79' },
  { id: 'bcg', name: 'BCG', color: '#0073E6' },
  { id: 'bain', name: 'BAIN', color: '#C41E3A' },
  { id: 'globant', name: 'Globant', color: '#00D4AA' },
  { id: 'endava', name: 'Endava', color: '#FF6B35' },
  { id: 'epam', name: 'EPAM', color: '#52C41A' }
];

export const categories = [
  'AI/ML', 'Cloud Computing', 'Cybersecurity', 'Data Analytics', 
  'DevOps', 'Digital Transformation', 'IoT', 'Blockchain'
];

export const industries = [
  'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 
  'Education', 'Government', 'Energy', 'Transportation'
];

export const technologies = [
  'Python', 'JavaScript', 'AWS', 'Azure', 'Docker', 'Kubernetes', 
  'React', 'Node.js', 'TensorFlow', 'MongoDB'
];

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    competitor: 'accenture',
    category: 'AI/ML',
    topic: 'Healthcare AI',
    industry: 'Healthcare',
    technology: 'TensorFlow',
    contentType: 'blog',
    publishDate: '2024-01-15',
    url: 'https://accenture.com/ai-healthcare',
    summary: 'Accenture explores how AI is revolutionizing patient care and medical diagnostics through strategic consulting.',
    tone: 'professional',
    engagement: 2850,
    keywords: ['AI', 'healthcare', 'patient care', 'diagnostics', 'consulting']
  },
  {
    id: '2',
    title: 'Cloud Security Best Practices for Enterprise',
    competitor: 'tcs',
    category: 'Cybersecurity',
    topic: 'Cloud Security',
    industry: 'Financial Services',
    technology: 'AWS',
    contentType: 'whitepaper',
    publishDate: '2024-01-12',
    url: 'https://tcs.com/cloud-security',
    summary: 'TCS comprehensive guide to securing cloud infrastructure in enterprise environments.',
    tone: 'technical',
    engagement: 1890,
    keywords: ['cloud security', 'enterprise', 'AWS', 'compliance', 'TCS']
  },
  {
    id: '3',
    title: 'Digital Transformation Success Story: Manufacturing Giant',
    competitor: 'deloitte',
    category: 'Digital Transformation',
    topic: 'Industry 4.0',
    industry: 'Manufacturing',
    technology: 'IoT',
    contentType: 'case-study',
    publishDate: '2024-01-10',
    url: 'https://deloitte.com/digital-transformation',
    summary: 'Deloitte case study: How a leading manufacturer achieved 40% efficiency gains through digital transformation.',
    tone: 'promotional',
    engagement: 3200,
    keywords: ['digital transformation', 'manufacturing', 'IoT', 'efficiency', 'Deloitte']
  },
  {
    id: '4',
    title: 'Strategic Innovation in the Age of Disruption',
    competitor: 'mckinsey',
    category: 'Digital Transformation',
    topic: 'Innovation Strategy',
    industry: 'Technology',
    technology: 'Cloud',
    contentType: 'whitepaper',
    publishDate: '2024-01-08',
    url: 'https://mckinsey.com/strategic-innovation',
    summary: 'McKinsey insights on building resilient innovation strategies in disruptive markets.',
    tone: 'professional',
    engagement: 4150,
    keywords: ['strategy', 'innovation', 'disruption', 'McKinsey', 'consulting']
  },
  {
    id: '5',
    title: 'The CEO Agenda: Navigating Uncertainty with Data',
    competitor: 'bcg',
    category: 'Data Analytics',
    topic: 'Executive Leadership',
    industry: 'Financial Services',
    technology: 'Analytics',
    contentType: 'blog',
    publishDate: '2024-01-05',
    url: 'https://bcg.com/ceo-agenda-data',
    summary: 'BCG explores how CEOs can leverage data analytics to navigate market uncertainty.',
    tone: 'professional',
    engagement: 3680,
    keywords: ['CEO', 'data analytics', 'leadership', 'BCG', 'strategy']
  },
  {
    id: '6',
    title: 'Private Equity Performance in Tech Investments',
    competitor: 'bain',
    category: 'Data Analytics',
    topic: 'Investment Analysis',
    industry: 'Financial Services',
    technology: 'Analytics',
    contentType: 'case-study',
    publishDate: '2024-01-03',
    url: 'https://bain.com/pe-tech-performance',
    summary: 'BAIN analysis of private equity performance trends in technology sector investments.',
    tone: 'technical',
    engagement: 2750,
    keywords: ['private equity', 'tech investments', 'performance', 'BAIN', 'analytics']
  },
  {
    id: '7',
    title: 'Building Scalable Software Architecture for Global Enterprises',
    competitor: 'globant',
    category: 'Cloud Computing',
    topic: 'Software Architecture',
    industry: 'Technology',
    technology: 'Kubernetes',
    contentType: 'webinar',
    publishDate: '2024-01-01',
    url: 'https://globant.com/scalable-architecture',
    summary: 'Globant webinar on designing and implementing scalable software architectures for enterprise clients.',
    tone: 'technical',
    engagement: 1950,
    keywords: ['software architecture', 'scalability', 'enterprise', 'Globant', 'cloud']
  },
  {
    id: '8',
    title: 'Agile Transformation in Financial Services',
    competitor: 'endava',
    category: 'DevOps',
    topic: 'Agile Methodology',
    industry: 'Financial Services',
    technology: 'DevOps',
    contentType: 'case-study',
    publishDate: '2023-12-28',
    url: 'https://endava.com/agile-transformation',
    summary: 'Endava case study on successful agile transformation implementation in financial services.',
    tone: 'professional',
    engagement: 1650,
    keywords: ['agile', 'transformation', 'financial services', 'Endava', 'methodology']
  },
  {
    id: '9',
    title: 'AI-Powered Customer Experience Platforms',
    competitor: 'epam',
    category: 'AI/ML',
    topic: 'Customer Experience',
    industry: 'Retail',
    technology: 'Machine Learning',
    contentType: 'blog',
    publishDate: '2023-12-25',
    url: 'https://epam.com/ai-customer-experience',
    summary: 'EPAM explores how AI and machine learning are transforming customer experience platforms.',
    tone: 'professional',
    engagement: 2250,
    keywords: ['AI', 'customer experience', 'machine learning', 'EPAM', 'retail']
  },
  {
    id: '10',
    title: 'Cybersecurity Resilience in Healthcare Systems',
    competitor: 'accenture',
    category: 'Cybersecurity',
    topic: 'Healthcare Security',
    industry: 'Healthcare',
    technology: 'Security',
    contentType: 'whitepaper',
    publishDate: '2023-12-22',
    url: 'https://accenture.com/healthcare-cybersecurity',
    summary: 'Accenture whitepaper on building cybersecurity resilience in healthcare systems.',
    tone: 'technical',
    engagement: 2100,
    keywords: ['cybersecurity', 'healthcare', 'resilience', 'Accenture', 'security']
  },
  {
    id: '11',
    title: 'Cloud Migration Strategies for Legacy Systems',
    competitor: 'tcs',
    category: 'Cloud Computing',
    topic: 'Cloud Migration',
    industry: 'Manufacturing',
    technology: 'AWS',
    contentType: 'podcast',
    publishDate: '2023-12-20',
    url: 'https://tcs.com/cloud-migration-podcast',
    summary: 'TCS podcast discussing effective strategies for migrating legacy systems to cloud platforms.',
    tone: 'casual',
    engagement: 1450,
    keywords: ['cloud migration', 'legacy systems', 'AWS', 'TCS', 'manufacturing']
  },
  {
    id: '12',
    title: 'Sustainable Technology: ESG and Digital Innovation',
    competitor: 'deloitte',
    category: 'Digital Transformation',
    topic: 'Sustainability',
    industry: 'Energy',
    technology: 'IoT',
    contentType: 'video',
    publishDate: '2023-12-18',
    url: 'https://deloitte.com/sustainable-tech-esg',
    summary: 'Deloitte video series on how ESG principles drive digital innovation in sustainable technology.',
    tone: 'professional',
    engagement: 2850,
    keywords: ['sustainability', 'ESG', 'digital innovation', 'Deloitte', 'energy']
  }
];

export const generateHeatmapData = (): HeatmapData[] => {
  const data: HeatmapData[] = [];
  
  competitors.forEach(competitor => {
    categories.forEach(category => {
      const relevantContent = mockContent.filter(
        item => item.competitor === competitor.id && item.category === category
      );
      
      data.push({
        competitor: competitor.name,
        category,
        value: relevantContent.length + Math.floor(Math.random() * 5),
        content: relevantContent
      });
    });
  });
  
  return data;
};

export const getShareOfVoiceData = () => {
  const data = competitors.map(competitor => {
    const competitorContent = mockContent.filter(item => item.competitor === competitor.id);
    const totalEngagement = competitorContent.reduce((sum, item) => sum + item.engagement, 0);
    
    return {
      name: competitor.name,
      value: totalEngagement,
      color: competitor.color,
      contentCount: competitorContent.length
    };
  });
  
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return data.map(item => ({
    ...item,
    percentage: Math.round((item.value / total) * 100)
  }));
};

export const getTopicDiversityData = () => {
  const topics = ['AI/ML', 'Cloud', 'Security', 'Analytics', 'DevOps', 'IoT'];
  
  return competitors.map(competitor => {
    const competitorData = { competitor: competitor.name };
    topics.forEach(topic => {
      competitorData[topic] = Math.floor(Math.random() * 100) + 20;
    });
    return competitorData;
  });
};