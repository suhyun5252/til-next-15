"use client";
import { createReviewAction } from "@/actions/create-review-action";
import style from "./editor.module.css";
import { useActionState, useEffect } from "react";

export default function Editor() {
  // React 19 버전 부터 적용가능
  // 서버액션의 상태를 파악해서 클라이언트에서 활요하는 방식
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  // state 가 변경되면 실행하기
  useEffect(() => {
    if (state && !state.status) {
      alert(state.message);
    }
  }, [state]);

  // 서버 액션이 진행중..
  if (isPending) {
    return <div>서버 액션 진행중...</div>;
  }
  //  서버 액션의 결과가 status 가 false 라면
  if (state?.status === false) {
    return <p>{state.message}</p>;
  }

  return (
    <div className={style.add_container}>
      <h3>제품 추가하기</h3>
      <form action={formAction} className={style.form_container}>
        <input type="hidden" name="id" value={500} readOnly />
        <div className={style.input_container}>
          <input
            type="text"
            name="title"
            placeholder="상품명"
            required
            defaultValue={"test product"}
            disabled={isPending}
          />
          <input
            type="text"
            name="price"
            placeholder="가격"
            required
            defaultValue={"13.5"}
            disabled={isPending}
          />
        </div>
        <textarea
          name="description"
          placeholder="설명"
          required
          defaultValue={"lorem..."}
          disabled={isPending}
        />
        <div className={style.input_container}>
          <input
            type="text"
            name="image"
            placeholder="이미지"
            required
            defaultValue={"https://i.pravatar.cc"}
            disabled={isPending}
          />
          <input
            type="text"
            name="category"
            placeholder="카테고리"
            required
            defaultValue={"category"}
            disabled={isPending}
          />
        </div>

        <button disabled={isPending} type="submit">
          {isPending ? "작성중..." : "작성하기"}
        </button>
      </form>
    </div>
  );
}
