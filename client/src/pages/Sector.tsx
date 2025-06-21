import { useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectorStats from "@/features/sectors/SectorStats";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

// Import sector data
import educatieData from "@/data/sectors/educatie.json";
import sanatateData from "@/data/sectors/sanatate.json";
import economieData from "@/data/sectors/economie.json";
import infrastructuraData from "@/data/sectors/infrastructura.json";
import energieData from "@/data/sectors/energie.json";
import inovatieData from "@/data/sectors/inovatie.json";

const sectorDataMap: Record<string, any> = {
  educatie: educatieData,
  sanatate: sanatateData,
  economie: economieData,
  infrastructura: infrastructuraData,
  energie: energieData,
  inovatie: inovatieData,
};

export default function Sector() {
  const params = useParams();
  const sectorId = params.sectorId;

  if (!sectorId || !sectorDataMap[sectorId]) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="w-full max-w-md mx-auto bg-muted/30 rounded-xl border border-border">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-2 items-center">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <h1 className="text-2xl font-bold">Sector inexistent</h1>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Sectorul solicitat nu a fost găsit. Vă rugăm să verificați URL-ul sau să navigați la un sector valid.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const sectorData = sectorDataMap[sectorId];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SectorStats sectorData={sectorData} />
      </main>
      <Footer />
    </div>
  );
}
