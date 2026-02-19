import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    text: "We partnered with Bright Hurst for a large-scale commercial project involving MEP and civil works. Their professionalism, technical expertise, and timely execution made them a reliable choice. They handled complex challenges with ease and efficiency.",
    name: "Mohammed Khalid",
    role: "Project Manager, GulfTech Engineering",
  },
  {
    text: "Bright Hurst exceeded our expectations in every aspect of the project. Their interior fit-out work was precise, elegant, and truly reflected our vision. The team maintained clear communication and delivered on time without compromising on quality.",
    name: "Aisha Rahman",
    role: "Managing Director, Al Noor",
  },
  {
    text: "From start to finish, Bright Hurst delivered a seamless experience. Their attention to detail and commitment to quality craftsmanship made our residential project stand out. Highly recommended for anyone looking for trusted construction partners in the UAE.",
    name: "Sara Al Farsi",
    role: "Homeowner, Jumeirah Dubai",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="section-container">
        <p className="section-label">Testimonials</p>
        <h2 className="section-title mb-12">
          Voices of Trust That Reflect Our<br className="hidden md:block" /> Commitment and Craftsmanship
        </h2>

        {/* Desktop: show all 3, Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard {...testimonials[current]} />
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ text, name, role }) => (
  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
    <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-primary">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
