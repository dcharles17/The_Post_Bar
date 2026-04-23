import Link from "next/link";
import RopeDivider from "@/components/RopeDivider";

const weeklySpecials = [
  {
    day: "Monday",
    title: "Kickoff Monday",
    desc: "Start the week right. Open noon to 10 PM. Full menu all day.",
    open: true,
    hours: "12 PM – 10 PM",
  },
  {
    day: "Tuesday",
    title: "Closed",
    desc: "Taking a day to recharge so we can bring our best the rest of the week. See you Wednesday!",
    open: false,
    hours: "Closed",
  },
  {
    day: "Wednesday",
    title: "Wing Wednesday",
    desc: "The crowd favorite. 6pc wings for $9 or go big with 12pc for just $17. Served with fries or tots.",
    open: true,
    hours: "12 PM – 11 PM",
    featured: true,
  },
  {
    day: "Thursday",
    title: "Throwback Thursday",
    desc: "Classic burgers, cold drinks, and good people. The whole menu is yours til 11 PM.",
    open: true,
    hours: "12 PM – 11 PM",
  },
  {
    day: "Friday",
    title: "Friday Night Live",
    desc: "The weekend starts here. We're open until 1 AM — full bar, full menu, full house.",
    open: true,
    hours: "12 PM – 1 AM",
    featured: true,
  },
  {
    day: "Saturday",
    title: "All Night Saturday",
    desc: "Late nights, great bites. Come hungry and stay late — we're here until 1 AM.",
    open: true,
    hours: "12 PM – 1 AM",
    featured: true,
  },
  {
    day: "Sunday",
    title: "Sunday Funday",
    desc: "Wind down the weekend the right way. Full menu open noon to 10 PM. You deserve it.",
    open: true,
    hours: "12 PM – 10 PM",
  },
];

const upcomingEvents = [
  {
    title: "Live Music Night",
    date: "Check Facebook for Dates",
    desc: "Local artists and great tunes. Follow us on Facebook to stay updated on upcoming performers.",
    tag: "Live Music",
  },
  {
    title: "Wing Wednesday",
    date: "Every Wednesday",
    desc: "6pc wings for $9 or 12pc for $17. Best deal in Morgan County. Bring the crew.",
    tag: "Weekly Special",
  },
  {
    title: "Late Night Fridays & Saturdays",
    date: "Every Fri & Sat",
    desc: "We stay open until 1 AM on the weekends. Full bar, full menu, full good times.",
    tag: "Late Night",
  },
];

export default function EventsPage() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = days[new Date().getDay()];

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 wood-texture" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(13,7,5,0.8) 0%, rgba(13,7,5,0.5) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
            The Post Bar &amp; Grill
          </p>
          <h1 className="font-rye text-cream text-5xl lg:text-7xl mb-4">Events &amp; Specials</h1>
          <RopeDivider className="max-w-xs mx-auto mb-4" />
          <p className="font-lato text-leather text-base lg:text-lg">
            Something worth coming out for, every day of the week.
          </p>
        </div>
      </section>

      {/* ── Weekly Schedule ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
              What&apos;s Happening
            </p>
            <h2 className="font-rye text-cream text-4xl lg:text-5xl mb-4">Weekly Schedule</h2>
            <RopeDivider className="max-w-xs mx-auto" />
          </div>

          <div className="space-y-3">
            {weeklySpecials.map((day) => {
              const isToday = day.day === today;
              return (
                <div
                  key={day.day}
                  className={`parchment-texture rounded-lg p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-200 ${
                    isToday
                      ? "border border-gold/50 shadow-lg shadow-gold/10"
                      : "western-border"
                  } ${!day.open ? "opacity-50" : ""}`}
                >
                  {/* Day Label */}
                  <div className="flex-shrink-0 w-28 lg:w-32">
                    <div
                      className={`font-rye text-lg ${
                        isToday ? "text-gold" : day.open ? "text-cream" : "text-leather-dark"
                      }`}
                    >
                      {day.day}
                    </div>
                    <div
                      className={`font-lato text-xs mt-0.5 ${
                        day.open ? "text-leather" : "text-leather-dark italic"
                      }`}
                    >
                      {day.hours}
                    </div>
                    {isToday && (
                      <span className="inline-block mt-1 font-lato text-[10px] font-bold tracking-wider uppercase bg-gold text-post-dark px-2 py-0.5 rounded">
                        Today
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-10 bg-border" />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3
                        className={`font-playfair font-bold text-base ${
                          day.open ? "text-cream" : "text-leather-dark"
                        }`}
                      >
                        {day.title}
                      </h3>
                      {day.featured && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 font-lato text-[10px] font-bold tracking-wider uppercase border border-gold/40 text-gold px-2 py-0.5 rounded">
                          <StarIcon className="w-2.5 h-2.5" />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="font-lato text-leather text-sm mt-1 leading-relaxed">
                      {day.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 wood-texture opacity-60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
              Don&apos;t Miss Out
            </p>
            <h2 className="font-rye text-cream text-4xl lg:text-5xl mb-4">Upcoming Events</h2>
            <RopeDivider className="max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="parchment-texture western-border rounded-lg p-6 group hover:border-gold/40 transition-all duration-200 cursor-default"
              >
                <span className="inline-block font-lato text-[10px] font-bold tracking-widest uppercase text-gold border border-gold/30 px-2 py-1 rounded mb-3">
                  {event.tag}
                </span>
                <h3 className="font-rye text-cream text-lg mb-1 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="font-playfair text-gold/80 text-xs italic mb-3">{event.date}</p>
                <RopeDivider className="mb-3" />
                <p className="font-lato text-leather text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facebook CTA ── */}
      <section className="py-16 border-t border-border">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <StarIcon className="w-10 h-10 text-gold mx-auto mb-5" />
          <h2 className="font-rye text-cream text-3xl lg:text-4xl mb-3">Stay in the Loop</h2>
          <RopeDivider className="max-w-xs mx-auto mb-5" />
          <p className="font-lato text-leather text-base leading-relaxed mb-8">
            Follow The Post on Facebook for the latest on live music, special events, daily
            specials, and anything else happening at the bar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/p/The-Post-Bar-Grill-61563471441144/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-3 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              <FacebookIcon className="w-4 h-4" />
              Follow on Facebook
            </a>
            <Link
              href="/menu"
              className="btn-outline px-8 py-3 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer w-full sm:w-auto text-center"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
