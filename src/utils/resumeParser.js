// AI Resume Parser - Simulated parsing logic
// In production, this would connect to an actual AI service

export const parseResume = async (fileContent, fileType) => {
  // Simulate AI parsing delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Parse based on file type (simplified simulation)
  const parsedData = {
    personalInfo: {
      name: 'Anderson',
      email: 'anderson@email.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedIn: 'linkedin.com/in/anderson',
      website: 'anderson.dev',
    },
    summary: 'Results-driven software engineer with 6+ years of experience building scalable web applications. Passionate about clean code, user experience, and mentoring junior developers. Led teams that delivered products used by millions of users.',
    experience: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        startDate: '2021-03',
        endDate: 'Present',
        description: '• Led development of microservices architecture serving 2M+ daily active users\n• Reduced API response times by 40% through strategic caching and optimization\n• Mentored team of 5 engineers, conducting code reviews and technical planning\n• Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
        achievements: ['40% performance improvement', '2M+ users served', '$500K cost savings'],
      },
      {
        id: '2',
        title: 'Software Engineer',
        company: 'StartupXYZ',
        location: 'Remote',
        startDate: '2018-06',
        endDate: '2021-02',
        description: '• Built real-time collaboration features for 50K+ monthly active users\n• Developed GraphQL API layer processing 10M+ queries daily\n• Created internal tools that increased team productivity by 30%\n• Led migration from monolith to microservices architecture',
        achievements: ['50K+ MAU', '10M+ daily queries', '30% productivity boost'],
      },
      {
        id: '3',
        title: 'Junior Software Engineer',
        company: 'Digital Solutions Agency',
        location: 'New York, NY',
        startDate: '2016-08',
        endDate: '2018-05',
        description: '• Developed responsive web applications for Fortune 500 clients\n• Collaborated with UX team to implement accessible designs\n• Maintained legacy systems while building new features',
        achievements: ['15+ client projects', '99.9% uptime'],
      },
    ],
    education: [
      {
        id: '1',
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        startDate: '2012-09',
        endDate: '2016-05',
        gpa: '3.7',
        honors: 'Magna Cum Laude',
      },
    ],
    skills: {
      languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL', 'GraphQL'],
      frameworks: ['React', 'Node.js', 'Next.js', 'Express', 'Django'],
      tools: ['Git', 'Docker', 'AWS', 'Kubernetes', 'Jenkins', 'Terraform'],
      concepts: ['System Design', 'Microservices', 'CI/CD', 'Agile', 'TDD'],
    },
    certifications: [
      { name: 'AWS Solutions Architect Professional', issuer: 'Amazon Web Services', date: '2023-06' },
      { name: 'Google Cloud Professional Developer', issuer: 'Google', date: '2022-03' },
    ],
    projects: [
      {
        id: '1',
        name: 'OpenSource Dashboard',
        description: 'Open-source analytics dashboard with real-time data visualization',
        technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
        link: 'github.com/alexandra/dashboard',
      },
    ],
  };

  return parsedData;
};

export const analyzeJobMatch = async (resumeData, jobDescription) => {
  // Simulate AI analysis delay
  await new Promise(resolve => setTimeout(resolve, 1200));

  // Extract key requirements from job description (simplified)
  const requirements = extractRequirements(jobDescription);
  const resumeSkills = [
    ...resumeData.skills.languages,
    ...resumeData.skills.frameworks,
    ...resumeData.skills.tools,
  ];

  const matchedSkills = requirements.filter(req => 
    resumeSkills.some(skill => skill.toLowerCase().includes(req.toLowerCase()))
  );
  const missingSkills = requirements.filter(req => 
    !resumeSkills.some(skill => skill.toLowerCase().includes(req.toLowerCase()))
  );

  const matchPercentage = Math.round((matchedSkills.length / requirements.length) * 100);

  return {
    overallMatch: matchPercentage,
    matchedSkills,
    missingSkills,
    keywordGaps: missingSkills,
    roleAlignment: analyzeRoleAlignment(resumeData, jobDescription),
    recommendations: generateRecommendations(matchedSkills, missingSkills, matchPercentage),
  };
};

const extractRequirements = (jobDescription) => {
  // Simplified requirement extraction
  const techKeywords = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'AWS', 'Docker',
    'Kubernetes', 'GraphQL', 'SQL', 'MongoDB', 'PostgreSQL', 'Redis', 'CI/CD',
    'Agile', 'Scrum', 'Git', 'REST API', 'Microservices', 'System Design'
  ];
  
  return techKeywords.filter(keyword => 
    jobDescription.toLowerCase().includes(keyword.toLowerCase())
  );
};

