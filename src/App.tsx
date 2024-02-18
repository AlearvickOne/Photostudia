import Header from "./components/Header/Header";
import OtherZonesTitle from "./components/OtherZones/OtherZonesTitle";
import OtherZonesContentLoby from "./components/OtherZones/OtherZonesContent/OtherZonesContentLoby";
import SectionAction from "./components/SectionAction/SectionAction";
import SectionLoby from "./components/SectionContentLoby/SectionLoby";
import SectionCreativeSpace from "./components/SectionCreativeSpace/SectionCreativeSpace";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionLoby />
        <OtherZonesTitle />
        <OtherZonesContentLoby />
        <SectionAction />
        <SectionCreativeSpace />
      </main>
    </>
  );
}

export default App;
