import { GoodDataType } from "@/types/types";
import GoodItem from "./good-item";

export default async function RandomGoods() {
  let resRandomGoods: GoodDataType[] = [];
  try {
    const resRandom = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?limit=3`,
      {
        next: {
          revalidate: 3,
        },
      }
    );
    resRandomGoods = await resRandom.json();
    // console.log(resRandomGoods);
  } catch (error) {
    console.log(error);
  }

  if (resRandomGoods.length === 0) {
    return <div>상품이 없습니다.</div>;
  }

  return (
    <>
      {resRandomGoods.map((good) => (
        <GoodItem key={good.id} {...good} />
      ))}
    </>
  );
}
