import partnersLogos from "figma:asset/a8466c3f49c03b62820c2f696e5022cc98b840d7.png";

export function PartnersLogosBand() {
  return (
    <div className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <img 
            src={partnersLogos} 
            alt="Nos partenaires financiers et techniques : KfW, CFEI, Banque Mondiale, Transforme, Cordaid, BIO, Enabel, CDF, PNUD, FMO, Incofin, SUEDE, AFD, La France en RD Congo, VISA"
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </div>
    </div>
  );
}
