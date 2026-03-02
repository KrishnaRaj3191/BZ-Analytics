import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Entry from "@/pages/Entry";
import SuccessStories from "@/pages/SuccessStories";

  
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
