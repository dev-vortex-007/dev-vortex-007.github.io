import Navbar from "./components/common/Navbar";
import ThemeToggle from "./components/common/ThemeToggle";
import Hero from "./components/home/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <ThemeToggle />
    </>
  );
};

export default App;