const analyzeRoleAlignment = (resumeData, jobDescription) => {
  let score = 70; // Base score
  
  // Experience level alignment
  const yearsExp = calculateYearsExperience(resumeData.experience);
  if (yearsExp >= 5) score += 15;
  else if (yearsExp >= 3) score += 10;
  else score += 5;
  
  // Leadership indicators
  if (resumeData.experience.some(exp => exp.title.toLowerCase().includes('senior'))) {
    score += 10;
  }
  if (resumeData.experience.some(exp => exp.description.includes('Led') || exp.description.includes('Mentored'))) {
    score += 5;
  }
  
  return Math.min(100, score);
};

const calculateYearsExperience = (experiences) => {
  const now = new Date();
  let totalMonths = 0;
  
  experiences.forEach(exp => {
    const start = new Date(exp.startDate);
    const end = exp.endDate === 'Present' ? now : new Date(exp.endDate);
    totalMonths += (end - start) / (1000 * 60 * 60 * 24 * 30);
  });
  
  return Math.round(totalMonths / 12);
};

const generateRecommendations = (matched, missing, matchPercentage) => {
  const recommendations = [];
  
  if (matchPercentage < 50) {
    recommendations.push({
      type: 'critical',
      message: 'Your resume matches less than 50% of job requirements. Consider adding more relevant skills or experiences.'
    });
  }
  
  if (missing.length > 0) {
    recommendations.push({
      type: 'improvement',
      message: `Consider highlighting your experience with: ${missing.slice(0, 3).join(', ')}`
    });
  }
  
  recommendations.push({
    type: 'tip',
    message: 'Use industry-specific keywords from the job description throughout your resume.'
  });
  
  return recommendations;
};

export const rewriteResumeSection = async (section, content, mode, context = {}) => {
  // Simulate AI rewriting delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const rewrites = {
    improve: {
      summary: 'Results-driven software engineer with 6+ years of experience architecting and building scalable web applications. Demonstrated expertise in delivering high-performance solutions that serve millions of users. Committed to writing maintainable code and developing emerging talent.',
      description: '• Spearheaded microservices architecture development supporting 2M+ daily active users\n• Achieved 40% reduction in API latency through strategic caching and performance optimization\n• Cultivated high-performing team of 5 engineers through mentorship and collaborative code reviews\n• Engineered CI/CD pipelines reducing deployment cycles from 2 hours to 15 minutes',
    },
    ats_optimize: {
      summary: 'SOFTWARE ENGINEER | 6+ YEARS EXPERTISE | SCALABLE SYSTEMS | CLOUD INFRASTRUCTURE | JAVASCRIPT | TYPESCRIPT | PYTHON | AWS | DOCKER | MICROSERVICES | API DEVELOPMENT | AGILE | Full-stack developer specializing in high-traffic applications and distributed systems.',
      description: '• Led microservices architecture serving 2M+ DAU | JavaScript | TypeScript | Node.js\n• Optimized API performance achieving 40% latency reduction | REST API | GraphQL\n• Mentored team of 5 engineers | Agile | Scrum | Code Review\n• Implemented CI/CD pipelines | Jenkins | Docker | Kubernetes | AWS',
    },
    job_tailor: {
      summary: 'Full-stack engineer with 6+ years of experience building production-grade applications using React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and mentoring technical teams. Ready to bring strong fundamentals in system design to drive team success.',
      description: '• Built scalable applications using React and Node.js for 2M+ users\n• Implemented modern development practices: CI/CD, testing, and code reviews\n• Demonstrated expertise in cloud infrastructure and DevOps practices\n• Strong communication skills with experience mentoring cross-functional teams',
    },
    shorten: {
      summary: '6+ years software engineering, scalable systems, React/Node.js expert.',
      description: '• Led architecture serving 2M+ users\n• 40% performance improvement\n• Team leadership and mentorship',
    },
    expand: {
      summary: 'Results-driven senior software engineer with an impressive 6+ year track record of conceptualizing, architecting, and delivering mission-critical web applications that have achieved widespread adoption and user satisfaction. My expertise spans the full development lifecycle, from initial requirements gathering and technical design through to deployment, monitoring, and continuous improvement. I bring deep proficiency in modern technologies including React, Node.js, TypeScript, and cloud platforms, combined with a passion for writing elegant, maintainable code that stands the test of time.',
      description: '• Architected and led end-to-end development of microservices infrastructure supporting 2M+ daily active users, ensuring 99.99% uptime and sub-100ms response times\n• Pioneered comprehensive performance optimization initiatives resulting in 40% reduction in API latency through implementation of strategic caching layers, database query optimization, and load balancing\n• Established and cultivated a high-performing engineering team of 5 through structured mentorship programs, regular one-on-one sessions, and collaborative technical sessions including code reviews and architectural planning\n• Transformed deployment processes by designing and implementing automated CI/CD pipelines using Jenkins, Docker, and Kubernetes, reducing deployment time from 2 hours to 15 minutes',
    },
  };

  return {
    original: content,
    rewritten: rewrites[mode]?.[section] || content,
    explanation: getRewriteExplanation(mode, section),
    confidence: 0.92,
  };
};

