import Header from "./components/Header/Header";
import OtherZonesTitle from "./components/OtherZones/OtherZonesTitle";
import OtherZonesContent from "./components/OtherZonesContent/OtherZonesContent";
import SectionLoby from "./components/SectionLoby";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionLoby />
        <OtherZonesTitle />
        <OtherZonesContent />
      </main>
    </>
  );
}

export default App;
