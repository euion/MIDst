import { atom } from "recoil";

export interface CommunityType {
  id: number;
  userId: string;
  title: string;
  description: string;
  createdAt: string;
  count: {
    reply: number;
    like: number;
  };
}

export const communityState = atom<CommunityType[]>({
  key: "ComunityPost",
  default: [
    {
      id: 0,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "미드로 공부하는 방법 총정리",
      description:
        "미국 드라마 중에 Friends를 아시나요? 오늘은 미드중 하나일 FRIENDS로 공부하는 방법에대해 알아보려고 합니다. 저는 총 3가지 방법을 제시하려고 하는데요 첫번째는 드라마를 시청하는 것입니다.",
      createdAt: "2022-11-30T16:41:44.951Z",
      count: {
        reply: 0,
        like: 0,
      },
    },
    {
      id: 1,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "어떤 미드를 공부할지 모르는 당신을 위한 추천",
      description:
        "어떤 미드를 공부할까요? 일상적인 것내용이 전문적인 것보다는 평범한 내용이 좋습니다. 전문적인 것은 전문용어가 많이 나와서 공부해도 쓸 확률이 적을 수 있거든요.특히나 비속어나 욕이 난무하는 미드도 썩 좋지 않습니다. 아무래도 미드는 자극적인 요소가 많이 가미되어야 인기를 끄니 미드는 특히나 과한 표현이 많을 수 밖에 없는데요. 예를 들어, 외국인이 한국어 공부한다고 생각해보자고요. ‘골로 가고싶냐?’, ‘뒤진다’ 이런 말을 외국인이 한국어 실력 향상을 위해 열심히 공부한다고 생각해 보자고요. 혹은, 응팔의 욕이나 사투리, 이상한 말을 열심히 공부한다고 생각하면 딱 답이 나올거 같아요. 이런거 아무리 많이 배워봤자 일상생활에서 쓸 수 있는 상황은 지극히 적을 뿐더라 이런 말로 관계를 나쁘게 만들거면 차라리 말 안하는게 더 낫습니다. 또한 메디컬 용어나 법적용어가 가득한 미드도 마찬가지겠죠? 소소한 일상, 반복적인 일상이 많이 나오는 미드가 사실 가장 좋습니다. 물론 법정드라마를 좋아하신다면 법정용어를 거르며 공부해도 되겠죠.",
      createdAt: "2022-12-01T16:41:44.951Z",
      count: {
        reply: 0,
        like: 5,
      },
    },
    {
      id: 2,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "무슨 미국드라마를 선택해야 할지 모르겠다면",
      description:
        "어떤 미드를 공부할까요? 일상적인 것내용이 전문적인 것보다는 평범한 내용이 좋습니다. 전문적인 것은 전문용어가 많이 나와서 공부해도 쓸 확률이 적을 수 있거든요.특히나 비속어나 욕이 난무하는 미드도 썩 좋지 않습니다. 아무래도 미드는 자극적인 요소가 많이 가미되어야 인기를 끄니 미드는 특히나 과한 표현이 많을 수 밖에 없는데요. 예를 들어, 외국인이 한국어 공부한다고 생각해보자고요. ‘골로 가고싶냐?’, ‘뒤진다’ 이런 말을 외국인이 한국어 실력 향상을 위해 열심히 공부한다고 생각해 보자고요. 혹은, 응팔의 욕이나 사투리, 이상한 말을 열심히 공부한다고 생각하면 딱 답이 나올거 같아요. 이런거 아무리 많이 배워봤자 일상생활에서 쓸 수 있는 상황은 지극히 적을 뿐더라 이런 말로 관계를 나쁘게 만들거면 차라리 말 안하는게 더 낫습니다. 또한 메디컬 용어나 법적용어가 가득한 미드도 마찬가지겠죠? 소소한 일상, 반복적인 일상이 많이 나오는 미드가 사실 가장 좋습니다. 물론 법정드라마를 좋아하신다면 법정용어를 거르며 공부해도 되겠죠.",
      createdAt: "2022-12-03T16:41:44.951Z",
      count: {
        reply: 0,
        like: 3,
      },
    },
  ],
});

