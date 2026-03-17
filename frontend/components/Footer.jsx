import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col xl:flex-row gap-12 py-16">
          {/* logo & text */}
          <div className="flex-1">
            <Logo />
            <p className="text-border max-w-[270px]">
              Delivering reliable engineering and construction solutions with
              precision, innovation, and a commitment to excellence across every
              project.
            </p>
          </div>

          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contact</h4>

            <ul className="space-y-4">
              {/* address */}
              <li>
                <a
                  href="https://www.google.com/maps/place/24%C2%B040'59.7%22N+46%C2%B044'49.3%22E/@24.6832542,46.7444649,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  8490 Al Nayara, REJA8490, 4052
                  <br />
                  Al Malaz, Riyadh 12833
                </a>
              </li>

              {/* email */}
              <li>
                <a
                  href="mailto:contact@nayara-solutions.com"
                  className="hover:text-accent transition"
                >
                  contact@nayara-solutions.com
                </a>
              </li>

              {/* phones */}
              <li className="flex flex-col">
                <a
                  href="tel:+966532690401"
                  className="hover:text-accent transition"
                >
                  +966 532 690 401
                </a>
                <a
                  href="tel:+966573293200"
                  className="hover:text-accent transition"
                >
                  +966 573 293 200
                </a>
                <a
                  href="tel:+966599661645"
                  className="hover:text-accent transition"
                >
                  +966 599 661 645
                </a>
              </li>
            </ul>
          </div>

          {/* quick links */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Quick Links</h4>

            <ul className="space-y-4">
              <li className="hover:text-accent">
                <Link href="#services">Services</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-border/20 py-6 text-center text-border text-sm">
          © {new Date().getFullYear()} Nayara Al Sharq. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
