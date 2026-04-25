import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Mic,
  TrendingUp,
  Sparkles,
  Users,
  Mail,
  MessageCircle,
  CalendarDays,
  Film,
  Home,
  Gamepad2,
  Star,
  Quote,
  X, // <-- Make sure X is imported for the close button
} from "lucide-react";

/* --- HELPER DATA --- */
const projects = [
  {
    id: 1,
    tab: "reels",
    title: "Viral Style tiktok",
    desc: "Fast-paced editing with engaging captions and pattern interrupts.",
    type: "Short-Form",
    videoSrc: "/final siguro.mp4",
  },
  {
    id: 2,
    tab: "meta-ads",
    title: "Vlog Cut",
    desc: "A rhythmic and engaging story of a day-in-the-life.",
    type: "Vlog",
    videoSrc: "/TO POST CLEAN.mp4",
  },
  {
    id: 3,
    tab: "gaming",
    title: "Valorant Highlight Reel",
    desc: "High-energy gameplay focusing on clutch moments and reactions.",
    type: "Gaming",
    videoSrc: "/final siguro.mp4",
  },
  {
    id: 4,
    tab: "reels",
    title: "Call of Duty VOD Edit",
    desc: "Condensing a 4-hour stream into a highly engaging YouTube video.",
    type: "Gaming",
    videoSrc: "/export 1.mp4",
  },
  {
    id: 5,
    tab: "meta-ads",
    title: "Ink & Ebony - E-com Promo",
    desc: "Direct response ad that drove a 3x ROAS for the client.",
    type: "Meta Ads",
    videoSrc: "/meta 1.mp4",
  },
  {
    id: 6,
    tab: "meta-ads",
    title: "Tyrnav Accounting",
    desc: "Brand trust building through visual storytelling.",
    type: "Facebook Ads",
    videoSrc: "/meta 2.mp4",
  },
  {
    id: 7,
    tab: "meta-ads",
    title: "Podcast Highlight Cut",
    desc: "Optimized for TikTok/Reels retention. High-energy hooks.",
    type: "Short-Form",
    videoSrc: "/meta 3.mp4",
  },
  {
    id: 8,
    tab: "podcasts",
    title: "Dialogue Polish",
    desc: "Multi-cam podcast edit focused on perfect audio and dialogue flow.",
    type: "Podcast",
    videoSrc: "/export 1.mp4",
  },
  {
    id: 9,
    tab: "real-estate",
    title: "Luxury Property Tour",
    desc: "Smooth transitions, color grading, and elegant pacing.",
    type: "Real Estate",
    videoSrc: "/final siguro.mp4",
  },
  {
    id: 10,
    tab: "reels",
    title: "Condo Listing Highlight",
    desc: "Sleek presentation designed to capture urban living.",
    type: "Listing",
    videoSrc: "/to post .mp4",
  },
];

const skills = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Master of Retention",
    desc: "Hooks, pacing, and pattern interrupts designed specifically to capture attention.",
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: "Versatile Editing",
    desc: "From high-energy gaming cuts to professional property tours, I adapt to your style.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Story-Driven Ads",
    desc: "I don't just cut clips; I craft narratives that build trust and drive direct response.",
  },
];

