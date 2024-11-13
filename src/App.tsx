import Image from "./components/Image";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <main className="font-Outfit min-h-screen p-6 bg-mainBG flex justify-center items-center">
      <section className="rounded-xl p-6 bg-cardBg flex flex-col gap-5">
        <Image/>
        <MainContent/>
      </section>
    </main>
  )
}