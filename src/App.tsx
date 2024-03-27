import Header from "./components/Header/Header";
import SectionOtherZones from "./components/SectionOtherZones/SectionOtherZones";
import SectionAction from "./components/SectionAction/SectionAction";
import SectionLoby from "./components/SectionContentLoby/SectionLoby";
import SectionCreativeSpace from "./components/SectionCreativeSpace/SectionCreativeSpace";
import SectionServices from "./components/SectionServices/SectionsServices";
import SectionActionListContent from "./components/SectionActionList/SectionActionListContent/SectionActionListContent";
import { SectionQustionsContent } from "./components/SectionQuestions/SectionQuestionsContent/SectionQustionsContent";

function App() {
  return (
    <>
      <Header />
      <main>
        <SectionLoby />
        <SectionOtherZones />
        <SectionAction />
        <SectionCreativeSpace />
        <SectionServices />
        {/*Дописать*/}
        <SectionActionListContent />
        <SectionQustionsContent />
      </main>
    </>
  );
}

export default App;
