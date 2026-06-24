import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logoImg from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#070D19] border-t border-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top footer columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Brand & Bio */}
                    <div className="lg:col-span-1 text-left">
                        <a href="/" className="flex items-center gap-2 group brightness-0 invert">
                            <img src={logoImg} alt="iKart Express" className="h-16" />
                        </a>
                        <p className="text-xs text-slate-400 leading-relaxed mb-6">
                            Modern enterprise logistics solutions bridging the gap between complexity and efficiency.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 transition-all"
                                aria-label="Twitter"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white rounded-lg text-slate-400 transition-all"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Company */}
                    <div className="text-left">
                        <h3 className="text-xs font-extrabold text-white tracking-widest uppercase mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5 text-xs font-semibold">
                            <li>
                                <a href="/about" className="hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/about#team" className="hover:text-white transition-colors">
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a href="/about#careers" className="hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/about#sustainability" className="hover:text-white transition-colors">
                                    Sustainability
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="text-left">
                        <h3 className="text-xs font-extrabold text-white tracking-widest uppercase mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2.5 text-xs font-semibold">
                            <li>
                                <a href="/services" className="hover:text-white transition-colors">
                                    Express Shipping
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-white transition-colors">
                                    Warehousing
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-white transition-colors">
                                    Delivery Areas
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white transition-colors flex items-center gap-1">
                                    Partner With Us <ArrowUpRight className="h-3 w-3" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="text-left text-xs space-y-3 font-semibold">
                        <h3 className="text-xs font-extrabold text-white tracking-widest uppercase mb-4">
                            Contact
                        </h3>
                        <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>Panangad Nilam, Muppathadam,<br />Muppathadam - 683110, Kerala</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <a href="tel:+917306653758" className="hover:text-white transition-colors">
                                +91 73066 53758
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <a href="mailto:enquiry@ikartexpress.com" className="hover:text-white transition-colors">
                                enquiry@ikartexpress.com
                            </a>
                        </div>
                    </div>

                    {/* Newsletter removed */}

                </div>

                {/* Divider */}
                <div className="border-t border-slate-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold">
                    <p>
                        © 2026 iKart Express. All rights reserved. Powered by Enterprise Logistics.
                    </p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
