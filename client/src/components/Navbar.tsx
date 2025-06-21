import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart3, ChevronDown, Menu } from "lucide-react";
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

const ministries = [
  { id: "educatie", name: "Ministerul Educației" },
  { id: "sanatate", name: "Ministerul Sănătății" },
  { id: "finante", name: "Ministerul Finanțelor" },
  { id: "infrastructura", name: "Ministerul Infrastructurii" },
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
              <h1 className="text-xl font-semibold navbar-text-primary">
                Romania Data Hub
              </h1>
              <p className="navbar-text-muted">
                Transparența fondurilor publice
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`navbar-text-default ${
                  location === "/"
                    ? "navbar-text-primary border-b-2 border-primary pb-1"
                    : ""
                }`}
              >
                Acasă
              </span>
            </Link>

            {/* Sectors Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="navbar-text-default flex items-center"
                >
                  Sectoare
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-popover text-popover-foreground">
                {sectors.map((sector) => (
                  <DropdownMenuItem key={sector.id} asChild>
                    <Link
                      href={`/sector/${sector.id}`}
                      className="flex items-center cursor-pointer navbar-text-default"
                    >
                      <span className="mr-2">{sector.icon}</span>
                      {sector.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Ministries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="navbar-text-default flex items-center"
                >
                  Ministere
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-popover text-popover-foreground">
                {ministries.map((ministry) => (
                  <DropdownMenuItem key={ministry.id} asChild>
                    <Link
                      href={`/minister/${ministry.id}`}
                      className="flex items-center cursor-pointer navbar-text-default"
                    >
                      {ministry.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about">
              <span
                className={`navbar-text-default ${
                  location === "/about"
                    ? "navbar-text-primary border-b-2 border-primary pb-1"
                    : ""
                }`}
              >
                Despre
              </span>
            </Link>

            <Link href="/contact">
              <span
                className={`navbar-text-default ${
                  location === "/contact"
                    ? "navbar-text-primary border-b-2 border-primary pb-1"
                    : ""
                }`}
              >
                Contact
              </span>
            </Link>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
                    <span className="navbar-mobile-text">Acasă</span>
                  </Link>

                  <div className="px-3 py-2">
                    <span className="navbar-mobile-text">Sectoare</span>
                    <div className="mt-2 ml-4 space-y-2">
                      {sectors.map((sector) => (
                        <Link
                          key={sector.id}
                          href={`/sector/${sector.id}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="block py-1 navbar-text-default">
                            {sector.icon} {sector.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link href="/about" onClick={() => setMobileOpen(false)}>
                    <span className="navbar-mobile-text">Despre</span>
                  </Link>

                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <span className="navbar-mobile-text">Contact</span>
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
