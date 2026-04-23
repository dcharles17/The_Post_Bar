import Link from "next/link";

const hours = [
  { day: "Monday", time: "12:00 PM – 10:00 PM" },
  { day: "Tuesday", time: "Closed" },
  { day: "Wednesday", time: "12:00 PM – 11:00 PM" },
  { day: "Thursday", time: "12:00 PM – 11:00 PM" },
  { day: "Friday", time: "12:00 PM – 1:00 AM" },
  { day: "Saturday", time: "12:00 PM – 1:00 AM" },
  { day: "Sunday", time: "12:00 PM – 10:00 PM" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

export default function Footer() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <footer className="wood-texture border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <StarIcon className="w-8 h-8 text-gold flex-shrink-0" />
              <div className="leading-none">
                <div className="font-rye text-gold text-xl tracking-widest">THE POST</div>
                <div className="font-playfair text-leather text-[9px] tracking-[0.3em] uppercase">
                  Bar &amp; Grill
                </div>
              </div>
            </div>
            <p className="font-playfair text-leather text-sm italic leading-relaxed mb-5">
              &ldquo;Good Friends, Good Food, Good Times&rdquo;
            </p>
            <a
              href="https://www.facebook.com/p/The-Post-Bar-Grill-61563471441144/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-leather hover:text-gold transition-colors text-sm font-lato cursor-pointer"
              aria-label="The Post Bar & Grill on Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
              Follow us on Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair text-gold text-sm tracking-widest uppercase mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-leather hover:text-cream transition-colors text-sm font-lato"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-gold text-sm tracking-widest uppercase mb-4">
              Hours
            </h3>
            <ul className="space-y-1.5">
              {hours.map(({ day, time }) => {
                const isToday = day === today;
                const isClosed = time === "Closed";
                return (
                  <li
                    key={day}
                    className={`flex justify-between gap-4 text-xs font-lato ${
                      isToday
                        ? "text-gold font-bold"
                        : isClosed
                        ? "text-leather-dark"
                        : "text-leather"
                    }`}
                  >
                    <span>{day}</span>
                    <span className={isClosed ? "italic" : ""}>{time}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-gold text-sm tracking-widest uppercase mb-4">
              Find Us
            </h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2 text-leather text-sm font-lato">
                <MapPinIcon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=50+S+600+E,+Morgan,+UT+84050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors leading-relaxed cursor-pointer"
                >
                  50 S 600 E<br />Morgan, UT 84050
                </a>
              </div>
              <div className="flex items-center gap-2 text-leather text-sm font-lato">
                <PhoneIcon className="w-4 h-4 text-gold flex-shrink-0" />
                <a
                  href="tel:+18018451000"
                  className="hover:text-cream transition-colors cursor-pointer"
                >
                  (801) 845-1000
                </a>
              </div>
            </address>

            {/* Map Embed */}
            <div className="mt-4 rounded overflow-hidden western-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5!2d-111.666!3d41.083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z50+S+600+E%2C+Morgan%2C+UT+84050!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="120"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.4)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Post Bar & Grill location map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-post-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-leather-dark text-xs font-lato">
          <p>© {new Date().getFullYear()} The Post Bar &amp; Grill. All rights reserved.</p>
          <p>Morgan, Utah</p>
        </div>
      </div>
    </footer>
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
