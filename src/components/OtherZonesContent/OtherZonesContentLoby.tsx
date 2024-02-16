import OtherZonesContent from "./OtherZonesContent";

export default function OtherZonesContentLoby(): JSX.Element {
  return (
    <>
      <OtherZonesContent isReversed={false} />
      <OtherZonesContent isReversed={true} />
      <OtherZonesContent isReversed={false} />
    </>
  );
}
