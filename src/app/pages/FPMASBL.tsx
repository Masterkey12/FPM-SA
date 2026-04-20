import { motion } from "motion/react";
import { Users, Target, MapPin, Award, ArrowRight, CheckCircle, TrendingUp, FileText, Search, FileCheck, Handshake, Rocket } from "lucide-react";
import { Link } from "react-router";
import { StatCounter } from "../components/StatCounter";
import { PageHero } from "../components/PageHero";
import heroImage from "figma:asset/5e64bf19a3d3c68c087a38d90c60723b7fc77f8a.png";

export function FPMASBL() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="FPM ASBL"
        subtitle="Renforcement des capacités des institutions financières de proximité pour une inclusion financière durable"
        image={heroImage}
        gradient="from-[#00AFEF]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
      />

      {/* Mission & Mandat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Notre mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le FPM ASBL accompagne les institutions financières de proximité (IFP) dans leur développement institutionnel, opérationnel et technologique. Notre approche sur mesure vise à renforcer leur capacité à servir les populations mal desservies.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Nous croyons que des IFP fortes et professionnelles sont la clé d'une inclusion financière durable et d'un développement économique équitable en RDC.
              </p>
              <div className="flex gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Vision</div>
                    <div className="text-sm text-gray-600">IFP performantes et inclusives</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Approche</div>
                    <div className="text-sm text-gray-600">Sur mesure et collaborative</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8 border-2 border-green-200 bg-[#1c398e]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#ffffff]">Nos valeurs</h3>
                  <ul className="space-y-3">
                    {["Excellence", "Transparence", "Innovation", "Impact social"].map((value) => (
                      <li key={value} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-[#ffffff]">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'AT */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos domaines d'intervention</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une assistance technique complète couvrant tous les aspects du développement institutionnel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Renforcement institutionnel",
                items: [
                  "Gouvernance et conformité",
                  "Gestion des risques",
                  "Contrôle interne et audit",
                  "Politiques et procédures"
                ]
              },
              {
                icon: Users,
                title: "Développement opérationnel",
                items: [
                  "Produits et services innovants",
                  "Stratégie commerciale",
                  "Formation du personnel",
                  "Excellence du service client"
                ]
              },
              {
                icon: TrendingUp,
                title: "Transformation digitale",
                items: [
                  "Systèmes d'information",
                  "Mobile banking",
                  "Solutions fintech",
                  "Cybersécurité"
                ]
              }
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <domain.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre méthodologie</h2>
            <p className="text-xl text-gray-600">
              Un processus éprouvé pour maximiser l'impact de nos interventions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Diagnostic", desc: "Analyse approfondie" },
              { step: "2", title: "Conception", desc: "Solution sur mesure" },
              { step: "3", title: "Planification", desc: "Feuille de route" },
              { step: "4", title: "Mise en œuvre", desc: "Accompagnement" },
              { step: "5", title: "Suivi", desc: "Évaluation continue" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl p-6 text-center border-2 border-green-200 bg-[#1c398e]"
              >
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {phase.step}
                </div>
                <h3 className="font-bold mb-1 text-[#ffffff]">{phase.title}</h3>
                <p className="text-sm text-[#ffffff]">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Co-financement</h3>
                <p className="text-gray-700 mb-4">
                  Les IFP contribuent entre 10% et 60% du coût de l'assistance technique, selon leur capacité financière et la nature de l'intervention.
                </p>
                <p className="text-gray-700">
                  Ce mécanisme garantit l'engagement des bénéficiaires et la durabilité des résultats.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">10-60%</div>
                  <div className="text-gray-600">Taux de contribution des IFP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20 bg-gradient-to-br from-[#00467F] via-[#003d6f] to-[#00467F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Nos résultats</h2>
            <p className="text-xl text-blue-100">
              Plus de 15 ans d'expertise au service de l'inclusion financière
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <StatCounter end={298} label="Projets réalisés" />
            <StatCounter end={150} label="IFP accompagnées" suffix="+" />
            <StatCounter end={26} label="Provinces" suffix="/26" />
            <StatCounter end={85} label="Taux de satisfaction" suffix="%" />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Types d'IFP bénéficiaires</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { type: "Institutions de microfinance", count: "120+", color: "green" },
                { type: "Coopératives d'épargne et crédit", count: "85+", color: "blue" },
                { type: "Banques de proximité", count: "15+", color: "purple" }
              ].map((beneficiary, index) => (
                <div key={index} className={`bg-${beneficiary.color}-50 rounded-xl p-6 border-2 border-${beneficiary.color}-200`}>
                  <div className={`text-3xl font-bold text-${beneficiary.color}-600 mb-2`}>
                    {beneficiary.count}
                  </div>
                  <div className="text-gray-700 font-medium">{beneficiary.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Devenir partenaire</h2>
            <p className="text-xl text-gray-600">
              Rejoignez notre réseau d'institutions financières performantes
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#00467F] to-[#00AFEF] text-white rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-5 gap-6 mb-8">
              {[
                { 
                  step: 1, 
                  title: "Demande", 
                  icon: FileText
                },
                { 
                  step: 2, 
                  title: "Évaluation", 
                  icon: Search
                },
                { 
                  step: 3, 
                  title: "Proposition", 
                  icon: FileCheck
                },
                { 
                  step: 4, 
                  title: "Accord", 
                  icon: Handshake
                },
                { 
                  step: 5, 
                  title: "Mise en œuvre", 
                  icon: Rocket
                }
              ].map((step) => (
                <div key={step.step} className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold mb-1">Étape {step.step}</div>
                  <div className="text-sm text-blue-100 text-center">{step.title}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#00467F] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Demander une assistance technique
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}