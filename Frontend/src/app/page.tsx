import type { Metadata } from "next";
import Textbox from "../components/textbox/textbox";

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "Website to shorten URL for convenience",
};

export default function Page() {
  return (
    <div>
      <h1>Redirecting index page goes here</h1>
      <Textbox />
    </div>
  );
}
