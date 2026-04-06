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
  Cpu
} from "lucide-react";
import { useRef } from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-card mx-4 mt-4 rounded-2xl">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold">D</div>
      <span className="font-display font-bold text-xl tracking-tight">DevTrain</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand/60">
      <a href="#about" className="hover:text-accent transition-colors">About</a>
      <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
      <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
      <a href="#training" className="hover:text-accent transition-colors">Training</a>
    </div>
    <a href="#contact" className="bg-brand text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-brand/90 transition-all shadow-lg shadow-brand/10">
      Let's Talk
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
          Available for new projects & workshops
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-balance"
        >
          Building <span className="text-accent">Scalable</span> Web Experiences & <span className="italic font-light">Empowering</span> Teams.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-brand/60 max-w-2xl mx-auto mb-12 text-balance"
        >
          Full-stack developer with 8+ years of experience and a passion for teaching. I bridge the gap between complex code and human understanding.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand/20 flex items-center justify-center gap-2">
            View Portfolio <ChevronRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white border border-brand/10 rounded-2xl font-bold text-lg hover:bg-surface transition-colors flex items-center justify-center gap-2">
            Book a Workshop <BookOpen size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: "8+", icon: Briefcase },
    { label: "Projects Delivered", value: "120+", icon: Code2 },
    { label: "Students Trained", value: "5k+", icon: GraduationCap },
    { label: "Workshops Held", value: "45", icon: Users },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-brand/5 shadow-sm"
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

const Skills = () => {
  const categories = [
    {
      title: "Development",
      icon: Terminal,
      skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "AWS / Cloud"]
    },
    {
      title: "Architecture",
      icon: Layers,
      skills: ["System Design", "Microservices", "CI/CD Pipelines", "Performance Optimization", "Security Best Practices"]
    },
    {
      title: "Training",
      icon: GraduationCap,
      skills: ["Curriculum Design", "Technical Writing", "Public Speaking", "Mentorship", "Live Coding Workshops"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-brand text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">Mastered <br /> <span className="text-accent/80 italic">Capabilities.</span></h2>
          <p className="text-xl text-white/60 max-w-xl">A dual-threat expertise in building robust software and translating it for the next generation of developers.</p>
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
      role: "Senior Full Stack Engineer & Lead Instructor",
      company: "TechNexus Academy",
      period: "2021 - Present",
      desc: "Leading the development of internal learning platforms while mentoring 500+ students yearly in advanced React and Node.js architectures."
    },
    {
      role: "Full Stack Developer",
      company: "Global Solutions Inc.",
      period: "2018 - 2021",
      desc: "Architected and maintained high-traffic e-commerce applications using Next.js and AWS. Improved site performance by 40%."
    },
    {
      role: "Technical Content Creator",
      company: "Freelance / Self-Employed",
      period: "2016 - 2018",
      desc: "Produced 100+ technical articles and video tutorials on modern web development, reaching over 1M developers globally."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">The <span className="italic font-light">Journey.</span></h2>
            <p className="text-xl text-brand/60 max-w-xl">A decade of building, breaking, and explaining the web.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-2xl bg-surface border border-brand/5 font-bold text-brand/40">Resume.pdf</div>
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
              className="group p-8 rounded-[2.5rem] bg-white border border-brand/5 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
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
      <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-none">Ready to <span className="text-accent">Collaborate?</span></h2>
      <p className="text-2xl text-brand/60 mb-16 max-w-2xl mx-auto">Whether you need a senior developer for your next big project or a trainer for your engineering team, I'm here to help.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <a href="mailto:hello@devtrain.com" className="flex items-center justify-center gap-4 p-8 rounded-3xl bg-brand text-white hover:scale-[1.02] transition-transform shadow-2xl shadow-brand/20">
          <Mail size={24} />
          <span className="text-xl font-bold">hello@devtrain.com</span>
        </a>
        <div className="flex items-center justify-center gap-8 p-8 rounded-3xl bg-white border border-brand/5">
          <a href="#" className="text-brand/40 hover:text-accent transition-colors"><Github size={28} /></a>
          <a href="#" className="text-brand/40 hover:text-accent transition-colors"><Linkedin size={28} /></a>
          <a href="#" className="text-brand/40 hover:text-accent transition-colors"><Twitter size={28} /></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-brand/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-brand rounded flex items-center justify-center text-white text-[10px] font-bold">D</div>
      <span className="font-display font-bold text-lg tracking-tight">DevTrain</span>
    </div>
    <p className="text-sm text-brand/40 font-medium">© 2026 DevTrain Portfolio. Built with passion & precision.</p>
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
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

