import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Link, Tabs, Tab, TextField } from '@mui/material';
import {
  Cloud,
  Storage,
  Security,
  Code,
  Architecture,
  Build,
  Computer,
  Storage as StorageIcon,
  Security as SecurityIcon,
  CloudQueue,
  Code as CodeIcon,
  Architecture as ArchitectureIcon,
  Build as BuildIcon,
  Computer as ComputerIcon,
  Email,
  School,
  Work,
  Star,
  Info
} from '@mui/icons-material';

const accomplishments = [
  '20 years of experience architecting enterprise solutions and leading cross-functional teams in high-stakes environments',
  'Technical Lead managing 90+ person team delivering IT solutions for OCONUS Navy Enterprise Networks',
  'Drove digital transformation initiatives across defense, healthcare, and legal sectors',
  'Architected secure, scalable Microsoft Azure and hybrid cloud solutions for federal agencies',
  'Led enterprise IT modernization projects transforming legacy systems into resilient, modern platforms',
  'Leveraged generative AI to expedite engineering solution development and delivery',
  'Developed strategy and architecture enabling Navy M365/Azure services in OCONUS regions'
];

const experiences = [
  {
    title: 'Solution Architect | Technical Lead',
    company: 'Booz Allen Hamilton',
    years: 'JAN 2024 - Present',
    description: 'Technical Lead supporting Outside of the Continental United States (OCONUS) Navy Enterprise Networks (NEN) for Booz Allen. In this role, I am responsible for managing technical delivery for a 90+ person team, ensuring consistent solution development, IT system modernization, and alignment with Navy strategic objectives.',
    achievements: [
      'Serve as Booz Allen\'s IT functional lead for recruiting IT Systems Engineers and Architects',
      'Oversee engineering team delivery, managing technical solutions and government expectations',
      'Leverage generative AI to expedite engineering solution development and delivery',
      'Develop strategy and architecture to enable Navy M365/Azure services in OCONUS regions',
      'Develop technical solution roadmaps in collaboration with government to support project scoping',
      'Deliver regular briefings on project status to key government and contractor stakeholders',
      'Support government leadership in technical strategy development and project prioritization',
      'Represent OCONUS interests to Navy program office and external operations teams',
      'Provide technical guidance to internal teams across networks and systems-based technologies',
      'Provide career motivators, mentorship, and support to develop technical staff'
    ]
  },
  {
    title: 'Lead Engineer',
    company: 'Booz Allen Hamilton',
    years: 'SEP 2019 - JAN 2024',
    description: 'Team Lead for OCONUS Windows Server Services responsible for developing enterprise IT solutions leveraging Microsoft Technologies. Responsibilities include technical review of engineering solutions in development, mentoring, technical capacity development, and identification of opportunities to create value for the Navy.',
    achievements: [
      'Team Lead for Windows Server, Active Directory, PKI, Exchange, and MECM functional areas',
      'Led the development of automation to quickly deploy/redeploy Windows Server infrastructure',
      'Performed in-theater and remote installations of multiple Windows Server-based solutions',
      'Reviewed and developed engineering documentation to enable successful in-theater installations',
      'Developed PKI solutions with DoD and Internal certificates for 802.1x and MFA requirements',
      'Ensured compliance with STIG/TASKORD/OPORD mandates across Windows Server systems'
    ]
  },
  {
    title: 'Systems Engineer III',
    company: 'Draper Laboratory',
    years: 'JUL 2017 - SEP 2019',
    description: 'Developed secure Windows Server information systems focusing on DFARS compliance, and security posture improvements. Managed and built both classified and unclassified systems using DOD STIGs. Primary engineer responsible for messaging, directory services, and identity management platform.',
    achievements: [
      'Implemented required DoD STIGs using Group Policy to improve system security posture',
      'Exchange 2016 engineering, administration, support for related mail transport infrastructure',
      'Implemented Multi-Factor Authentication (MFA) using smart cards on servers and endpoints',
      'Deployed SCOM and SolarWinds to monitor and ensure infrastructure health and availability',
      'Built custom directory service data replication solution using Microsoft Identity Manager',
      'Built and deployed enterprise applications running on Windows Servers across the enterprise'
    ]
  },
  {
    title: 'Senior Systems Server Engineer',
    company: 'Boston Medical Center',
    years: 'OCT 2014 – JUL 2017',
    description: 'Responsible for the health and reliability of "Tier Zero" applications in an always-on health care environment, ensuring reliability, consistency and fault tolerance across the organization. Point of contact for all Microsoft solutions including Active Directory, Active Directory Federated Services, Exchange Server, Lync Server, and Certificate Authority. In this role I deployed servers supporting a wide variety of patient-facing clinical applications.',
    achievements: [
      'Provided EMR vendor assistance to ensure server uptime for patient critical application',
      'Drove secure baseline virtual and physical server build processes',
      'Support on-call rotation to diagnose and resolve issues with patient-facing systems',
      'Deployed SAML solutions with Microsoft ADFS enabling federated trust with cloud providers',
      'Developed 802.1x policy using Microsoft PKI for secure network authentication',
      'Audited and reported on stale AD objects to maintain required security compliance',
      'Built and deployed secure endpoint/server baseline policies using GPO',
      'Ensured HIPAA and PCI compliance in IT systems design'
    ]
  },
  {
    title: 'Systems Administrator',
    company: 'Bingham McCutchen, LLP',
    years: 'APR 2012 – OCT 2014',
    description: 'Managed global IT infrastructure consisting of 600+ physical and virtual servers across 16 sites. Primary responsibilities including Active Directory, messaging and mobility infrastructure administration and support.',
    achievements: [
      'Built, configured, and managed Enterprise Exchange Server 2013 on Windows servers',
      'Exchange 2013 requirements gathering, migration planning and app dependency analysis',
      'Symantec Enterprise Vault 11 design and installation then migration from Autonomy EAS',
      'Configured enterprise message routing connectors optimizing mail flow between sites',
      'Public Folder migration consisting of 6TB content, and retiring Exchange 2003',
      'Deployed perimeter SMTP Mail Gateway deployment for protection against email-based threats',
      'Executed Exchange Server disaster recovery planning and exercises',
      'Developed Mobile Device Management solutions with iOS, and Android devices for DLP initiative',
      'Managed AD, DNS, DHCP, and PKI for AD replication and security enhancements',
      'VMware ESXI administration, storage and resource allocation, backup/recovery and VM builds',
      'Developed group policies for Windows Server to simplify configuration management',
      'Led Change Management board to coordinate and execute changes across the enterprise',
      'Deployed SolarWinds and EM7 to monitor server infrastructure and increase server uptime',
      'Planned and deployed two-tier Certificate Authority using Microsoft Certificate Services',
      'Built and deployed new HP BL servers using HP 3PAR and NetApp backend storage',
      'Managed and deployed data protection solution with CommVault protecting over 80 TB of data'
    ]
  },
  {
    title: 'Systems Administrator',
    company: 'SMMA, INC',
    years: 'JAN 2010 – APR 2012',
    description: 'In this role, I was responsible for all aspects of systems and networks maintenance, engineering and administration for the firm\'s IT Infrastructure. These systems supported critical network infrastructure including and enabled collaboration and communication between employees and clients.',
    achievements: [
      'Administered, supported, and maintained Cisco Unified Call Manager infrastructure',
      'Deployed and configured VOIP phones for 180 employees in 3 offices',
      'Administration of EMC Clarion storage including storage allocation target configuration',
      'Performed VMware ESXI provisioning and P-to-V migration for reduced server footprint',
      'Managed Symantec Endpoint Protection Manager supporting virus and malware protection',
      'Designed Symantec Backup Exec data protection and recovery routines',
      'Migrated end user\'s mailboxes and Public Folder content to Exchange Server 2010',
      'Planned and deployed network configuration for Chapel Hill, NC office connecting a new site'
    ]
  },
  {
    title: 'Systems Analyst',
    company: 'SMMA, INC',
    years: 'AUG 2005 – JAN 2010',
    description: 'Primary responsibilities included analysis, development and testing of technical solutions to support architects, engineers and designers. In this role, I researched and tested collaboration applications to identify methods that improved staff productivity. Piloted and introduced server virtualization to consolidate datacenter hardware.',
    achievements: [
      'Performed migration to CheckPoint Secure Platform Firewall on NGX appliance',
      'Installed site-to-site VPN using CheckPoint Firewall between remote offices',
      'Migrated from Exchange 2003 to 2007 and developed disaster recovery plan',
      'Introduced Barracuda SPAM firewall reducing SPAM and increasing employee productivity',
      'Selected and implemented SharePoint 2010 Server for departmental collaboration',
      'Adopted Windows Deployment services for desktop and server imaging',
      'Performed Windows Server troubleshooting and support',
      'Managed and specified desktop hardware configurations and procurement',
      'Developed desktop hardware specification, procurement and assignment process'
    ]
  }
];

