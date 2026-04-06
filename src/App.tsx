import { motion, useScroll, useTransform } from "motion/react";
import { 
  Code2, 
  GraduationCap, 
  Terminal, 
  Layers, 
  Users, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BookOpen,
  Cpu,
  Globe
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border border-brand/10 mx-4 mt-4 rounded-2xl">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold">R</div>
      <span className="font-display font-bold text-xl tracking-tight">Ravindra Rathod</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand/60">
      <a href="#about" className="hover:text-accent transition-colors">About</a>
      <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
      <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
      <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
    </div>
    <a href="#contact" className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-brand/90 transition-all">
      Connect
    </a>
  </nav>
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden hero-gradient">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 blur-3xl rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-5xl w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-8"
        >
          <Sparkles size={14} />
          Available for Training & Development
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-balance"
        >
          Full Stack <span className="text-accent">Trainer</span> & <span className="italic font-light">Web</span> Developer.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-brand/60 max-w-2xl mx-auto mb-12 text-balance"
        >
          Empowering the next generation of developers at Naresh I Technologies. Expert in building scalable web solutions and delivering high-impact technical training.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
            View Projects <ChevronRight size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ravindra-rathod-185096261" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white border border-brand/10 rounded-2xl font-bold text-lg hover:bg-surface transition-colors flex items-center justify-center gap-2">
            LinkedIn Profile <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "4+", icon: Briefcase },
    { label: "Projects Delivered", value: "10", icon: Code2 },
    { label: "Students Trained", value: "500+", icon: GraduationCap },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-brand/10"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-4">
              <stat.icon size={24} />
            </div>
            <span className="text-4xl font-display font-bold mb-1">{stat.value}</span>
            <span className="text-sm text-brand/40 font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "CodeMagicX",
      url: "https://codemagicx.com",
      desc: "India's leading AI-powered online programming platform. Features a powerful online compiler for multiple languages, 500+ algorithmic challenges, and comprehensive learning tracks for full-stack development.",
      tags: ["React", "Node.js", "AI", "Compiler"]
    },
    {
      title: "NexCode",
      url: "https://nexcode.codemagicx.in",
      desc: "A specialized Coding Studio environment designed for seamless development and practice. Part of the CodeMagicX ecosystem, providing an integrated workspace for developers.",
      tags: ["IDE", "Web Tools", "Development"]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Featured <br /> <span className="text-accent/80 italic">Projects.</span></h2>
          <p className="text-xl text-brand/60 max-w-xl">Real-world platforms built to empower developers and simplify the coding journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-white border border-brand/10 hover:border-accent/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                <a href={project.url} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-brand/5 flex items-center justify-center text-brand hover:bg-accent hover:text-white transition-all">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-lg text-brand/60 leading-relaxed mb-8 flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1 rounded-full bg-surface border border-brand/5 text-xs font-bold text-brand/40 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: Terminal,
      skills: ["React JS", "JavaScript", "HTML5 / CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend & Database",
      icon: Layers,
      skills: ["Node.js", "Java", "J2EE", "MySQL"]
    },
    {
      title: "Training & Content",
      icon: GraduationCap,
      skills: ["Full Stack Training", "Technical Content Creation", "Curriculum Design", "Mentorship"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-brand text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Technical <br /> <span className="text-accent/80 italic">Expertise.</span></h2>
          <p className="text-xl text-white/60 max-w-xl">A balanced skill set spanning modern web frameworks, enterprise Java, and technical education.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent">
                  <cat.icon size={20} />
                </div>
                <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
              </div>
              <ul className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70 group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      role: "Full Stack Web Development Trainer",
      company: "Naresh I Technologies",
      period: "2024 - 2026",
      desc: "Delivering comprehensive training in full stack web development, mentoring students in modern architectures and industry best practices."
    },
    {
      role: "Technical Content Creator",
      company: "Self-Employed",
      period: "2023 - 2026",
      desc: "Creating high-quality technical content and educational resources for the developer community."
    },
    {
      role: "Web Development Teacher",
      company: "BSGM Schools",
      period: "2023 - 2024",
      desc: "Introduced students to the fundamentals of web development and programming logic."
    },
    {
      role: "Web Developer",
      company: "Nacency Infotech",
      period: "2022 - 2024",
      desc: "Spearheaded PHP-based web development projects, building robust and dynamic web applications."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">The <span className="italic font-light">Journey.</span></h2>
            <p className="text-xl text-brand/60 max-w-xl">A professional path dedicated to building the web and teaching others to do the same.</p>
          </div>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-brand/10 hover:border-accent/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">{job.role}</h3>
                  <p className="text-brand/40 font-medium">{job.company}</p>
                </div>
                <div className="text-sm font-bold text-accent bg-accent/5 px-4 py-2 rounded-full self-start md:self-center">
                  {job.period}
                </div>
              </div>
              <p className="text-lg text-brand/60 leading-relaxed max-w-3xl">
                {job.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 bg-surface relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-none">Let's <span className="text-accent">Connect.</span></h2>
      <p className="text-2xl text-brand/60 mb-16 max-w-2xl mx-auto">Ready to discuss training opportunities or development projects? Reach out through any of the platforms below.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <a href="https://www.linkedin.com/in/ravindra-rathod-185096261" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-4 p-8 rounded-3xl bg-brand text-white hover:scale-[1.02] transition-transform">
          <Linkedin size={24} />
          <span className="text-xl font-bold">LinkedIn Profile</span>
        </a>
        <div className="flex items-center justify-center gap-8 p-8 rounded-3xl bg-white border border-brand/10">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-brand/40 hover:text-accent transition-colors"><Github size={28} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-brand/40 hover:text-accent transition-colors"><Twitter size={28} /></a>
          <a href="mailto:ravindra@example.com" className="text-brand/40 hover:text-accent transition-colors"><Mail size={28} /></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-brand/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-brand rounded flex items-center justify-center text-white text-[10px] font-bold">R</div>
      <span className="font-display font-bold text-lg tracking-tight">Ravindra Rathod</span>
    </div>
    <p className="text-sm text-brand/40 font-medium">© 2026 Ravindra Rathod. Built with passion & precision.</p>
    <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-brand/40">
      <a href="#" className="hover:text-brand transition-colors">Privacy</a>
      <a href="#" className="hover:text-brand transition-colors">Terms</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


