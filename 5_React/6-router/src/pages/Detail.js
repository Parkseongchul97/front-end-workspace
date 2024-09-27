import { useParams, useSearchParams } from "react-router-dom";
const Detail = () => {
  const params = useParams();
  const [search, setSearch] = useSearchParams();
  const { id } = useParams(); // js 구조분해할당

  const page = search.get("page");
  const keyword = search.get("keyword");

  return (
    <>
      <h1>Detail {params.id}</h1>
      <h2>페이지 : {page}</h2>
      <h2>키워드 : {keyword}</h2>
    </>
  );
};
export default Detail;
