import React from 'react';
import { TopNavBar } from './core/components/navigation/top-nav-bar';
import { LocaleProvider } from './core/localization/locale.context';
import { ThemeProvider } from './core/theme/theme.context';
import { AboutBasaSection } from './presentation/features/about-basa/about-basa-section';
import { AboutEuySection } from './presentation/features/about-euy/about-euy-section';
import { DownloadsSection } from './presentation/features/downloads/downloads-section';
import { FeaturesShowcaseSection } from './presentation/features/features-showcase/features-showcase-section';
import { FooterSection } from './presentation/features/footer/footer-section';
import { HeroSection } from './presentation/features/hero/hero-section';
import { InspectorSection } from './presentation/features/inspector/inspector-section';
import { PhilosophySection } from './presentation/features/philosophy/philosophy-section';
import { StudySamplerSection } from './presentation/features/sampler/study-sampler-section';
import { SocietySection } from './presentation/features/society/society-section';

export function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <div className="min-h-screen flex flex-col bg-[#FAFAF8] dark:bg-[#0F1417] text-[#2F3A3F] dark:text-[#E8EFF1] font-sans antialiased transition-colors duration-200">
          <TopNavBar />
          <main className="flex-1">
            <HeroSection />
            <AboutBasaSection />
            <StudySamplerSection />
            <AboutEuySection />
            <PhilosophySection />
            <SocietySection />
            <FeaturesShowcaseSection />
            <DownloadsSection />
            <InspectorSection />
          </main>
          <FooterSection />
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
