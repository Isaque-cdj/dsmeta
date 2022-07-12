import Header from "./componets/Header";
import SalesCard from "./componets/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-contanner">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
