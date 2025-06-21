import { useParams } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MinistryStats from "@/features/ministries/MinistryStats";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

// Import date ministere demo
import ministerEducatieData from "@/data/ministries/ministerul-educatiei.json";
import ministerSanatateData from "@/data/ministries/ministerul-sanatatii.json";
import ministerInfrastructuraData from "@/data/ministries/ministerul-infrastructurii.json";
import ministerFinanteData from "@/data/ministries/ministerul-finantelor.json";

const ministryDataMap: Record<string, any> = {
  educatie: ministerEducatieData,
  sanatate: ministerSanatateData,
  infrastructura: ministerInfrastructuraData,
  finante: ministerFinanteData,
};

export default function Minister() {
  const params = useParams();
  const ministryId = params.ministryId;

  if (!ministryId || !ministryDataMap[ministryId]) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="w-full max-w-md mx-auto bg-muted/30 rounded-xl border border-border">
            <CardContent className="pt-6">
              <div className="flex mb-4 gap-2 items-center">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <h1 className="text-2xl font-bold">Minister inexistent</h1>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Ministerul solicitat nu a fost găsit. Vă rugăm să verificați URL-ul sau să navigați la un minister valid.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const ministryData = ministryDataMap[ministryId];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MinistryStats ministryData={ministryData} />
      </main>
      <Footer />
    </div>
  );
}
