import type { Metadata } from "next";
import Dashboard from "../components/dashboard/dashboard";
//import Textbox from "../components/textbox/textbox";
//import History from "../components/history";
import "../styles/page.scss";

export const metadata: Metadata = {
  title: "ZipURL - A Fast and Efficient Link Shortener",
  description:
    "Simple, Fast and Free URL Shortener. Track link performance, history and more. Team up with your friends and colleagues.",
};

export default function Page() {
  return (
    <div className="page-container">
      <h1 className="underline">Empower your links, Embrace Simplicity.</h1>
      <h2>ZipURL - Where Every Link Finds Its Shortcut</h2>
      <Dashboard /> {/* Keeping the Dashboard component from the 'dashboard' branch */}
      {/*<Textbox onShorten={undefined} /> */}
      {/*<History agent={'user'} id={0}/> */}
    </div>
  );
}


