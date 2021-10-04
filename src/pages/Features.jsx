import Header from "./../components/Header";
import Todos from "./../components/Todos";
import Footer from "./../components/Footer";
import { FeatureProvider } from "./../context/feature-context";
import "./Features.scss";

export default function Features() {
  return (
    <FeatureProvider>
      <section id="features">
        <nav>
          <h1>کارهای روزانه</h1>
        </nav>
        <main className="todos-container">
          <Header />
          <Todos />
          <Footer />
        </main>
      </section>
    </FeatureProvider>
  );
}
