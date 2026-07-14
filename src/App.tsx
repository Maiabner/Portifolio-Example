import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Bio } from "./components/Bio";
import { Timeline } from "./components/Timeline";
import { Metodo } from "./components/Competencias";
import { Cases } from "./components/Cases";
import { Stats } from "./components/Stats";
import { Contato } from "./components/Contato";

export default function App() {
  return (
    <main className="site-bg">
      <Nav />
      <Hero />
      <Ticker />
      <Bio />
      <Timeline />
      <Metodo />
      <Cases />
      <Stats />
      <Contato />
    </main>
  );
}