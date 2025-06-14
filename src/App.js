import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Link, Tabs, Tab, TextField } from '@mui/material';

const accomplishments = [
  'Architected secure, scalable Microsoft Azure and hybrid cloud solutions for federal agencies.',
  'Led multi-million dollar migrations from legacy infrastructure to modern Windows Server environments.',
  'Developed enterprise technology strategies that improved operational efficiency and compliance.',
  'Recognized for thought leadership in cloud adoption, automation, and IT modernization.'
];

const experiences = [
  {
    title: 'Solution Architect | NEN Technical Lead',
    company: 'Booz Allen Hamilton',
    years: 'SEP 2019 - Present',
    description: 'Contract Technical Lead supporting OCONUS Navy Enterprise Networks at NIWC Pacific for Booz Allen. In this role, I am responsible for managing technical delivery for a 100+ person team, ensuring consistent solution development, IT system modernization, and alignment with strategic objectives.',
    achievements: [
      'Provide technical guidance across Windows Servers solutions (AD, PKI, File, Exchange)',
      'Perform In theater and remote installations of Domain Controller, File, Backup and SCCMCB',
      'Lead engineering responsibilities include Exchange 2019, PKI, Active Directory, MECM',
      'MECM infrastructure engineering support of all roles and application management',
      'PKI solution development including certificate validation infrastructure support',
      'Drive secure server base build development including integration, STIG and GPO engineering'
    ]
  },
  {
    title: 'Lead Engineer',
    company: 'Booz Allen Hamilton',
    years: 'SEP 2019 – JAN 2020',
    description: 'Team Lead for Windows Server engineers responsible for developing enterprise IT solutions to be deployed at OCONUS Naval sites. Responsibilities include technical review of engineering solutions in development, mentoring, technical capacity development, and identification of opportunities to create value for NIWC Pacific.'
  },
  {
    title: 'Systems Engineer III',
    company: 'Draper',
    years: 'JUL 2017 - SEP 2019',
    description: 'Developed secure Windows Server information systems focusing on DFARS compliance, and security posture improvements. Managed and built both classified and unclassified systems using DOD STIGs. Primarily engineer responsible for messaging, directory services, and identity management platform.',
    achievements: [
      'Implement required DOD STIGs using Group Policy (GPO) to improve system security posture',
      'Exchange 2016 engineering, administration, support for related mail transport infrastructure',
      'Implement MFA using smart cards on servers and endpoints for DFARS compliance',
      'Deployed SCOM and SolarWinds to monitor infrastructure health and availability',
      'Built custom directory service data replication',
      'Build and deploy enterprise applications running on Windows Servers across the enterprise'
    ]
  },
  {
    title: 'Senior Systems Server Engineer',
    company: 'Boston Medical Center',
    years: 'OCT 2014 – JUL 2017',
    description: 'Responsible for the health and reliability of "Tier Zero" applications in an always on health care environment, ensuring reliability, consistency and fault tolerance across the organization. Point of contact for all Microsoft solutions including Active Directory, Active Directory Federated Services, Exchange Server, Lync, and Certificate Authority.',
    achievements: [
      'Provide EMR vendor assistance to ensure server uptime for patient critical apps',
      'Drove secure baseline virtual and physical server build processes',
      'Participated in regular on call rotation to diagnose and fix issues with patient facing systems',
      'Deployed ADFS to create secure federated trust with cloud providers',
      'Supported 802.1X NAC deployment using Microsoft PKI for secure network authentication',
      'Audited and reported on stale AD objects to maintain required security compliance',
      'Built and deployed secure desktop/server policies using GPO',
      'Provide infrastructure support for to clinical systems analyst team',
      'Ensure HIPPA/PCI complaint standards exercised in systems design'
    ]
  },
  {
    title: 'Systems Administrator',
    company: 'Bingham McCutchen',
    years: 'APR 2012 – OCT 2014',
    description: 'Managed global IT infrastructure consisting of 600+ physical and virtual servers across 16 sites. Primary responsibilities including Active Directory, messaging and mobility infrastructure administration and support.',
    achievements: [
      'Built, configured, and Managed Exchange Server 2003 - 2013 on Windows 2008 servers',
      'Exchange 2013 requirements gathering, migration planning and app dependency analysis',
      'Symantec Enterprise Vault 11 design and installation then migration from Autonomy EAS',
      'Configured and maintained enterprise message routing and send/receive to connectors',
      'Public Folder migration consisting of 6TB content, and retiring Exchange 2003',
      'Deployed perimeter SMTP Mail Gateway deployment for protection against email-based threats',
      'Execute Exchange Server disaster recovery planning and exercises',
      'Mobile Device Management encompassing BES 5, IOS and Android for firm DLP initiative',
      'Managed AD, DNS, DHCP and PKI for AD replication and security enhancements',
      'VMware ESXI administration, storage and resource allocation, backup/recovery and VM builds'
    ]
  },
  {
    title: 'Systems Administrator',
    company: 'SMMA, INC',
    years: 'JAN 2010 – APR 2012',
    description: 'Responsible for all aspects of systems and networks maintenance, engineering and administration for the firm\'s IT Infrastructure. These systems supported critical network infrastructure including AD, Exchange, Checkpoint firewall and VMware.',
    achievements: [
      'Administer, support and maintained Cisco Unified Call Manager for VOIP communication',
      'Deployed and configured VOIP phones for 180 employees in 3 offices',
      'Administration of EMC Clarion storage including LUN allocation and MPIO configuration',
      'Preformed VMware ESXI provisioning and P-to-V migration for reduced server footprint',
      'Managed Symantec Endpoint Protection Manager supporting virus and malware protection',
      'Designed Symantec Backup Exec 12 data protection and recovery routines',
      'Migrated end user\'s mailboxes and Public Folder content to Exchange Server 2010',
      'Planned and deployed network configuration for Chapel Hill, NC office connecting a new site'
    ]
  },
  {
    title: 'Systems Administrator',
    company: 'SMMA, INC',
    years: 'AUG 2005 – JAN 2010',
    description: 'Primary responsibilities include analysis, development and testing of technical solutions to support architects, engineers and designers. In this role, I researched and tested collaboration applications to identify methods that improved staff productivity. Internship from 2005-2007, becoming full time staff upon graduation in 2007.',
    achievements: [
      'Introduced server virtualization infrastructure for server consolidation',
      'Performed migration to Checkpoint Secure Platform Firewall on NGX appliance',
      'Installed site-to-site VPN using Checkpoint Firewall between remote offices',
      'Migrated from Exchange 2003 to 2007 and developed disaster recovery plan',
      'Introduced Barracuda SPAM firewall reducing SPAM and increasing employee productivity',
      'Selected and implemented SharePoint 2010 Server for departmental collaboration',
      'Adopted Windows Deployment services for desktop and server imaging',
      'Performed Windows Server troubleshooting and support',
      'Managed and specify desktop hardware configurations and procurement',
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
      'MCITP | Microsoft Certified IT Professional, Windows Server 2019'
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
    const mailtoLink = `mailto:greg.snow@example.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box sx={{ background: '#181f2a', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <Paper elevation={6} sx={{ p: 4, mb: 4, background: '#232b39', borderRadius: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2e5a88', fontWeight: 700 }}>
            Greg Snow
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ color: '#e0e6ed' }}>
            Enterprise IT Solution Architect | Microsoft Cloud & Server Expert
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ color: '#b0b8c1', fontStyle: 'italic', mb: 2 }}>
            Journey of a guy looking to solve the world's workplace challenges with technology and automation
          </Typography>
        </Paper>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            textColor="inherit"
            TabIndicatorProps={{ style: { background: '#2e5a88' } }}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '.MuiTab-root': { color: '#b0b8c1', fontWeight: 600, fontSize: '1.1em' },
              '.Mui-selected': { color: '#2e5a88 !important' }
            }}
          >
            <Tab label="Bio" />
            <Tab label="Key Accomplishments" />
            <Tab label="Professional Experience" />
            <Tab label="Thought Leadership" />
            <Tab label="Contact" />
            <Tab label="About This Site" />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 3, lineHeight: 1.6 }}>
              I help government agencies and enterprises modernize, secure, and optimize their IT infrastructure. With deep expertise in Microsoft Azure, Windows Server, and enterprise technology strategy, I deliver solutions that drive mission success and operational excellence.
            </Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 3, lineHeight: 1.6 }}>
              Mission-driven technical leader and solution architect with expertise in IT infrastructure management, engineering, and operations. Proven track record across diverse industries, including creative, legal, healthcare, and defense, managing critical business and mission systems. Skilled in designing, building, and transforming systems into modern, resilient platforms in hybrid environments.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ background: '#2e5a88', color: '#fff', fontWeight: 600, mt: 2 }}
              href="#contact"
              onClick={() => setTab(4)}
            >
              Contact Me
            </Button>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>Key Accomplishments</Typography>
            {accomplishments.map((item, idx) => (
              <Typography 
                key={idx} 
                variant="body1" 
                sx={{ 
                  color: '#b0b8c1', 
                  mb: 3, 
                  lineHeight: 1.6,
                  '&:last-child': { mb: 0 }
                }}
              >
                {item}
              </Typography>
            ))}
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>Professional Experience</Typography>
            <Grid container spacing={3}>
              {experiences.map((exp, idx) => (
                <Grid item xs={12} key={idx}>
                  <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                    <Typography variant="h6" sx={{ color: '#4da3ff', fontWeight: 600 }}>{exp.title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: '#b0b8c1' }}>{exp.company} | {exp.years}</Typography>
                    <Typography variant="body2" sx={{ mt: 1, mb: exp.achievements ? 2 : 0 }}>{exp.description}</Typography>
                    {exp.achievements && (
                      <Box sx={{ mt: 2 }}>
                        {exp.achievements.map((achievement, idx) => (
                          <Typography key={idx} variant="body2" sx={{ color: '#b0b8c1', ml: 2, mb: 1 }}>
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
            <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
              <Typography variant="h6" sx={{ color: '#4da3ff', fontWeight: 600 }}>{education.school}</Typography>
              <Typography variant="subtitle1" sx={{ color: '#b0b8c1' }}>{education.degree} | {education.years}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Major: {education.major}</Typography>
            </Paper>
            <Typography variant="h4" sx={{ mt: 4, mb: 3 }}>Certifications</Typography>
            <Grid container spacing={3}>
              {certifications.map((cert, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                    <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>{cert.category}</Typography>
                    {cert.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" sx={{ color: '#b0b8c1', mb: 1 }}>
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
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>Thought Leadership</Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 2 }}>
              I regularly share insights on enterprise technology strategy, cloud adoption, and IT modernization. My approach blends technical depth with practical business outcomes, helping organizations navigate complex digital transformations.
            </Typography>
            <Typography variant="body2" sx={{ color: '#4da3ff' }}>
              <Link href="https://www.linkedin.com/in/grsnow/" target="_blank" rel="noopener" sx={{ color: '#4da3ff' }}>
                Connect with me on LinkedIn
              </Link>
            </Typography>
          </Paper>
        </TabPanel>
        <TabPanel value={tab} index={4}>
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>Contact</Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 3 }}>
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
                        '& fieldset': { borderColor: '#4da3ff' },
                        '&:hover fieldset': { borderColor: '#2e5a88' },
                        '&.Mui-focused fieldset': { borderColor: '#2e5a88' }
                      },
                      '& .MuiInputLabel-root': { color: '#b0b8c1' },
                      '& .MuiInputBase-input': { color: '#e0e6ed' }
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
                        '& fieldset': { borderColor: '#4da3ff' },
                        '&:hover fieldset': { borderColor: '#2e5a88' },
                        '&.Mui-focused fieldset': { borderColor: '#2e5a88' }
                      },
                      '& .MuiInputLabel-root': { color: '#b0b8c1' },
                      '& .MuiInputBase-input': { color: '#e0e6ed' }
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
                        '& fieldset': { borderColor: '#4da3ff' },
                        '&:hover fieldset': { borderColor: '#2e5a88' },
                        '&.Mui-focused fieldset': { borderColor: '#2e5a88' }
                      },
                      '& .MuiInputLabel-root': { color: '#b0b8c1' },
                      '& .MuiInputBase-input': { color: '#e0e6ed' }
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
                        '& fieldset': { borderColor: '#4da3ff' },
                        '&:hover fieldset': { borderColor: '#2e5a88' },
                        '&.Mui-focused fieldset': { borderColor: '#2e5a88' }
                      },
                      '& .MuiInputLabel-root': { color: '#b0b8c1' },
                      '& .MuiInputBase-input': { color: '#e0e6ed' }
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background: '#2e5a88',
                      color: '#fff',
                      fontWeight: 600,
                      '&:hover': {
                        background: '#1e4a78'
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
        <TabPanel value={tab} index={5}>
          <Paper elevation={2} sx={{ p: 4, background: '#232b39', borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>About This Site</Typography>
            <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>AI-Powered Development</Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 3, lineHeight: 1.6 }}>
              This website was built using AI-assisted development, demonstrating the power of artificial intelligence in modern web development. The entire codebase, including the design, layout, and functionality, was generated and refined through AI collaboration.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                  <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>Frontend Framework</Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • React 18.2.0
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Material-UI (MUI) v5.14.0
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1' }}>
                    • Emotion for styled components
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                  <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>Key Features</Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Responsive design with Material-UI Grid
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Dark theme optimized for readability
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1' }}>
                    • Client-side email form integration
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ color: '#4da3ff', mt: 4, mb: 2 }}>AI Development Process</Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 3, lineHeight: 1.6 }}>
              The development process leveraged AI to:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                  <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>Code Generation</Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Component structure and implementation
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Styling and theme configuration
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1' }}>
                    • Form handling and validation
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 3, background: '#202736', color: '#e0e6ed' }}>
                  <Typography variant="h6" sx={{ color: '#4da3ff', mb: 2 }}>Design Decisions</Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Layout and component organization
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1', mb: 1 }}>
                    • Color scheme and typography
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#b0b8c1' }}>
                    • User experience optimization
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ color: '#4da3ff', mt: 4, mb: 2 }}>Development</Typography>
            <Typography variant="body1" sx={{ color: '#b0b8c1', lineHeight: 1.6 }}>
              Built using Create React App and Material-UI, this site showcases how AI can assist in creating professional, production-ready web applications. The AI-driven development process ensured consistent code quality, modern best practices, and optimal user experience.
            </Typography>
          </Paper>
        </TabPanel>
      </Container>
    </Box>
  );
} 