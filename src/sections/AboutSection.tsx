import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Timeline } from '../components/Timeline';

export const AboutSection: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 border-b border-border relative bg-background-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="LEARNING TIMELINE"
          title="MORE THAN A COURSE."
          highlight="A JOURNEY OF DISCOVERY."
          subtitle="This portfolio documents my progression through Advanced Python Programming, from understanding programming concepts to exploring data analytics, collaborative learning, accessibility innovation and practical software development."
        />

        <div className="mt-12">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

