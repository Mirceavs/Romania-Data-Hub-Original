import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Github, Twitter, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Mulțumim pentru abonare!",
        description: "Vei primi actualizări despre ultimele date publice.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Romania Data Hub</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Platforma dedicată transparenței fondurilor publice și informării cetățenilor români 
              despre modul în care sunt gestionate resursele publice.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Abonează-te la newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Adresa ta de email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Abonează-te
                </Button>
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    Despre noi
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Politica de confidențialitate
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Termeni și condiții
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Urmărește-ne</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Romania Data Hub. Toate drepturile rezervate.
            <span className="mx-2">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sursele datelor</span>
            <span className="mx-2">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">API</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