const getRewriteExplanation = (mode, section) => {
  const explanations = {
    improve: {
      summary: 'Enhanced clarity and impact by using stronger action verbs and quantifiable achievements.',
      description: 'Restructured bullet points to emphasize impact with clear metrics and results.',
    },
    ats_optimize: {
      summary: 'Added industry keywords and formatted for ATS parsing with proper section headers.',
      description: 'Incorporated more keywords while maintaining readability. Each bullet starts with strong action verbs.',
    },
    job_tailor: {
      summary: 'Tailored language to match common job posting style while highlighting relevant experience.',
      description: 'Focused on transferable skills and technologies mentioned in the job description.',
    },
    shorten: {
      summary: 'Condensed to essential information while preserving key qualifications.',
      description: 'Removed redundant phrases and combined related information.',
    },
    expand: {
      summary: 'Added context and detail to demonstrate depth of experience.',
      description: 'Expanded each point with specific examples and measurable outcomes.',
    },
  };

  return explanations[mode]?.[section] || 'Applied professional writing best practices.';
};

export const scoreResume = async (resumeData, jobDescription = null) => {
  // Simulate scoring delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const scores = {
    atsCompatibility: {
      score: 87,
      maxScore: 100,
      factors: [
        { name: 'Keyword Density', value: 92 },
        { name: 'Format Consistency', value: 85 },
        { name: 'Section Structure', value: 88 },
        { name: 'File Format', value: 100 },
      ],
    },
    readability: {
      score: 91,
      maxScore: 100,
      factors: [
        { name: 'Clarity', value: 90 },
        { name: 'Conciseness', value: 88 },
        { name: 'Grammar', value: 95 },
        { name: 'Formatting', value: 92 },
      ],
    },
    impact: {
      score: 85,
      maxScore: 100,
      factors: [
        { name: 'Quantifiable Results', value: 88 },
        { name: 'Action Verbs', value: 82 },
        { name: 'Achievement Focus', value: 85 },
      ],
    },
    formatting: {
      score: 89,
      maxScore: 100,
      factors: [
        { name: 'Visual Hierarchy', value: 90 },
        { name: 'Consistency', value: 88 },
        { name: 'White Space', value: 92 },
        { name: 'Typography', value: 85 },
      ],
    },
  };

  if (jobDescription) {
    const jobMatch = await analyzeJobMatch(resumeData, jobDescription);
    scores.jobMatch = {
      score: jobMatch.overallMatch,
      maxScore: 100,
      factors: [
        { name: 'Skills Match', value: jobMatch.overallMatch },
        { name: 'Role Alignment', value: jobMatch.roleAlignment },
        { name: 'Experience Level', value: 85 },
      ],
    };
  }

  const overallScore = Math.round(
    Object.values(scores).reduce((acc, cat) => acc + (cat.score / cat.maxScore) * 100, 0) /
    Object.keys(scores).length
  );

  return {
    ...scores,
    overall: overallScore,
    grade: getGrade(overallScore),
    improvements: getImprovementSuggestions(scores),
  };
};

const getGrade = (score) => {
  if (score >= 90) return { letter: 'A', color: 'success', label: 'Excellent' };
  if (score >= 80) return { letter: 'B', color: 'primary', label: 'Good' };
  if (score >= 70) return { letter: 'C', color: 'warning', label: 'Average' };
  return { letter: 'D', color: 'error', label: 'Needs Work' };
};

