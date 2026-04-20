import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Youtube, Facebook } from "lucide-react";
import logoFPM from "figma:asset/78313fbda9c6ca235b146eff8e50b92120851852.png";

export function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#00467F' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <img 
              src={logoFPM} 
              alt="FPM - Pour l'inclusion financière en RD Congo" 
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-white font-bold mb-4">FPM</h3>
            <p className="text-sm mb-4">
              Pour l'inclusion financière en RD Congo - Soutenant le développement des institutions financières de proximité.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#00AFEF' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#00AFEF' }}>
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#00AFEF' }}>
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/impact" className="hover:text-white transition-colors">Notre impact</Link></li>
              <li><Link to="/publications" className="hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Devenir Bailleur</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Devenir partenaire</Link></li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Rapports annuels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Études sectorielles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Factsheets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>FPM | Immeuble Ecobank | 5ᵉ étage | 2, avenue Kasa-Vubu croisement Boulevard du 30 Juin | Kinshasa | RDC</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+243 976 596 005</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>administration@fpmsa-rdc.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center text-sm" style={{ borderColor: '#00AFEF' }}>
          <p>© 2026 Fonds pour l'inclusion financière en RDC (FPM). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
