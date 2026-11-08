import { FormEvent, ReactNode, useEffect, useState } from "react";

type Page =
  | "dashboard"
  | "caveman-ancient-medicine"
  | "medieval-medicine"
  | "renaissance-breakthroughs"
  | "germ-theory"
  | "historical-breakthroughs"
  | "modern-medicine-technology"
  | "youth-child-health"
  | "myths-mistakes-remedies"
  | "neurodevelopment-disorders"
  | "get-involved";
type IconName =
  | "activity"
  | "arrow"
  | "book"
  | "calendar"
  | "check"
  | "clock"
  | "heart"
  | "home"
  | "leaf"
  | "lock"
  | "mail"
  | "menu"
  | "pill"
  | "shield"
  | "stethoscope"
  | "user"
  | "water"
  | "x";

const icons: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2-7 4 14 2-7h6" /></>,
  arrow: <><path d="m9 18 6-6-6-6" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" /></>,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-7h6v7" /></>,
  leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5.5 18.2 3 19 2c.7 7.4-2.3 15.3-8 18Z" /><path d="M2 21c0-3 1.9-5.6 5-7" /></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  pill: <><path d="m10.5 20.5 10-10a5 5 0 0 0-7-7l-10 10a5 5 0 0 0 7 7Z" /><path d="m8.5 8.5 7 7" /></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
  stethoscope: <>
    <path d="M6 3v7a6 6 0 0 0 12 0V3" />
    <path d="M6 7h12" />
    <path d="M10 18a2 2 0 0 1-2-2v-3" />
    <path d="M14 18a2 2 0 0 0 2-2v-3" />
    <path d="M10 11h4" />
    <circle cx="12" cy="18" r="3" />
  </>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  water: <><path d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${light ? "text-white" : "text-[#15372f]"}`}>
      <span className={`brand-mark ${light ? "brand-mark-light" : ""}`}>
        <Icon name="stethoscope" size={21} />
      </span>
      <span className="font-serif text-[22px] font-semibold tracking-[-0.02em]">Medical Time Machine</span>
    </div>
  );
}

function formatCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const suffix = day % 100 >= 11 && day % 100 <= 13
    ? "th"
    : ({ 1: "st", 2: "nd", 3: "rd" }[day % 10] ?? "th");
  const month = date.toLocaleDateString("en", { month: "long" });

  return `${date.toLocaleDateString("en", { weekday: "long" })}, ${day}${suffix} of ${month}`;
}

function Login({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    onLogin();
  }

  return (
    <main className="min-h-screen bg-[#f6f4ef] lg:grid lg:grid-cols-[1.08fr_0.92fr]">
      <section className="relative hidden overflow-hidden bg-[#143c32] p-12 text-white lg:flex lg:flex-col">
        <div className="absolute -left-36 bottom-[-260px] h-[560px] w-[560px] rounded-full border border-white/10" />
        <div className="absolute -left-20 bottom-[-200px] h-[420px] w-[420px] rounded-full border border-white/10" />
        <Brand light />
        <div className="relative my-auto max-w-[610px] px-[5%]">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d9f29c] text-[#173a31]">
            <Icon name="stethoscope" size={30} />
          </div>
          <h1 className="font-serif text-6xl leading-[1.07] tracking-[-0.04em]">
            Discover now
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#c7d9d2]">
            Unlock the stories behind medicine&apos;s greatest discoveries. Sign in to explore the people, practices and breakthroughs that changed healthcare throughout history.
          </p>
        </div>
        <div className="relative flex items-center gap-3 text-sm text-[#abc5bc]">
          <Icon name="shield" size={18} />
          <span>Information on this website is trusted.</span>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-12">
        <div className="w-full max-w-[460px]">
          <div className="mb-12 lg:hidden"><Brand /></div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6b857c]">Welcome back</p>
          <h2 className="font-serif text-[42px] leading-tight text-[#14372f] sm:text-5xl">Sign in to learn more</h2>
          <p className="mt-4 text-[#66756f]">Access useful material on the history of medicine.</p>

          <form onSubmit={submit} className="mt-10 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#29453d]">Email address</span>
              <span className="input-shell">
                <Icon name="mail" size={19} />
                <input required type="email" placeholder="you@example.com" defaultValue="alex@medora.health" />
              </span>
            </label>
            <label className="block">
              <span className="mb-2 flex items-center justify-between text-sm font-semibold text-[#29453d]">
                <span>Password</span>
                <button type="button" className="text-[#357565] hover:underline">Forgot password?</button>
              </span>
              <span className="input-shell">
                <Icon name="lock" size={19} />
                <input required type={showPassword ? "text" : "password"} defaultValue="medorahealth" />
                <button
                  type="button"
                  className="text-xs font-bold uppercase tracking-wider text-[#608077]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </span>
            </label>
            <button className="primary-button mt-2 w-full" type="submit">
              Sign in <Icon name="arrow" size={18} />
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-[#728079]">
            New to Medical Time Machine? <button className="font-semibold text-[#256554] hover:underline">Create an account</button>
          </p>
          <p className="mt-12 text-center text-xs leading-5 text-[#87928e]">
            For educational purposes only. Always consult a qualified healthcare professional for medical advice.
          </p>
        </div>
      </section>
    </main>
  );
}

const navItems: { page: Page; label: string; icon: IconName }[] = [
  { page: "dashboard", label: "Overview", icon: "home" },
  { page: "caveman-ancient-medicine", label: "Caveman & Ancient Medicine", icon: "book" },
  { page: "medieval-medicine", label: "Medieval Medicine", icon: "book" },
  { page: "renaissance-breakthroughs", label: "Renaissance Breakthroughs", icon: "activity" },
  { page: "germ-theory", label: "Germ Theory", icon: "shield" },
  { page: "historical-breakthroughs", label: "Historical breakthroughs", icon: "book" },
  { page: "modern-medicine-technology", label: "Modern Medicine and Technology", icon: "pill" },
  { page: "youth-child-health", label: "Youth/Child health today", icon: "heart" },
  { page: "myths-mistakes-remedies", label: "Myths, mistakes and weird remedies", icon: "activity" },
  { page: "neurodevelopment-disorders", label: "Neurodevelopment disorders in youth/children", icon: "user" },
  { page: "get-involved", label: "Get involved", icon: "arrow" },
];

function Shell({
  page,
  setPage,
  onLogout,
  children,
}: {
  page: Page;
  setPage: (page: Page) => void;
  onLogout: () => void;
  children: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [todayLabel, setTodayLabel] = useState(formatCurrentDate);

  useEffect(() => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    const timeoutId = window.setTimeout(
      () => setTodayLabel(formatCurrentDate()),
      nextMidnight.getTime() - now.getTime(),
    );

    return () => window.clearTimeout(timeoutId);
  }, [todayLabel]);

  return (
    <div className="min-h-screen bg-[#f4f5f0] text-[#193b32]">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="flex items-center justify-between">
          <Brand light />
          <button className="text-white/70 lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon name="x" />
          </button>
        </div>
        <nav className="mt-6 min-h-0 flex-1 space-y-2 overflow-y-auto">
          <p className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Medicine history</p>
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setPage(item.page); setMenuOpen(false); }}
              className={`nav-item whitespace-normal leading-5 ${page === item.page ? "nav-item-active" : ""}`}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-white/[0.07] p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7efa0] font-serif font-bold text-[#173c32]">AM</div>
            <div>
              <p className="text-sm font-semibold text-white">Alex Morgan</p>
              <p className="text-xs text-white/50">Personal account</p>
            </div>
          </div>
          <button onClick={onLogout} className="text-xs font-semibold text-white/60 transition hover:text-white">Sign out</button>
        </div>
      </aside>
      {menuOpen && <button className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu" />}
      <div className="lg:pl-[270px]">
        <header className="flex h-20 items-center justify-between border-b border-[#dce2dc] bg-[#f8f8f4]/90 px-5 backdrop-blur sm:px-9">
          <button className="text-[#244d42] lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Icon name="menu" size={25} />
          </button>
          <p className="hidden text-sm text-[#64776f] sm:block">{todayLabel}</p>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">Alex Morgan</p>
              <p className="text-xs text-[#77877f]">Member since 2024</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce8de] text-sm font-bold">AM</div>
          </div>
        </header>
        <main className="mx-auto max-w-[1250px] p-5 sm:p-9 lg:p-10">{children}</main>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <article className="content-card">
      <div className="card-heading">
        <div><p className="eyebrow">Explore history</p><h2 className="section-title">Medicine through the ages</h2></div>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Caveman & Ancient Medicine",
          "Medieval Medicine",
          "Renaissance Breakthroughs",
          "Germ Theory",
          "Historical breakthroughs",
          "Modern Medicine and Technology",
          "Youth/Child health today",
          "Myths, mistakes and weird remedies",
          "Neurodevelopment disorders in youth/children",
          "Get involved",
        ].map((topic) => (
          <li key={topic} className="flex items-start gap-3 rounded-xl border border-[#e1e7e1] px-3.5 py-3 text-sm font-semibold leading-5 text-[#345247]">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#89a957]" />
            {topic}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Medications() {
  const safety = [
    ["Small molecules", "Compact chemical compounds can enter cells and interact with proteins, enzymes, or receptors inside the body."],
    ["Biologic medicines", "Larger, complex medicines—such as antibodies and proteins—are commonly produced using living cells."],
    ["Vaccines", "Vaccines train the immune system to recognize a specific threat before it causes serious disease."],
    ["Gene and cell therapies", "Newer approaches may add genetic instructions or modify cells to address the source of a condition."],
  ];
  return (
    <>
      <section className="page-hero">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow !text-[#a8cbbb]">The science of medicine</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">How medicines work in the body.</h1>
          <p className="mt-5 max-w-xl leading-7 text-[#c7d9d1]">Medicines use many different biological pathways to prevent disease, relieve symptoms, or address an underlying cause.</p>
        </div>
        <div className="hero-symbol"><Icon name="pill" size={52} /></div>
      </section>

      <section className="mt-8 grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
        <article className="content-card">
          <p className="eyebrow">Major categories</p>
          <h2 className="section-title mt-2">Different forms of modern medicine</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {safety.map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-[#e1e7e1] p-5">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e5eed5] text-sm font-bold text-[#345947]">0{index + 1}</div>
                <h3 className="font-serif text-xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
              </div>
            ))}
          </div>
        </article>
        <aside className="space-y-6">
          <article className="content-card border-l-4 border-l-[#c6dc82]">
            <Icon name="shield" size={26} />
            <h3 className="mt-4 font-serif text-2xl">Targets and receptors</h3>
            <p className="mt-3 text-sm leading-6 text-[#62736b]">Many medicines work by binding to a precise biological target, much like a key fitting a lock.</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#62736b]">
              <li><strong>Agonists</strong> activate a receptor.</li>
              <li><strong>Antagonists</strong> block a receptor.</li>
              <li><strong>Enzyme inhibitors</strong> slow a chemical reaction.</li>
            </ul>
          </article>
          <article className="rounded-3xl bg-[#eee6d7] p-7">
            <p className="text-sm font-bold text-[#365c4e]">The dose matters</p>
            <p className="mt-2 text-sm leading-6 text-[#69766f]">Pharmacology studies how a medicine moves through the body and how its concentration influences both intended effects and side effects.</p>
          </article>
        </aside>
      </section>
      <p className="medical-note">This overview simplifies complex areas of pharmacology and is provided for general education.</p>
    </>
  );
}

function Wellness() {
  const ranges = [
    { label: "Discovery", value: "Researchers identify a biological target", color: "bg-[#5f8962]" },
    { label: "Preclinical research", value: "Candidates are studied in laboratories", color: "bg-[#89a957]" },
    { label: "Clinical trials", value: "Safety and effectiveness are evaluated", color: "bg-[#c2a84f]" },
    { label: "Regulatory review", value: "Independent experts review the evidence", color: "bg-[#cc7e48]" },
  ];
  return (
    <>
      <section className="mb-10 max-w-3xl">
        <p className="eyebrow">Medicine development · Research</p>
        <h1 className="page-title mt-3">From scientific idea to approved medicine</h1>
        <p className="mt-5 text-lg leading-8 text-[#64766e]">Developing a medicine is a long, evidence-led process. Researchers test each candidate in stages to understand its quality, safety, and effectiveness.</p>
      </section>

      <section className="grid gap-7 lg:grid-cols-[1fr_0.85fr]">
        <article className="content-card">
          <h2 className="section-title">The development pathway</h2>
          <p className="mt-4 leading-7 text-[#65766e]">
            Before a medicine reaches a pharmacy, scientists gather extensive evidence. Only a small fraction of early candidates complete every stage, and monitoring continues after approval.
          </p>
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#dfe5df]">
            {ranges.map((range) => (
              <div key={range.label} className="grid grid-cols-[1fr_1.2fr] items-center border-b border-[#e5eae5] px-5 py-4 last:border-0">
                <span className="flex items-center gap-3 text-sm font-semibold"><i className={`h-2.5 w-2.5 rounded-full ${range.color}`} />{range.label}</span>
                <span className="text-sm text-[#65756e]">{range.value}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-3xl bg-[#173f35] p-7 text-white sm:p-9">
          <span className="icon-box bg-white/10 text-[#d6eca2]"><Icon name="heart" /></span>
          <h2 className="mt-6 font-serif text-3xl">Three phases of clinical trials</h2>
          <div className="mt-6 space-y-5">
            {[
              ["Phase I", "A small group helps researchers study safety and dosage."],
              ["Phase II", "Researchers explore effectiveness and common side effects."],
              ["Phase III", "Larger groups provide evidence about benefits and risks."],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-3 border-t border-white/10 pt-5 first:border-0 first:pt-0">
                <span className="mt-0.5 text-[#d6eca2]"><Icon name="check" size={18} /></span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/60">{text}</p></div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="content-card mt-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow">After approval</p>
          <h2 className="mt-2 font-serif text-2xl">Safety monitoring never stops</h2>
          <p className="mt-2 text-sm text-[#697970]">Researchers and regulators continue reviewing real-world reports to identify rare or long-term effects.</p>
        </div>
        <button className="secondary-button shrink-0"><Icon name="book" size={18} /> Explore trial phases</button>
      </section>
      <p className="medical-note">Development pathways and regulatory requirements vary by medicine type and country. This page presents a general overview.</p>
    </>
  );
}

type HistoryTopicPageId = Exclude<Page, "dashboard" | "historical-breakthroughs" | "modern-medicine-technology">;

const historyTopicDetails: Record<HistoryTopicPageId, { title: string; description: string }> = {
  "caveman-ancient-medicine": {
    title: "Caveman & Ancient Medicine",
    description: "Explore how early communities used observation, plants, tools, and shared knowledge to care for illness and injury.",
  },
  "medieval-medicine": {
    title: "Medieval Medicine",
    description: "Learn how medical care in the medieval world was shaped by tradition, religious institutions, trade, and emerging medical texts.",
  },
  "renaissance-breakthroughs": {
    title: "Renaissance Breakthroughs",
    description: "Discover how renewed study of anatomy, observation, and experimentation began to reshape medical understanding.",
  },
  "germ-theory": {
    title: "Germ Theory",
    description: "Follow the evidence that connected microorganisms with disease and changed hygiene, surgery, and public health.",
  },
  "youth-child-health": {
    title: "Youth/Child health today",
    description: "Explore how pediatrics, prevention, and age-appropriate care support the health and development of children and young people.",
  },
  "myths-mistakes-remedies": {
    title: "Myths, mistakes and weird remedies",
    description: "Take a critical look at unusual historical treatments and how evidence has helped medicine learn from past mistakes.",
  },
  "neurodevelopment-disorders": {
    title: "Neurodevelopment disorders in youth/children",
    description: "Learn about neurodevelopmental conditions in children and young people, including the importance of respectful language and qualified professional support.",
  },
  "get-involved": {
    title: "Get involved",
    description: "Help share the history of medicine by exploring reliable sources, asking questions, and contributing ideas for future topics.",
  },
};

function HistoryTopicPage({ page }: { page: HistoryTopicPageId }) {
  const { title, description } = historyTopicDetails[page];

  return (
    <>
      <section className="mb-8 max-w-3xl">
        <p className="eyebrow">History of medicine</p>
        <h1 className="page-title mt-3">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-[#64766e]">{description}</p>
      </section>
      {page === "caveman-ancient-medicine" ? (
        <AncientMedicineContent />
      ) : page === "medieval-medicine" ? (
        <MedievalMedicineContent />
      ) : (
        <article className="content-card max-w-3xl">
          <span className="icon-box bg-[#e2edce] text-[#375743]"><Icon name="book" /></span>
          <h2 className="mt-5 font-serif text-2xl">Explore this topic</h2>
          <p className="mt-3 text-sm leading-6 text-[#687870]">
            This section introduces key ideas and milestones. Historical accounts can vary, so consult trusted educational and health sources for more detail.
          </p>
        </article>
      )}
    </>
  );
}

function MedievalMedicineContent() {
  const plagueTreatments = [
    ["Herbal mixtures", "Plants and herbs were used in attempts to treat the illness."],
    ["Bloodletting", "Doctors removed blood because they believed illness came from an imbalance in the body’s four humours."],
    ["Sweet-smelling herbs", "People carried fragrant plants, believing pleasant smells could protect them from disease."],
  ];
  const beliefs = [
    ["Witches and magic", "Some people attributed illness to witchcraft, evil spirits, or punishment from God. Accusations of using magic could put people at risk."],
    ["Old wives’ tales", "Traditional remedies passed through generations varied: some, such as honey on wounds, had useful properties, while others were ineffective."],
    ["Astrology", "Some doctors consulted the positions of planets and stars to choose when to carry out treatments or procedures."],
    ["Religious beliefs", "People prayed to saints, visited shrines, sought help from priests, and took part in religious activities for healing or protection."],
    ["The four humours", "Doctors believed health depended on balancing blood, phlegm, yellow bile, and black bile. This idea influenced treatments such as bloodletting."],
  ];
  const barberSurgeonProcedures = [
    "Pulling out teeth.",
    "Treating wounds and injuries.",
    "Setting broken bones.",
    "Performing bloodletting.",
    "Carrying out amputations in some cases.",
  ];
  const comparison = [
    ["Understanding of the body", "Four humours theory", "Scientific understanding of the human body"],
    ["Treatments", "Herbal mixtures and traditional remedies", "Tested medicines and treatments"],
    ["Medical decisions", "Astrology could influence decisions", "Decisions guided by scientific evidence"],
    ["Treating illness", "Bloodletting used for many conditions", "Evidence-based treatments"],
    ["Infection", "Limited understanding of infection", "Knowledge of bacteria, viruses, and germs"],
    ["Surgery", "Basic surgery without modern anaesthesia", "Advanced surgery with anaesthesia and sterilisation"],
  ];

  return (
    <div className="grid gap-5">
      <article className="content-card">
        <p className="eyebrow">Medicine in the Middle Ages</p>
        <h2 className="mt-2 font-serif text-2xl">How Did People Understand and Treat Illness in the Middle Ages?</h2>
        <p className="mt-4 text-sm leading-7 text-[#687870]">
          Medical knowledge was limited, and people had little understanding of how diseases spread. Without modern science, antibiotics, or effective treatments, they relied on traditional remedies, religious beliefs, and local healers.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          The Black Death, beliefs about illness, and the work of barber-surgeons were important parts of medieval medicine.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">The plague</p>
        <h2 className="section-title mt-2">The Black Death</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          The Black Death was one of history’s most devastating pandemics. It spread across Europe between 1347 and 1351, killing approximately one-third to one-half of Europe’s population and transforming communities across the continent.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Causes and spread</p>
        <h2 className="section-title mt-2">What Caused the Black Death?</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          The plague is caused by the bacterium <em>Yersinia pestis</em>. It can spread through infected fleas, often carried by rodents. Pneumonic plague can also spread between people through respiratory droplets.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Limits of medieval knowledge</p>
        <h2 className="section-title mt-2">Why Couldn’t Medieval Doctors Stop It?</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          Medieval doctors did not know about bacteria or germs, so they could not identify the cause of plague or understand how infection spread. As a result, they had few effective ways to prevent it.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Historical treatments</p>
        <h2 className="section-title mt-2">What Treatments Were Used?</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {plagueTreatments.map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-[#687870]">
          These practices did not reliably cure plague because they did not target the bacterial infection.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Beliefs and explanations</p>
        <h2 className="section-title mt-2">Superstitions, Traditions, and Religion</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          Without scientific explanations for disease, superstition, religion, and traditional beliefs shaped how many people understood and responded to illness.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {beliefs.map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">Medical practitioners</p>
        <h2 className="section-title mt-2">Barber-Surgeons</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          Barber-surgeons combined hairdressing with practical medical procedures. They provided care, especially where physicians were unavailable or unaffordable, and handled sharp instruments for minor operations and treatments.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {barberSurgeonProcedures.map((procedure) => (
            <div key={procedure} className="rounded-xl border border-[#e1e7e1] bg-[#fafbf8] p-4 text-sm leading-6 text-[#687870]">{procedure}</div>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">A familiar symbol</p>
        <h2 className="section-title mt-2">The Barber’s Pole</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          The traditional barber’s pole recalls the connection between barbering and procedures such as bloodletting. Red is traditionally associated with blood, and white with bandages.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Surgical risks</p>
        <h2 className="section-title mt-2">What Were the Limitations of Surgery?</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ["Pain", "Modern anaesthetics were unavailable, so operations could cause severe pain."],
            ["Infection", "Germs and sterilisation were not understood, making infection a serious risk."],
            ["Limited knowledge", "Restricted medical understanding meant injuries could not always be treated successfully."],
          ].map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-[#687870]">Despite these limitations, barber-surgeons provided important practical services to medieval communities.</p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Then and now</p>
        <h2 className="section-title mt-2">How Did Medieval Medicine Compare to Modern Medicine?</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#dfe5df]">
          <div className="grid grid-cols-[0.8fr_1fr_1fr] gap-3 bg-[#f3f6f0] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#526c5f]">
            <span>Topic</span><span>Medieval medicine</span><span>Modern medicine</span>
          </div>
          {comparison.map(([topic, medieval, modern]) => (
            <div key={topic} className="grid grid-cols-[0.8fr_1fr_1fr] gap-3 border-t border-[#e5eae5] px-4 py-3 text-sm leading-5 text-[#687870]">
              <span className="font-semibold text-[#345247]">{topic}</span><span>{medieval}</span><span>{modern}</span>
            </div>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">Lasting influence</p>
        <h2 className="section-title mt-2">The Legacy of Medieval Medicine</h2>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          Medieval medicine was limited by a lack of scientific knowledge, but the period remains important to healthcare history. The Black Death showed the devastating effects of infectious disease, traditional beliefs shaped explanations of illness, and barber-surgeons developed practical skills that contributed to the future of surgery.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          Over time, observation, scientific discoveries, and a better understanding of disease transformed medicine. Medieval practices show how people tried to fight illness before modern science reshaped healthcare.
        </p>
      </article>
      <p className="medical-note">This content describes historical beliefs and treatments for education. Do not use historical remedies in place of modern medical care.</p>
    </div>
  );
}

function AncientMedicineContent() {
  const egyptianIngredients = [
    ["Garlic and Onions", "Used for various illnesses and general health. These common foods were believed to have healing properties."],
    ["Honey", "Applied to wounds and cuts. Honey has antibacterial properties and is still used in some modern wound dressings."],
    ["Aloe Vera", "Used to soothe skin problems, burns, and wounds for its cooling and soothing qualities."],
    ["Castor Oil", "Made from castor beans and used as a laxative remedy for constipation."],
    ["Willow and Other Plants", "Prepared in remedies selected through observation, tradition, and personal experience."],
    ["Tree Resins", "Used in ointments and wound treatments; some resins may help reduce inflammation or prevent infection."],
  ];
  const greekIngredients = [
    ["Garlic", "Used for digestive problems and intestinal parasites, based on its availability and traditional medicinal reputation."],
    ["Willow Bark and Leaves", "Used in remedies for pain. Willow contains salicin-related compounds that helped inspire the development of modern aspirin."],
    ["Opium Poppy", "Used for pain relief and sleep. Its powerful compounds affect the nervous system and can also cause addiction and serious harm."],
    ["Wormwood", "Used for conditions including fever, with its use informed by observed effects and traditional beliefs."],
  ];

  return (
    <div className="grid gap-5">
      <article className="content-card">
        <p className="eyebrow">Ancient medicine</p>
        <h2 className="mt-2 font-serif text-2xl">How Did Ancient Civilisations Use Natural Ingredients to Treat Illness?</h2>
        <p className="mt-4 text-sm leading-7 text-[#687870]">
          Long before modern medicine existed, ancient civilisations relied on natural ingredients such as plants, oils, honey, and tree extracts to treat illnesses and injuries. Ancient Egyptian and Greek healers used observations, knowledge of nature, and traditional beliefs to create remedies.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          Many ingredients had genuine medicinal properties, and some are still recognised for medical uses today.
        </p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Ancient Egypt</p>
        <h2 className="section-title mt-2">Ancient Egyptian Medicine</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          Egyptian healers used ingredients available in their surroundings to treat illness, soothe injuries, and support general health.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {egyptianIngredients.map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">Ancient Greece</p>
        <h2 className="section-title mt-2">Ancient Greek Medicine</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">
          Greek remedies drew on traditional knowledge and observations of how plants affected the body.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {greekIngredients.map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">Preparation</p>
        <h2 className="section-title mt-2">How Were Ancient Remedies Made?</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">Ingredients were often prepared in several ways:</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Crushed or ground into powders and pastes.",
            "Boiled in water to create medicinal drinks.",
            "Mixed with water or wine.",
            "Combined with honey, oils, and fats.",
            "Made into ointments and wound dressings.",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-[#e1e7e1] bg-[#fafbf8] p-4 text-sm leading-6 text-[#687870]">{item}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-6 text-[#687870]">These preparations were used to treat illness, soothe injuries, and relieve pain.</p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Choosing ingredients</p>
        <h2 className="section-title mt-2">Why Were These Ingredients Chosen?</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Observation", "Healers noticed how plants and other natural substances affected the body."],
            ["Experience", "Remedies that appeared to help were often used again."],
            ["Availability", "Locally grown or easy-to-obtain ingredients were commonly used."],
            ["Traditional knowledge", "Practices and remedies were passed down through generations."],
            ["Religious beliefs", "Spiritual beliefs influenced how people understood illness and healing."],
          ].map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="content-card">
        <p className="eyebrow">Recorded knowledge</p>
        <h2 className="section-title mt-2">How Did Ancient Medicine Develop?</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <article className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
            <h3 className="font-semibold text-[#345247]">Ancient Egypt</h3>
            <p className="mt-2 text-sm leading-6 text-[#687870]">Medical papyri, including the Ebers Papyrus, recorded hundreds of remedies and treatments, providing evidence of Egyptian approaches to illness and injury.</p>
          </article>
          <article className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
            <h3 className="font-semibold text-[#345247]">Ancient Greece</h3>
            <p className="mt-2 text-sm leading-6 text-[#687870]">Physicians such as Hippocrates encouraged observing symptoms and studying natural causes, helping make approaches to illness more systematic.</p>
          </article>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#687870]">Recording and sharing experience helped shape later medical practices.</p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Evidence and risk</p>
        <h2 className="section-title mt-2">Did Ancient Remedies Actually Work?</h2>
        <p className="mt-3 text-sm leading-6 text-[#687870]">Some ancient remedies contained ingredients with medicinal properties, while others were ineffective or potentially harmful.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Honey", "Has antibacterial properties and is still used in certain modern wound dressings."],
            ["Aloe Vera", "Can help soothe some skin irritations and minor burns."],
            ["Willow", "Contains compounds related to those used in the development of aspirin."],
            ["Opium-based remedies", "Could relieve pain but carried serious risks, including addiction and harm."],
          ].map(([name, text]) => (
            <article key={name} className="rounded-2xl border border-[#e1e7e1] bg-[#fafbf8] p-4">
              <h3 className="font-semibold text-[#345247]">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#687870]">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-[#687870]">Ancient healers had valuable knowledge but lacked modern scientific methods to properly test treatments for safety and effectiveness.</p>
      </article>

      <article className="content-card">
        <p className="eyebrow">Lasting influence</p>
        <h2 className="section-title mt-2">The Legacy of Ancient Medicine</h2>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          Ancient Egyptian and Greek medicine contributed to the development of medical knowledge. Their use of natural ingredients, careful observations, and recorded treatments helped lay foundations for later practices.
        </p>
        <p className="mt-3 text-sm leading-7 text-[#687870]">
          Although modern medicine has developed significantly, some ingredients first used in ancient times are still recognised for medicinal properties. Ancient medicine shows how people used the natural world to understand illness, treat injuries, and improve health long before modern science existed.
        </p>
      </article>

      <p className="medical-note">This content is for historical education and is not medical advice. Historical remedies should not be used as substitutes for evidence-based care.</p>
    </div>
  );
}

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [page, setPage] = useState<Page>("dashboard");

  if (!signedIn) return <Login onLogin={() => setSignedIn(true)} />;

  return (
    <Shell page={page} setPage={setPage} onLogout={() => setSignedIn(false)}>
      {page === "dashboard" && <Dashboard />}
      {page === "modern-medicine-technology" && <Medications />}
      {page === "historical-breakthroughs" && <Wellness />}
      {page !== "dashboard" && page !== "modern-medicine-technology" && page !== "historical-breakthroughs" && (
        <HistoryTopicPage page={page} />
      )}
    </Shell>
  );
}