const reviews = [
  {
    text: "Justine completely transformed our Meta ad creatives. Our CTR doubled within the first week of running his edits. He just knows what converts.",
    author: "Mark T.",
    role: "E-com Brand Owner",
  },
  {
    text: "The YouTube retention on my Valorant videos went up 15%. His understanding of gaming pacing and pattern interrupts is insane.",
    author: "Sarah J.",
    role: "Creator & Streamer",
  },
  {
    text: "The real estate tours look incredibly premium. The color grading and smooth transitions helped us land three serious buyers in one week.",
    author: "David R.",
    role: "Listing Agent",
  },
  {
    text: "His multi-cam podcast edits are seamless. Dialogue is polished and he finds the perfect clips for social media distribution.",
    author: "Elena G.",
    role: "Podcast Producer",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("reels");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null); // <-- Added state for modal

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    {
      id: "reels",
      label: "Reels & Shorts",
      icon: <Film className="w-4 h-4" />,
    },
    { id: "gaming", label: "Gaming", icon: <Gamepad2 className="w-4 h-4" /> },
    {
      id: "meta-ads",
      label: "Meta/FB Ads",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    { id: "podcasts", label: "Podcasts", icon: <Mic className="w-4 h-4" /> },
    {
      id: "real-estate",
      label: "Real Estate",
      icon: <Home className="w-4 h-4" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-start lg:items-center justify-center p-4 sm:p-6 overflow-x-hidden pt-8 lg:pt-6">
      <div className="ambient-glow-container">
        <div className="glow-orb-1" />
        <div className="glow-orb-2" />
      </div>
      <div className="studio-pattern" />

      <div className="relative z-10 w-full max-w-screen-2xl h-auto lg:h-[85vh] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] bg-[var(--color-studio-card)] flex flex-col lg:flex-row">
        {/* LEFT SIDEBAR */}
        <aside className="w-full lg:w-[420px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 flex flex-col justify-between overflow-y-auto custom-scrollbar relative">
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-8 lg:gap-10">
            <div className="flex items-center gap-4">
              <img
                src="/pass.png"
                alt="Justine Bardinas"
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl object-cover border border-[var(--color-sunset)]/50 shadow-[0_0_15px_rgba(255,87,34,0.2)]"
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-extrabold tracking-tight text-white">
                  Justine Bardinas
                </h1>
                <p className="text-xs lg:text-sm text-[var(--color-sunset)] font-semibold tracking-wide uppercase mt-1">
                  Video Editor
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 lg:mb-4 text-white">
                I edit videos that <br className="hidden sm:block" />
                <span className="text-[var(--color-sunset)]">
                  capture attention.
                </span>
              </h2>
              <p className="text-sm lg:text-base text-[var(--color-text-muted)] leading-relaxed">
                From{" "}
                <span className="font-medium text-gray-100">viral reels</span>,{" "}
                <span className="font-medium text-gray-100">
                  gaming highlights
                </span>
                , and{" "}
                <span className="font-medium text-gray-100">
                  engaging vlogs
                </span>{" "}
                to{" "}
                <span className="font-medium text-gray-100">
                  professional real estate tours
                </span>
                ,{" "}
                <span className="font-medium text-gray-100">
                  long-form podcasts
                </span>
                , and{" "}
                <span className="font-medium text-gray-100">
                  high-converting Meta Ads
                </span>
                . I craft content tailored to your niche.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[10px] lg:text-xs font-bold text-gray-500 tracking-widest uppercase">
                Let's Discuss Your Project
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="mailto:jjbards99@gmail.com"
                  className="flex items-center justify-center gap-2 bg-[var(--color-sunset)] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[var(--color-sunset)]/20 text-sm"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://wa.me/639050259018"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#25D366]/20 text-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </motion.a>
              </div>
            </div>

            <div className="relative h-[220px] lg:h-[210px] z-10 p-4 rounded-xl border border-white/5 bg-black/40">
              <h3 className="text-[10px] lg:text-xs font-bold text-gray-500 tracking-widest uppercase mb-3">
                Client Feedback
              </h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-4 right-4"
                >
                  <div className="flex text-[#FFD700] mb-2 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs lg:text-sm text-gray-300 italic mb-3 leading-relaxed">
                    "{reviews[currentReviewIndex].text}"
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-sunset)]/20 flex items-center justify-center">
                      <Quote className="w-3 h-3 text-[var(--color-sunset)]" />
                    </div>
                    <div>
                      <p className="text-[10px] lg:text-xs font-bold text-white leading-tight">
                        {reviews[currentReviewIndex].author}
                      </p>
                      <p className="text-[9px] lg:text-[10px] text-[var(--color-sunset)]">
                        {reviews[currentReviewIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              <div className="space-y-3 lg:space-y-4">
                <h3 className="text-[10px] lg:text-xs font-bold text-gray-500 tracking-widest uppercase mb-2 lg:mb-3">
                  What I Bring to the Table
                </h3>
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="flex gap-3 lg:gap-4 items-start p-3 lg:p-4 rounded-xl border border-white/5 hover:border-[var(--color-sunset)]/40 hover:bg-white/5 transition-all bg-black/20"
                  >
                    <div className="text-[var(--color-sunset)] shrink-0 mt-0.5">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">
                        {skill.title}
                      </h4>
                      <p className="text-[11px] lg:text-xs text-[var(--color-text-muted)] leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pb-4 lg:pb-0 pt-6 lg:pt-0">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="#YOUR_CONSULTATION_LINK"
                  className="w-full flex items-center justify-center gap-2 border-2 border-[var(--color-sunset)] text-[var(--color-sunset)] font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[var(--color-sunset)]/10 text-sm lg:text-base"
                >
                  <CalendarDays className="w-5 h-5" /> Book a Consultation
                </motion.a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <main className="flex-1 flex flex-col min-w-0 bg-transparent h-[600px] lg:h-auto">
          <div className="overflow-x-auto custom-scrollbar bg-black/10 border-b border-white/5">
            <nav className="flex pt-4 px-4 lg:px-6 gap-1 min-w-max pb-1 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 text-xs lg:text-sm font-bold rounded-t-xl transition-all duration-300 relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-[var(--color-studio-card)] text-white z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
                      : "bg-transparent text-[var(--color-text-muted)] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div
                    className={`${activeTab === tab.id ? "text-[var(--color-sunset)]" : "text-gray-500"}`}
                  >
                    {tab.icon}
                  </div>
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-sunset)] rounded-t-full z-20" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 sm:p-6 lg:p-10 flex-grow overflow-y-auto custom-scrollbar relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 h-full min-h-[400px] content-start"
              >
                {projects
                  .filter((p) => p.tab === activeTab)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="bg-black/20 rounded-2xl border border-white/5 p-5 lg:p-6 flex flex-col justify-between hover:border-[var(--color-sunset)]/50 group transition-all duration-300"
                    >
                      <div className="mb-4 lg:mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-3">
                          <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-[var(--color-sunset)] transition-colors pr-2 leading-tight">
                            {project.title}
                          </h3>
                          <span className="text-[9px] lg:text-[10px] font-bold text-[var(--color-sunset)] bg-[var(--color-sunset)]/10 border border-[var(--color-sunset)]/20 px-2 lg:px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shrink-0">
                            {project.type}
                          </span>
                        </div>
                        <p className="text-xs lg:text-sm text-[var(--color-text-muted)] leading-relaxed">
                          {project.desc}
                        </p>
                      </div>

                      {/* --- UN-CROPPED HOVER & CLICKABLE VIDEO CONTAINER --- */}
                      <div
                        onClick={() => setSelectedVideo(project)} // Opens Modal on click
                        className="w-full h-[250px] sm:h-[350px] rounded-xl bg-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[var(--color-sunset)]/30 transition-colors group cursor-pointer"
                        onMouseEnter={(e) => {
                          const vid = e.currentTarget.querySelector("video");
                          if (vid) vid.play();
                        }}
                        onMouseLeave={(e) => {
                          const vid = e.currentTarget.querySelector("video");
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0; // Resets when mouse leaves
                          }
                        }}
                      >
                        {project.videoSrc ? (
                          <video
                            src={project.videoSrc}
                            className="w-full h-full object-contain pointer-events-none"
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <Play className="w-6 h-6 lg:w-8 lg:h-8 opacity-40 text-gray-600" />
                        )}

                        {/* Play Button Overlay - Hides smoothly on hover */}
                        <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[var(--color-sunset)]/90 shadow-[0_0_20px_rgba(255,87,34,0.4)] flex items-center justify-center pl-1">
                            <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-white text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* --- FULLSCREEN VIDEO MODAL --- */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)} // Click outside to close
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing modal
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[var(--color-sunset)] rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header inside modal */}
              <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none">
                <h3 className="text-white font-bold text-lg lg:text-xl drop-shadow-md">
                  {selectedVideo.title}
                </h3>
              </div>

              {/* Full Uncropped Video Player */}
              <video
                src={selectedVideo.videoSrc}
                className="w-full max-h-[85vh] object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
