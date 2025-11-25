// Home.jsx - דף הבית (ללא ProjectsMap)
import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import CompanyAbout from '../components/CompanyAbout';
import BuildingScrollAnimation from '../components/BuildingScrollAnimation';
import Stats from '../components/Stats';
import CompanyValues from '../components/CompanyValues';
import Features from '../components/Features';
import ValueChain from '../components/ValueChain';
import WhyEshkol from '../components/WhyEshkol';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoSection />
      <CompanyAbout />
      <Stats />
      <WhyEshkol />
      <BuildingScrollAnimation />
      <CompanyValues />
      <Features />
      <ValueChain />
      <CTA />
    </main>
  );
};

export default Home;