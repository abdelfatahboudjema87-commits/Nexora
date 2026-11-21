import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ArrowRight, Sparkles, MessageSquare, Image, Video,
  PenLine, Code2, FileText, Search, AudioLines, Languages, LayoutGrid,
  Plus, Menu, X, ChevronDown, Zap, Clock3, WandSparkles, Crown,
  Settings, CircleHelp, LogOut, PanelLeftClose, Paperclip, Mic,
  Send, Command, ShieldCheck, Check, Stars, Globe2, LockKeyhole
} from "lucide-react";
import "./style.css";

const tools = [
  { name: "AI Chat", desc: "Think, explore and solve problems.", icon: MessageSquare, tag: "POPULAR", color: "violet" },
  { name: "Image Studio", desc: "Turn ideas into striking visuals.", icon: Image, tag: "CREATE", color: "pink" },
  { name: "Video Studio", desc: "Bring stories and concepts to life.", icon: Video, tag: "CREATE", color: "blue" },
  { name: "AI Writer", desc: "Create clear, compelling content.", icon: PenLine, tag: "WRITE", color: "orange" },
  { name: "Code Assistant", desc: "Build, explain and improve code.", icon: Code2, tag: "BUILD", color: "green" },
  { name: "Document AI", desc: "Understand and work with files.", icon: FileText, tag: "ANALYZE", color: "cyan" },
  { name: "Research", desc: "Explore topics and organize insights.", icon: Search, tag: "DISCOVER", color: "purple" },
  { name: "Voice Studio", desc: "Work with speech and audio.", icon: AudioLines, tag: "AUDIO", color: "yellow" },
  { name: "Translator", desc: "Move naturally between languages.", icon: Languages, tag: "LANGUAGE", color: "pink" }
];

function Brand({ compact = false }) {
  return (
    <div className="brand">
      <span className="brand-mark"><span /></span>
      {!compact && <span>NEXORA<span className="brand-dot">.</span></span>}
    </div>
  );
}

/* =========================
   LANDING PAGE
========================= */

