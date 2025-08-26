import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-8xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4 text-foreground">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="w-full bg-gradient-hero"
              onClick={() => navigate("/")}
            >
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Início
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-primary text-primary"
              onClick={() => navigate("/produtos")}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Ver Produtos
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
