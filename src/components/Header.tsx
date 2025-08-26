import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Camisas Retro", href: "/retro" },
    { label: "Brasileirão", href: "/brasileirao" },
    { label: "Europeus", href: "/europeus" },
    { label: "Seleções", href: "/selecoes" },
    { label: "Conjuntos", href: "/conjuntos" },
    { label: "Juvenil", href: "/juvenil" },
    { label: "Femininas", href: "/femininas" },
    { label: "Casual", href: "/casual" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/20">
      {/* Top bar with promo */}
      <div className="bg-gradient-hero text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            🏆 PROMOÇÃO: Pague 3 e Leve 4 - Desconto aplicado automaticamente!
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <img src={logo} alt="ChampionStore" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">ChampionStore</h1>
              <p className="text-xs text-muted-foreground">A Loja dos Campeões</p>
            </div>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Encontre seu time aqui..."
                className="pl-10 bg-card border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative" onClick={() => navigate("/carrinho")}>
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-primary-foreground">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Encontre seu time aqui..."
                      className="pl-10"
                    />
                  </div>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full mb-2">
                      <User className="h-4 w-4 mr-2" />
                      Minha Conta
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex mt-4 space-x-6">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-smooth"
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;