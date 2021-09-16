import { data } from "autoprefixer";
import Loading from "react-loading";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  return (
    <>
      <Navbar />
      {loading && <Loading type={"spin"} delay={100} color={"#EF4444"} />}
      <Home pokemons={data} />
    </>
  );
}

export default App;
