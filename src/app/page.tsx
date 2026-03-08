import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Entry from "@/src/app/Entry/page";
import SuccessStories from "@/src/app/SuccessStories/page";

  
export default function Home() {
  return (
      <main>
        <Header/>
        <Entry/>
        <SuccessStories/>
        <Footer/>
      </main>
  );
}
