"use client";

import { useState } from "react";
import RopeDivider from "@/components/RopeDivider";

/* ══════════════════ MENU DATA ══════════════════ */
const foodMenu = [
  {
    category: "Appetizers",
    note: null,
    items: [
      { name: "Chips & Salsa", price: 8, desc: null },
      { name: "Chips & Queso", price: 10, desc: null },
      { name: "Nachos", price: 13, desc: null },
      { name: "Fries", price: 7, desc: "Add shredded cheese or queso +$2" },
      { name: "Tots", price: 7, desc: "Add shredded cheese or queso +$2" },
      {
        name: "Loaded Fries",
        price: 12,
        desc: "Queso, olives, tomato, onion, jalapeños, bacon. Add salsa & sour cream +$2",
        featured: true,
      },
      {
        name: "Loaded Tots",
        price: 12,
        desc: "Queso, olives, tomato, onion, jalapeños, bacon. Add salsa & sour cream +$2",
        featured: true,
      },
      {
        name: "Wings",
        price: 9,
        desc: "6pc with fries or tots. 12pc for $17",
        featured: true,
      },
      { name: "Cheese Curds", price: 9, desc: "Served with marinara" },
      { name: "Mozzarella Stix", price: 10, desc: "Served with marinara" },
      { name: "Onion Rings", price: 11, desc: "Served with chipotle ranch" },
      { name: "Mini Tacos", price: 10, desc: "Served with salsa and sour cream" },
      {
        name: "Chicken Tenders",
        price: 12,
        desc: "Served with ranch or bleu cheese, with fries or tots",
        featured: true,
      },
    ],
  },
  {
    category: "Salads",
    note: "Served with your choice of ranch, blue cheese, or thousand island dressing",
    items: [
      {
        name: "Grilled or Crispy Chicken Salad",
        price: 14,
        desc: "Olives, tomatoes, onions, cheese, croutons, and your favorite dressing",
        featured: true,
      },
      {
        name: "Side Salad",
        price: 5,
        desc: "Olives, juicy tomatoes, onions, cheese, and crunchy croutons. With meal: $4",
      },
    ],
  },
  {
    category: "Hamburgers",
    note: "Served with your choice of fries or tots, or side salad for $2",
    items: [
      {
        name: "Cowboy Burger",
        price: 16,
        desc: "BBQ sauce, crispy homemade onion rings, sizzling bacon, and zesty pepper jack cheese",
        featured: true,
      },
      {
        name: "Steak House Burger",
        price: 16,
        desc: "AI sauce, mayo, homemade onion ring, sizzling mushrooms and onions, gooey swiss cheese. Add crispy onion rings +$2",
        featured: true,
      },
      {
        name: "Morgan Valley Ranch Burger",
        price: 15,
        desc: "Ranch, crispy bacon, and melty swiss cheese. Upgrade to fiery chipotle ranch, jalapeños, and pepper jack for +$2",
        featured: true,
      },
      {
        name: "Harley Burger",
        price: 16,
        desc: "Mountain of sizzling onions and mushrooms, crowned with crispy bacon and gooey swiss cheese",
        featured: true,
      },
      {
        name: "Dude Burger",
        price: 13,
        desc: "Caramelized onions and melted swiss cheese",
      },
      {
        name: "Jalapeño Burger",
        price: 13,
        desc: "Sizzling jalapeños, zesty pepper jack cheese, and fiery chipotle mayo",
      },
      {
        name: "Mushroom Swiss Burger",
        price: 13,
        desc: "Sautéed mushrooms and swiss cheese",
      },
      {
        name: "Garlic Burger",
        price: 13,
        desc: "Served on a sizzling garlic butter patty draped in swiss cheese",
      },
      {
        name: "Bacon Burger",
        price: 13,
        desc: "Crispy bacon paired with melted american cheese",
      },
      {
        name: "Cheeseburger",
        price: 11,
        desc: "Succulent burger crowned with the golden cloak of american cheese",
      },
      { name: "Hamburger", price: 10, desc: null },
    ],
  },
  {
    category: "Sandwiches",
    note: null,
    items: [
      {
        name: "B.L.T.",
        price: 13,
        desc: "BLT hugged by golden, crispy bread — a taste explosion awaits!",
        featured: true,
      },
      {
        name: "Grilled or Crispy Chicken Sandwich",
        price: 13,
        desc: "Served on toasted bread with lettuce, tomatoes, and signature sauce. Customizable to your preference",
        featured: true,
      },
      {
        name: "Good Old Grilled Cheese",
        price: 9,
        desc: "Timeless grilled cheese with ooey-gooey american cheese. Substitute swiss or pepper jack",
      },
    ],
  },
];

const drinksMenu = [
  {
    category: "Non-Alcoholic",
    note: null,
    items: [
      { name: "Coffee", price: 2, desc: null },
      {
        name: "Soft Drinks",
        price: 3.5,
        desc: "Sprite, Lemonade, Iced Tea, Coke, Diet Coke, Dr. Pepper",
      },
    ],
  },
];

const extras = [
  { name: "Extra Sauce", price: 0.75, desc: null },
  { name: "Add Bacon to Anything", price: 2, desc: null },
  {
    name: "Add Sautéed Mushrooms, Onions, Jalapeños, or Garlic",
    price: 1,
    desc: "Per topping",
  },
];

