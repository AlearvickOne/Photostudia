import Header from "./components/Header/Header";
import OtherZonesTitle from "./components/OtherZones/OtherZonesTitle";
import OtherZonesContentLoby from "./components/OtherZonesContent/OtherZonesContentLoby";
import SectionLoby from "./components/SectionContentLoby/SectionLoby";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionLoby />
        <OtherZonesTitle />
        <OtherZonesContentLoby />
      </main>
    </>
  );
}

export default App;
