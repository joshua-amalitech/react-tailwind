import { FC } from 'react';

import '../assets/styles/App.css';

import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/Section';

export const App : FC = () => {
  return (
    <div className="App h-screen">
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
}