const education = {
  school: 'Wentworth Institute of Technology',
  degree: 'Bachelor of Science',
  major: 'Computer Networks and Information Systems',
  years: '2003 – 2007'
};

const certifications = [
  {
    category: 'Microsoft',
    items: [
      'AZ-104 | Microsoft Certified: Azure Administrator Associate',
      'Microsoft Certified Server Administrator: Windows Server 2019'
    ]
  },
  {
    category: 'CompTIA',
    items: [
      'CASP+ | CompTIA Advanced Security Practitioner'
    ]
  },
  {
    category: 'Amazon Web Services',
    items: [
      'AWS Certified Solutions Architect - Associate'
    ]
  },
  {
    category: 'VMware',
    items: [
      'VMware Certified Professional 5.5 (VCP)'
    ]
  }
];

const technicalSkills = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      'Microsoft Azure (M365, Azure Services)',
      'Amazon Web Services (AWS)',
      'Hybrid Cloud Architecture',
      'VMware ESXI Virtualization',
      'Windows Server (2008-2019)',
      'Data Center Management'
    ]
  },
  {
    category: 'Identity & Security',
    items: [
      'Active Directory (AD)',
      'Public Key Infrastructure (PKI)',
      'Multi-Factor Authentication (MFA)',
      'SAML & Federated Identity (ADFS)',
      'DoD STIG Compliance',
      '802.1x Network Authentication',
      'HIPAA/PCI/DFARS Compliance'
    ]
  },
  {
    category: 'Messaging & Collaboration',
    items: [
      'Exchange Server (2003-2019)',
      'Microsoft MECM/SCCM',
      'SharePoint Server',
      'Lync Server',
      'Mobile Device Management (MDM)'
    ]
  },
  {
    category: 'Monitoring & Automation',
    items: [
      'SolarWinds',
      'System Center Operations Manager (SCOM)',
      'Generative AI for Engineering',
      'PowerShell Automation',
      'Infrastructure as Code'
    ]
  },
  {
    category: 'Networking & Storage',
    items: [
      'DNS, DHCP, TCP/IP',
      'Cisco Unified Call Manager',
      'CheckPoint Firewall',
      'EMC Clarion / HP 3PAR / NetApp Storage',
      'SMTP Mail Gateway'
    ]
  },
  {
    category: 'Data Protection',
    items: [
      'CommVault',
      'Symantec Backup Exec',
      'Symantec Enterprise Vault',
      'Disaster Recovery Planning'
    ]
  }
];

