import { CalendarSection } from './components/CalendarSection';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { RSVPForm } from './components/RSVPForm';
import { WeddingInfo } from './components/WeddingInfo';

function App() {
  return (
    <div className="min-h-screen bg-cream bg-grain text-ink">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(248,244,238,0))]" />
        <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blush/50 blur-3xl" />
        <Hero />
        <WeddingInfo />
        <CalendarSection />
        <Gallery />
        <RSVPForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
