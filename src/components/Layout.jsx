import { Footer } from "./Footer/footer";
import { Navbar } from "./Navbar/navbar";

export default function Layout(props) {

  return (
    <div className="wrapper">
      <Navbar />
        {props.children}
      <Footer />
    </div>
  );
}