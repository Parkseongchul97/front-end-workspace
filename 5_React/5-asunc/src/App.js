import { getFetchThen, getAwait, getAxios } from "./api/movie";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      setData(result);
    });
  };
  const loadAwait = async () => {
    const result = await getAwait();
    setData(result);
  };
  const loadAxios = async () => {
    setData(await getAxios());
  };
  useEffect(() => {
    // 첫실행 상황에
    // loadFetchThen();
    // loadAwait();
    loadAxios();
  }, []);
  return (
    <>
      <div>
        {data.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <h2>{movie.genre}</h2>
            <p>{movie.actor}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
