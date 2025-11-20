import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import CompanyAbout from '../components/CompanyAbout'
import Stats from '../components/Stats'
import CompanyValues from '../components/CompanyValues'
import Features from '../components/Features'
import ValueChain from '../components/ValueChain'
import ProjectsMap from '../components/ProjectsMap'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <VideoSection />
      <CompanyAbout />
      <Stats />
      <CompanyValues />
      <Features />
      <ValueChain />
      <ProjectsMap />
      <CTA />
    </div>
  )
}

export default Home