const businessSkills = [
  {
    category: 'Leadership & Strategy',
    items: [
      'Technical Team Leadership (90+ person teams)',
      'Strategic Technology Planning',
      'Digital Transformation Strategy',
      'Stakeholder Management',
      'Government & Contractor Relations',
      'Change Management Leadership',
      'Talent Development & Mentorship'
    ]
  },
  {
    category: 'Project & Delivery',
    items: [
      'Technical Solution Roadmap Development',
      'Requirements Gathering & Analysis',
      'Migration Planning & Execution',
      'Vendor Management',
      'Budget & Resource Planning',
      'Risk Management',
      'Quality Assurance'
    ]
  },
  {
    category: 'Communication',
    items: [
      'Executive Briefings',
      'Technical Documentation',
      'Cross-functional Collaboration',
      'Technical Mentoring',
      'Solution Presentations',
      'Status Reporting'
    ]
  }
];

const professionalGoals = [
  {
    title: 'Drive Enterprise AI Adoption',
    description: 'Continue leveraging generative AI and machine learning to transform IT operations, accelerate solution development, and create innovative approaches to complex technical challenges.'
  },
  {
    title: 'Strategic Technology Leadership',
    description: 'Expand strategic influence in shaping technology roadmaps and driving digital transformation initiatives that align IT infrastructure with organizational mission and business objectives.'
  },
  {
    title: 'Advance Cloud & Hybrid Solutions',
    description: 'Lead the evolution of hybrid cloud architectures, particularly in secure government and enterprise environments, enabling seamless integration of on-premises and cloud-based services.'
  },
  {
    title: 'Develop Technical Talent',
    description: 'Build and mentor high-performing technical teams, fostering a culture of innovation, continuous learning, and technical excellence in enterprise IT solution delivery.'
  }
];