export const communityState = atom<CommunityType[]>({
  key: "ComunityPost",
  default: [
    {
      id: 0,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "미드로 공부하는 방법 총정리",
      description:
        "미국 드라마 중에 Friends를 아시나요? 오늘은 미드중 하나일 FRIENDS로 공부하는 방법에대해 알아보려고 합니다. 저는 총 3가지 방법을 제시하려고 하는데요 첫번째는 드라마를 시청하는 것입니다.",
      createdAt: "2022-11-30T16:41:44.951Z",
      count: {
        reply: 0,
        like: 0,
      },
    },
    {
      id: 1,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "어떤 미드를 공부할지 모르는 당신을 위한 추천",
      description:
        "어떤 미드를 공부할까요? 일상적인 것내용이 전문적인 것보다는 평범한 내용이 좋습니다. 전문적인 것은 전문용어가 많이 나와서 공부해도 쓸 확률이 적을 수 있거든요.특히나 비속어나 욕이 난무하는 미드도 썩 좋지 않습니다. 아무래도 미드는 자극적인 요소가 많이 가미되어야 인기를 끄니 미드는 특히나 과한 표현이 많을 수 밖에 없는데요. 예를 들어, 외국인이 한국어 공부한다고 생각해보자고요. ‘골로 가고싶냐?’, ‘뒤진다’ 이런 말을 외국인이 한국어 실력 향상을 위해 열심히 공부한다고 생각해 보자고요. 혹은, 응팔의 욕이나 사투리, 이상한 말을 열심히 공부한다고 생각하면 딱 답이 나올거 같아요. 이런거 아무리 많이 배워봤자 일상생활에서 쓸 수 있는 상황은 지극히 적을 뿐더라 이런 말로 관계를 나쁘게 만들거면 차라리 말 안하는게 더 낫습니다. 또한 메디컬 용어나 법적용어가 가득한 미드도 마찬가지겠죠? 소소한 일상, 반복적인 일상이 많이 나오는 미드가 사실 가장 좋습니다. 물론 법정드라마를 좋아하신다면 법정용어를 거르며 공부해도 되겠죠.",
      createdAt: "2022-12-01T16:41:44.951Z",
      count: {
        reply: 0,
        like: 5,
      },
    },
    {
      id: 2,
      userId: "9f215230-70c6-11ed-9305-09f6ced2f775",
      title: "무슨 미국드라마를 선택해야 할지 모르겠다면",
      description:
        "어떤 미드를 공부할까요? 일상적인 것내용이 전문적인 것보다는 평범한 내용이 좋습니다. 전문적인 것은 전문용어가 많이 나와서 공부해도 쓸 확률이 적을 수 있거든요.특히나 비속어나 욕이 난무하는 미드도 썩 좋지 않습니다. 아무래도 미드는 자극적인 요소가 많이 가미되어야 인기를 끄니 미드는 특히나 과한 표현이 많을 수 밖에 없는데요. 예를 들어, 외국인이 한국어 공부한다고 생각해보자고요. ‘골로 가고싶냐?’, ‘뒤진다’ 이런 말을 외국인이 한국어 실력 향상을 위해 열심히 공부한다고 생각해 보자고요. 혹은, 응팔의 욕이나 사투리, 이상한 말을 열심히 공부한다고 생각하면 딱 답이 나올거 같아요. 이런거 아무리 많이 배워봤자 일상생활에서 쓸 수 있는 상황은 지극히 적을 뿐더라 이런 말로 관계를 나쁘게 만들거면 차라리 말 안하는게 더 낫습니다. 또한 메디컬 용어나 법적용어가 가득한 미드도 마찬가지겠죠? 소소한 일상, 반복적인 일상이 많이 나오는 미드가 사실 가장 좋습니다. 물론 법정드라마를 좋아하신다면 법정용어를 거르며 공부해도 되겠죠.",
      createdAt: "2022-12-03T16:41:44.951Z",
      count: {
        reply: 0,
        like: 3,
      },
    },
  ],
});
