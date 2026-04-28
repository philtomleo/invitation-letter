import { CalendarSection } from './components/CalendarSection';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { RSVPForm } from './components/RSVPForm';
import { SuccessPage } from './components/SuccessPage';
import { WeddingInfo } from './components/WeddingInfo';

function App() {
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get('submitted') === '1';
  const attendance = params.get('attendance');

  if (submitted && (attendance === 'attending' || attendance === 'absent')) {
    return <SuccessPage attendance={attendance} />;
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7efe8_0%,#f3e4da_45%,#eed9cf_100%)] text-ink">
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(180deg,rgba(255,249,244,0.96),rgba(247,239,232,0.15))]" />
        <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#dfb8b3]/70 blur-3xl" />
        <div className="absolute bottom-0 right-[-8rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#c98e99]/18 blur-3xl" />
        <Hero />
        <WeddingInfo />
        <CalendarSection />
        <Gallery />
        <RSVPForm />
      </div>
    </div>
  );
}

export default App;
