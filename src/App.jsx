import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
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
  X,
} from "lucide-react";

/* --- HELPER DATA --- */
const projects = [
  {
    id: 1,
    tab: "reels",
    title: "Real Estate Showcase",
    desc: "Fast-paced property tour with engaging captions and pattern interrupts.",
    type: "Real Estate",
    videoSrc: "/Reel1 realestate.mp4",
  },
  {
    id: 14,
    tab: "reels",
    title: "AI OFM Strategies",
    desc: "Latest client work for Grayson Giles breaking down AI OFM concepts with high-retention editing.",
    type: "Personal Brand",
    videoSrc: "/Reel4 OFM.mp4",
  },
  {
    id: 15,
    tab: "reels",
    title: "IG Growth Hook",
    desc: "Dynamic Instagram reel leveraging trending pacing and visual hooks to maximize algorithm reach.",
    type: "Instagram Reel",
    videoSrc: "/Reel5 IG.mp4",
  },
  {
    id: 2,
    tab: "meta-ads",
    title: "Raki Yata Restaurant Promo",
    desc: "Mouth-watering promotional video designed to drive foot traffic for a premium Japanese restaurant.",
    type: "Promo Ad",
    videoSrc: "/meta 4.mp4",
  },
  {
    id: 4,
    tab: "reels",
    title: "Airbnb Listing Highlight",
    desc: "Aesthetic and inviting short-form video designed to boost bookings and showcase amenities.",
    type: "Listing Promo",
    videoSrc: "/Reel2 Airbnb.mp4",
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
    title: "KeffordConsulting Promo Ad",
    desc: "High-converting ad for a US-based agency specializing in brand sales and talent acquisition.",
    type: "B2B Ad",
    videoSrc: "/meta 3.mp4",
  },
  {
    id: 8,
    tab: "podcasts",
    title: "Clockwise Crypto Sponsorship",
    desc: "High-retention sponsorship integration crafted for a massive YouTube audience of 423k+ subscribers.",
    type: "YouTube Sponsor",
    videoSrc: "/Pod1.mp4",
  },
  {
    id: 9,
    tab: "podcasts",
    title: "Clockwise Crypto Ad Read",
    desc: "Polished and engaging crypto sponsorship edit tailored for a channel with over 423,000 subscribers.",
    type: "YouTube Sponsor",
    videoSrc: "/Pod2.mp4",
  },
  {
    id: 10,
    tab: "reels",
    title: "Doctor Spotlight Reel",
    desc: "Professional short-form content designed to build authority and trust for medical practitioners.",
    type: "Personal Brand",
    videoSrc: "/Reel3 Doctor.mp4",
  },
  {
    id: 11,
    tab: "gaming",
    title: "Roblox Funny Moments",
    desc: "High-energy gameplay edit loaded with sound effects, zoom-ins, and fast pacing to maximize viewer retention.",
    type: "Gaming Playthrough",
    videoSrc: "/Game1 Roblox.mp4",
  },
  {
    id: 12,
    tab: "gaming",
    title: "Roblox Highlight Cut",
    desc: "Engaging and fast-paced gaming montage tailored perfectly for younger audiences and high replay value.",
    type: "Gaming Highlight",
    videoSrc: "/Game2 Roblox.mp4",
  },
  {
    id: 13,
    tab: "real-estate",
    title: "Premium Property Tour (Style Reference)",
    desc: "A visual benchmark demonstrating the high-end pacing, color grading, and elegant aesthetic I target for real estate clients.",
    type: "Style Reference",
    videoSrc: "/Realestate1 Reference.mp4",
  },
  {
    id: 14,
    tab: "meta-ads",
    title: "Amazon Product Ad — Revenue Driver",
    desc: "High-converting Meta ad for an Amazon seller, helping boost product revenue by thousands through sharp visual storytelling.",
    type: "E-commerce Ad",
    videoSrc: "/meta 5.mp4",
  },
  {
    id: 15,
    tab: "meta-ads",
    title: "Amazon Product Ad — Scroll-Stopping Hook",
    desc: "Fast-hook Meta ad built for an Amazon brand, designed to stop the scroll and convert cold traffic into buyers.",
    type: "E-commerce Ad",
    videoSrc: "/meta 6.mp4",
  },
  {
    id: 16,
    tab: "meta-ads",
    title: "Amazon Product Ad — Conversion Focused",
    desc: "Direct-response edit for an Amazon product line, crafted to maximize add-to-carts and drive measurable revenue growth.",
    type: "E-commerce Ad",
    videoSrc: "/meta 7.mp4",
  },
  {
    id: 17,
    tab: "meta-ads",
    title: "Amazon Product Ad — Brand Trust Builder",
    desc: "Polished Meta ad for the same Amazon client, reinforcing brand trust while pushing product sales at scale.",
    type: "E-commerce Ad",
    videoSrc: "/meta 8.mp4",
  },
  {
    id: 18,
    tab: "reels",
    title: "Documentary Highlight Cut",
    desc: "Recent long-form documentary re-edited into a tight highlight reel, keeping only the most powerful and engaging moments.",
    type: "Documentary Edit",
    videoSrc: "/Reel6 Docu.mp4",
  },
  {
    id: 19,
    tab: "meta-ads",
    title: "Amazon Product Ad — AI Generated",
    desc: "High-converting AI-generated Meta ad crafted to stop the scroll and drive targeted e-commerce sales.",
    type: "E-commerce Ad",
    videoSrc: "/meta 9.mp4",
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
    text: "Justine's editing on my AI OFM reels has been top-tier. He understands exactly how to pace the videos to keep the audience hooked and drive conversions.",
    author: "Grayson Giles",
    role: "@graysongiles9",
  },
  {
    text: "The sponsorship edits for Clockwise Crypto have been flawless. Keeping a 423k+ subscriber audience engaged during an ad read is tough, but his retention strategies are spot on.",
    author: "Production Team",
    role: "Clockwise Crypto",
  },
  {
    text: "The promo video he cut for Raki Yata was incredible. The visuals were mouth-watering and it genuinely drove a noticeable increase in our restaurant's foot traffic!",
    author: "Marketing Manager",
    role: "Raki Yata Restaurant",
  },
  {
    text: "Justine delivered a high-converting B2B ad for KeffordConsulting. His visual storytelling builds instant brand trust, which is exactly what we need for talent acquisition.",
    author: "Operations Director",
    role: "KeffordConsulting",
  },
  {
    text: "Our Airbnb listing bookings jumped right after we uploaded his highlight reel. The smooth transitions and aesthetic pacing perfectly captured the vibe of the space.",
    author: "Marcus L.",
    role: "Airbnb Superhost",
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("reels");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

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
      label: "AI Ads/Meta Ads",
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
                  href="https://calendly.com/jjbards99/new-meeting"
                  className="w-full flex items-center justify-center gap-2 border-2 border-[var(--color-sunset)] text-[var(--color-sunset)] font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[var(--color-sunset)]/10 text-sm lg:text-base"
                >
                  <CalendarDays className="w-5 h-5" /> Book a Consultation
                </motion.a>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <main className="flex-1 flex flex-col min-w-0 bg-transparent h-[600px] lg:h-auto relative">
          {/* TABS CONTAINER */}
          <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="overflow-x-auto custom-scrollbar">
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
                  .sort((a, b) => b.id - a.id)
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
                        onClick={() => setSelectedVideo(project)}
                        className="w-full h-[250px] sm:h-[350px] rounded-xl bg-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-[var(--color-sunset)]/30 transition-colors group cursor-pointer"
                        onMouseEnter={(e) => {
                          const vid = e.currentTarget.querySelector("video");
                          if (vid) vid.play();
                        }}
                        onMouseLeave={(e) => {
                          const vid = e.currentTarget.querySelector("video");
                          if (vid) {
                            vid.pause();
                            vid.currentTime = 0;
                          }
                        }}
                      >
                        {project.videoSrc ? (
                          <video
                            src={project.videoSrc.replace(/#/g, "%23")}
                            className="w-full h-full object-contain pointer-events-none"
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <Play className="w-6 h-6 lg:w-8 lg:h-8 opacity-40 text-gray-600" />
                        )}

                        {/* Play Button Overlay */}
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
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
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
                src={selectedVideo.videoSrc.replace(/#/g, "%23")}
                className="w-full max-h-[85vh] object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}
