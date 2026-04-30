import Header from "./components/Header";
import HandedThis from "./components/HandedThis";
import NFS from "./components/NFS";
import How from "./components/How";
import Defs from "./components/Defs";
import Pull from "./components/Pull";
import Fault from "./components/Fault";
import FooterCTA from "./components/FooterCTA";

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
