import useFetch from "./useFetch";
import CardList from "./CardList";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const { data, setData, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let history = useHistory();

  const showDetail = (id) => {
    console.log(id);
    history.push("/users/" + id);
  };

  const handleDelete = (id) => {
    const newDisplayCards = data.filter((d) => {
      return d.id !== id;
    });
    setData(newDisplayCards);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading.......</div>}
      {data && (
        <CardList
          displayCards={data}
          handleDelete={handleDelete}
          showDetail={showDetail}
        />
      )}
      ;{" "}
    </div>
  );
}

export default Home;
