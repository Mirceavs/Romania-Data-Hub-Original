import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCarousel from "@/components/NewsCarousel";
import NationalIndicators from "@/features/indicators/NationalIndicators";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BarChart3, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparența<br />
            <span className="text-blue-200">Fondurilor Publice</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Monitorizarea și analiza în timp real a modului în care sunt gestionate și cheltuite fondurile publice în România
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sector/educatie">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Explorează Sectoarele
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent border-2">
                Află mai multe
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News Carousel */}
      <NewsCarousel />

      {/* National Indicators */}
      <NationalIndicators />

      {/* Data Visualization Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Vizualizări Interactive</h2>
            <p className="text-lg text-muted-foreground">
              Analizează tendințele și evoluțiile prin grafice interactive și dashboards detaliate
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Evoluția PIB-ului României</h3>
              <div className="h-64 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-muted-foreground">Grafic PIB România 2019-2024</p>
                  <p className="text-sm text-muted-foreground mt-2">Creștere 27% în ultimii 5 ani</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Distribuția bugetului pe sectoare</h3>
              <div className="h-64 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="w-8 h-8 text-green-400" />
                  </div>
                  <p className="text-muted-foreground">Distribuție buget pe sectoare</p>
                  <p className="text-sm text-muted-foreground mt-2">Sănătate: 22.1 Mrd • Educație: 18.5 Mrd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">Despre Romania Data Hub</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Platforma România Data Hub oferă cetățenilor accesul la informații transparente și actualizate despre cheltuielile publice, 
              indicatorii economici și demografici, contribuind la creșterea transparenței și responsabilității guvernamentale.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Misiunea noastră este să democratizăm accesul la datele publice și să facilităm participarea civică informată 
              în procesele de luare a deciziilor care ne afectează pe toți.
            </p>
            <Link href="/about">
              <Button size="lg">
                Citește mai mult
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
