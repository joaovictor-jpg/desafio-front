import { AnalysisForm } from "@/component/AnalysisForm";
import { Footer } from "@/component/footer";
import { Header } from "@/component/header";
import { InfoSection } from "@/component/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-7xl flex-grow">
        <InfoSection />
        <AnalysisForm />
      </main>
      <Footer />
    </div>
  );
}
