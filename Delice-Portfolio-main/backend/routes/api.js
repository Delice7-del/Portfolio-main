const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Subscriber = require('../models/Subscriber');
const PDFDocument = require('pdfkit');

// @route   POST api/contact
// @desc    Send a message via contact form
router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   POST api/subscribe
// @desc    Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// @route   GET api/projects
// @desc    Get all projects (Case Studies)
router.get('/projects', (req, res) => {
  // Static data for now, can be moved to MongoDB
  const projects = [
    {
      id: "healthconnect",
      title: "HealthConnect",
      subtitle: "Revolutionizing Healthcare Data Management",
      category: "Full-Stack Development",
      description: "A modular healthcare system designed to manage patients, professionals, and medical records with advanced security.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      images: ["/projects/healthconnect-1.jpg", "/projects/healthconnect-2.jpg"],
      challenges: "Legacy systems were fragmented and insecure. We needed a unified platform that could handle high-concurrency while maintaining zero-trust security principles.",
      solutions: "Built with a micro-modular architecture using React and Node.js. Implemented RBAC (Role-Based Access Control) to ensure data privacy and compliance with healthcare standards.",
      githubUrl: "https://github.com/Delice7-del/HealthConnect",
      liveUrl: "https://healthconnect-demo.com",
      impact: "Reduced data retrieval time by 40% and improved professional coordination efficiency by 30%."
    },
    {
      id: "camai",
      title: "CamAI",
      subtitle: "Smart Surveillance on the Edge",
      category: "AI & Mobile",
      description: "Real-time surveillance system that uses computer vision to detect and alert users about critical events.",
      technologies: ["Flutter", "Python", "TensorFlow Lite", "FastAPI"],
      images: ["/projects/camai-1.jpg", "/projects/camai-2.jpg"],
      challenges: "Ensuring reliability in areas with poor connectivity and optimizing battery life for edge devices.",
      solutions: "Integrated TensorFlow Lite for on-device inference, reducing latency and bandwidth usage. Used FastAPI for high-performance background processing.",
      githubUrl: "https://github.com/Delice7-del/CamAI",
      liveUrl: "#",
      impact: "98% accuracy in motion and object detection. Enabled 24/7 monitoring with minimal server costs."
    },
    {
      id: "foodshare",
      title: "Food-Share",
      subtitle: "Reducing Food Waste Through Community Sharing",
      category: "Social Impact Platform",
      description: "A community-driven platform that connects people with surplus food to those in need, minimizing waste and improving food accessibility.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      images: ["/projects/foodshare-1.jpg"],
      challenges: "Ensuring trust and safety while enabling fast food sharing. The platform needed moderation tools and expiry tracking.",
      solutions: "Built with React and Node.js, featuring real-time listings and location-based matching to connect donors with nearby recipients efficiently.",
      githubUrl: "https://github.com/Delice7-del/Food-Share",
      liveUrl: "#",
      impact: "Helped redistribute hundreds of meals during testing phases and increased community participation."
    },
    {
        id: "sponsify",
        title: "Sponsify",
        subtitle: "Connecting Street Children with Sponsors",
        category: "Social Welfare Platform",
        description: "A web platform designed to link vulnerable children with sponsors, supporting education, healthcare, and daily needs transparently.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        images: ["/projects/sponsify-1.jpg"],
        challenges: "Building trust between sponsors and beneficiaries while ensuring data privacy and accountability.",
        solutions: "Developed a secure full-stack system with user authentication, sponsorship tracking, and transparent reporting features.",
        githubUrl: "https://github.com/Delice7-del/Sponsify",
        liveUrl: "#",
        impact: "Improved sponsor engagement and provided a transparent way to support children's long-term development."
    },
    {
        id: "bora-ai",
        title: "BORA AI",
        subtitle: "AI-Powered Applicant Tracking System",
        category: "AI/ML Platform",
        description: "A web-based dashboard that uses AI to analyze and rank job applicants from resumes and structured profiles.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
        images: ["/projects/bora-ai-1.jpg"],
        challenges: "Creating an unbiased, efficient system to screen and rank candidates based on qualifications and skills.",
        solutions: "Built an AI-powered dashboard that parses resumes, scores candidates, and provides explanations for rankings.",
        githubUrl: "https://github.com/Delice7-del/BORA-AI",
        liveUrl: "https://bora-ai-web.vercel.app/",
        impact: "Reduced recruitment time by 60% and helped recruiters quickly identify the best candidates."
    }
  ];
  res.json(projects);
});

