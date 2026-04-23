import Link from "next/link";
import RopeDivider from "@/components/RopeDivider";

/* ── Review data ── */
const reviews = [
  {
    name: "Jake R.",
    rating: 5,
    text: "Best burger in Morgan County, hands down. The Cowboy Burger is absolutely incredible — smoky, juicy, and loaded. Great atmosphere and even better people.",
    date: "March 2025",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "We come here every Friday night. The wings are amazing, the drinks are cold, and the staff treats you like family. This place has heart.",
    date: "February 2025",
  },
  {
    name: "Travis B.",
    rating: 5,
    text: "Finally a proper bar and grill in Morgan. The loaded fries are dangerous — you'll eat the whole thing. The Morgan Valley Ranch Burger is worth every penny.",
    date: "January 2025",
  },
];

const specials = [
  {
    day: "Wing Wednesday",
    label: "Every Wednesday",
    desc: "6pc wings for $9 or go big with 12pc for $17. Your choice of sauce, served with fries or tots.",
  },
  {
    day: "Weekend Takeover",
    label: "Friday & Saturday",
    desc: "Open until 1 AM. Cold drinks, great company, and the full menu running all night long.",
  },
  {
    day: "Sunday Funday",
    label: "Every Sunday",
    desc: "Wind down the weekend right. Open noon to 10 PM with all your favorites on the menu.",
  },
];

