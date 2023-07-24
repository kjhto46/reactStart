import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("항상실행");
  useEffect(() => {
    console.log("한번만 실행되는 useEffect");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("검색 중", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭하기</button>
    </div>
  );
}

export default App;
