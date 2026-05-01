import Header from "./components/sections/Header";
import HandedThis from "./components/sections/HandedThis";
import NFS from "./components/sections/NFS";
import How from "./components/sections/How";
import Defs from "./components/sections/Defs";
import Pull from "./components/sections/Pull";
import Fault from "./components/sections/Fault";
import FooterCTA from "./components/sections/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HandedThis />
      <NFS />
      <How />
      <Defs />
      <Pull />
      <Fault />
      <FooterCTA />
    </div>
  );
}
