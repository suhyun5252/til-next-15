import style from "@/app/(width-search)/search/page.module.css";
import GoodItem from "@/components/good-item";
import { GoodDataType } from "@/types/types";
// 쿼리 처리하기
// 아래 페이지는 쿼리를 서버에서 읽어 처리
// http://localhost:3000/search?keyword=%ED%9E%A3
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;
  // 제품 카테고리 검색으로 처리
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${keyword}`
  );
  const goods: GoodDataType[] = await res.json();

  if (goods.length === 0) {
    return <div>{keyword} 카테고리에 해당되는 제품이 없습니다.</div>;
  }

  return (
    <div className={style.container}>
      <h4>
        카테고리명 - <strong>{keyword}</strong> : 검색페이지
      </h4>
      <div>
        {goods.map((good) => (
          <GoodItem key={good.id} {...good} />
        ))}
      </div>
    </div>
  );
}