type Tab = "food" | "drinks";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>("food");

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 wood-texture" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,7,5,0.8) 0%, rgba(13,7,5,0.5) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="font-playfair text-gold text-xs tracking-[0.4em] uppercase mb-3">
            The Post Bar &amp; Grill
          </p>
          <h1 className="font-rye text-cream text-5xl lg:text-7xl mb-4">Our Menu</h1>
          <RopeDivider className="max-w-xs mx-auto mb-4" />
          <p className="font-lato text-leather text-base lg:text-lg">
            Real food, made with care. Served with fries or tots.
          </p>
        </div>
      </section>

      {/* ── Tab Switcher ── */}
      <section className="sticky top-16 lg:top-20 z-30 bg-post-dark border-b border-border">
        <div className="max-w-6xl mx-auto px-4 flex">
          <TabButton active={activeTab === "food"} onClick={() => setActiveTab("food")} label="Food" />
          <TabButton active={activeTab === "drinks"} onClick={() => setActiveTab("drinks")} label="Drinks" />
        </div>
      </section>

      {/* ── Menu Content ── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "food" && (
            <div className="space-y-16">
              {foodMenu.map((section) => (
                <CategorySection key={section.category} section={section} />
              ))}

              {/* Extras */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <StarIcon className="w-5 h-5 text-gold flex-shrink-0" />
                  <h2 className="font-rye text-gold text-2xl lg:text-3xl">
                    Extra Stuff &amp; Things
                  </h2>
                </div>
                <RopeDivider className="mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {extras.map((item) => (
                    <div key={item.name} className="menu-card rounded-r-lg p-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-playfair text-cream font-bold text-sm leading-snug pr-2">
                          {item.name}
                        </h3>
                        <span className="font-lato text-gold font-bold text-sm flex-shrink-0">
                          ${item.price % 1 === 0 ? item.price : item.price.toFixed(2)}
                        </span>
                      </div>
                      {item.desc && (
                        <p className="font-lato text-leather text-xs mt-1">{item.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "drinks" && (
            <div className="space-y-16">
              {drinksMenu.map((section) => (
                <CategorySection key={section.category} section={section} />
              ))}

              {/* Coming Soon */}
              <div className="parchment-texture western-border rounded-lg p-8 text-center">
                <StarIcon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="font-rye text-cream text-2xl mb-2">Beer &amp; Cocktails</h3>
                <RopeDivider className="max-w-xs mx-auto my-4" />
                <p className="font-lato text-leather text-sm leading-relaxed max-w-sm mx-auto">
                  We&apos;ve got a full bar — cold beers, cocktails, and more. Ask your server for
                  today&apos;s selections or follow us on Facebook for updates.
                </p>
                <a
                  href="https://www.facebook.com/p/The-Post-Bar-Grill-61563471441144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 btn-outline px-6 py-2.5 rounded font-lato font-bold text-xs tracking-widest uppercase cursor-pointer"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 wood-texture border-t border-border">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="font-playfair text-cream italic text-lg mb-4">
            &ldquo;Good Friends, Good Food, Good Times&rdquo;
          </p>
          <RopeDivider className="mb-6" />
          <p className="font-lato text-leather text-sm mb-6">
            Come in or call ahead — we&apos;re here for you.
          </p>
          <a
            href="tel:+18018451000"
            className="btn-gold px-8 py-3 rounded font-lato font-bold text-sm tracking-widest uppercase cursor-pointer inline-block"
          >
            Call (801) 845-1000
          </a>
        </div>
      </section>
    </>
  );
}

/* ── Sub-components ── */
function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 font-lato font-bold text-sm tracking-widest uppercase transition-all cursor-pointer border-b-2 ${
        active
          ? "text-gold border-gold"
          : "text-leather border-transparent hover:text-cream hover:border-border"
      }`}
    >
      {label}
    </button>
  );
}

function CategorySection({
  section,
}: {
  section: {
    category: string;
    note: string | null;
    items: {
      name: string;
      price: number;
      desc: string | null;
      featured?: boolean;
    }[];
  };
}) {
  return (
    <div>
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-2">
        <StarIcon className="w-5 h-5 text-gold flex-shrink-0" />
        <h2 className="font-rye text-gold text-2xl lg:text-3xl">{section.category}</h2>
      </div>
      {section.note && (
        <p className="font-playfair text-leather italic text-sm mb-3 pl-9">{section.note}</p>
      )}
      <RopeDivider className="mb-6" />

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {section.items.map((item) => (
          <div
            key={item.name}
            className={`menu-card rounded-r-lg p-4 relative ${
              item.featured ? "border-l-gold bg-post-plank/80" : ""
            }`}
          >
            {item.featured && (
              <div className="absolute top-2 right-2">
                <StarIcon className="w-3 h-3 text-gold/60" />
              </div>
            )}
            <div className="flex justify-between items-start gap-3">
              <h3 className="font-playfair text-cream font-bold text-sm leading-snug">
                {item.name}
              </h3>
              <span className="font-lato text-gold font-bold text-sm flex-shrink-0">
                ${item.price % 1 === 0 ? item.price : item.price.toFixed(2)}
              </span>
            </div>
            {item.desc && (
              <p className="font-lato text-leather text-xs mt-1.5 leading-relaxed">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
    </svg>
  );
}
