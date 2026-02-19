import { Users, Wrench, ShieldCheck } from "lucide-react";
import featuresImg from "@/assets/features-img.jpg";

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden shadow-lg">
          {/* Navy "Why Choose Us" block */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 flex items-end">
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Why<br />Choose Us !
            </h2>
          </div>

          {/* Image block */}
          <div>
            <img src={featuresImg} alt="Construction work" className="w-full h-full object-cover min-h-[240px]" />
          </div>

          {/* Feature 1 */}
          <div className="bg-background p-8 flex flex-col justify-center">
            <Users className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-base font-bold text-foreground mb-2">Client-Centric Approach</h3>
            <p className="text-sm text-muted-foreground">Every project is customized to align with your vision, goals, and functionality requirements.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-background p-8 flex flex-col justify-center">
            <Wrench className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-base font-bold text-foreground mb-2">End-to-End Expertise</h3>
            <p className="text-sm text-muted-foreground">From interior fit-outs to MEP and civil works, we offer fully integrated solutions under one roof.</p>
          </div>

          {/* Image block 2 */}
          <div>
            <img src={featuresImg} alt="Construction expertise" className="w-full h-full object-cover min-h-[240px]" />
          </div>

          {/* Feature 3 */}
          <div className="bg-background p-8 flex flex-col justify-center">
            <ShieldCheck className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-base font-bold text-foreground mb-2">Uncompromising Quality</h3>
            <p className="text-sm text-muted-foreground">We use premium materials and proven techniques to ensure durability, safety, and long-term performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
