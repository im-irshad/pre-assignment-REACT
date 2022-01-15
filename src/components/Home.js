import useFetch from "./useFetch";
import CardList from "./CardList";

function Home() {
  const { data, setData, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

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
        <CardList displayCards={data} handleDelete={handleDelete} />
      )};{" "}
    </div>
  );
}

export default Home;
