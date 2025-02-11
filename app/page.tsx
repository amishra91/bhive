import DownloadApp from '@/components/DownloadApp';
import Facilities from '@/components/Facilities';
import Hero from '@/components/Hero';
import SpaceOverview from '@/components/SpaceOverview';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8faff]">
      <Hero
        heading="Host your meeting with world-class amenities. Starting at"
        price="199"
        imageSrc="/assets/images/video.png"
      />
      <Facilities />
      <SpaceOverview />
      <DownloadApp />
    </main>
  );
}
