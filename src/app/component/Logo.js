const logo = require("../assets/img/logo.png");
import Image from "next/image";
export default function Logo() {
  return (
    <a href="/" className="flex h-1/2 w-full lg:justify-center py-2">
      <Image src={logo} alt="me" width="80" height="40" />
    </a>
  );
}
