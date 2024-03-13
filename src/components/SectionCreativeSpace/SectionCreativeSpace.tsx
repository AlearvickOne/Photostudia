import CreativeSpaceEquipment from "./CreativeSpaceEquipment/CreativeSpaceEquipment";
import CreativeSpaceTitle from "./CreativeSpaceTitle/CreativeSpaceTitle";
import CreativeSpaceVideo from "./CreativeSpaceVideo/CreativeSpaceVideo";

export default function SectionCreativeSpace(): JSX.Element {
  return (
    <section>
      <CreativeSpaceTitle />
      <CreativeSpaceVideo />
      <CreativeSpaceEquipment />
    </section>
  );
}