const getImprovementSuggestions = (scores) => {
  const suggestions = [];

  if (scores.atsCompatibility.score < 85) {
    suggestions.push({
      category: 'ATS Compatibility',
      priority: 'high',
      text: 'Consider adding more industry-specific keywords from job postings.',
    });
  }

  if (scores.impact.score < 85) {
    suggestions.push({
      category: 'Impact',
      priority: 'medium',
      text: 'Include more quantifiable achievements with specific metrics.',
    });
  }

  if (scores.readability.score < 90) {
    suggestions.push({
      category: 'Readability',
      priority: 'low',
      text: 'Break down longer sentences and use consistent bullet point formatting.',
    });
  }

  return suggestions;
};

export const generateCoverLetter = async (resumeData, jobDescription, options = {}) => {
  // Simulate AI generation delay
  await new Promise(resolve => setTimeout(resolve, 2500));

  const { tone = 'professional', length = 'medium' } = options;

  const companyName = 'the hiring team';
  const positionTitle = extractPosition(jobDescription);

  const letterTemplates = {
    professional: {
      short: `
Dear ${companyName},

I am writing to express my strong interest in the ${positionTitle} position. With over six years of experience building scalable applications, I am confident in my ability to contribute effectively to your team.

My technical expertise, combined with my track record of delivering impactful solutions, makes me well-suited for this role. I would welcome the opportunity to discuss how my skills align with your needs.

Thank you for considering my application.

Best regards,
${resumeData.personalInfo.name}
      `.trim(),
      medium: `
Dear ${companyName},

I am excited to apply for the ${positionTitle} position at your company. With six years of experience in software development and a proven track record of building high-performance applications, I am confident in my ability to make meaningful contributions to your engineering team.

Throughout my career, I have consistently delivered results that drive business value. At TechCorp Inc., I led the development of microservices architecture that now serves over 2 million daily active users. I am particularly proud of reducing API response times by 40% through strategic optimization—work that directly improved user experience and system reliability.

I am drawn to this opportunity because your company's focus on innovation aligns with my passion for building cutting-edge solutions. I thrive in environments that value technical excellence and continuous learning, and I am eager to bring my skills in ${resumeData.skills.languages.slice(0, 3).join(', ')} to your team.

I would welcome the opportunity to discuss how my experience and vision align with your team's goals. Thank you for considering my application.

Warm regards,
${resumeData.personalInfo.name}
      `.trim(),
      detailed: `
Dear ${companyName},

I am writing to express my enthusiastic interest in the ${positionTitle} position. With six years of progressive experience in software engineering, I have developed a comprehensive skill set that I believe makes me an ideal candidate for this role.

In my current position as Senior Software Engineer at TechCorp Inc., I have had the privilege of working on projects that impact millions of users. I led the architectural redesign of our core platform, transitioning from a monolithic architecture to a modern microservices approach. This initiative not only improved system scalability and reliability but also reduced deployment times by over 85%—demonstrating my commitment to operational excellence.

My technical foundation spans full-stack development, with particular depth in ${resumeData.skills.frameworks.slice(0, 3).join(', ')}. I have successfully delivered solutions using ${resumeData.skills.languages.slice(0, 3).join(' and ')}, among other technologies. Beyond technical skills, I bring strong leadership abilities, having mentored teams of engineers and fostered a culture of code quality and knowledge sharing.

What excites me most about this opportunity is the chance to bring my experience in building scalable, user-centric applications to a team that values innovation and excellence. I am confident that my combination of technical expertise, leadership experience, and passion for quality would make a significant positive impact on your organization.

I would be honored to discuss how my background, skills, and enthusiasm align with your team's objectives. Thank you for taking the time to review my application, and I look forward to the possibility of contributing to your continued success.

Sincerely,
${resumeData.personalInfo.name}
${resumeData.personalInfo.email} | ${resumeData.personalInfo.phone}
      `.trim(),
    },
    friendly: {
      short: `
Hi there,

I'm Alexandra, and I'm really excited about the ${positionTitle} opportunity! With six years of building apps that people actually use and love, I think I'd be a great fit for your team.

I'd love to chat more about how I can contribute to your mission. Thanks for considering me!

Cheers,
Alexandra
      `.trim(),
      medium: `
Hi there,

I'm Alexandra, and I'm thrilled to apply for the ${positionTitle} position! After six years of building software that makes a real difference, I'm excited about the opportunity to bring my skills to a new challenge.

What I love most about my work is seeing how the things I build help people every day. At TechCorp, I worked on systems that now help 2 million people—and that's the kind of impact I'm looking for in my next role.

Your company's approach really resonates with me. I think my experience building scalable solutions and collaborating with great teams would be a perfect match for what you're working on.

Would love to grab a virtual coffee and chat more! Thanks so much for your time.

Best,
Alexandra
      `.trim(),
      detailed: `
Hi there!

I'm Alexandra, and I'm absolutely thrilled about the ${positionTitle} opportunity! After six amazing years in software engineering, I've had the chance to work on some really cool projects—from building features used by millions of people to leading teams that ship great products.

At TechCorp, I've been leading the charge on our microservices transformation. It's been incredibly rewarding to architect solutions that scale beautifully and make our users' lives easier. Watching our daily active users grow to 2 million while keeping everything running smoothly? That's what gets me out of bed in the morning.

What draws me to your company is your focus on doing things well and genuinely caring about the user experience. I think my background in building robust, scalable systems combined with my passion for mentoring teams would be a wonderful fit for your culture.

I genuinely believe I could bring a lot of value to your team, and I'm really excited about the possibility of working together. Would you be open to chatting sometime? I'd love to learn more about your team and share more about what excites me about this opportunity.

Thanks so much for reading, and I hope to hear from you soon!

Warmly,
Alexandra

P.S. Feel free to check out my portfolio at anderson.dev or connect on LinkedIn!
      `.trim(),
    },
    confident: {
      short: `
Dear Hiring Manager,

I am the ${positionTitle} candidate you've been looking for. With six years of proven engineering excellence and a track record of delivering results that matter, I am ready to drive immediate value for your team.

Let's discuss how I can contribute.

Best,
Anderson
      `.trim(),
      medium: `
Dear Hiring Manager,

Six years of engineering excellence. Millions of users served. Forty percent performance improvements delivered. These aren't just numbers on a page—they're the results of deliberate, focused work that I bring to every challenge.

As your next ${positionTitle}, I will deliver. My experience architecting systems at scale, my technical depth across modern frameworks, and my proven leadership abilities position me to make an immediate impact from day one.

At TechCorp, I didn't just maintain systems—I transformed them. The microservices architecture I led now powers experiences for 2 million daily users. The CI/CD pipelines I implemented reduced deployment times from hours to minutes. These are the results I deliver.

I am seeking a team that values excellence and is committed to building products that matter. I am confident I can bring this same standard of work to your organization.

I welcome the opportunity to discuss how I can contribute to your team's success.

Regards,
Anderson
      `.trim(),
      detailed: `
Dear Hiring Manager,

I am writing to you as a candidate who doesn't just meet requirements—I exceed them. With six years of demonstrated engineering excellence, a portfolio of measurable achievements, and a proven ability to lead high-performing teams, I am confident I am the ${positionTitle} your organization needs.

My track record speaks for itself. At TechCorp Inc., I architected and led the development of a microservices platform now serving over 2 million daily active users—a system designed for scale, built for reliability, and optimized for performance. The results were tangible: 40% reduction in API latency, 85% faster deployment cycles, and measurable improvements in user satisfaction.

Beyond technical execution, I bring strategic thinking and leadership that elevates entire teams. I have mentored engineers who have grown into senior roles, implemented development practices that improved code quality across the organization, and established collaborative cultures where engineers thrive.

My technical expertise spans the full development lifecycle: ${resumeData.skills.languages.slice(0, 4).join(', ')} and beyond. I am equally comfortable architecting system solutions, diving into implementation details, and communicating technical concepts to stakeholders at all levels.

I am seeking a position where I can leverage this experience to drive meaningful results. Your organization's commitment to innovation and excellence aligns perfectly with my professional values and career trajectory.

I invite you to review my application and schedule a conversation. I am prepared to demonstrate how my experience, skills, and leadership can contribute to your team's continued success.

Respectfully,
Anderson
Senior Software Engineer
${resumeData.personalInfo.email} | ${resumeData.personalInfo.phone}
      `.trim(),
    },
  };

  return {
    content: letterTemplates[tone][length],
    metadata: {
      tone,
      length,
      generatedAt: new Date().toISOString(),
      estimatedReadTime: length === 'short' ? '30 sec' : length === 'medium' ? '1 min' : '2 min',
    },
  };
};

const extractPosition = (jobDescription) => {
  const patterns = [
    /(?:^|\s)(?:Senior\s+)?(?:Software\s+)?(?:Engineer|Developer|Architect)/i,
    /(?:^|\s)(?:Product\s+)?Manager/i,
    /(?:^|\s)(?:Tech(?:nical)?\s+)?Lead/i,
  ];

  for (const pattern of patterns) {
    const match = jobDescription.match(pattern);
    if (match) {
      return match[0].trim();
    }
  }

  return 'Software Engineer';
};