function Landing({ onEnter }) {
  return (
    <div className="landing">

      <nav className="top-nav wrap">
        <Brand />

        <div className="nav-links">
          <a href="#platform">Platform</a>
          <a href="#tools">AI Tools</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="nav-actions">
          <button className="text-btn" onClick={() => onEnter()}>
            Sign in
          </button>

          <button className="button button-primary small" onClick={() => onEnter()}>
            Get started <ArrowUpRight size={15} />
          </button>
        </div>
      </nav>

      <main>

        <section className="hero wrap">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="pulse-dot" />
              THE INTELLIGENCE, REIMAGINED
            </div>

            <h1>
              One platform.<br />
              <span className="gradient-text">Limitless</span> intelligence.
            </h1>

            <p className="hero-sub">
              Your creative and intelligent workspace. Explore ideas,
              create content, solve problems and turn possibility into progress.
            </p>

            <div className="hero-buttons">

              <button className="button button-primary" onClick={() => onEnter()}>
                Explore NEXORA <ArrowUpRight size={17} />
              </button>

              <a className="button button-ghost" href="#platform">
                Discover the platform <ArrowRight size={16} />
              </a>

            </div>

            <div className="hero-proof">
              <div className="avatar-stack">
                <i>✦</i><i>✧</i><i>◈</i>
              </div>

              <span>A new space for ambitious minds</span>
              <span className="proof-sep">·</span>
              <span>Built for what's next</span>
            </div>

          </div>

          <div className="hero-art">

            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="orb-core">
              <div className="orb-core-inner">
                <Sparkles size={38} />
              </div>
            </div>

            <div className="float-card card-top">
              <span className="mini-icon">
                <WandSparkles size={15} />
              </span>

              <div>
                <b>Creative intelligence</b>
                <small>Ideas into reality</small>
              </div>

              <span className="live-pill">LIVE</span>
            </div>

            <div className="float-card card-bottom">
              <span className="mini-icon blue">
                <Zap size={15} />
              </span>

              <div>
                <b>One unified workspace</b>
                <small>Everything in one place</small>
              </div>

              <ArrowUpRight size={16} />
            </div>

            <div className="orbit-label label-one">CREATE</div>
            <div className="orbit-label label-two">DISCOVER</div>
            <div className="orbit-label label-three">BUILD</div>

          </div>

        </section>

        <section className="ticker">
          <div className="ticker-track">
            <span>THINK BIGGER</span><b>✳</b>
            <span>CREATE FASTER</span><b>✳</b>
            <span>GO FURTHER</span><b>✳</b>
            <span>THINK BIGGER</span><b>✳</b>
            <span>CREATE FASTER</span><b>✳</b>
            <span>GO FURTHER</span>
          </div>
        </section>

        <section className="section wrap" id="platform">

          <div className="section-heading">

            <div>
              <div className="eyebrow">A NEW WAY TO WORK</div>

              <h2>
                Your ideas deserve<br />
                a <span className="gradient-text">bigger universe.</span>
              </h2>
            </div>

            <p>
              Move seamlessly from a first thought to a finished result.
              NEXORA brings powerful AI experiences together in one focused workspace.
            </p>

          </div>

          <div className="feature-grid">

            <article className="feature-card feature-large">

              <div className="feature-icon">
                <LayoutGrid />
              </div>

              <div>
                <span className="card-kicker">ONE CONNECTED SPACE</span>
                <h3>Everything works<br />better together.</h3>
                <p>A unified home for your conversations, creations and workflows.</p>
              </div>

              <div className="mini-window">
                <div className="mini-window-top">
                  <i /><i /><i />
                </div>

                <div className="mini-window-body">
                  <div className="mini-side" />
                  <div className="mini-content">
                    <span /><span /><span />
                  </div>
                </div>
              </div>

            </article>

            <article className="feature-card">

              <div className="feature-icon blue">
                <Zap />
              </div>

              <span className="card-kicker">MOVE AT YOUR SPEED</span>
              <h3>Less friction.<br />More momentum.</h3>
              <p>Go from question to action without losing your flow.</p>

            </article>

            <article className="feature-card">

              <div className="feature-icon pink">
                <ShieldCheck />
              </div>

              <span className="card-kicker">YOUR WORKSPACE</span>
              <h3>Made for your<br />next big thing.</h3>
              <p>A flexible space that grows with your ideas and ambitions.</p>

            </article>

          </div>

        </section>

        {/* UPDATED AI TOOLS SECTION */}

        <section className="section tools-section" id="tools">

          <div className="wrap">

            <div className="section-heading">

              <div>
                <div className="eyebrow">THE NEXORA TOOLKIT</div>

                <h2>
                  One home. <span className="gradient-text">Many possibilities.</span>
                </h2>
              </div>

              <p>
                Explore a growing collection of AI-powered experiences,
                designed to help you do your best work.
              </p>

            </div>

            <div className="public-tools">

              {tools.slice(0, 6).map((t, i) => (

                <button
                  className="public-tool"
                  key={t.name}
                  type="button"
                  onClick={() => onEnter(t.name)}
                >

                  <div className={`tool-icon ${t.color}`}>
                    <t.icon size={20} />
                  </div>

                  <div>
                    <b>{t.name}</b>
                    <small>{t.desc}</small>
                  </div>

                  <ArrowUpRight size={16} className="muted-arrow" />

                </button>

              ))}

            </div>

          </div>

        </section>

        <section className="pricing-section wrap">

          <div className="pricing-panel">

            <div>

              <div className="eyebrow">SIMPLE BY DESIGN</div>

              <h2>
                Start free.<br />
                <span className="gradient-text">Go further.</span>
              </h2>

              <p>
                Explore NEXORA at your own pace.
                Upgrade when you're ready for more room to create.
              </p>

              <button className="button button-primary" onClick={() => onEnter()}>
                Get started for free <ArrowUpRight size={16} />
              </button>

            </div>

            <div className="price-options">

              <div className="price-row">
                <div>
                  <b>Free</b>
                  <small>For curious minds</small>
                </div>
                <strong>$0<span> / forever</span></strong>
              </div>

              <div className="price-row featured-price">
                <div>
                  <b>Pro <span className="popular-label">POPULAR</span></b>
                  <small>For everyday creators</small>
                </div>
                <strong>$12<span> / month*</span></strong>
              </div>

              <div className="price-row">
                <div>
                  <b>Ultra</b>
                  <small>For power users</small>
                </div>
                <strong>$29<span> / month*</span></strong>
              </div>

              <small className="price-note">
                *Indicative launch pricing. Features and limits will be finalized before paid plans launch.
              </small>

            </div>

          </div>

        </section>

      </main>

      <footer className="footer wrap">

        <Brand />

        <span>© 2026 NEXORA. Built for what's next.</span>

        <div>
          <a href="#platform">Platform</a>
          <a href="#tools">Tools</a>
          <a href="#pricing">Pricing</a>
        </div>

      </footer>

    </div>
  );
}


