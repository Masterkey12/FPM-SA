import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoFPM from "figma:asset/78313fbda9c6ca235b146eff8e50b92120851852.png";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos Services", href: "/services" },
  { name: "Impact", href: "/impact" },
  { name: "Publications", href: "/publications" },
  { name: "À propos", href: "/about" },
  { name: "Carrières", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoFPM}
              alt="FPM - Pour l'inclusion financière en RD Congo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    isActive
                      ? "text-[#00467F]"
                      : "text-gray-700 hover:text-[#00AFEF]"
                  }`}
                  style={isActive ? {
                    borderBottom: '2px solid #00AFEF'
                  } : {}}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-3 py-1.5 text-sm font-medium text-white rounded" style={{ backgroundColor: '#00467F' }}>
              FR
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-2 mt-4 px-3">
              <button className="px-3 py-1.5 text-sm font-medium text-white rounded" style={{ backgroundColor: '#00467F' }}>
                FR
              </button>
              <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded">
                EN
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}