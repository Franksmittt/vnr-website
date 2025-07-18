import Slider from '../components/Slider';
import LeadershipSection from '../components/LeadershipSection';
import CoreServicesSection from '../components/CoreServicesSection';
import ServicesWeProvideSection from '../components/ServicesWeProvideSection';
import ConsultationSection from '../components/ConsultationSection';
import LatestNewsSection from '../components/LatestNewsSection';

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