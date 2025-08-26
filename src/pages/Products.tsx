import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Filter, Search, Grid, List, SlidersHorizontal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productImage from "@/assets/product-jersey-1.jpg";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  // Mock products data
  const allProducts = Array.from({ length: 24 }, (_, i) => ({
    id: `product-${i + 1}`,
    name: `Camisa ${i % 2 === 0 ? 'Barcelona' : 'Real Madrid'} ${2024 - (i % 3)} - ${i % 2 === 0 ? 'Messi' : 'Benzema'}`,
    price: 69.90 + (i * 5),
    originalPrice: i % 3 === 0 ? 99.90 + (i * 5) : undefined,
    image: productImage,
    team: i % 2 === 0 ? 'Barcelona' : 'Real Madrid',
    category: i % 3 === 0 ? 'Europeus' : i % 3 === 1 ? 'Brasileirão' : 'Seleções',
    rating: 4.5 + (i % 5) * 0.1,
    reviews: 50 + (i * 10),
    isNew: i % 5 === 0,
    isPromo: i % 3 === 0,
  }));

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "retro", label: "Camisas Retro" },
    { value: "brasileirao", label: "Brasileirão" },
    { value: "europeus", label: "Europeus" },
    { value: "selecoes", label: "Seleções" },
    { value: "conjuntos", label: "Conjuntos" },
    { value: "juvenil", label: "Juvenil" },
    { value: "femininas", label: "Femininas" },
  ];

  const sortOptions = [
    { value: "relevance", label: "Mais Relevantes" },
    { value: "price-low", label: "Menor Preço" },
    { value: "price-high", label: "Maior Preço" },
    { value: "newest", label: "Mais Novos" },
    { value: "rating", label: "Melhor Avaliado" },
  ];

  const filters = [
    {
      title: "Preço",
      options: [
        { label: "Até R$ 50", value: "0-50" },
        { label: "R$ 50 - R$ 100", value: "50-100" },
        { label: "R$ 100 - R$ 150", value: "100-150" },
        { label: "Acima de R$ 150", value: "150+" },
      ],
    },
    {
      title: "Tamanho",
      options: [
        { label: "PP", value: "pp" },
        { label: "P", value: "p" },
        { label: "M", value: "m" },
        { label: "G", value: "g" },
        { label: "GG", value: "gg" },
        { label: "XGG", value: "xgg" },
      ],
    },
    {
      title: "Times",
      options: [
        { label: "Barcelona", value: "barcelona" },
        { label: "Real Madrid", value: "real-madrid" },
        { label: "PSG", value: "psg" },
        { label: "Manchester City", value: "man-city" },
        { label: "Liverpool", value: "liverpool" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-primary">Catálogo</span> de Produtos
          </h1>
          <p className="text-muted-foreground">
            Encontre a camisa perfeita para torcer pelo seu time favorito
          </p>
        </div>

        {/* Search and filters bar */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View mode toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active filters */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">
              <Filter className="h-3 w-3 mr-1" />
              24 produtos encontrados
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar filters */}
          <div className="hidden lg:block space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="h-4 w-4" />
                  <h3 className="font-semibold">Filtros</h3>
                </div>
                
                {filters.map((filter) => (
                  <div key={filter.title} className="mb-6">
                    <h4 className="font-medium mb-3">{filter.title}</h4>
                    <div className="space-y-2">
                      {filter.options.map((option) => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-border text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-muted-foreground">{option.label}</span>
                        </label>
                      ))}
                    </div>
                    {filter !== filters[filters.length - 1] && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Products grid */}
          <div className="lg:col-span-3">
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                : "space-y-6"
            }>
              {allProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product}
                  className={viewMode === "list" ? "grid grid-cols-3 gap-4" : ""}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline">Anterior</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Próximo</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;