import { motion } from "motion/react";
import { DollarSign, Shield, TrendingUp, FileText, ArrowRight, CheckCircle, BarChart3 } from "lucide-react";
import { Link } from "react-router";
import { StatCounter } from "../components/StatCounter";
import { PageHero } from "../components/PageHero";
import { FPM_COLORS } from "../utils/colors";
import heroImage from "figma:asset/d4e31bd19e5edbadcd3443e6d2232d1c6e50f26d.png";

export function FPMSA() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="FPM SA"
        subtitle="Financement stratégique et investissements catalyseurs pour les institutions financières de proximité"
        image={heroImage}
        gradient="from-[#00467F]/70 via-[#00467F]/60 to-transparent"
        height="medium"
      />

      {/* Présentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Rôle stratégique du FPM</h2>
              <p className="text-lg text-gray-700 mb-6">
                Au regard de sa vision d'un système financier inclusif et responsable, et de sa mission de promotion de l'inclusion financière en RDC, le FPM joue un rôle central d'acteur catalyseur, structurant et transformateur du secteur financier.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600">1️⃣</span>
                    Catalyseur de l'inclusion financière
                  </h3>
                  <ul className="space-y-1 ml-6 text-sm text-gray-600">
                    
                    
                    
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600">3️⃣</span>
                    Mobilisateur de ressources financières
                  </h3>
                  <ul className="space-y-1 ml-6 text-sm text-gray-600">
                    
                    
                    
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600">4️⃣</span>
                    Garant de la performance et de la responsabilité
                  </h3>
                  <ul className="space-y-1 ml-6 text-sm text-gray-600">
                    
                    
                    
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                    <span className="text-blue-600">5️⃣</span>
                    Acteur d'impact et de développement durable
                  </h3>
                  <ul className="space-y-1 ml-6 text-sm text-gray-600">
                    
                    
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$45M+</div>
                  <div className="text-sm text-gray-600">Investis</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">32+</div>
                  <div className="text-sm text-gray-600">IFP financées</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-sm text-gray-600">Taux de remboursement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">$1.2M</div>
                  <div className="text-sm text-gray-600">Prêt moyen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits financiers */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Nos produits financiers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des solutions de financement flexibles adaptées aux différents stades de développement des IFP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Prêts Senior",
                description: "Financement à court et moyen terme pour le refinancement du portefeuille de crédit",
                features: [
                  "Durée : 12 à 36 mois",
                  "Taux compétitifs",
                  "Remboursement adapté",
                  "Garanties standards"
                ],
                color: "blue"
              },
              {
                icon: TrendingUp,
                title: "Prêts Subordonnés",
                description: "Quasi-fonds propres pour renforcer la structure financière et soutenir la croissance",
                features: [
                  "Durée : 3 à 5 ans",
                  "Améliore les ratios",
                  "Flexibilité accrue",
                  "Effet de levier"
                ],
                color: "green"
              },
              {
                icon: Shield,
                title: "Garanties de crédit",
                description: "Partage des risques pour faciliter l'accès au financement bancaire",
                features: [
                  "Couverture jusqu'à 75%",
                  "Accès au crédit bancaire",
                  "Réduction des garanties",
                  "Accompagnement"
                ],
                color: "purple"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 bg-${product.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <product.icon className={`w-7 h-7 text-${product.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className={`w-4 h-4 text-${product.color}-500 shrink-0 mt-0.5`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critères d'éligibilité */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Critères d'éligibilité</h2>
            <p className="text-xl text-gray-600">
              Des critères clairs pour garantir la qualité de notre portefeuille
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gouvernance",
                items: ["Conseil d'administration actif", "Direction qualifiée", "Statuts conformes"]
              },
              {
                title: "Conformité",
                items: ["Agrément valide", "Conformité réglementaire", "Audits à jour"]
              },
              {
                title: "Performance",
                items: ["Portefeuille sain (PAR < 10%)", "Rentabilité démontrée", "Croissance contrôlée"]
              },
              {
                title: "Gestion des risques",
                items: ["Contrôle interne", "Politiques de crédit", "Systèmes d'information"]
              }
            ].map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-900 rounded-xl p-6 border border-blue-700"
              >
                <h3 className="text-lg font-bold mb-4 text-white">{criteria.title}</h3>
                <ul className="space-y-2">
                  {criteria.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestion des risques */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Gestion rigoureuse des risques</h2>
              <p className="text-lg text-blue-100 mb-6">
                Notre approche de gestion des risques combine analyse approfondie, suivi continu et diversification du portefeuille.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Analyse de crédit", desc: "Due diligence financière, opérationnelle et sociale" },
                  { title: "Comité indépendant", desc: "Décisions collégiales et objectives" },
                  { title: "Suivi régulier", desc: "Rapports mensuels et visites sur site" },
                  { title: "Diversification", desc: "Limite de concentration par IFP et région" }
                ].map((risk) => (
                  <div key={risk.title} className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white">{risk.title}</div>
                      <div className="text-sm text-blue-200">{risk.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Qualité du portefeuille</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Taux de remboursement</span>
                    <span className="font-bold">98%</span>
                  </div>
                  <div className="bg-blue-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-white h-full rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Portfolio at Risk (PAR 30)</span>
                    <span className="font-bold">2.5%</span>
                  </div>
                  <div className="bg-blue-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-green-400 h-full rounded-full" style={{ width: "2.5%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Taux de pertes</span>
                    <span className="font-bold">0.8%</span>
                  </div>
                  <div className="bg-blue-700 rounded-full h-3 overflow-hidden">
                    <div className="bg-yellow-400 h-full rounded-full" style={{ width: "0.8%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus d'investissement */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Processus d'investissement</h2>
            <p className="text-xl text-gray-600">
              Un processus rigoureux et transparent en 6 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Demande", duration: "1 sem" },
              { step: "2", title: "Due diligence", duration: "4-6 sem" },
              { step: "3", title: "Comité crédit", duration: "2 sem" },
              { step: "4", title: "Négociation", duration: "2 sem" },
              { step: "5", title: "Décaissement", duration: "1 sem" },
              { step: "6", title: "Suivi", duration: "Continu" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-4 text-center shadow-md bg-[#1c398e]"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-2 text-[#1c398e]">
                  {phase.step}
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{phase.title}</h3>
                <p className="text-xs text-orange-100">{phase.duration}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Délai moyen de traitement</h3>
              <div className="text-5xl font-bold text-blue-600">10-12 semaines</div>
            </div>
            <p className="text-center text-gray-600">
              De la soumission de la demande au décaissement des fonds
            </p>
          </div>
        </div>
      </section>

      {/* Performance & Impact */}
      <section className="py-20 bg-gradient-to-br from-[#00467F] via-[#003d6f] to-[#00467F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Performance & Impact</h2>
            <p className="text-xl text-blue-100">
              Des résultats tangibles pour l'écosystème financier congolais
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <StatCounter end={45} label="Millions USD investis" prefix="$" suffix="M" />
            <StatCounter end={80} label="IFP financées" suffix="+" />
            <StatCounter end={1800000} label="Bénéficiaires indirects" suffix="+" />
            <StatCounter end={98} label="Taux de remboursement" suffix="%" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Répartition du portefeuille</h3>
              </div>
              <div className="space-y-4">
                {[
                  { type: "Institutions de microfinance", percent: 65, color: "blue" },
                  { type: "COOPEC", percent: 25, color: "green" },
                  { type: "Banques de proximité", percent: 10, color: "purple" }
                ].map((item) => (
                  <div key={item.type}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">{item.type}</span>
                      <span className="text-sm font-semibold text-gray-900">{item.percent}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-${item.color}-600 h-full rounded-full`}
                        style={{ width: `${item.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Documents clés</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Politique de crédit",
                  "Procédures d'investissement",
                  "Grille de tarification",
                  "Modèle de contrat de prêt",
                  "Guide de soumission"
                ].map((doc) => (
                  <li key={doc} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                    <span className="text-sm text-gray-700">{doc}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Prêt à financer votre croissance ?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Soumettez votre demande de financement et rejoignez notre réseau d'institutions partenaires
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00467F] text-white font-semibold rounded-lg hover:bg-[#003d6f] transition-colors"
            >
              Soumettre une demande
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00467F] font-semibold rounded-lg hover:bg-blue-50 transition-colors border-2 border-[#00467F]"
            >
              Télécharger le guide
              <FileText className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}