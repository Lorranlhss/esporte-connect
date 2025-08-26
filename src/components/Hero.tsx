import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Truck, CreditCard } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Hero banner */}
      <div className="relative h-[70vh] bg-gradient-to-r from-background via-background/80 to-transparent">
        <img
          src={heroBanner}
          alt="Camisas de futebol premium"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              🏆 A Loja dos Campeões!
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">PAGUE 3</span>
              <br />
              <span className="text-foreground">&</span>
              <br />
              <span className="text-primary">LEVE 4</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Desconto aplicado automaticamente! Camisas tailandesas de qualidade premium 
              com o melhor custo-benefício do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
                onClick={() => navigate("/produtos")}
              >
                Ver Ofertas
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => navigate("/produtos")}
              >
                Explorar Catálogo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <CheckCircle className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Camisas Tailandesas</h3>
              <p className="text-muted-foreground">
                Aqui você encontra camisas tailandesas de qualidade, com excelente 
                acabamento e o melhor custo-benefício.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <CreditCard className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Parcele em Até 2x Sem Juros</h3>
              <p className="text-muted-foreground">
                Produtos fabricados com materiais de alta qualidade, garantindo 
                durabilidade e conforto para você.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Entrega em Todo o Brasil</h3>
              <p className="text-muted-foreground">
                Receba seu pedido com agilidade e segurança, diretamente na sua casa, 
                onde quer que esteja!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;