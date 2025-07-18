import Slider from '../components/Slider';
import LeadershipSection from '../components/LeadershipSection';
import CoreServicesSection from '../components/CoreServicesSection';
import ServicesWeProvideSection from '../components/ServicesWeProvideSection';
import ConsultationSection from '../components/ConsultationSection';
import LatestNewsSection from '../components/LatestNewsSection';

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