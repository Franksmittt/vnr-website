import dynamic from 'next/dynamic';
import Slider from '../components/Slider';
import LeadershipSection from '../components/LeadershipSection';

// These components are below the initial viewport. We'll load them only when needed.
const CoreServicesSection = dynamic(() => import('../components/CoreServicesSection'));
const ServicesWeProvideSection = dynamic(() => import('../components/ServicesWeProvideSection'));
const ConsultationSection = dynamic(() => import('../components/ConsultationSection'));
const LatestNewsSection = dynamic(() => import('../components/LatestNewsSection'));

// Add a specific meta description for the homepage to override the root layout.
export const metadata = {
  title: 'VNR | Strategic Wealth & Tax Advisory in South Africa',
  description: 'VNR provides expert tax compliance, financial reporting, and business advisory services in Centurion. Partner with industry leaders to facilitate sustainable wealth.',
};

export default function Home() {
  return (
    <>
      <Slider />
      <LeadershipSection />
      <CoreServicesSection />
      <ServicesWeProvideSection />
      <ConsultationSection />
      <LatestNewsSection />
    </>
  );
}