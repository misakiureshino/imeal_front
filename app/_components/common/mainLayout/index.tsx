"use client"
import { useBase } from "@/app/_context/baseContext";

import Header from "../header";
import Loading from "../loading";
import ErrorMessage from "../../error/errorMessage";
import { GETTING_ERROR, PAGE_LABELS } from "@/app/_constants/pageText";
import { useUser } from "@/app/_context/userContext";

// メインレイアウト（拠点IDの取得状況による表示）
const MainLayout = ({children}: {children: React.ReactNode}) => {
  // 拠点コンテキスト
  const {bases, base, isBaseLoading} = useBase();
  // ユーザーコンテキスト
  const {user} = useUser();
  
  // ローディング中
  if(isBaseLoading){
    return <Loading />
  }

  // 拠点データが取得できなかった場合
  if(bases === null || base === null){
    return <ErrorMessage errorMessage={GETTING_ERROR(PAGE_LABELS.BASE.VARIABLE_NAME)}/>
  }
  return(
    <>
    <Header bases={bases} base={base} user={user} />
    <main>
      {children}
    </main>
    </>
  );
};

export default MainLayout;