// @route   GET api/download-cv
// @desc    Generate and download professional CV PDF
router.get('/download-cv', (req, res) => {
  const doc = new PDFDocument({ margin: 50 });
  const filename = 'Delice_Keza_CV.pdf';

  res.setHeader('Content-disposition', `attachment; filename="${filename}"`);
  res.setHeader('Content-type', 'application/pdf');

  doc.pipe(res);

  // --- Header ---
  doc.fillColor('#BA7E1B').fontSize(24).text('DELICE KEZA', { align: 'left' });
  doc.fillColor('#666666').fontSize(12).text('UI/UX Designer | Frontend & Mobile Developer', { align: 'left' });
  doc.moveDown();
  doc.strokeColor('#dddddd').lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown();

  // --- Contact Info ---
  doc.fillColor('#333333').fontSize(10);
  doc.text('Email: delicekeza0@gmail.com');
  doc.text('Location: Kigali, Rwanda');
  doc.text('GitHub: github.com/Delice7-del');
  doc.text('LinkedIn: linkedin.com/in/delice-keza-b41382333/');
  doc.moveDown(2);

  // --- Summary ---
  doc.fillColor('#BA7E1B').fontSize(14).text('PROFESSIONAL SUMMARY', { underline: true });
  doc.moveDown(0.5);
  doc.fillColor('#333333').fontSize(10).text(
    'Creative UI/UX Designer and versatile Frontend & Mobile Developer with a passion for building intuitive, responsive, and visually appealing digital experiences. Experienced in creating user-centered designs, high-performance web applications, and cross-platform mobile apps. Skilled at translating design concepts into interactive interfaces while maintaining clean and scalable code.',
    { align: 'justify' }
  );
  doc.moveDown(2);

  // --- Experience ---
  doc.fillColor('#BA7E1B').fontSize(14).text('EXPERIENCE', { underline: true });
  doc.moveDown(0.5);

  const experiences = [
    {
      title: 'Frontend & Mobile Developer',
      company: 'Independent Projects / Freelance',
      period: '2023 — Present',
      desc: 'Developed responsive websites and mobile applications for clients using React, Next.js, and Flutter. Implemented UI/UX best practices, optimized app performance, and ensured cross-platform compatibility.'
    },
    {
      title: 'UI/UX Designer & Frontend Intern',
      company: 'NextGen Solutions',
      period: '2021 — 2022',
      desc: 'Created interactive prototypes and user flows for web and mobile apps. Collaborated with developers to integrate designs into React applications and improved user engagement by 40%.'
    }
  ];

  experiences.forEach(exp => {
    doc.fillColor('#000000').fontSize(11).text(`${exp.title} | ${exp.company}`, { continued: true });
    doc.fillColor('#666666').fontSize(10).text(`  (${exp.period})`, { align: 'right' });
    doc.moveDown(0.2);
    doc.fillColor('#333333').fontSize(10).text(exp.desc);
    doc.moveDown();
  });
  doc.moveDown();

  // --- Education ---
  doc.fillColor('#BA7E1B').fontSize(14).text('EDUCATION', { underline: true });
  doc.moveDown(0.5);
  doc.fillColor('#000000').fontSize(11).text('A\' Level in Software Development', { continued: true });
  doc.fillColor('#666666').fontSize(10).text('  (Graduating 2026)', { align: 'right' });
  doc.fillColor('#333333').fontSize(10).text('Rwanda Coding Academy');
  doc.moveDown();

  // --- Skills ---
  doc.fillColor('#BA7E1B').fontSize(14).text('TECHNICAL SKILLS', { underline: true });
  doc.moveDown(0.5);
  doc.fillColor('#333333').fontSize(10).text(
    'React, Next.js, Flutter, React Native, TypeScript, JavaScript, HTML, CSS, Tailwind, Figma, Adobe XD, Git, GitHub'
  );
  doc.moveDown(2);

  // --- Languages & Recognition ---
  doc.fillColor('#BA7E1B').fontSize(14).text('LANGUAGES & RECOGNITION', { underline: true });
  doc.moveDown(0.5);
  doc.fillColor('#333333').fontSize(10).text('Languages: English (Fluent), Kinyarwanda (Native), French (Intermediate)');
  doc.moveDown(0.5);
  doc.text('Awards: Top UI/UX Portfolio (RCA), Best Mobile App Design (Hackathon 2024)');

  doc.end();
});

module.exports = router;
