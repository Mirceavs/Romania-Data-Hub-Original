import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Users, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Despre Romania Data Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O platformă dedicată transparenței și responsabilității în gestionarea fondurilor publice din România
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-primary" />
                Misiunea Noastră
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Să democratizăm accesul la informațiile publice și să oferim cetățenilor români instrumentele necesare 
                pentru a înțelege și monitoriza modul în care sunt gestionate și cheltuite fondurile publice. 
                Credem că transparența este fundamentul unei democrații sănătoase.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-primary" />
                Viziunea Noastră
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                O Românie în care fiecare cetățean are acces liber și ușor la datele publice, poate monitoriza 
                eficiența investițiilor publice și poate participa activ la procesele de luare a deciziilor 
                care îi afectează viața de zi cu zi.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Ce Facem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Centralizare Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Colectăm și centralizăm date publice din multiple surse oficiale, 
                  organizându-le într-un format accesibil și ușor de înțeles.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Vizualizare Interactivă
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transformăm datele complexe în grafice interactive și vizualizări 
                  care facilitează înțelegerea tendințelor și evoluțiilor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Monitorizare Transparentă
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferim instrumente pentru monitorizarea execuției bugetare și 
                  evaluarea eficienței cheltuielilor publice pe sectoare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-card rounded-2xl mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Valorile Noastre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Transparență", desc: "Informații clare și accesibile pentru toți cetățenii" },
                { title: "Obiectivitate", desc: "Prezentarea datelor fără interpretări politice" },
                { title: "Accesibilitate", desc: "Platformă ușor de folosit pentru toți utilizatorii" },
                { title: "Responsabilitate", desc: "Promovarea răspunderii în gestionarea resurselor publice" },
              ].map((val) => (
                <div className="text-center" key={val.title}>
                  <h3 className="font-semibold text-foreground mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card className="bg-card rounded-2xl">
          <CardHeader>
            <CardTitle>Sursele Datelor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Toate datele prezentate pe platformă provin din surse oficiale și sunt actualizate regulat:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Ministerul Finanțelor Publice - execuție bugetară</li>
              <li>Institutul Național de Statistică - indicatori demografici și economici</li>
              <li>Banca Națională a României - indicatori monetari</li>
              <li>Ministerele de resort - date sectoriale specifice</li>
              <li>Autoritatea pentru Digitalizarea României - date digitale</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
