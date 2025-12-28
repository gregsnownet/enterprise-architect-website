import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Link, Tabs, Tab, TextField, Chip, Avatar, IconButton, Fade, Grow } from '@mui/material';
import {
  Cloud,
  Storage,
  Security,
  Code,
  Architecture,
  Build,
  Computer,
  Email,
  School,
  Work,
  Star,
  Info,
  LinkedIn,
  Download,
  Timeline,
  TrendingUp,
  Shield,
  CloudQueue,
  Lightbulb,
  Groups,
  CheckCircle
} from '@mui/icons-material';

const accomplishments = [
  '20 years of experience architecting enterprise solutions and leading cross-functional teams in high-stakes environments',
  'Technical Lead managing 90+ person team delivering IT solutions for OCONUS Navy Enterprise Networks',
  'Drove digital transformation initiatives across defense, healthcare, and legal sectors',
  'Architected secure, scalable Microsoft Azure and hybrid cloud solutions for federal agencies',
  'Led enterprise IT modernization projects transforming legacy systems into resilient, modern platforms',
  'Successfully leveraged generative AI tools (Claude, ChatGPT, and Copilot) to accelerate engineering solution development, documentation, and delivery',
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
      'Leverage generative AI tools (Claude, ChatGPT, Copilot) to expedite engineering solution development and delivery',
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
    icon: <CloudQueue />,
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
    icon: <Shield />,
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
    icon: <Email />,
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
    icon: <TrendingUp />,
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
    icon: <Storage />,
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
    icon: <Security />,
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
    icon: <Groups />,
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
    icon: <Timeline />,
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
    icon: <Lightbulb />,
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
    icon: <Lightbulb />,
    description: 'Continue leveraging generative AI and machine learning to transform IT operations, accelerate solution development, and create innovative approaches to complex technical challenges.'
  },
  {
    title: 'Strategic Technology Leadership',
    icon: <TrendingUp />,
    description: 'Expand strategic influence in shaping technology roadmaps and driving digital transformation initiatives that align IT infrastructure with organizational mission and business objectives.'
  },
  {
    title: 'Advance Cloud & Hybrid Solutions',
    icon: <CloudQueue />,
    description: 'Lead the evolution of hybrid cloud architectures, particularly in secure government and enterprise environments, enabling seamless integration of on-premises and cloud-based services.'
  },
  {
    title: 'Develop Technical Talent',
    icon: <Groups />,
    description: 'Build and mentor high-performing technical teams, fostering a culture of innovation, continuous learning, and technical excellence in enterprise IT solution delivery.'
  }
];

// Modern theme colors with gradient support
const theme = {
  // Primary gradient - deep blue to teal
  gradientPrimary: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0d9488 100%)',
  gradientAccent: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
  gradientCard: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.9) 100%)',
  gradientHero: 'linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%)',

  // Core colors
  primary: '#6366f1',        // Indigo
  primaryLight: '#818cf8',
  primaryDark: '#4f46e5',
  secondary: '#0d9488',      // Teal
  secondaryLight: '#14b8a6',
  accent: '#8b5cf6',         // Purple

  // Backgrounds
  bgDark: '#0f172a',
  bgMedium: '#1e293b',
  bgLight: '#f8fafc',
  bgCard: 'rgba(255,255,255,0.9)',

  // Glass effect
  glass: 'rgba(255,255,255,0.1)',
  glassBorder: 'rgba(255,255,255,0.2)',
  glassLight: 'rgba(255,255,255,0.95)',

  // Text
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textLight: '#f8fafc',
  textMuted: '#94a3b8',

  // Borders
  border: '#e2e8f0',
  borderLight: 'rgba(255,255,255,0.1)'
};

// Glassmorphism card style
const glassCard = {
  background: theme.glassLight,
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: `1px solid ${theme.border}`,
  boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08)'
  }
};

// Accent card style
const accentCard = {
  background: `linear-gradient(135deg, ${theme.primary}15 0%, ${theme.secondary}15 100%)`,
  borderRadius: '16px',
  border: `1px solid ${theme.primary}30`,
  transition: 'all 0.3s ease'
};

