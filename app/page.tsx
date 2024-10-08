import Header from "./components/Header";
import BoardSection from "./components/BoardSection";
import ClaimSection from "./components/ClaimSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <div>
    <main>
    <header>
      <Header />
      <div className="bg-[#ff75ff] rounded-tl-3xl rounded-tr-3xl">
      <BoardSection />
      <ClaimSection />
      <Footer />
      </div>
      </header>
      </main>
      </div>
    </>
  );
}
