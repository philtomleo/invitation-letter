import { useEffect, useState } from 'react';
import { CalendarSection } from './components/CalendarSection';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { RSVPForm } from './components/RSVPForm';
import { SuccessPage } from './components/SuccessPage';
import { WeddingInfo } from './components/WeddingInfo';
import { InvitationProvider } from './context/InvitationContext';
import { getInvitationConfig } from './data/invitations';
import primaryFontUrl from './fonts/ChenYuluoyan-2.0-Thin.woff2?url';
import { getVariantFromLocation } from './lib/routing';

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function waitForFonts() {
  if ('fonts' in document) {
    const primaryFace = new FontFace(
      'Chen Yuluoyan',
      `url(${primaryFontUrl}) format('woff2')`,
      {
        style: 'normal',
        weight: '300',
      },
    );

    return primaryFace
      .load()
      .then((loadedFace) => {
        document.fonts.add(loadedFace);
        return document.fonts.load('1rem "Chen Yuluoyan"').then(() => undefined);
      })
      .catch(() => undefined);
  }

  return Promise.resolve();
}

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[linear-gradient(180deg,#f7efe8_0%,#f3e4da_45%,#eed9cf_100%)] px-6 text-center">
      <div className="envelope-loader" aria-hidden="true">
        <div className="envelope-loader__card">
          <div className="envelope-loader__heart" />
        </div>
        <div className="envelope-loader__body" />
        <div className="envelope-loader__front" />
        <div className="envelope-loader__flap" />
        <div className="envelope-loader__seal" />
      </div>
    </div>
  );
}

function App() {
  const [variant, setVariant] = useState(getVariantFromLocation());
  const [isReady, setIsReady] = useState(false);
  const params = new URLSearchParams(window.location.search);
  const submitted = params.get('submitted') === '1';
  const attendance = params.get('attendance');
  const invitation = getInvitationConfig(variant);

  useEffect(() => {
    const syncVariant = () => {
      setVariant(getVariantFromLocation());
    };

    window.addEventListener('popstate', syncVariant);
    window.addEventListener('hashchange', syncVariant);

    return () => {
      window.removeEventListener('popstate', syncVariant);
      window.removeEventListener('hashchange', syncVariant);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const fontReady = waitForFonts();

    const visualQueue = submitted
      ? []
      : [
          preloadImage(invitation.hero.primaryImage),
          preloadImage(invitation.hero.saveTheDateImage),
          preloadImage(invitation.gallery.photos[0]?.image ?? ''),
        ];

    const minimumDelay = new Promise((resolve) => window.setTimeout(resolve, 2200));
    const visualFallbackTimeout = new Promise((resolve) => window.setTimeout(resolve, 4000));
    const visualsReady = Promise.race([
      Promise.allSettled([...visualQueue, minimumDelay]),
      visualFallbackTimeout,
    ]);

    Promise.all([fontReady, visualsReady]).then(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [invitation, submitted]);

  if (submitted && (attendance === 'attending' || attendance === 'absent')) {
    return (
      <InvitationProvider invitation={invitation}>
        <SuccessPage attendance={attendance} />
      </InvitationProvider>
    );
  }

  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <InvitationProvider invitation={invitation}>
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
    </InvitationProvider>
  );
}

export default App;
