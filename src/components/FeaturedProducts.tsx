import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import productImage from "@/assets/product-jersey-1.jpg";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  
  // Mock products data
  const featuredProducts = [
    {
      id: "1",
      name: "Camisa Barcelona Home 2024/25 - Messi",
      price: 89.90,
      originalPrice: 129.90,
      image: productImage,
      team: "Barcelona",
      category: "Europeus",
      rating: 4.8,
      reviews: 156,
      isPromo: true,
    },
    {
      id: "2",
      name: "Camisa Brasil Seleção 2024 - Ronaldinho",
      price: 79.90,
      originalPrice: 99.90,
      image: productImage,
      team: "Brasil",
      category: "Seleções",
      rating: 4.9,
      reviews: 203,
      isNew: true,
    },
    {
      id: "3",
      name: "Camisa Real Madrid Away 2024 - Benzema",
      price: 94.90,
      image: productImage,
      team: "Real Madrid",
      category: "Europeus",
      rating: 4.7,
      reviews: 89,
    },
    {
      id: "4",
      name: "Camisa Flamengo Home 2024 - Gabigol",
      price: 69.90,
      originalPrice: 89.90,
      image: productImage,
      team: "Flamengo",
      category: "Brasileirão",
      rating: 4.6,
      reviews: 127,
      isPromo: true,
    },
    {
      id: "5",
      name: "Camisa PSG Third 2024 - Mbappé",
      price: 99.90,
      image: productImage,
      team: "PSG",
      category: "Europeus",
      rating: 4.8,
      reviews: 74,
      isNew: true,
    },
    {
      id: "6",
      name: "Camisa Argentina Home 2024 - Messi",
      price: 84.90,
      originalPrice: 109.90,
      image: productImage,
      team: "Argentina",
      category: "Seleções",
      rating: 4.9,
      reviews: 312,
      isPromo: true,
    },
    {
      id: "7",
      name: "Camisa Santos Retro 2002 - Pelé",
      price: 74.90,
      image: productImage,
      team: "Santos",
      category: "Retro",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: "8",
      name: "Camisa Liverpool Home 2024 - Salah",
      price: 89.90,
      originalPrice: 119.90,
      image: productImage,
      team: "Liverpool",
      category: "Europeus",
      rating: 4.8,
      reviews: 156,
      isPromo: true,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Nossos</span> Destaques
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça nossos produtos mais procurados pelos campeões. 
            Qualidade premium com os melhores preços do mercado.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => navigate("/produtos")}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;