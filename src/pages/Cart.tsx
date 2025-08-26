import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productImage from "@/assets/product-jersey-1.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  team: string;
  size: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Camisa Barcelona Home 2024/25 - Messi",
      price: 89.90,
      originalPrice: 129.90,
      image: productImage,
      team: "Barcelona",
      size: "M",
      quantity: 2,
    },
    {
      id: "2",
      name: "Camisa Brasil Seleção 2024",
      price: 79.90,
      image: productImage,
      team: "Brasil",
      size: "G",
      quantity: 1,
    },
    {
      id: "3",
      name: "Camisa Real Madrid Away 2024",
      price: 94.90,
      originalPrice: 119.90,
      image: productImage,
      team: "Real Madrid",
      size: "M",
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalSubtotal = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const discount = originalSubtotal - subtotal;
  const shipping = subtotal > 150 ? 0 : 15.90;
  const total = subtotal + shipping;

  // Calculate 3+1 promotion
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const freeItems = Math.floor(totalQuantity / 4);
  const promoDiscount = freeItems > 0 ? cartItems
    .sort((a, b) => a.price - b.price)
    .slice(0, freeItems)
    .reduce((sum, item) => sum + item.price, 0) : 0;

  const finalTotal = total - promoDiscount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Que tal adicionar alguns produtos incríveis ao seu carrinho?
            </p>
            <Button size="lg" className="bg-gradient-hero">
              Continuar Comprando
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuar Comprando
          </Button>
          <h1 className="text-3xl font-bold">
            Carrinho de <span className="text-primary">Compras</span>
          </h1>
          <p className="text-muted-foreground">
            {totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'} no seu carrinho
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Promotion banner */}
            {freeItems > 0 && (
              <Card className="border-primary bg-gradient-to-r from-primary/10 to-accent/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-primary text-primary-foreground">🎉 PROMOÇÃO ATIVA</Badge>
                    <span className="font-medium">
                      Você ganhou {freeItems} {freeItems === 1 ? 'produto' : 'produtos'} grátis!
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Desconto de R$ {promoDiscount.toFixed(2)} aplicado automaticamente
                  </p>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg bg-muted"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm leading-tight mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.team} • Tamanho: {item.size}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">
                            R$ {item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              R$ {item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order summary */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalQuantity} itens)</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Desconto</span>
                      <span>-R$ {discount.toFixed(2)}</span>
                    </div>
                  )}

                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-sm text-primary">
                      <span>Promoção Pague 3 Leve 4</span>
                      <span>-R$ {promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span>Frete</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600">Grátis</span>
                      ) : (
                        `R$ ${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Frete grátis acima de R$ 150,00
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-primary">R$ {finalTotal.toFixed(2)}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">
                    ou 2x de R$ {(finalTotal / 2).toFixed(2)} sem juros
                  </p>
                </div>

                <Button className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300" size="lg">
                  Finalizar Compra
                </Button>
              </CardContent>
            </Card>

            {/* Coupon */}
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-3">Cupom de Desconto</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite seu cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="outline">Aplicar</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;