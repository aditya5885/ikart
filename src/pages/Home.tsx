import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Infrastructure from "../components/Infrastructure";
import Partnership from "../components/Partnership";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Industries />
        <Infrastructure />
        <Partnership />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;