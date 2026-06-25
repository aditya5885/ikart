import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";
const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Industries", href: "/industries" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="flex items-center gap-2 group">
                            <img src={logoImg} alt="iKart Express" className="h-16" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="/contact"
                            className="text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors duration-200 py-2"
                        >
                            Request Pickup
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-[#0B1528] hover:bg-slate-800 transition-colors duration-200 shadow-sm"
                        >
                            Get Quote
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 transition-colors duration-200 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isMobileMenuOpen ? "block" : "hidden"
                    } md:hidden bg-white border-b border-slate-100 transition-all duration-300 ease-in-out`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="pt-4 pb-4 border-t border-slate-100 px-5 flex flex-col gap-3">
                    <a
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center px-4 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors duration-200 text-center"
                    >
                        Request Pickup
                    </a>
                    <a
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-center px-4 py-2.5 rounded-md text-base font-semibold text-white bg-[#0B1528] hover:bg-slate-800 transition-colors duration-200 text-center"
                    >
                        Get Quote
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;