function TabPanel({ children, value, index }) {
  return (
    <Fade in={value === index} timeout={400}>
      <div hidden={value !== index} style={{ width: '100%' }}>
        {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
      </div>
    </Fade>
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
      background: theme.bgLight
    }}>
      {/* Hero Section */}
      <Box sx={{
        background: theme.gradientHero,
        color: theme.textLight,
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(13, 148, 136, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Grow in timeout={800}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Avatar sx={{
                      width: 80,
                      height: 80,
                      bgcolor: theme.primary,
                      fontSize: '2rem',
                      fontWeight: 700,
                      border: `3px solid ${theme.glassBorder}`
                    }}>
                      GS
                    </Avatar>
                    <Box>
                      <Typography variant="h2" component="h1" sx={{
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '3rem' },
                        background: `linear-gradient(135deg, ${theme.textLight} 0%, ${theme.primaryLight} 100%)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 0.5
                      }}>
                        Gregory Snow
                      </Typography>
                      <Typography variant="h5" sx={{
                        color: theme.secondaryLight,
                        fontWeight: 500,
                        fontSize: { xs: '1rem', md: '1.25rem' }
                      }}>
                        Solutions Architect | Enterprise IT Leader
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{
                    color: theme.textMuted,
                    fontWeight: 400,
                    lineHeight: 1.7,
                    maxWidth: 700,
                    mb: 4
                  }}>
                    20+ years driving digital transformation across defense, healthcare, and enterprise sectors.
                    Currently leading a 90+ person team delivering Navy Enterprise Network solutions.
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {[
                      // Cloud & Infrastructure
                      'Microsoft Azure', 'AWS', 'Hybrid Cloud', 'VMware', 'Windows Server', 'Data Center',
                      // Identity & Security
                      'Active Directory', 'PKI', 'MFA', 'ADFS/SAML', 'DoD STIG', '802.1x', 'HIPAA/PCI/DFARS',
                      // Messaging & Collaboration
                      'Exchange Server', 'MECM/SCCM', 'SharePoint', 'MDM',
                      // Monitoring & Automation
                      'SolarWinds', 'SCOM', 'Generative AI', 'PowerShell', 'IaC',
                      // Networking & Storage
                      'DNS/DHCP/TCP-IP', 'Cisco UCM', 'CheckPoint', 'NetApp/3PAR',
                      // Data Protection
                      'CommVault', 'Disaster Recovery',
                      // Leadership
                      'Team Leadership', 'Digital Transformation', 'DoD/Navy'
                    ].map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: theme.glass,
                          color: theme.textLight,
                          border: `1px solid ${theme.glassBorder}`,
                          fontWeight: 500,
                          fontSize: '0.75rem',
                          '&:hover': { bgcolor: theme.primary }
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Email />}
                      onClick={() => setTab(6)}
                      sx={{
                        background: theme.gradientAccent,
                        color: '#fff',
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                        '&:hover': {
                          background: theme.gradientAccent,
                          boxShadow: '0 6px 30px rgba(99, 102, 241, 0.5)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Contact Me
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<Download />}
                      href="/Gregory_Snow_Resume.pdf"
                      download
                      sx={{
                        color: theme.textLight,
                        borderColor: theme.glassBorder,
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          borderColor: theme.primaryLight,
                          bgcolor: theme.glass
                        }
                      }}
                    >
                      Download Resume
                    </Button>
                  </Box>
                </Box>
              </Grow>
            </Grid>

            <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Box sx={{
                width: 250,
                height: 250,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.primary}40 0%, ${theme.secondary}40 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `2px solid ${theme.glassBorder}`,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  border: `1px dashed ${theme.glassBorder}`,
                  animation: 'spin 30s linear infinite'
                }
              }}>
                <Architecture sx={{ fontSize: 100, color: theme.primaryLight, opacity: 0.8 }} />
              </Box>
            </Grid>
          </Grid>

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <IconButton
              href="https://www.linkedin.com/in/grsnow/"
              target="_blank"
              sx={{ color: theme.textMuted, '&:hover': { color: theme.primaryLight } }}
            >
              <LinkedIn />
            </IconButton>
                        <IconButton
              href="mailto:gregoryasnow@gmail.com"
              sx={{ color: theme.textMuted, '&:hover': { color: theme.primaryLight } }}
            >
              <Email />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Navigation Tabs */}
      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 10 }}>
        <Paper sx={{
          ...glassCard,
          p: 1,
          mb: 4
        }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                background: theme.gradientAccent,
                height: 3,
                borderRadius: 3
              }
            }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTab-root': {
                color: theme.textSecondary,
                fontWeight: 600,
                fontSize: '0.95rem',
                textTransform: 'none',
                minHeight: 56,
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: theme.primary
                }
              },
              '.Mui-selected': {
                color: `${theme.primary} !important`
              }
            }}
          >
            <Tab icon={<Info sx={{ fontSize: 20 }} />} iconPosition="start" label="About" />
            <Tab icon={<Star sx={{ fontSize: 20 }} />} iconPosition="start" label="Accomplishments" />
            <Tab icon={<Computer sx={{ fontSize: 20 }} />} iconPosition="start" label="Skills" />
            <Tab icon={<Work sx={{ fontSize: 20 }} />} iconPosition="start" label="Experience" />
            <Tab icon={<Architecture sx={{ fontSize: 20 }} />} iconPosition="start" label="Goals" />
            <Tab icon={<Lightbulb sx={{ fontSize: 20 }} />} iconPosition="start" label="Insights" />
            <Tab icon={<Email sx={{ fontSize: 20 }} />} iconPosition="start" label="Contact" />
            <Tab icon={<Code sx={{ fontSize: 20 }} />} iconPosition="start" label="About Site" />
          </Tabs>
        </Paper>

        {/* Tab Panels */}
        <TabPanel value={tab} index={0}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Info sx={{ color: '#fff' }} />
              </Box>
              Professional Summary
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ ...accentCard, p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Cloud sx={{ fontSize: 28, color: theme.primary, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ color: theme.textPrimary, lineHeight: 1.8, fontSize: '1.05rem' }}>
                      Strategic IT leader with <strong>20 years of experience</strong> architecting enterprise solutions and leading cross-functional teams in high-stakes environments. Proven success driving digital transformation, aligning technology with business goals, and delivering measurable business value across <strong>defense, healthcare, and legal sectors</strong>.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ ...accentCard, p: 3, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Security sx={{ fontSize: 28, color: theme.secondary, mt: 0.5 }} />
                    <Typography variant="body1" sx={{ color: theme.textPrimary, lineHeight: 1.8, fontSize: '1.05rem' }}>
                      Currently serving as <strong>Technical Lead for OCONUS Navy Enterprise Networks</strong>, managing technical delivery for a 90+ person team. Deep expertise in <strong>Microsoft Azure, Windows Server</strong>, and enterprise technology strategy, with a focus on leveraging <strong>generative AI</strong> to expedite engineering solution development.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 3, bgcolor: theme.bgLight, borderRadius: '16px', border: `1px solid ${theme.border}` }}>
              <Typography variant="h6" sx={{ color: theme.primary, fontWeight: 600, mb: 2 }}>
                Core Competencies
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Enterprise Architecture', 'Cloud Solutions', 'Team Leadership', 'Digital Transformation', 'Security & Compliance', 'Government IT', 'Strategic Planning', 'AI Integration'].map((item, idx) => (
                  <Chip
                    key={idx}
                    icon={<CheckCircle sx={{ fontSize: 16 }} />}
                    label={item}
                    sx={{
                      bgcolor: '#fff',
                      border: `1px solid ${theme.border}`,
                      fontWeight: 500,
                      '& .MuiChip-icon': { color: theme.secondary }
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={1}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Star sx={{ color: '#fff' }} />
              </Box>
              Key Accomplishments
            </Typography>

            <Grid container spacing={3}>
              {accomplishments.map((item, idx) => (
                <Grid item xs={12} key={idx}>
                  <Grow in timeout={300 + idx * 100}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 3,
                      p: 3,
                      borderRadius: '16px',
                      bgcolor: idx % 2 === 0 ? theme.bgLight : '#fff',
                      border: `1px solid ${theme.border}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: `${theme.primary}08`,
                        borderColor: theme.primary
                      }
                    }}>
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '10px',
                        background: theme.gradientAccent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Typography sx={{ color: '#fff', fontWeight: 700 }}>{idx + 1}</Typography>
                      </Box>
                      <Typography variant="body1" sx={{ color: theme.textPrimary, lineHeight: 1.7, fontSize: '1.05rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={2}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Computer sx={{ color: '#fff' }} />
              </Box>
              Technical & Business Skills
            </Typography>

            <Typography variant="h5" sx={{ color: theme.primary, fontWeight: 600, mb: 3, mt: 2 }}>
              Technical Expertise
            </Typography>
            <Grid container spacing={3}>
              {technicalSkills.map((skill, idx) => (
                <Grid item xs={12} md={6} lg={4} key={idx}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '16px',
                    bgcolor: theme.bgLight,
                    border: `1px solid ${theme.border}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: theme.primary,
                      bgcolor: `${theme.primary}05`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{
                        p: 1,
                        borderRadius: '10px',
                        background: theme.gradientAccent,
                        color: '#fff'
                      }}>
                        {skill.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: theme.textPrimary, fontWeight: 600 }}>
                        {skill.category}
                      </Typography>
                    </Box>
                    {skill.items.map((item, i) => (
                      <Typography key={i} variant="body2" sx={{ color: theme.textSecondary, mb: 0.75, pl: 1, borderLeft: `2px solid ${theme.primary}30` }}>
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Typography variant="h5" sx={{ color: theme.secondary, fontWeight: 600, mb: 3, mt: 5 }}>
              Business & Leadership Skills
            </Typography>
            <Grid container spacing={3}>
              {businessSkills.map((skill, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '16px',
                    bgcolor: theme.bgLight,
                    border: `1px solid ${theme.border}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: theme.secondary,
                      bgcolor: `${theme.secondary}05`
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{
                        p: 1,
                        borderRadius: '10px',
                        background: `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.secondaryLight} 100%)`,
                        color: '#fff'
                      }}>
                        {skill.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: theme.textPrimary, fontWeight: 600 }}>
                        {skill.category}
                      </Typography>
                    </Box>
                    {skill.items.map((item, i) => (
                      <Typography key={i} variant="body2" sx={{ color: theme.textSecondary, mb: 0.75, pl: 1, borderLeft: `2px solid ${theme.secondary}30` }}>
                        {item}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={3}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Work sx={{ color: '#fff' }} />
              </Box>
              Professional Experience
            </Typography>

            {/* Timeline */}
            <Box sx={{ position: 'relative' }}>
              {experiences.map((exp, idx) => (
                <Box key={idx} sx={{
                  display: 'flex',
                  gap: 3,
                  mb: 4,
                  position: 'relative'
                }}>
                  {/* Timeline line */}
                  <Box sx={{
                    width: 3,
                    bgcolor: idx === 0 ? theme.primary : theme.border,
                    borderRadius: 2,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      bgcolor: idx === 0 ? theme.primary : theme.bgLight,
                      border: `3px solid ${idx === 0 ? theme.primary : theme.border}`
                    }
                  }} />

                  <Paper elevation={0} sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: idx === 0 ? `${theme.primary}08` : theme.bgLight,
                    border: `1px solid ${idx === 0 ? theme.primary : theme.border}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: theme.primary
                    }
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ color: theme.primary, fontWeight: 700 }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: theme.textPrimary, fontWeight: 500 }}>
                          {exp.company}
                        </Typography>
                      </Box>
                      <Chip
                        label={exp.years}
                        size="small"
                        sx={{
                          bgcolor: idx === 0 ? theme.primary : theme.bgLight,
                          color: idx === 0 ? '#fff' : theme.textSecondary,
                          fontWeight: 600,
                          border: `1px solid ${theme.border}`
                        }}
                      />
                    </Box>
                    <Typography variant="body2" sx={{ color: theme.textSecondary, mb: 2, lineHeight: 1.7 }}>
                      {exp.description}
                    </Typography>
                    {exp.achievements && (
                      <Box sx={{ mt: 2 }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography key={i} variant="body2" sx={{
                            color: theme.textSecondary,
                            mb: 0.75,
                            pl: 2,
                            position: 'relative',
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: theme.primary
                            }
                          }}>
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    )}
                  </Paper>
                </Box>
              ))}
            </Box>

            {/* Education */}
            <Typography variant="h5" sx={{ color: theme.primary, fontWeight: 600, mb: 3, mt: 5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <School /> Education
            </Typography>
            <Paper elevation={0} sx={{
              p: 3,
              borderRadius: '16px',
              background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.secondary}10 100%)`,
              border: `1px solid ${theme.primary}30`
            }}>
              <Typography variant="h6" sx={{ color: theme.primary, fontWeight: 700 }}>{education.school}</Typography>
              <Typography variant="subtitle1" sx={{ color: theme.textPrimary }}>{education.degree} | {education.years}</Typography>
              <Typography variant="body2" sx={{ color: theme.textSecondary, mt: 1 }}>Major: {education.major}</Typography>
            </Paper>

            {/* Certifications */}
            <Typography variant="h5" sx={{ color: theme.secondary, fontWeight: 600, mb: 3, mt: 5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Star /> Certifications
            </Typography>
            <Grid container spacing={3}>
              {certifications.map((cert, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: theme.bgLight,
                    border: `1px solid ${theme.border}`,
                    height: '100%'
                  }}>
                    <Typography variant="h6" sx={{ color: theme.secondary, fontWeight: 600, mb: 2 }}>{cert.category}</Typography>
                    {cert.items.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircle sx={{ fontSize: 16, color: theme.secondary }} />
                        <Typography variant="body2" sx={{ color: theme.textSecondary }}>{item}</Typography>
                      </Box>
                    ))}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={4}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Architecture sx={{ color: '#fff' }} />
              </Box>
              Professional Goals
            </Typography>

            <Grid container spacing={3}>
              {professionalGoals.map((goal, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Grow in timeout={400 + idx * 150}>
                    <Paper elevation={0} sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: '20px',
                      background: `linear-gradient(145deg, #fff 0%, ${theme.bgLight} 100%)`,
                      border: `1px solid ${theme.border}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                        borderColor: theme.primary
                      }
                    }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: theme.gradientAccent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: '#fff'
                      }}>
                        {goal.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: theme.textPrimary, fontWeight: 700, mb: 1 }}>
                        {goal.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: theme.textSecondary, lineHeight: 1.7 }}>
                        {goal.description}
                      </Typography>
                    </Paper>
                  </Grow>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={5}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Lightbulb sx={{ color: '#fff' }} />
              </Box>
              Thought Leadership
            </Typography>
            <Typography variant="body1" sx={{ color: theme.textSecondary, mb: 4, lineHeight: 1.7, maxWidth: 800 }}>
              I share insights on enterprise technology strategy, cloud adoption, and IT modernization. My approach blends technical depth with practical business outcomes.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                    <Cloud sx={{ fontSize: 20 }} />
                    AI & Enterprise Technology
                  </Typography>
                  {[
                    'Generative AI\'s transformative impact on enterprise IT operations',
                    'AI-powered cybersecurity: Automated threat detection in hybrid cloud',
                    'Machine learning integration for legacy system modernization',
                    'Responsible AI governance for government compliance',
                    'AI-driven infrastructure automation and reliability',
                    'Edge computing and AI for real-time decision making'
                  ].map((item, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: theme.textSecondary, mb: 1, pl: 2, borderLeft: `2px solid ${theme.primary}30` }}>
                      {item}
                    </Typography>
                  ))}
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.secondary, mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                    <Security sx={{ fontSize: 20 }} />
                    Cybersecurity & Geopolitics
                  </Typography>
                  {[
                    'Nation-state cyber threats and critical infrastructure security',
                    'Supply chain security in global technology partnerships',
                    'Zero Trust architecture for evolving threat landscapes',
                    'International cybersecurity regulations impact',
                    'Quantum computing threats to encryption standards',
                    'Cyber warfare influence on enterprise security'
                  ].map((item, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: theme.textSecondary, mb: 1, pl: 2, borderLeft: `2px solid ${theme.secondary}30` }}>
                      {item}
                    </Typography>
                  ))}
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.accent, mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                    <Architecture sx={{ fontSize: 20 }} />
                    Digital Transformation & Policy
                  </Typography>
                  {[
                    'Government digital transformation and private sector adoption',
                    'Data sovereignty regulations and cloud architecture',
                    'Green IT and sustainable technology practices',
                    'Digital divide: Bridging technology gaps',
                    'Regulatory compliance in emerging technology',
                    'Public-private partnerships in infrastructure modernization'
                  ].map((item, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: theme.textSecondary, mb: 1, pl: 2, borderLeft: `2px solid ${theme.accent}30` }}>
                      {item}
                    </Typography>
                  ))}
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.primary, mb: 2, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}>
                    <Storage sx={{ fontSize: 20 }} />
                    Cloud & Global Affairs
                  </Typography>
                  {[
                    'Multi-cloud strategies amid geopolitical tensions',
                    'Cloud repatriation: Cost, performance, and compliance',
                    'Global data center expansion and architecture impact',
                    'Technology sanctions and enterprise roadmaps',
                    'Edge computing for latency and local regulations',
                    'Hybrid cloud for multi-jurisdiction operations'
                  ].map((item, idx) => (
                    <Typography key={idx} variant="body2" sx={{ color: theme.textSecondary, mb: 1, pl: 2, borderLeft: `2px solid ${theme.primary}30` }}>
                      {item}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                variant="contained"
                href="https://www.linkedin.com/in/grsnow/"
                target="_blank"
                startIcon={<LinkedIn />}
                sx={{
                  background: theme.gradientAccent,
                  color: '#fff',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: '12px',
                  textTransform: 'none',
                  '&:hover': { boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)' }
                }}
              >
                Connect on LinkedIn for More Insights
              </Button>
            </Box>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={6}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Email sx={{ color: '#fff' }} />
              </Box>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ color: theme.textSecondary, mb: 4, lineHeight: 1.7 }}>
              Ready to modernize your IT infrastructure or collaborate on enterprise solutions? I'd love to hear from you.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
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
                            borderRadius: '12px',
                            '& fieldset': { borderColor: theme.border },
                            '&:hover fieldset': { borderColor: theme.primary },
                            '&.Mui-focused fieldset': { borderColor: theme.primary }
                          },
                          '& .MuiInputLabel-root': { color: theme.textSecondary }
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
                            borderRadius: '12px',
                            '& fieldset': { borderColor: theme.border },
                            '&:hover fieldset': { borderColor: theme.primary },
                            '&.Mui-focused fieldset': { borderColor: theme.primary }
                          },
                          '& .MuiInputLabel-root': { color: theme.textSecondary }
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
                            borderRadius: '12px',
                            '& fieldset': { borderColor: theme.border },
                            '&:hover fieldset': { borderColor: theme.primary },
                            '&.Mui-focused fieldset': { borderColor: theme.primary }
                          },
                          '& .MuiInputLabel-root': { color: theme.textSecondary }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            '& fieldset': { borderColor: theme.border },
                            '&:hover fieldset': { borderColor: theme.primary },
                            '&.Mui-focused fieldset': { borderColor: theme.primary }
                          },
                          '& .MuiInputLabel-root': { color: theme.textSecondary }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                          background: theme.gradientAccent,
                          color: '#fff',
                          fontWeight: 600,
                          py: 1.5,
                          borderRadius: '12px',
                          textTransform: 'none',
                          fontSize: '1rem',
                          '&:hover': {
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                          }
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Paper elevation={0} sx={{
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: theme.bgLight,
                    border: `1px solid ${theme.border}`
                  }}>
                    <Typography variant="h6" sx={{ color: theme.textPrimary, fontWeight: 600, mb: 2 }}>
                      Direct Contact
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Email sx={{ color: theme.primary }} />
                      <Link href="mailto:gregoryasnow@gmail.com" sx={{ color: theme.textSecondary, textDecoration: 'none', '&:hover': { color: theme.primary } }}>
                        gregoryasnow@gmail.com
                      </Link>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LinkedIn sx={{ color: theme.primary }} />
                      <Link href="https://www.linkedin.com/in/grsnow/" target="_blank" sx={{ color: theme.textSecondary, textDecoration: 'none', '&:hover': { color: theme.primary } }}>
                        LinkedIn Profile
                      </Link>
                    </Box>
                  </Paper>

                  <Paper elevation={0} sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${theme.primary}10 0%, ${theme.secondary}10 100%)`,
                    border: `1px solid ${theme.primary}30`,
                    flex: 1
                  }}>
                    <Typography variant="h6" sx={{ color: theme.textPrimary, fontWeight: 600, mb: 2 }}>
                      Let's Discuss
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.textSecondary, lineHeight: 1.7 }}>
                      Whether you're looking to modernize legacy systems, implement cloud solutions, or need strategic IT guidance, I'm here to help transform your technology landscape.
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>

        <TabPanel value={tab} index={7}>
          <Paper sx={{ ...glassCard, p: 5 }}>
            <Typography variant="h4" sx={{
              fontWeight: 700,
              color: theme.textPrimary,
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Box sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: theme.gradientAccent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Code sx={{ color: '#fff' }} />
              </Box>
              About This Site
            </Typography>

            <Box sx={{ ...accentCard, p: 3, mb: 4 }}>
              <Typography variant="h6" sx={{ color: theme.primary, mb: 2, fontWeight: 600 }}>
                Built with Claude Code
              </Typography>
              <Typography variant="body1" sx={{ color: theme.textPrimary, lineHeight: 1.8, mb: 2 }}>
                This website was built using <strong>Claude Code</strong>, Anthropic's AI-powered coding assistant. The entire codebase—design, layout, components, and functionality—was generated through collaborative AI development, demonstrating my hands-on experience leveraging generative AI to deliver production-ready IT solutions.
              </Typography>
              <Typography variant="body2" sx={{ color: theme.textSecondary, lineHeight: 1.7 }}>
                As an enterprise IT leader, I actively use AI tools like Claude, ChatGPT, and GitHub Copilot to accelerate solution development, automate workflows, and drive innovation across my teams.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.primary, mb: 2, fontWeight: 600 }}>
                    Technology Stack
                  </Typography>
                  {['React 18.2.0', 'Material-UI (MUI) v5.14.0', 'Emotion for styled components', 'Modern CSS with Glassmorphism effects'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: theme.secondary }} />
                      <Typography variant="body2" sx={{ color: theme.textSecondary }}>{item}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={0} sx={{ p: 3, borderRadius: '16px', bgcolor: theme.bgLight, border: `1px solid ${theme.border}`, height: '100%' }}>
                  <Typography variant="h6" sx={{ color: theme.primary, mb: 2, fontWeight: 600 }}>
                    Design Features
                  </Typography>
                  {['Responsive design for all devices', 'Modern light theme with gradients', 'Smooth animations and transitions', 'Accessibility-focused components'].map((item, idx) => (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <CheckCircle sx={{ fontSize: 16, color: theme.secondary }} />
                      <Typography variant="body2" sx={{ color: theme.textSecondary }}>{item}</Typography>
                    </Box>
                  ))}
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 3, bgcolor: theme.bgLight, borderRadius: '16px', border: `1px solid ${theme.border}` }}>
              <Typography variant="h6" sx={{ color: theme.secondary, mb: 2, fontWeight: 600 }}>
                Development Philosophy
              </Typography>
              <Typography variant="body1" sx={{ color: theme.textSecondary, lineHeight: 1.8 }}>
                Built using Create React App and Material-UI, this site showcases how AI can assist in creating professional, production-ready web applications. The AI-driven development process ensured consistent code quality, modern best practices, and optimal user experience while maintaining the personal touch that represents my professional brand.
              </Typography>
            </Box>

            <Box sx={{ mt: 4, p: 3, background: theme.gradientHero, borderRadius: '16px', textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: theme.textLight, opacity: 0.9 }}>
                Proudly built with <Link href="https://claude.ai/code" target="_blank" sx={{ color: theme.primaryLight, fontWeight: 600 }}>Claude Code</Link> by Anthropic
              </Typography>
            </Box>
          </Paper>
        </TabPanel>

        {/* Footer */}
        <Box sx={{ textAlign: 'center', py: 4, mt: 4 }}>
          <Typography variant="body2" sx={{ color: theme.textMuted }}>
            © {new Date().getFullYear()} Gregory Snow. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
