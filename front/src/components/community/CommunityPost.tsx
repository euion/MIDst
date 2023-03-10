import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import { CommunityCreateBtnAlignStyled } from "../../styles/community/CommunityCreate";
import {
  CommunityPostAlignStyled,
  CommunityPostBtn,
  CPContentStyled,
  CPTopAlignStyled,
  CPTopInfoAlign,
} from "../../styles/community/CommunityPost";
import UserProfile from "../common/UserProfile";
import * as Api from "../../api";
import { CommunityPropsType } from "./CommunityList";
import { useEffect, useState } from "react";

const CommunityPost = ({
  id,
  title,
  description,
  createdAt,
  author,
  reply,
  like,
}: CommunityPropsType): JSX.Element => {
  const postCreatedAt = dayjs();
  const [isLike, setIsLike] = useState(like);
  const [currentUser, setCurrentUser] = useState("");
  const { communityDetail } = useParams();
  const navigate = useNavigate();

  const onCancel = async () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      try {
        const onDelete = await Api.delete(`posts/${communityDetail}`);
        navigate("/community");
      } catch {}
    }
  };

  const onClickHeart = async () => {
    const onLikePost = await Api.post(`likes/${communityDetail}/like`, {
      like: true,
    });
    if (onLikePost.status !== 200) {
      console.log(onLikePost);
    } else {
      setIsLike((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const onViewHeart = async () => {
      const onLikeGet = await Api.get(`likes/${communityDetail}`);

      if (onLikeGet.status !== 200) {
        console.log(onLikeGet);
      } else {
        setIsLike(onLikeGet.data.data.count._count);
      }
    };
    const onUserCheck = async () => {
      try {
        const res = await Api.get(`user/currentUser`);
        setCurrentUser(res.data[0].name);
      } catch {
        console.log("err");
      }
    };
    onUserCheck();
    onViewHeart();
  }, [isLike]);

  const onEdit = () => {
    navigate(`/community/${communityDetail}/edit`);
  };

  return (
    <>
      <CommunityPostAlignStyled>
        <CPContentStyled>
          <CPTopAlignStyled>
            <CPTopInfoAlign>
              <li className="postInfo">
                <ClockCircleOutlined />
                {postCreatedAt.diff(createdAt, "h")}시간 전
              </li>
              <li className="postInfo">
                <HeartOutlined onClick={onClickHeart} />
                {isLike}
              </li>
              <li className="postInfo">
                <MessageOutlined />
                {reply}
              </li>
            </CPTopInfoAlign>
            <UserProfileStyled>
              <li className="profile-align">
                <UserProfile />
                <h3>{author}</h3>
              </li>
            </UserProfileStyled>
          </CPTopAlignStyled>

          <li>
            <h3 className="CPContent-title">{title}</h3>
          </li>
          <p>{description}</p>
          {}
          <CommunityCreateBtnAlignStyled>
            {currentUser === author && (
              <CommunityPostBtn>
                <button onClick={onCancel} className="delete">
                  삭제
                </button>
                <button type="submit" onClick={onEdit}>
                  수정
                </button>
              </CommunityPostBtn>
            )}
          </CommunityCreateBtnAlignStyled>
        </CPContentStyled>
      </CommunityPostAlignStyled>
    </>
  );
};

export default CommunityPost;
