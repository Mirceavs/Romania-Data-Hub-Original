import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart3, ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sectors = [
  { id: "educatie", name: "Educație", icon: "📚" },
  { id: "sanatate", name: "Sănătate", icon: "🏥" },
  { id: "economie", name: "Economie", icon: "💼" },
  { id: "infrastructura", name: "Infrastructură", icon: "🏗️" },
  { id: "energie", name: "Energie", icon: "⚡" },
  { id: "inovatie", name: "Inovație", icon: "🚀" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-card shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Romania Data Hub</h1>
              <p className="text-xs text-gray-500">Transparența fondurilor publice</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`font-medium transition-colors ${
                location === "/" 
                  ? "text-primary border-b-2 border-primary pb-1" 
                  : "text-gray-700 hover:text-primary"
              }`}>
                Acasă
              </span>
            </Link>
            
            {/* Sectors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700 hover:text-primary font-medium">
                  Sectoare
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                {sectors.map((sector) => (
                  <DropdownMenuItem key={sector.id} asChild>
                    <Link href={`/sector/${sector.id}`} className="flex items-center cursor-pointer">
                      <span className="mr-2">{sector.icon}</span>
                      {sector.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about">
              <span className={`font-medium transition-colors ${
                location === "/about" 
                  ? "text-primary" 
                  : "text-gray-700 hover:text-primary"
              }`}>
                Despre
              </span>
            </Link>

            <Link href="/contact">
              <span className={`font-medium transition-colors ${
                location === "/contact" 
                  ? "text-primary" 
                  : "text-gray-700 hover:text-primary"
              }`}>
                Contact
              </span>
            </Link>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90">
                Autentificare
              </Button>
            </Link>
            
            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/" onClick={() => setMobileOpen(false)}>
                    <span className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-primary">
                      Acasă
                    </span>
                  </Link>
                  
                  <div className="px-3 py-2">
                    <span className="text-lg font-medium text-gray-900">Sectoare</span>
                    <div className="mt-2 ml-4 space-y-2">
                      {sectors.map((sector) => (
                        <Link key={sector.id} href={`/sector/${sector.id}`} onClick={() => setMobileOpen(false)}>
                          <span className="block py-1 text-gray-700 hover:text-primary">
                            {sector.icon} {sector.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link href="/about" onClick={() => setMobileOpen(false)}>
                    <span className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-primary">
                      Despre
                    </span>
                  </Link>
                  
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <span className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-primary">
                      Contact
                    </span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