// Define theme colors
const themeColors = {
  primary: '#2563eb', // Vibrant blue
  primaryLight: '#60a5fa', // Light blue
  primaryDark: '#1e40af', // Deep blue
  background: '#f8fafc', // Light gray-blue background
  surface: '#ffffff', // White surface
  surfaceAlt: '#f1f5f9', // Alternate light surface
  text: '#1e293b', // Dark slate text
  textSecondary: '#64748b', // Medium slate text
  border: '#e2e8f0' // Light border
};

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:gregoryasnow@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      background: themeColors.background,
      backgroundImage: `
        linear-gradient(135deg, ${themeColors.background} 0%, #e0f2fe 100%)
      `,
      color: themeColors.text,
      position: 'relative'
    }}>
      <Container maxWidth="xl" sx={{ pt: 6, position: 'relative', zIndex: 1 }}>
        <Paper elevation={2} sx={{
          p: 4,
          mb: 4,
          background: themeColors.surface,
          borderRadius: 3,
          border: `1px solid ${themeColors.border}`
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}>
            <Architecture sx={{ fontSize: 40, color: themeColors.primary }} />
            <Box>
              <Typography variant="h3" component="h1" gutterBottom sx={{ color: themeColors.primary, fontWeight: 700 }}>
                Enterprise IT Solution Architect
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ color: themeColors.text }}>
                Strategic IT Leader | Microsoft Cloud & Enterprise Solutions Expert
              </Typography>
              <Typography variant="subtitle1" gutterBottom sx={{ color: themeColors.textSecondary, fontStyle: 'italic', mb: 2 }}>
                20 Years of Experience Driving Digital Transformation and Delivering Business Value
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Box sx={{
          borderBottom: 1,
          borderColor: themeColors.border,
          mb: 3,
          background: themeColors.surface,
          borderRadius: 2,
          p: 1
        }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            textColor="inherit"
            TabIndicatorProps={{ style: { background: themeColors.primary } }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTab-root': { color: themeColors.textSecondary, fontWeight: 600, fontSize: '1em' },
              '.Mui-selected': { color: `${themeColors.primary} !important`, bgcolor: themeColors.surfaceAlt }
            }}
          >
            <Tab icon={<Info />} label="Bio" />
            <Tab icon={<Star />} label="Key Accomplishments" />
            <Tab icon={<Computer />} label="Skills" />
            <Tab icon={<Work />} label="Professional Experience" />
            <Tab icon={<Architecture />} label="Professional Goals" />
            <Tab icon={<Code />} label="Thought Leadership" />
            <Tab icon={<Email />} label="Contact" />
            <Tab icon={<Build />} label="About This Site" />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Paper elevation={1} sx={{
            p: 4,
            background: themeColors.surface,
            borderRadius: 3,
            border: `1px solid ${themeColors.border}`
          }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, position: 'relative' }}>
              <Cloud sx={{ fontSize: 24, color: themeColors.primary, mt: 0.5 }} />
              <Typography variant="body1" sx={{ color: themeColors.text, mb: 3, lineHeight: 1.6 }}>
                Strategic IT leader with 20 years of experience architecting enterprise solutions and leading cross-functional teams in high-stakes environments. Proven success driving digital transformation, aligning technology with business goals, and delivering measurable business value across defense, healthcare, and legal sectors. Skilled in designing and transforming legacy systems into modern, resilient platforms with hybrid and cloud solutions.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, position: 'relative' }}>
              <Security sx={{ fontSize: 24, color: themeColors.primary, mt: 0.5 }} />
              <Typography variant="body1" sx={{ color: themeColors.text, mb: 3, lineHeight: 1.6 }}>
                Currently serving as Technical Lead for Outside of the Continental United States (OCONUS) Navy Enterprise Networks, managing technical delivery for a 90+ person team. Deep expertise in Microsoft Azure, Windows Server, and enterprise technology strategy, with a focus on leveraging generative AI to expedite engineering solution development and delivery. Proven track record of aligning IT infrastructure with strategic objectives while mentoring and developing technical talent.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                background: themeColors.primary, 
                color: '#fff', 
                fontWeight: 600, 
                mt: 2,
                position: 'relative',
                '&:hover': {
                  background: themeColors.primaryDark
                }
              }}
              href="#contact"
              onClick={() => setTab(6)}
            >
              Contact Me
            </Button>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Paper elevation={1} sx={{
            p: 4,
            background: themeColors.surface,
            borderRadius: 3,
            border: `1px solid ${themeColors.border}`
          }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: themeColors.text }}>
              <Star sx={{ color: themeColors.primary }} />
              Key Accomplishments
            </Typography>
            {accomplishments.map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <StorageIcon sx={{ fontSize: 20, color: themeColors.primary, mt: 0.5 }} />
                <Typography variant="body1" sx={{ color: themeColors.text, lineHeight: 1.6 }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: themeColors.text, mb: 3 }}>
              <Computer sx={{ color: themeColors.primary }} />
              Technical & Business Skills
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ color: themeColors.primary, mt: 3, mb: 2 }}>Technical Skills</Typography>
            <Grid container spacing={3}>
              {technicalSkills.map((skill, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper elevation={0} sx={{ p: 3, background: themeColors.surfaceAlt, color: themeColors.text, height: '100%', border: `1px solid ${themeColors.border}` }}>
                    <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Build sx={{ fontSize: 20 }} />
                      {skill.category}
                    </Typography>
                    {skill.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" gutterBottom sx={{ color: themeColors.primary, mt: 4, mb: 2 }}>Business & Leadership Skills</Typography>
            <Grid container spacing={3}>
              {businessSkills.map((skill, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Paper elevation={0} sx={{ p: 3, background: themeColors.surfaceAlt, color: themeColors.text, height: '100%', border: `1px solid ${themeColors.border}` }}>
                    <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Star sx={{ fontSize: 20 }} />
                      {skill.category}
                    </Typography>
                    {skill.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={3}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom>Professional Experience</Typography>
            <Grid container spacing={3}>
              {experiences.map((exp, idx) => (
                <Grid item xs={12} key={idx}>
                  <Paper elevation={0} sx={{ p: 3, background: themeColors.surfaceAlt, color: themeColors.text, border: `1px solid ${themeColors.border}` }}>
                    <Typography variant="h6" sx={{ color: themeColors.primary, fontWeight: 600 }}>{exp.title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: themeColors.textSecondary }}>{exp.company} | {exp.years}</Typography>
                    <Typography variant="body2" sx={{ mt: 1, mb: exp.achievements ? 2 : 0 }}>{exp.description}</Typography>
                    {exp.achievements && (
                      <Box sx={{ mt: 2 }}>
                        {exp.achievements.map((achievement, idx) => (
                          <Typography key={idx} variant="body2" sx={{ color: themeColors.textSecondary, ml: 2, mb: 1 }}>
                            • {achievement}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h4" sx={{ mt: 4, mb: 3 }}>Education</Typography>
            <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
              <Typography variant="h6" sx={{ color: themeColors.primary, fontWeight: 600 }}>{education.school}</Typography>
              <Typography variant="subtitle1" sx={{ color: themeColors.textSecondary }}>{education.degree} | {education.years}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Major: {education.major}</Typography>
            </Paper>
            <Typography variant="h4" sx={{ mt: 4, mb: 3 }}>Certifications</Typography>
            <Grid container spacing={3}>
              {certifications.map((cert, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper elevation={0} sx={{ p: 3, background: themeColors.surfaceAlt, color: themeColors.text, border: `1px solid ${themeColors.border}` }}>
                    <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>{cert.category}</Typography>
                    {cert.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • {item}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: themeColors.text, mb: 3 }}>
              <ArchitectureIcon sx={{ color: themeColors.primary }} />
              Professional Goals
            </Typography>

            <Grid container spacing={3}>
              {professionalGoals.map((goal, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text, height: '100%' }}>
                    <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Star sx={{ fontSize: 20 }} />
                      {goal.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: themeColors.textSecondary, lineHeight: 1.6 }}>
                      {goal.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={5}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: themeColors.text }}>
              <Code sx={{ color: themeColors.primary }} />
              Thought Leadership
            </Typography>
            <Typography variant="body1" sx={{ color: themeColors.text, mb: 3, lineHeight: 1.6 }}>
              I regularly share insights on enterprise technology strategy, cloud adoption, and IT modernization. My approach blends technical depth with practical business outcomes, helping organizations navigate complex digital transformations.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Cloud sx={{ fontSize: 20 }} />
                    AI & Enterprise Technology
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Generative AI's transformative impact on enterprise IT operations and decision-making processes
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • AI-powered cybersecurity: Automated threat detection and response in hybrid cloud environments
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Machine learning integration strategies for legacy system modernization and optimization
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Responsible AI governance frameworks for government and enterprise compliance
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • AI-driven infrastructure automation: Reducing operational overhead while improving reliability
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Edge computing and AI: Enabling real-time decision making in distributed environments
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Security sx={{ fontSize: 20 }} />
                    Cybersecurity & Geopolitics
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Nation-state cyber threats and their impact on critical infrastructure security
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Supply chain security: Mitigating risks in global technology partnerships
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Zero Trust architecture adoption in response to evolving threat landscapes
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • International cybersecurity regulations and their enterprise implications
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Quantum computing threats to current encryption standards and mitigation strategies
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Cyber warfare and its influence on enterprise security postures
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Architecture sx={{ fontSize: 20 }} />
                    Digital Transformation & Policy
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Government digital transformation initiatives and their impact on private sector adoption
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Data sovereignty regulations and their influence on cloud architecture decisions
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Green IT initiatives: Sustainable technology practices in enterprise environments
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Digital divide: Bridging technology gaps in underserved communities and regions
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Regulatory compliance in emerging technology adoption (AI, IoT, blockchain)
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Public-private partnerships in critical infrastructure modernization
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Storage sx={{ fontSize: 20 }} />
                    Cloud & Global Affairs
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Multi-cloud strategies in response to geopolitical tensions and trade restrictions
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Cloud repatriation trends: Balancing cost, performance, and regulatory requirements
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Global data center expansion and its impact on enterprise architecture decisions
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Technology sanctions and their effect on enterprise technology roadmaps
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Edge computing adoption driven by latency requirements and local regulations
                    </Typography>
                    <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                      • Hybrid cloud strategies for organizations operating in multiple jurisdictions
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Build sx={{ fontSize: 20 }} />
                    Emerging Technology & Society
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Workforce transformation: Upskilling strategies for AI and automation adoption
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Digital ethics: Balancing innovation with societal responsibility in enterprise AI
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Technology accessibility: Ensuring inclusive design in enterprise solutions
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Remote work evolution: Permanent changes to enterprise IT infrastructure
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Smart cities and their implications for enterprise technology integration
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Digital currency adoption and its impact on enterprise financial systems
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Technology nationalism: Impact on global supply chains and vendor selection
                      </Typography>
                      <Typography variant="body2" sx={{ color: themeColors.textSecondary, mb: 1 }}>
                        • Climate tech: Enterprise solutions for environmental sustainability
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: themeColors.primary }}>
                <Link href="#" target="_blank" rel="noopener" sx={{ color: themeColors.primary }}>
                  Connect with me on LinkedIn for deeper insights
                </Link>
              </Typography>
            </Box>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={6}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <Typography variant="body1" sx={{ color: themeColors.text, mb: 3 }}>
              Ready to modernize your IT or collaborate on enterprise solutions? Let's connect!
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: themeColors.border },
                        '&:hover fieldset': { borderColor: themeColors.primary },
                        '&.Mui-focused fieldset': { borderColor: themeColors.primary }
                      },
                      '& .MuiInputLabel-root': { color: themeColors.textSecondary },
                      '& .MuiInputBase-input': { color: themeColors.text },
                      bgcolor: themeColors.surface
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: themeColors.border },
                        '&:hover fieldset': { borderColor: themeColors.primary },
                        '&.Mui-focused fieldset': { borderColor: themeColors.primary }
                      },
                      '& .MuiInputLabel-root': { color: themeColors.textSecondary },
                      '& .MuiInputBase-input': { color: themeColors.text },
                      bgcolor: themeColors.surface
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleFormChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: themeColors.border },
                        '&:hover fieldset': { borderColor: themeColors.primary },
                        '&.Mui-focused fieldset': { borderColor: themeColors.primary }
                      },
                      '& .MuiInputLabel-root': { color: themeColors.textSecondary },
                      '& .MuiInputBase-input': { color: themeColors.text },
                      bgcolor: themeColors.surface
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={4}
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: themeColors.border },
                        '&:hover fieldset': { borderColor: themeColors.primary },
                        '&.Mui-focused fieldset': { borderColor: themeColors.primary }
                      },
                      '& .MuiInputLabel-root': { color: themeColors.textSecondary },
                      '& .MuiInputBase-input': { color: themeColors.text },
                      bgcolor: themeColors.surface
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background: themeColors.primary,
                      color: '#fff',
                      fontWeight: 600,
                      '&:hover': {
                        background: themeColors.primaryDark
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={7}>
          <Paper elevation={1} sx={{ p: 4, background: themeColors.surface, borderRadius: 3, border: `1px solid ${themeColors.border}` }}>
            <Typography variant="h4" gutterBottom>About This Site</Typography>
            <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>AI-Powered Development</Typography>
            <Typography variant="body1" sx={{ color: themeColors.text, mb: 3, lineHeight: 1.6 }}>
              This website was built using AI-assisted development, demonstrating the power of artificial intelligence in modern web development. The entire codebase, including the design, layout, and functionality, was generated and refined through AI collaboration.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>Frontend Framework</Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • React 18.2.0
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Material-UI (MUI) v5.14.0
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text }}>
                    • Emotion for styled components
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>Key Features</Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Responsive design with Material-UI Grid
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Dark theme optimized for readability
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text }}>
                    • Client-side email form integration
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ color: themeColors.primary, mt: 4, mb: 2 }}>AI Development Process</Typography>
            <Typography variant="body1" sx={{ color: themeColors.text, mb: 3, lineHeight: 1.6 }}>
              The development process leveraged AI to:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>Code Generation</Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Component structure and implementation
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Styling and theme configuration
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text }}>
                    • Form handling and validation
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: themeColors.surface, color: themeColors.text }}>
                  <Typography variant="h6" sx={{ color: themeColors.primary, mb: 2 }}>Design Decisions</Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Layout and component organization
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text, mb: 1 }}>
                    • Color scheme and typography
                  </Typography>
                  <Typography variant="body1" sx={{ color: themeColors.text }}>
                    • User experience optimization
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ color: themeColors.primary, mt: 4, mb: 2 }}>Development</Typography>
            <Typography variant="body1" sx={{ color: themeColors.text, lineHeight: 1.6 }}>
              Built using Create React App and Material-UI, this site showcases how AI can assist in creating professional, production-ready web applications. The AI-driven development process ensured consistent code quality, modern best practices, and optimal user experience.
            </Typography>
          </Paper>
        </TabPanel>
      </Container>
    </Box>
  );
} 