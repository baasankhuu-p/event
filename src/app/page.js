import Header from "./component/Header";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Schedule from "./screens/Schedule";
import Speakers from "./screens/Speakers";
import Sponsers from "./screens/Sponsors";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Schedule />
      <Speakers />
      <Sponsers />
      <Contacts />
    </div>
  );
}
