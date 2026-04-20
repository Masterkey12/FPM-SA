import { Link } from "react-router";
import { ArrowRight, TrendingUp, Users, DollarSign, MapPin, BookOpen, Target, Award, BarChart3, PieChart, CheckCircle, Quote } from "lucide-react";
import { motion } from "motion/react";
import { StatCounter } from "../components/StatCounter";
import { HeroBanner } from "../components/HeroBanner";
import { FPM_COLORS } from "../utils/colors";
import mapRDC from "figma:asset/affdb6833e2dacc89c7aeca0073848969463be69.png";

export function Home() {
  const partners = [
    "ADVANS", "ALLIANCE VIE", "BAOBAB", "BAGIRA", "BONNE SEMENCE", 
    "AKIBA YETU", "CRDB BANK", "EQUITY BCDC", "RAWBANK", "FINCA", 
    "GUILGAL", "HEKIMA", "TUJENGE PAMOJA", "SMICO", 
    "PROCFIN", "TID", "PAIDEK", "CRDB"
  ];

  const shareholders = [
    "KfW (Banque de développement allemande)",
    "BIO (Société belge d'investissement pour les pays en développement)",
    "Cordaid (Organisation de développement néerlandaise)",
    "FMO (Banque néerlandaise de développement entrepreneurial)",
    "CFEF (Centre Financier pour les Entrepreneurs Francophones)",
    "M. Loïc De Cannière, investisseur engagé dans la finance à impact",
    "BM (Banque mondiale)",
    "Transforme"
  ];

  const testimonials = [
    {
      quote: "Le FPM nous a accompagnés dans une transformation profonde, à la fois technique, stratégique et humaine. Grâce au FPM, nous avons redonné confiance à notre conseil d'administration, transformé notre image et préparé l'avenir.",
      author: "Henry MUZALA WA",
      role: "DG de la COOPEC AKIBA YETU"
    },
    {
      quote: "Le FPM est un partenaire qu'il ne faut pas manquer : il combine vision, rigueur et solidarité dans l'action. Le FPM nous a permis de restructurer notre institution, de professionnaliser nos équipes et d'innover durablement dans nos services.",
      author: "Pacifique Matabaro NDAGANO",
      role: "DG de SMICO SA"
    },
    {
      quote: "L'école NOVA ELIGO existait, mais nous faisons face à d'importants défis. Grâce au crédit reçu via un partenaire du FPM, nous avons investi dans la technologie, amélioré le confort et modernisé durablement notre offre éducative.",
      author: "Sedi Pierre NZAKUNA",
      role: "Directeur NOVA ELIGO"
    }
  ];

  const publications = [
    {
      title: "Rapport Annuel 2025",
      description: "Bilan complet des activités et résultats de l'année 2024",
      date: "Juillet 2025",
      type: "Rapport annuel"
    },
    {
      title: "Étude sectorielle",
      description: "Rapport des 20 dernières années du secteur financier en RDC - Analyse approfondie des tendances et défis du secteur",
      date: "Décembre 2025",
      type: "Analyse"
    },
    {
      title: "Rapport d'impact",
      description: "Impact des innovations digitales - Évaluation de l'adoption des technologies dans les IFP",
      date: "Novembre 2025",
      type: "Étude"
    }
  ];

  return (
    <div>
      {/* SECTION 1 - Hero Banner */}
      <HeroBanner />

      {/* SECTION 2 - Accès rapides FPM SA / FPM ASBL */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* FPM SA Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all"
              style={{ borderColor: FPM_COLORS.blueDark }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                <DollarSign className="w-8 h-8" style={{ color: FPM_COLORS.blueDark }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: FPM_COLORS.blueDark }}>FPM SA - Entreprise financière</h3>
              <p className="text-gray-600 mb-6">
                Financement et investissement stratégique dans les institutions financières pour catalyser leur croissance et leur impact.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-sm text-gray-700">Prêts senior et subordonnés</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-sm text-gray-700">Garantie partielle du Portefeuille</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-sm text-gray-700">Gestion rigoureuse des risques</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-sm text-gray-700">Fonds spécialisés (agri, genres, énergie…)</span>
                </li>
              </ul>
              <Link
                to="/fpm-sa"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: FPM_COLORS.blueDark }}
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* FPM ASBL Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all"
              style={{ borderColor: FPM_COLORS.cyan }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                <Target className="w-8 h-8" style={{ color: FPM_COLORS.cyan }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: FPM_COLORS.cyan }}>Notre Rôle Stratégique</h3>
              <p className="text-gray-600 mb-6">
                Au regard de sa vision d'un système financier inclusif et responsable, et de sa mission de promotion de l'inclusion financière en RDC, le FPM joue un rôle central d'acteur catalyseur, structurant et transformateur du secteur financier.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.blueDark }} />
                  <span className="text-sm text-gray-700">Catalyseur de l'inclusion financière</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.blueDark }} />
                  <span className="text-sm text-gray-700">Mobilisateur de ressources financières</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.blueDark }} />
                  <span className="text-sm text-gray-700">Garant de la performance et de la responsabilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: FPM_COLORS.blueDark }} />
                  <span className="text-sm text-gray-700">Acteur d'impact et de développement durable</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                style={{ color: FPM_COLORS.cyan }}
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Chiffres clés consolidés */}
      <section className="py-16 bg-gradient-to-br from-[#00467F] via-[#00467F] to-[#00AFEF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Nos chiffres <span className="font-bold">clés</span></h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Des résultats concrets au service de l'inclusion financière en RDC</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, white)` }}>
              <DollarSign className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.blueDark }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.blueDark }}>
                <StatCounter end={130} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-gray-600">Total actifs sous gestion</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.cyanLight}, white)` }}>
              <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.cyan }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.cyan }}>
                <StatCounter end={126} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-gray-600">Décaissés depuis 2015</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, white)` }}>
              <Award className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.blueDark }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.blueDark }}>
                <StatCounter end={204} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-gray-600">Capacité de couverture garantie</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.cyanLight}, white)` }}>
              <BarChart3 className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.cyan }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.cyan }}>
                <StatCounter end={54} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-gray-600">Encours de crédit</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.cyanLight}, white)` }}>
              <PieChart className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.cyan }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.cyan }}>
                <StatCounter end={45} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-gray-600">Plafond d'encours garantie</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, rgba(239, 65, 53, 0.1), white)` }}>
              <TrendingUp className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.red }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.red }}>
                <StatCounter end={403} suffix="%" />
              </div>
              <div className="text-sm text-gray-600">Croissance résultat net</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, white)` }}>
              <BarChart3 className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.blueDark }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.blueDark }}>
                <StatCounter end={97} suffix="%" />
              </div>
              <div className="text-sm text-gray-600">Croissance du bilan</div>
            </div>

            <div className="bg-gradient-to-br p-6 rounded-xl shadow-lg text-center" style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.cyanLight}, white)` }}>
              <DollarSign className="w-10 h-10 mx-auto mb-3" style={{ color: FPM_COLORS.cyan }} />
              <div className="text-3xl font-bold mb-2" style={{ color: FPM_COLORS.cyan }}>
                <StatCounter end={80} suffix="%" />
              </div>
              <div className="text-sm text-gray-600">Croissance PNB</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Rôles & complémentarité */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: FPM_COLORS.blueDark }}>Un partenariat historique avec le FPM ASBL</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La synergie entre FPM ASBL et FPM SA permet une approche intégrée combinant renforcement des capacités et financement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* FPM SA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br rounded-2xl p-8 shadow-lg"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, white)` }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: FPM_COLORS.blueDark }}>
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: FPM_COLORS.blueDark }}>FPM SA</h3>
              <p className="text-gray-700 mb-6 font-semibold">
                Financement adapté et investissements stratégiques pour la croissance
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Prêts senior et subordonnés</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Garanties de crédit</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Structuration financière</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Gestion des risques</span>
                </li>
              </ul>
            </motion.div>

            {/* Synergie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br rounded-2xl p-8 shadow-lg border-2"
              style={{ 
                backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.cyanLight}, white)`,
                borderColor: FPM_COLORS.cyan
              }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: FPM_COLORS.cyan }}>
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: FPM_COLORS.cyan }}>Synergie</h3>
              <p className="text-gray-700 mb-6 font-semibold">Approche intégrée maximisant l'impact et la pérennité des interventions</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.cyan }}></div>
                  <span className="text-sm text-gray-700">Diagnostic commun</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.cyan }}></div>
                  <span className="text-sm text-gray-700">Solutions sur mesure</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.cyan }}></div>
                  <span className="text-sm text-gray-700">Suivi coordonné</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.cyan }}></div>
                  <span className="text-sm text-gray-700">Impact amplifié</span>
                </li>
              </ul>
            </motion.div>

            {/* FPM ASBL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br rounded-2xl p-8 shadow-lg"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, white)` }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: FPM_COLORS.blueDark }}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: FPM_COLORS.blueDark }}>FPM ASBL</h3>
              <p className="text-gray-700 mb-6 font-semibold">
                Renforcement des capacités institutionnelles, opérationnelles et technologiques
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Assistance technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Formation et coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Développement de produits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: FPM_COLORS.blueDark }}></div>
                  <span className="text-sm text-gray-700">Transformation digitale</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Impact global */}
      <section className="py-16" style={{ background: `linear-gradient(to bottom, ${FPM_COLORS.cyanLight}, white)` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: FPM_COLORS.blueDark }}>Notre impact en chiffres</h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets au service de l'inclusion financière en RDC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Encours par type */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: FPM_COLORS.blueDark }}>Encours par type d'institution</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">IMF</span>
                    <span className="text-sm font-bold" style={{ color: FPM_COLORS.cyan }}>77.8%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '77.8%', backgroundColor: FPM_COLORS.cyan }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">39,3 millions USD</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Banques commerciales</span>
                    <span className="text-sm font-bold" style={{ color: FPM_COLORS.blueDark }}>19.8%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '19.8%', backgroundColor: FPM_COLORS.blueDark }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">10 millions USD</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">COOPEC</span>
                    <span className="text-sm font-bold" style={{ color: FPM_COLORS.red }}>2.4%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: '2.4%', backgroundColor: FPM_COLORS.red }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">1,2 million USD</div>
                </div>
              </div>
            </div>

            {/* Nombre de partenaires */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: FPM_COLORS.blueDark }}>Partenaires actifs</h3>
              <div className="space-y-6">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: FPM_COLORS.cyan }}>16</div>
                  <div className="text-sm text-gray-700">IMF partenaires</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: FPM_COLORS.blueDark }}>7</div>
                  <div className="text-sm text-gray-700">Banques partenaires</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                  <div className="text-4xl font-bold mb-1" style={{ color: FPM_COLORS.cyan }}>16</div>
                  <div className="text-sm text-gray-700">COOPEC partenaires</div>
                </div>
              </div>
            </div>

            {/* Activités financières */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: FPM_COLORS.blueDark }}>Activités financières</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                    <Award className="w-5 h-5" style={{ color: FPM_COLORS.blueDark }} />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: FPM_COLORS.blueDark }}>204M USD</div>
                    <div className="text-sm text-gray-600">Portefeuille de garanties</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                    <BarChart3 className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: FPM_COLORS.cyan }}>55M USD</div>
                    <div className="text-sm text-gray-600">Encours actif refinancé en 2025</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                    <DollarSign className="w-5 h-5" style={{ color: FPM_COLORS.blueDark }} />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: FPM_COLORS.blueDark }}>141M USD</div>
                    <div className="text-sm text-gray-600">Crédits décaissés depuis la création</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                    <Users className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: FPM_COLORS.cyan }}>177 000+</div>
                    <div className="text-sm text-gray-600">Crédits accordés aux MPME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Témoignages */}
      <section className="py-16" style={{ background: `linear-gradient(to bottom right, ${FPM_COLORS.blueDark}, #0055a0)` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Ils témoignent</h2>
            <p className="text-xl text-blue-100">
              Découvrez l'impact de nos interventions à travers les voix de nos partenaires
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg relative hover:shadow-2xl transition-shadow"
              >
                <Quote className="w-12 h-12 mb-4 opacity-20" style={{ color: FPM_COLORS.cyan }} />
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm" style={{ color: FPM_COLORS.blueDark }}>{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 - Publications clés */}
      <section className="py-16" style={{ background: `linear-gradient(to bottom, ${FPM_COLORS.blueDarkLight}, white)` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: FPM_COLORS.blueDark }}>Publications récentes</h2>
              <p className="text-xl text-gray-600">
                Accédez à nos rapports, études et analyses sectorielles
              </p>
            </div>
            <Link 
              to="/publications" 
              className="font-semibold hover:underline hidden md:block"
              style={{ color: FPM_COLORS.cyan }}
            >
              Voir tout →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: FPM_COLORS.cyan }}>
                    {pub.type}
                  </div>
                  <BookOpen className="w-5 h-5" style={{ color: FPM_COLORS.blueDark }} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{pub.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">{pub.date}</span>
                  <button className="text-sm font-semibold hover:underline" style={{ color: FPM_COLORS.cyan }}>
                    Télécharger
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/publications" 
              className="font-semibold hover:underline"
              style={{ color: FPM_COLORS.cyan }}
            >
              Voir toutes les publications →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 - Partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: FPM_COLORS.blueDark }}>Nos partenaires</h2>
            <p className="text-xl text-gray-600">
              Institutions financières partenaires à travers la RDC
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-lg border-2 font-semibold text-sm hover:shadow-lg transition-all cursor-pointer"
                style={{ 
                  borderColor: index % 2 === 0 ? FPM_COLORS.cyan : FPM_COLORS.blueDark,
                  color: index % 2 === 0 ? FPM_COLORS.cyan : FPM_COLORS.blueDark
                }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - CTA orientés */}
      <section className="py-16" style={{ background: `linear-gradient(to bottom right, ${FPM_COLORS.blueDark}, ${FPM_COLORS.cyan})` }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez le mouvement de l'inclusion financière
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Que vous soyez une institution financière, un bailleur ou un partenaire technique, travaillons ensemble pour transformer le paysage financier de la RDC
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              style={{ color: FPM_COLORS.blueDark }}
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-white text-white"
            >
              Découvrir notre impact
              <Target className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 - Actionnaires & partenaires */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: FPM_COLORS.blueDark }}>Nos Actionnaires & partenaires</h2>
            <p className="text-xl text-gray-600">
              Partenaires financiers et techniques au service de l'inclusion financière
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {shareholders.map((shareholder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-6 py-3 rounded-lg border-2 font-semibold text-sm hover:shadow-lg transition-all cursor-pointer"
                style={{ 
                  borderColor: index % 2 === 0 ? FPM_COLORS.blueDark : FPM_COLORS.cyan,
                  color: index % 2 === 0 ? FPM_COLORS.blueDark : FPM_COLORS.cyan
                }}
              >
                {shareholder}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}