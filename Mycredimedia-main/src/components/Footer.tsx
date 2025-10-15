import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <img
              src="/lovable-uploads/c69d2ade-deb3-41ae-9a41-a5f075ad40bc.png"
              alt="MyCredimedia"
              className="h-12 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4">
              Servicios de crédito a tu medida. Financiamos tu vehículo 
              de manera rápida, segura y confiable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Préstamos con Vehículo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compra de Vehículos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refinanciamiento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Asesoría Financiera</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (809) 596-7222</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@mycredimedia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Santo Domingo, República Dominicana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Lun-Vie: 9AM-6PM | Sáb: 9AM-1PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 MyCredimedia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;