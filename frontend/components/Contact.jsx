import {
  RiChat1Line,
  RiMap2Line,
  RiExternalLinkLine,
  RiSmartphoneLine,
} from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>

              <p className="mb-8 text-secondary">
                Have a question or need expert support for your project? Our
                team is ready to assist you with reliable guidance and
                professional solutions.
              </p>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-accent/10 p-3">
                  <RiChat1Line className="text-accent text-xl" />
                </div>
                <div>
                  <h5 className="font-semibold text-primary">Email</h5>
                  <p className="text-secondary text-sm mb-1">
                    Send us your inquiry anytime.
                  </p>
                  <a
                    href="mailto:contact@nayara-solutions.com?subject=Project Inquiry"
                    className="text-primary font-medium hover:text-accent transition"
                  >
                    contact@nayara-solutions.com
                  </a>
                </div>
              </div>

              {/* Office */}
              <a
                href="https://www.google.com/maps/place/24%C2%B040'59.7%22N+46%C2%B044'49.3%22E/@24.6832542,46.7444649,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 mb-6 group cursor-pointer transition-all duration-300 hover:-translate-y-[2px]"
              >
                <div className="bg-accent/10 p-3 group-hover:bg-accent transition">
                  <RiMap2Line className="text-accent text-xl group-hover:text-white transition" />
                </div>

                <div>
                  <h5 className="font-semibold text-primary flex items-center gap-2">
                    Office
                    <RiExternalLinkLine className="text-sm opacity-60 group-hover:opacity-100 transition" />
                  </h5>

                  <p className="text-secondary text-sm mb-1">
                    View location on map
                  </p>

                  <p className="text-primary font-medium group-hover:text-accent underline-offset-4 group-hover:underline transition">
                    8490 Al Mahd
                    <br />
                    REJA8490, 4052
                    <br />
                    Al Malaz, Riyadh 12833
                  </p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-10">
                <div className="bg-accent/10 p-3">
                  <RiSmartphoneLine className="text-accent text-xl" />
                </div>

                <div>
                  <h5 className="font-semibold text-primary">Phone</h5>

                  <p className="text-secondary text-sm mb-2">
                    Sunday – Friday, 8am – 6pm
                  </p>

                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+966532690401"
                      className="font-medium text-primary hover:text-accent transition"
                    >
                      +966-532690401
                    </a>
                    <a
                      href="tel:+966573293200"
                      className="font-medium text-primary hover:text-accent transition"
                    >
                      +966-573293200
                    </a>
                    <a
                      href="tel:+966599661645"
                      className="font-medium text-primary hover:text-accent transition"
                    >
                      +966-599661645
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="border-t border-border/40">
                <p className="text-sm text-secondary mb-4">Follow us</p>
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="text-primary text-[20px] hover:text-accent transition-colors"
                />
              </div>
            </div>

            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Tell us about your project requirements and our team will get
                back to you with a detailed estimate, tailored solutions, and
                expert guidance to bring your vision to life.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
