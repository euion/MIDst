import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  DBCEmotionBtn,
  DiaryBottomCard,
  DiaryBottomOpenCard,
} from "../../styles/diary/DiaryBottomCard";

import DiaryEmotionInfoModal from "./DiaryEmotionInfoModal";
import * as Api from "../../api";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const DiaryBottom = (): JSX.Element => {
  const location = useLocation();
  const [isToggle, isSetToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const [emotion, setEmotion] = useState("");
  const { detail } = useParams();
  const [description, setDescription] = useState();

  useEffect(() => {
    isSetToggle(false);
  }, [location.pathname]);

  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const response = await Api.get(`diaries/${detail}`);
        setDescription(response.data.data.description);
        setEmotion(response.data.data.emotion);
      } catch {
        console.log("연결실패");
      }
    };
    getDetailPost();
  }, [detail, isToggle]);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    isSetToggle(!props);
    onPostEmotion();
  };

  const onPostEmotion = async () => {
    try {
      const emotionsPost = await Api.post(`diaries/${detail}/emotions`, {
        description: description,
      });
      setEmotion(emotionsPost.data.data.emotion);
    } catch {
      console.log("감정연결실패");
    }
  };

  if (!isToggle) {
    return (
      <>
        <DiaryBottomCard>
          <h3>Emotion Recognition</h3>
          <DBCEmotionBtn onClick={ClickHandler(isToggle)}>
            <p>Start</p> <ArrowRightOutlined />
          </DBCEmotionBtn>
        </DiaryBottomCard>
      </>
    );
  } else {
    return (
      <>
        <DiaryBottomOpenCard>
          <div className="DBOC-top">
            <h3>Emotion Recognition</h3>
            {/* <InfoCircleOutlined
              onClick={() => {
                setModal(!modal);
              }}
            /> */}
            {/* {modal === true ? <DiaryEmotionInfoModal /> : null} */}
          </div>
          <div className="DBOC-bottom">{isToggle && <h2>{emotion}</h2>}</div>
          <DBCEmotionBtn onClick={ClickHandler(isToggle)}>
            <p>Close</p> <ArrowRightOutlined />
          </DBCEmotionBtn>
        </DiaryBottomOpenCard>
      </>
    );
  }
};
export default DiaryBottom;
