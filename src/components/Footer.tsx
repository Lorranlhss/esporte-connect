import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: "Empresa",
      links: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Nossa História", href: "/historia" },
        { label: "Trabalhe Conosco", href: "/carreiras" },
        { label: "Imprensa", href: "/imprensa" },
      ],
    },
    customer: {
      title: "Atendimento",
      links: [
        { label: "Central de Ajuda", href: "/ajuda" },
        { label: "Trocas e Devoluções", href: "/trocas" },
        { label: "Entregas", href: "/entregas" },
        { label: "Formas de Pagamento", href: "/pagamento" },
      ],
    },
    categories: {
      title: "Categorias",
      links: [
        { label: "Camisas Retro", href: "/retro" },
        { label: "Brasileirão", href: "/brasileirao" },
        { label: "Europeus", href: "/europeus" },
        { label: "Seleções", href: "/selecoes" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Política de Privacidade", href: "/privacidade" },
        { label: "Termos de Uso", href: "/termos" },
        { label: "Política de Cookies", href: "/cookies" },
        { label: "LGPD", href: "/lgpd" },
      ],
    },
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-primary/20">
      {/* Newsletter section */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Fique por dentro das novidades!
          </h3>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Receba em primeira mão nossas promoções exclusivas e lançamentos.
          </p>
          <div className="flex max-w-md mx-auto gap-2">
            <Input
              placeholder="Seu melhor email"
              className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              <Mail className="h-4 w-4 mr-2" />
              Inscrever
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="ChampionStore" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold text-primary">ChampionStore</h3>
                  <p className="text-sm text-muted-foreground">A Loja dos Campeões</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Há mais de 10 anos oferecendo camisas de futebol de qualidade premium 
                com os melhores preços do Brasil. Sua paixão pelo esporte merece o melhor!
              </p>
              
              {/* Contact info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contato@championstore.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Footer sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Button
                        variant="link"
                        className="h-auto p-0 text-muted-foreground hover:text-primary text-sm justify-start"
                      >
                        {link.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-primary/20" />

      {/* Bottom footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} ChampionStore. Todos os direitos reservados.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Aceitamos:</span>
              <div className="flex gap-1">
                <div className="px-2 py-1 bg-muted rounded text-xs">PIX</div>
                <div className="px-2 py-1 bg-muted rounded text-xs">Cartão</div>
                <div className="px-2 py-1 bg-muted rounded text-xs">Boleto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;