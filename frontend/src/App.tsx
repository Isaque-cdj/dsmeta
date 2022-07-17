import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componets/Header";
import SalesCard from "./componets/SalesCard";

function App() {
  return (
    <>
    <ToastContainer />
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
