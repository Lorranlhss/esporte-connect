import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  team: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isPromo?: boolean;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-primary text-primary-foreground">NOVO</Badge>
            )}
            {product.isPromo && (
              <Badge variant="destructive">PROMOÇÃO</Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-accent text-accent-foreground">-{discount}%</Badge>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background transition-all duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"
              )}
            />
          </Button>

          {/* Quick add to cart - appears on hover */}
          <div className={cn(
            "absolute bottom-2 left-2 right-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          )}>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Adicionar ao Carrinho
            </Button>
          </div>
        </div>

        {/* Product info */}
        <div className="p-4 space-y-2">
          {/* Category and team */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{product.category}</span>
            <span>{product.team}</span>
          </div>

          {/* Product name */}
          <h3 className="font-semibold text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Payment info */}
          <p className="text-xs text-muted-foreground">
            ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;