const featuredItems = [
  {
    name: "Cowboy Burger",
    price: "16",
    desc: "BBQ sauce, crispy homemade onion rings, sizzling bacon, and zesty pepper jack cheese.",
  },
  {
    name: "Morgan Valley Ranch Burger",
    price: "15",
    desc: "Ranch, crispy bacon, and melty swiss. Upgrade with fiery chipotle ranch + jalapeños for $2.",
  },
  {
    name: "Loaded Fries",
    price: "12",
    desc: "Queso, olives, tomato, onion, jalapeños, and bacon. Add salsa & sour cream for $2.",
  },
  {
    name: "Chicken Tenders",
    price: "12",
    desc: "Served with ranch or bleu cheese, with your choice of fries or tots.",
  },
  {
    name: "Wings",
    price: "9",
    desc: "6pc wings with fries or tots. Go big — 12pc for $17.",
  },
  {
    name: "Grilled Chicken Salad",
    price: "14",
    desc: "Olives, tomatoes, onions, cheese, croutons with your choice of dressing.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-bg" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(139,58,26,0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 30%, rgba(201,146,42,0.10) 0%, transparent 55%)
            `,
          }}
        />

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-24 lg:h-36">
            <path
              d="M0,180 L0,110 L80,60 L160,95 L260,30 L360,80 L460,20 L560,70 L660,10 L760,65 L860,25 L960,75 L1060,15 L1160,60 L1260,40 L1360,75 L1440,50 L1440,180 Z"
              fill="#0D0705"
              opacity="0.7"
            />
            <path
              d="M0,180 L0,130 L100,90 L200,120 L320,70 L420,105 L540,60 L640,100 L740,55 L840,90 L940,65 L1040,100 L1140,70 L1240,105 L1340,80 L1440,100 L1440,180 Z"
              fill="#0D0705"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Star cluster */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="rope-line w-16 sm:w-24" />
            <StarIcon className="w-7 h-7 text-gold" />
            <StarIcon className="w-11 h-11 text-gold" />
            <StarIcon className="w-7 h-7 text-gold" />
            <div className="rope-line w-16 sm:w-24" />
          </div>

          <p className="font-playfair text-leather text-xs tracking-[0.4em] uppercase mb-3">
            Est. Morgan, Utah
          </p>

          <h1 className="font-rye text-cream leading-none mb-2">
            <span className="block text-5xl sm:text-7xl lg:text-9xl tracking-wider">THE</span>
            <span
              className="block text-7xl sm:text-9xl lg:text-[11rem] tracking-widest"
              style={{
                background: "linear-gradient(135deg, #C9922A 0%, #E8B056 45%, #C9922A 60%, #8A6118 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              POST
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl tracking-[0.4em] text-leather mt-1">
              Bar &amp; Grill
            </span>
          </h1>

          <RopeDivider className="my-7 max-w-sm mx-auto" />

          <p className="font-playfair text-cream text-lg sm:text-xl lg:text-2xl italic tracking-wide mb-10">
            Good Friends, Good Food, Good Times
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/menu"
              className="btn-gold px-8 py-4 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center"
            >
              View Our Menu
            </Link>
            <Link
              href="/events"
              className="btn-outline px-8 py-4 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center"
            >
              See Events
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
            <div className="w-px h-8 bg-leather" />
            <ChevronDownIcon className="w-5 h-5 text-leather animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
                About The Post
              </p>
              <h2 className="font-rye text-cream text-4xl lg:text-5xl leading-tight mb-6">
                Morgan&apos;s<br />
                <span className="text-gold">Local Favorite</span>
              </h2>
              <RopeDivider className="mb-6 max-w-xs" />
              <p className="font-lato text-leather leading-relaxed mb-4 text-base lg:text-lg">
                Tucked right here in Morgan, Utah — The Post Bar &amp; Grill is where the community
                comes to unwind. Whether you&apos;re rolling in after a long day or celebrating a big win,
                we&apos;ve got a cold drink waiting and a seat with your name on it.
              </p>
              <p className="font-lato text-leather leading-relaxed mb-8 text-base lg:text-lg">
                From our legendary Cowboy Burger to crispy loaded fries and ice-cold drinks — every
                plate and every pour is made with care: real food, real people, real good times.
              </p>
              <div className="flex flex-wrap gap-6">
                <StatBadge number="7" label="Days a Week" />
                <StatBadge number="30+" label="Menu Items" />
                <StatBadge number="5★" label="Google Rated" />
              </div>
            </div>

            <div className="relative">
              <div className="western-border parchment-texture rounded-lg p-8 text-center relative overflow-hidden">
                <StarIcon className="absolute top-3 left-3 w-4 h-4 text-gold/40" />
                <StarIcon className="absolute top-3 right-3 w-4 h-4 text-gold/40" />
                <StarIcon className="absolute bottom-3 left-3 w-4 h-4 text-gold/40" />
                <StarIcon className="absolute bottom-3 right-3 w-4 h-4 text-gold/40" />

                <div className="font-rye text-gold text-6xl lg:text-7xl leading-none mb-1">THE</div>
                <div
                  className="font-rye text-7xl lg:text-8xl leading-none mb-1"
                  style={{
                    background: "linear-gradient(135deg, #C9922A, #E8B056, #C9922A)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  POST
                </div>
                <div className="font-playfair text-leather text-sm tracking-[0.3em] uppercase mb-6">
                  Bar &amp; Grill
                </div>
                <RopeDivider className="mb-6" />
                <p className="font-playfair text-cream italic text-base">
                  &ldquo;Good Friends, Good Food,<br />Good Times&rdquo;
                </p>
                <RopeDivider className="mt-6 mb-4" />
                <p className="font-lato text-leather text-xs tracking-widest uppercase">
                  Morgan, Utah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ HOURS + INFO STRIP ══════════════════ */}
      <section className="py-14 border-y border-border bg-post-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <InfoCard
              icon={<ClockIcon className="w-8 h-8 text-gold" />}
              title="Hours"
              content={
                <ul className="text-leather text-sm font-lato space-y-1 mt-2 w-full">
                  <HoursRow day="Mon" time="12 PM – 10 PM" />
                  <HoursRow day="Tue" time="Closed" closed />
                  <HoursRow day="Wed – Thu" time="12 PM – 11 PM" />
                  <HoursRow day="Fri – Sat" time="12 PM – 1 AM" highlight />
                  <HoursRow day="Sun" time="12 PM – 10 PM" />
                </ul>
              }
            />
            <InfoCard
              icon={<MapPinIcon className="w-8 h-8 text-gold" />}
              title="Find Us"
              content={
                <div className="text-leather text-sm font-lato mt-2 space-y-2">
                  <p>50 S 600 E<br />Morgan, UT 84050</p>
                  <a
                    href="https://maps.google.com/?q=50+S+600+E,+Morgan,+UT+84050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold hover:text-gold-light transition-colors text-xs tracking-wide uppercase font-bold cursor-pointer"
                  >
                    Get Directions →
                  </a>
                </div>
              }
            />
            <InfoCard
              icon={<PhoneIcon className="w-8 h-8 text-gold" />}
              title="Call Us"
              content={
                <div className="text-leather text-sm font-lato mt-2 space-y-2">
                  <a
                    href="tel:+18018451000"
                    className="block text-cream text-xl font-bold hover:text-gold transition-colors cursor-pointer"
                  >
                    (801) 845-1000
                  </a>
                  <p className="text-xs text-leather">
                    Call ahead for large groups or special occasions
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ SPECIALS ══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
              Every Week
            </p>
            <h2 className="font-rye text-cream text-4xl lg:text-5xl mb-4">Specials &amp; Events</h2>
            <RopeDivider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specials.map((s) => (
              <div
                key={s.day}
                className="parchment-texture western-border rounded-lg p-6 group cursor-default hover:border-gold/40 transition-all duration-200"
              >
                <p className="font-playfair text-gold text-xs tracking-widest uppercase mb-2">
                  {s.label}
                </p>
                <h3 className="font-rye text-cream text-xl mb-3 group-hover:text-gold transition-colors">
                  {s.day}
                </h3>
                <p className="font-lato text-leather text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/events"
              className="btn-outline px-8 py-3 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer inline-block"
            >
              All Events &amp; Specials →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ MENU PREVIEW ══════════════════ */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
              Fresh Made Daily
            </p>
            <h2 className="font-rye text-cream text-4xl lg:text-5xl mb-4">Featured Bites</h2>
            <RopeDivider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredItems.map((item) => (
              <div key={item.name} className="menu-card rounded-r-lg p-5 cursor-default">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-cream font-bold text-base">{item.name}</h3>
                  <span className="font-lato text-gold font-bold text-base flex-shrink-0 ml-3">
                    ${item.price}
                  </span>
                </div>
                <p className="font-lato text-leather text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="btn-gold px-8 py-4 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer inline-block"
            >
              Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ REVIEWS ══════════════════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
              Google Reviews
            </p>
            <h2 className="font-rye text-cream text-4xl lg:text-5xl mb-2">
              What Folks Are Saying
            </h2>
            <div className="flex items-center justify-center gap-1 my-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-gold" />
              ))}
              <span className="font-lato text-leather ml-2 text-sm">5.0 on Google</span>
            </div>
            <RopeDivider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="parchment-texture western-border rounded-lg p-6 relative overflow-hidden"
              >
                <QuoteIcon className="absolute top-4 right-4 w-8 h-8 text-gold/10" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" />
                  ))}
                </div>
                <p className="font-lato text-leather text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-playfair text-cream text-sm font-bold">{review.name}</span>
                  <span className="font-lato text-leather-dark text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1A0C06 0%, #251409 50%, #1A0C06 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(201,146,42,0.04) 0px, rgba(201,146,42,0.04) 1px, transparent 1px, transparent 30px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <StarIcon className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-rye text-cream text-4xl lg:text-6xl mb-4">Come As You Are</h2>
          <RopeDivider className="max-w-xs mx-auto mb-6" />
          <p className="font-lato text-leather text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you&apos;re a local or just passing through Morgan — pull up a stool, order
            something good, and stay a while. You&apos;re always welcome here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18018451000"
              className="btn-gold px-8 py-4 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center"
            >
              Call (801) 845-1000
            </a>
            <a
              href="https://maps.google.com/?q=50+S+600+E,+Morgan,+UT+84050"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-8 py-4 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center"
            >
              Get Directions
            </a>
          </div>
          <p className="font-lato text-leather-dark text-sm mt-6">
            50 S 600 E, Morgan, UT 84050
          </p>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */
function InfoCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left parchment-texture western-border rounded-lg p-6">
      <div className="mb-3">{icon}</div>
      <h3 className="font-playfair text-cream text-sm tracking-widest uppercase mb-1">{title}</h3>
      {content}
    </div>
  );
}

function HoursRow({
  day,
  time,
  closed,
  highlight,
}: {
  day: string;
  time: string;
  closed?: boolean;
  highlight?: boolean;
}) {
  return (
    <li
      className={`flex justify-between gap-4 ${
        closed
          ? "text-leather-dark italic"
          : highlight
          ? "text-gold font-bold"
          : "text-leather"
      }`}
    >
      <span>{day}</span>
      <span>{time}</span>
    </li>
  );
}

function StatBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-rye text-gold text-3xl">{number}</div>
      <div className="font-lato text-leather text-xs tracking-widest uppercase">{label}</div>
    </div>
  );
}

/* ── Icons ── */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.076 3.208-4.61 3.208-7.327a7.5 7.5 0 00-15 0c0 2.716 1.264 5.25 3.208 7.327a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
