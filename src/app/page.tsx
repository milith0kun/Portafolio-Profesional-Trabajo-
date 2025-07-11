import '../styles/globals.css';
import './page.css';
import { Metadata } from 'next';
import ClientOnly from '../utils/ClientOnly';
import AnimationScript from '../utils/AnimationScript';
import Sidebar from '../components/layout/Sidebar';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'Tu Nombre - Portafolio',
  description: 'Desarrollador Front End especializado en crear experiencias web modernas y accesibles.',
  keywords: ['portafolio', 'desarrollador frontend', 'react', 'typescript', 'next.js'],
  authors: [{ name: 'Tu Nomre' }],
  creator: 'Tu Nombre',
  themeColor: '#1a202c',
};

export default function Home() {
  return (
    <div className="container">
      <ClientOnly>
        <AnimationScript />
      </ClientOnly>
      <Sidebar />

      {/* Contenido Principal */}
      <main className="main-content">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