/* =========================
   DASHBOARD
========================= */

function Dashboard({ onBack, initialActive = "Overview" }) {

  const [active, setActive] = useState(initialActive);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedTool, setSelectedTool] = useState("AI Chat");
  const [notice, setNotice] = useState("");

  const nav = [
    {
      label: "WORKSPACE",
      items: [
        ["Overview", LayoutGrid],
        ["AI Chat", MessageSquare],
        ["Explore tools", Sparkles]
      ]
    },
    {
      label: "YOUR SPACE",
      items: [
        ["History", Clock3],
        ["Favorites", Crown]
      ]
    }
  ];

  const openTool = (name) => {

    setSelectedTool(name);

    setActive(name === "AI Chat" ? "AI Chat" : name);

    setNotice(
      `${name} is part of the NEXORA workspace preview. Live AI connections will be added in the next build phase.`
    );

  };

  const send = () => {

    if (!prompt.trim()) return;

    setMessages([
      ...messages,
      {
        role: "user",
        text: prompt.trim()
      }
    ]);

    setPrompt("");

    setNotice(
      "Demo preview: connect an AI provider in the next build phase to receive live responses."
    );

  };

  return (

    <div className="app-shell">

      <aside className={`sidebar ${mobileMenu ? "mobile-open" : ""}`}>

        <div className="sidebar-brand">

          <Brand />

          <button
            className="icon-btn close-menu"
            onClick={() => setMobileMenu(false)}
          >
            <X size={18} />
          </button>

        </div>

        <button
          className="new-chat"
          onClick={() => {
            setActive("AI Chat");
            setMessages([]);
            setNotice("");
            setMobileMenu(false);
          }}
        >
          <Plus size={16} />
          New conversation
          <span>⌘ K</span>
        </button>

        {nav.map(group => (

          <div className="side-group" key={group.label}>

            <div className="side-label">
              {group.label}
            </div>

            {group.items.map(([name, Icon]) => (

              <button
                key={name}
                className={`side-link ${active === name ? "active" : ""}`}
                onClick={() => {
                  setActive(name);
                  setNotice("");
                  setMobileMenu(false);
                }}
              >

                <Icon size={17} />

                {name}

                {name === "Explore tools" && (
                  <span className="new-tag">NEW</span>
                )}

              </button>

            ))}

          </div>

        ))}

        <div className="sidebar-spacer" />

        <div className="upgrade-card">

          <div className="upgrade-spark">
            <Sparkles size={17} />
          </div>

          <b>Unlock more with Pro</b>

          <p>More room for your ideas and creations.</p>

          <button
            onClick={() =>
              setNotice("Plans are in preview. Subscription checkout will be added in a later release.")
            }
          >
            Explore plans <ArrowUpRight size={14} />
          </button>

        </div>

        <button className="profile-row">

          <div className="profile-avatar">N</div>

          <div>
            <b>Guest workspace</b>
            <small>Free plan · Preview</small>
          </div>

          <ChevronDown size={15} />

        </button>

      </aside>


      <main className="app-main">

        <header className="app-topbar">

          <button
            className="icon-btn mobile-menu-btn"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={19} />
          </button>

          <div className="breadcrumb">
            <span>Workspace</span>
            <span>/</span>
            <b>{active}</b>
          </div>

          <div className="topbar-right">

            <span className="preview-badge">
              <span /> PREVIEW
            </span>

            <button className="icon-btn">
              <CircleHelp size={18} />
            </button>

            <button className="icon-btn">
              <Settings size={18} />
            </button>

            <div className="profile-avatar small-avatar">N</div>

          </div>

        </header>


        <div className="dashboard-content">

          {notice && (

            <div className="notice">

              <Sparkles size={16} />

              <span>{notice}</span>

              <button onClick={() => setNotice("")}>
                <X size={15} />
              </button>

            </div>

          )}


          {/* AI CHAT PAGE */}

          {active === "AI Chat" ? (

            <div className="chat-page">

              <div className="chat-title">

                <div className="eyebrow">
                  NEXORA INTELLIGENCE
                </div>

                <h1>
                  What can we <span className="gradient-text">explore?</span>
                </h1>

                <p>
                  A new perspective starts with a question.
                </p>

              </div>


              <div className="chat-messages">

                {messages.map((m, i) => (

                  <div
                    className={`chat-message ${m.role}`}
                    key={i}
                  >

                    <div className="message-avatar">
                      {m.role === "user"
                        ? "N"
                        : <Sparkles size={15} />
                      }
                    </div>

                    <div>{m.text}</div>

                  </div>

                ))}

              </div>


              <div className="chat-composer">

                <textarea
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder="Ask anything, explore an idea, or start creating..."
                  rows="2"
                />

                <div className="composer-bottom">

                  <div>

                    <button className="composer-tool">
                      <Paperclip size={15} /> Attach
                    </button>

                    <button className="composer-tool">
                      <WandSparkles size={15} /> Enhance
                    </button>

                  </div>

                  <button
                    className="send-btn"
                    onClick={send}
                    disabled={!prompt.trim()}
                  >
                    <ArrowUpRight size={18} />
                  </button>

                </div>

              </div>


              <div className="disclaimer">
                NEXORA preview · AI responses will be enabled when a model provider is connected.
              </div>

            </div>

          ) : (

            <>

              <div className="welcome-row">

                <div>

                  <div className="eyebrow">
                    THURSDAY, NOVEMBER 20, 2026
                  </div>

                  <h1>

                    {active === "Overview"
                      ? "Your space to"
                      : active === "Explore tools"
                        ? "Find your next"
                        : "Welcome to"
                    }

                    {" "}

                    <span className="gradient-text">

                      {active === "Overview"
                        ? "think bigger."
                        : active === "Explore tools"
                          ? "possibility."
                          : active.toLowerCase() + "."
                      }

                    </span>

                  </h1>

                  <p>
                    What would you like to make possible today?
                  </p>

                </div>

                <button
                  className="button button-primary"
                  onClick={() => {
                    setActive("AI Chat");
                    setNotice("");
                  }}
                >
                  <Plus size={16} />
                  New conversation
                </button>

              </div>


              {active === "Overview" && (

                <div className="stats-grid">

                  <div className="stat-card">

                    <div className="stat-icon">
                      <Zap size={17} />
                    </div>

                    <small>YOUR PLAN</small>

                    <strong>
                      Free <span className="stat-pill">ACTIVE</span>
                    </strong>

                    <p>You're on the starting line.</p>

                  </div>


                  <div className="stat-card">

                    <div className="stat-icon blue">
                      <Sparkles size={17} />
                    </div>

                    <small>WORKSPACE</small>

                    <strong>Ready to explore</strong>

                    <p>Your creative space awaits.</p>

                  </div>


                  <div className="stat-card">

                    <div className="stat-icon pink">
                      <Clock3 size={17} />
                    </div>

                    <small>RECENT ACTIVITY</small>

                    <strong>{messages.length} sessions</strong>

                    <p>Your journey starts here.</p>

                  </div>

                </div>

              )}


              <div className="content-section-head">

                <div>
                  <h2>
                    {active === "Overview"
                      ? "Explore your tools"
                      : active
                    }
                  </h2>

                  <p>
                    Powerful experiences, one connected workspace.
                  </p>
                </div>

                <button
                  className="view-all"
                  onClick={() => setActive("Explore tools")}
                >
                  View all <ArrowRight size={15} />
                </button>

              </div>


              <div className="tool-grid">

                {tools.map(t => (

                  <button
                    className="tool-card"
                    key={t.name}
                    onClick={() => openTool(t.name)}
                  >

                    <div className={`tool-icon ${t.color}`}>
                      <t.icon size={20} />
                    </div>

                    <div className="tool-card-arrow">
                      <ArrowUpRight size={16} />
                    </div>

                    <b>{t.name}</b>

                    <p>{t.desc}</p>

                    <span className="tool-tag">
                      {t.tag}
                    </span>

                  </button>

                ))}

              </div>


              <div className="bottom-promo">

                <div className="promo-symbol">
                  <Stars size={22} />
                </div>

                <div>
                  <b>Big ideas start somewhere.</b>
                  <p>
                    Choose a tool and make your next move with NEXORA.
                  </p>
                </div>

                <button onClick={() => setActive("AI Chat")}>
                  Start exploring <ArrowRight size={15} />
                </button>

              </div>

            </>

          )}

        </div>

      </main>

    </div>

  );

}


/* =========================
   MAIN APP
========================= */

function App() {

  const [inApp, setInApp] = useState(false);

  const [initialTool, setInitialTool] = useState("Overview");

  const enterApp = (tool = "Overview") => {

    setInitialTool(tool);

    setInApp(true);

  };

  return inApp ? (

    <Dashboard
      initialActive={initialTool}
      onBack={() => setInApp(false)}
    />

  ) : (

    <Landing onEnter={enterApp} />

  );

}


createRoot(document.getElementById("root")).render(<App />);
