import { useEffect, useState } from "react";

function Hello() {
  // function byFn() {
  //   console.log("종료하기 🥹");
  // }
  // function hiFn() {
  //   console.log('생성하기 😀');
  //   return byFn;
  // }
  // useEffect(hiFn, []); // 이런식으로 return을 이용해 useEffect의 보이는 반대도 제어 가능, 단 아래처럼 useEffect안에 다 쓰는 방향을 선호
  useEffect(() => {
    console.log("생성하기 😀");
    return () => {
      console.log('종료하기 🥹')
    }
  }, []);
  return <h1>안녕하세요?</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "숨김" : "보이기"}</button>
    </div>
  );
}

export default App;
