import Footer from "../components/Footer";
import Head from "../components/Head";
import "../css/Home.css";
export default function Home() {
  return (
    <>
      <div className="containerHome">
        <Head name="#VANLIFE" />
      </div>
      <div className="containerBody">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button>Find your van</button>
      </div>
      <Footer name="#VANLIFE" />
    </>
  );
}
