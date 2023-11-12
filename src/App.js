import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  const cards = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        pHeading={item.placeHeading}
        pImg1={item.placeImg1}
        pImg2={item.placeImg2}
        pImg3={item.placeImg3}
        pDesc={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <section className="card-container">{cards}</section>
    </div>
  );
}

export default App;
