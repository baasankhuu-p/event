import Header from "./component/Header";
import About from "./screens/About";
import Contacts from "./screens/Contacts";
import Schedule from "./screens/Schedule";
import Speakers from "./screens/Speakers";
import Sponsers from "./screens/Sponsors";
import Community from "./screens/Community";
import Info from "./screens/Info";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Community />
      <Info/>
      <Speakers />
      <Schedule />
      <Sponsers />
      <Contacts />
    </div>
  );
}
