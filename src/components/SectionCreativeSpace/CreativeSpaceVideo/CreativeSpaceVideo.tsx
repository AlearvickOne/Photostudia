import ReactPlayer from "react-player";
import classesCss from "./creativeSpaceVideo.module.scss";

import playVideoIcon from "../../../assets/iconPlayVideo.png";
import playVideoPreloadImg from "../../../assets/videoMoscowPreload.jpg";

export default function CreativeSpaceVideo(): JSX.Element {
  return (
    <div className={classesCss.creativeSpaceVideo}>
      <ReactPlayer
        url={"https://www.dropbox.com/scl/fi/is9qmbxnlq8lvvji4j8zb/photostudia.mp4?rlkey=p1rm8sn6z15dpui5qf8vcgoil&dl=0"}
        playing={true}
        controls={true}
        width={"100%"}
        height={"122%"}
        light={playVideoPreloadImg}
        playIcon={<img src={playVideoIcon} />}
      />
    </div>
  );
}
