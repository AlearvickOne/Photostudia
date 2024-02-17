import Header from "./components/Header/Header";
import OtherZonesTitle from "./components/OtherZones/OtherZonesTitle";
import OtherZonesContentLoby from "./components/OtherZonesContent/OtherZonesContentLoby";
import SectionAction from "./components/SectionAction/SectionAction";
import SectionLoby from "./components/SectionContentLoby/SectionLoby";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionLoby />
        <OtherZonesTitle />
        <OtherZonesContentLoby />
        <SectionAction />
      </main>
    </>
  );
}

export default App;
