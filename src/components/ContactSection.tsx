import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#F5FFFE] dark:bg-[#004B85]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className=" border border-border dark:border-none rounded-lg p-8 dark:bg[#004B85]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="dark:bg-transparent dark:border-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="dark:bg-transparent dark:border-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@company.com" className="dark:bg-transparent dark:border-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <Input placeholder="Your Company" className="dark:bg-transparent dark:border-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your needs..."
                  className="min-h-[120px] dark:bg-transparent dark:border-white"
                />
              </div>
              <Button type="submit" className="w-full bg-cyan-500">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;