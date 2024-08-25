import Banner from "./(components)/Banner";
import Intro from "./(components)/Intro";
import WhoAmI from "./(components)/WhoAmI";
import Services from "./(components)/Services";
import HorseProfile from "./(components)/HorseProfile";
import Events from "./(components)/Events";
import Testimonials from "./(components)/Testimonials";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center items-center flex-col mt-16">
      <Banner />
      <section className="w-full flex flex-col justify-center items-center gap-32 px-5 py-10 max-w-screen-2xl mx-auto md:px-14 lg:px-28">
        <Intro />
        <WhoAmI />
        <Services />
        <HorseProfile />
        <Events />
        <Testimonials />
      </section>
    </main>
  );
}
