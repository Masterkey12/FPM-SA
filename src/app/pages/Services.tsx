import { motion } from "motion/react";
import { DollarSign, Shield, TrendingUp, FileText, CheckCircle, ArrowRight, Users, Target, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";
import { FPM_COLORS } from "../utils/colors";
import riskManagementImg from "figma:asset/bb56b6afa7780f79c9ffe8ff71bc8693e52113f5.png";

const services = [
  {
    icon: DollarSign,
    title: "Prêts Senior",
    subtitle: "Refinancement du portefeuille de crédit",
    description: "Nos offres visent à financer le développement et la croissance du portefeuille des MPME détenu par les IFP.",
    features: [
      "Durée : 24 à 60 mois",
      "Montant : jusqu'à 8 700 000 USD",
      "Taux préférentiels adaptés au marché",
      "Procédure simplifiée et rapide"
    ],
    color: FPM_COLORS.blueDark,
    bgColor: FPM_COLORS.blueDarkLight
  },
  {
    icon: TrendingUp,
    title: "Prêts Subordonnés",
    subtitle: "Quasi-fonds propres pour la croissance",
    description: "Crédits sous forme de quasi-fonds propres pour renforcer la solvabilité de l'institution et soutenir la croissance",
    features: [
      "Durée : 3 à 5 ans",
      "Montant : jusqu'à 8 700 000 USD",
      "Amélioration des ratios prudentiels",
      "Flexibilité de remboursement"
    ],
    color: FPM_COLORS.cyan,
    bgColor: FPM_COLORS.cyanLight
  },
  {
    icon: ShieldCheck,
    title: "Garanties de crédit",
    subtitle: "Partage des risques",
    description: "Instrument de partage des risques destiné aux institutions financières pour faciliter l'accès au financement bancaire",
    features: [
      "Couverture : jusqu'à 70% du prêt",
      "Facilite l'accès au financement bancaire",
      "Réduit les exigences de collatéral",
      "Renforce la confiance des banques"
    ],
    color: FPM_COLORS.red,
    bgColor: "#FEE2E2"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Demande initiale",
    description: "Soumission du dossier de demande avec les documents requis"
  },
  {
    step: "2",
    title: "Évaluation",
    description: "Analyse de la capacité financière et du modèle d'affaires"
  },
  {
    step: "3",
    title: "Due diligence",
    description: "Vérification approfondie des états financiers et de la gouvernance"
  },
  {
    step: "4",
    title: "Approbation",
    description: "Validation par le Comité de crédit et le Conseil d'administration"
  },
  {
    step: "5",
    title: "Décaissement",
    description: "Signature des conventions et déblocage des fonds"
  }
];

const eligibilityCriteria = [
  "Être une institution financière agréée en RDC (IMF, COOPEC, banque)",
  "Avoir au moins 2 ans d'opération",
  "Un système régulier de reporting financier ;",
  "Un système fiable de gestion des flux de trésorerie ;",
  "Des indicateurs financiers solides ;",
  "Une robustesse financière et opérationnelle conforme à la politique d'investissement."
];

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Nos Services"
        subtitle="Des solutions de financement adaptées pour renforcer les institutions financières de proximité"
        image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBoYW5kc2hha2UlMjBmaW5hbmNlJTIwcGFydG5lcnNoaXB8ZW58MXx8fHwxNzQyMDI3Mzk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              L'offre complète du FPM SA
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Le FPM SA propose trois types de produits financiers pour accompagner les institutions financières de proximité dans leur développement et leur mission d'inclusion financière.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all"
                style={{ borderColor: service.color }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-2" style={{ color: service.color }}>
                  {service.title}
                </h3>
                
                <p className="text-sm font-semibold text-gray-500 mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle 
                        className="w-5 h-5 shrink-0 mt-0.5" 
                        style={{ color: service.color }} 
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critères d'éligibilité */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Critères d'éligibilité
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Pour bénéficier des services du FPM SA, les institutions financières doivent répondre aux exigences suivantes :
              </p>
              
              <ul className="space-y-4">
                {eligibilityCriteria.map((criterion, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: FPM_COLORS.cyan }}>
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{criterion}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
              <Target className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Notre priorité</h3>
              <p className="text-blue-100 mb-6">
                Le FPM privilégie les institutions qui démontrent un engagement fort envers l'inclusion financière et qui ciblent les populations vulnérables : femmes, jeunes, MPME rurales et péri-urbaines.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-400">
                <div>
                  <div className="text-3xl font-bold mb-1">80%</div>
                  <div className="text-sm text-blue-200">Clients à faible revenu</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">60%</div>
                  <div className="text-sm text-blue-200">Femmes bénéficiaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus de demande */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Processus de demande
            </h2>
            <p className="text-xl text-gray-600">
              Un parcours en 5 étapes pour accéder au financement
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 text-center h-full">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    style={{ backgroundColor: FPM_COLORS.cyan, color: 'white' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                
                {/* Arrow between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Traitement rapide et efficace des demandes
            </p>
          </div>
        </div>
      </section>

      {/* Gestion rigoureuse des risques */}
      <section className="py-20" style={{ background: `linear-gradient(135deg, ${FPM_COLORS.blueDark} 0%, #003d6b 100%)` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Risk management details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">
                Gestion rigoureuse des risques
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Notre approche de gestion des risques combine analyse approfondie, suivi continu et diversification du portefeuille.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyan }}>
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Analyse de crédit</h3>
                    <p className="text-blue-100">Due diligence financière, opérationnelle et sociale</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyan }}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comité indépendant</h3>
                    <p className="text-blue-100">Décisions collégiales et objectives</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyan }}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Suivi régulier</h3>
                    <p className="text-blue-100">Rapports mensuels et visites sur site</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyan }}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diversification</h3>
                    <p className="text-blue-100">Limite de concentration par IFP et région</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Portfolio quality metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Qualité du portefeuille
              </h3>

              <div className="space-y-6">
                {/* Taux de remboursement */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">Taux de remboursement</span>
                    <span className="text-3xl font-bold text-white">98%</span>
                  </div>
                  <div className="h-3 bg-blue-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: '98%', backgroundColor: '#ffffff' }}
                    ></div>
                  </div>
                </div>

                {/* Portfolio at Risk (PAR 30) */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">Portfolio at Risk (PAR 30)</span>
                    <span className="text-3xl font-bold" style={{ color: FPM_COLORS.cyan }}>2.5%</span>
                  </div>
                  <div className="h-3 bg-blue-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: '2.5%', backgroundColor: '#4ade80' }}
                    ></div>
                  </div>
                </div>

                {/* Taux de pertes */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">Taux de pertes</span>
                    <span className="text-3xl font-bold" style={{ color: '#fbbf24' }}>0.8%</span>
                  </div>
                  <div className="h-3 bg-blue-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: '0.8%', backgroundColor: '#fbbf24' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-500">
                <p className="text-sm text-blue-100">
                  Ces indicateurs témoignent de la qualité de notre portefeuille et de notre approche rigoureuse en matière de gestion des risques.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA - Accompagnement technique */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Users className="w-12 h-12 mb-6" style={{ color: FPM_COLORS.cyan }} />
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Besoin d'accompagnement technique ?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Le FPM ASBL offre des services d'assistance technique complémentaires pour renforcer les capacités institutionnelles et opérationnelles des IFP partenaires.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-gray-700">Diagnostic institutionnel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-gray-700">Formation et coaching</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-gray-700">Transformation digitale</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5" style={{ color: FPM_COLORS.cyan }} />
                  <span className="text-gray-700">Gouvernance et conformité</span>
                </li>
              </ul>
              <Link
                to="/fpm-asbl"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: FPM_COLORS.cyan, color: 'white' }}
              >
                Découvrir FPM ASBL
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <FileText className="w-12 h-12 mb-6" style={{ color: FPM_COLORS.blueDark }} />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Documents requis
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Agrément officiel de l'institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>États financiers audités (2 dernières années)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Plan d'affaires et projections financières</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Rapports de gestion récents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Documentation sur la gouvernance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Politique de protection des clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Contact */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à devenir partenaire ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez notre équipe pour discuter de vos besoins en financement et découvrir comment le FPM peut accompagner votre institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/impact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Voir notre impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}