import { FormEvent, ReactNode, useState } from "react";

type Page = "dashboard" | "medications" | "wellness";
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
        <Icon name="leaf" size={21} />
      </span>
      <span className="font-serif text-[22px] font-semibold tracking-[-0.02em]">Medical Time Machine</span>
    </div>
  );
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
            <Icon name="heart" size={30} />
          </div>
          <h1 className="font-serif text-6xl leading-[1.07] tracking-[-0.04em]">
            Good health starts with understanding.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#c7d9d2]">
            Clear guidance, personal reminders, and reliable health education—all in one calm place.
          </p>
        </div>
        <div className="relative flex items-center gap-3 text-sm text-[#abc5bc]">
          <Icon name="shield" size={18} />
          <span>Your health information is private and protected.</span>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6 py-10 sm:px-12">
        <div className="w-full max-w-[460px]">
          <div className="mb-12 lg:hidden"><Brand /></div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#6b857c]">Welcome back</p>
          <h2 className="font-serif text-[42px] leading-tight text-[#14372f] sm:text-5xl">Sign in to your care</h2>
          <p className="mt-4 text-[#66756f]">Access your daily overview and trusted health resources.</p>

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
  { page: "medications", label: "How medicines work", icon: "pill" },
  { page: "wellness", label: "Medicine development", icon: "book" },
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

  return (
    <div className="min-h-screen bg-[#f4f5f0] text-[#193b32]">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="flex items-center justify-between">
          <Brand light />
          <button className="text-white/70 lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon name="x" />
          </button>
        </div>
        <nav className="mt-14 space-y-2">
          <p className="mb-4 px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Your care</p>
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => { setPage(item.page); setMenuOpen(false); }}
              className={`nav-item ${page === item.page ? "nav-item-active" : ""}`}
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
          <p className="hidden text-sm text-[#64776f] sm:block">Tuesday, March 24</p>
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

function Dashboard({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <section className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Your daily overview</p>
          <h1 className="page-title">Good morning, Alex.</h1>
          <p className="mt-3 text-[#697a73]">A small check-in today helps build a healthier tomorrow.</p>
        </div>
        <button className="secondary-button"><Icon name="calendar" size={18} /> View appointments</button>
      </section>

      <section className="mb-8 grid gap-5 md:grid-cols-3">
        <article className="stat-card">
          <span className="icon-box bg-[#e2edce] text-[#375743]"><Icon name="activity" /></span>
          <div><p className="stat-label">Daily movement</p><p className="stat-value">6,420 <span>steps</span></p></div>
          <div className="progress-track"><span className="w-[64%]" /></div>
          <p className="stat-note">64% of your daily goal</p>
        </article>
        <article className="stat-card">
          <span className="icon-box bg-[#dbece7] text-[#2c6658]"><Icon name="water" /></span>
          <div><p className="stat-label">Water intake</p><p className="stat-value">5 <span>of 8 glasses</span></p></div>
          <div className="progress-track"><span className="w-[62%]" /></div>
          <p className="stat-note">3 more to reach your goal</p>
        </article>
        <article className="stat-card bg-[#173f35] text-white">
          <span className="icon-box bg-white/10 text-[#d9eea5]"><Icon name="heart" /></span>
          <div><p className="stat-label !text-white/60">Wellbeing check</p><p className="font-serif text-[26px]">How are you feeling?</p></div>
          <div className="flex gap-2">
            {["Low", "Okay", "Great"].map((mood) => <button key={mood} className="mood-button">{mood}</button>)}
          </div>
        </article>
      </section>

      <section className="grid gap-7 xl:grid-cols-[1.35fr_0.85fr]">
        <article className="content-card">
          <div className="card-heading">
            <div><p className="eyebrow">Today</p><h2 className="section-title">Medication schedule</h2></div>
            <button className="text-link" onClick={() => navigate("medications")}>View guide <Icon name="arrow" size={15} /></button>
          </div>
          <div className="mt-6 divide-y divide-[#e7ebe6]">
            <MedicationRow time="8:00 AM" name="Lisinopril" detail="10 mg · With breakfast" done />
            <MedicationRow time="1:00 PM" name="Vitamin D3" detail="1,000 IU · With food" />
            <MedicationRow time="8:00 PM" name="Atorvastatin" detail="20 mg · Evening dose" />
          </div>
        </article>
        <article className="content-card bg-[#ebe4d4]">
          <span className="icon-box bg-white/70 text-[#446756]"><Icon name="book" /></span>
          <p className="eyebrow mt-5">Explore medicine</p>
          <h2 className="mt-2 font-serif text-[30px] leading-tight">From discovery to pharmacy</h2>
          <p className="mt-4 text-sm leading-6 text-[#667269]">Follow the careful scientific process used to research, test, and approve a new medicine.</p>
          <button className="mt-7 flex items-center gap-2 text-sm font-bold text-[#245e50]" onClick={() => navigate("wellness")}>
            Read the article <Icon name="arrow" size={16} />
          </button>
        </article>
      </section>
    </>
  );
}

function MedicationRow({ time, name, detail, done = false }: { time: string; name: string; detail: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
      <button className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${done ? "border-[#6a8b55] bg-[#e5efd2] text-[#42613b]" : "border-[#cad5ce] text-transparent"}`} aria-label={`Mark ${name} as taken`}>
        <Icon name="check" size={17} />
      </button>
      <div className="min-w-0 flex-1"><p className="font-semibold">{name}</p><p className="mt-0.5 text-xs text-[#75837c]">{detail}</p></div>
      <span className="flex items-center gap-1.5 text-xs font-semibold text-[#65776f]"><Icon name="clock" size={14} />{time}</span>
    </div>
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

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [page, setPage] = useState<Page>("dashboard");

  if (!signedIn) return <Login onLogin={() => setSignedIn(true)} />;

  return (
    <Shell page={page} setPage={setPage} onLogout={() => setSignedIn(false)}>
      {page === "dashboard" && <Dashboard navigate={setPage} />}
      {page === "medications" && <Medications />}
      {page === "wellness" && <Wellness />}
    </Shell>
  );
}
