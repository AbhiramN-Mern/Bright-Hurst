import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">Contact Us</p>
        <h2 className="section-title mb-10">Connect with Bright Hurst</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info card */}
          <div className="bg-primary text-primary-foreground rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">We're Just a Message Away</h3>
            </div>
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Call :</p>
                  <p className="text-sm text-primary-foreground/70">+971 XXXXXXXXX</p>
                  <p className="text-sm text-primary-foreground/70">+971 XXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Mail :</p>
                  <p className="text-sm text-primary-foreground/70">brighthurst123@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Head Office :</p>
                  <p className="text-sm text-primary-foreground/70">
                    Bright Hurst Contracting LLC<br />
                    Office No. 1203, Al Shatha Tower<br />
                    Dubai Internet City, Dubai, UAE<br />
                    P.O. Box: 123456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">E mail ID</label>
                  <input
                    type="email"
                    placeholder="E mail ID"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-navy-light transition-colors duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
