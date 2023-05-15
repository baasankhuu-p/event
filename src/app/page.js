import Header from "./component/Header";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Partners from "./screens/Partners";
import Schedule from "./screens/Schedule";
import Speakers from "./screens/Speackers";
import Store from "./screens/Store";
import Workshops from "./screens/Workshops";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Schedule />
      <Speakers />
      <Partners />
      <Store />
      <Workshops />
      <Contacts />
    </div>
  );
}
