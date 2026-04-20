import { motion } from "motion/react";
import { Target, Users, TrendingUp, MapPin, Award, Heart, DollarSign, BarChart3, PieChart } from "lucide-react";
import { StatCounter } from "../components/StatCounter";
import { PageHero } from "../components/PageHero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import smicoImage from "figma:asset/01c61dbe0680a3643354cef85e8ac6abd261c161.png";
import akibaYetuImage from "figma:asset/5a1cac47e5a1f8f5f208edfab404f51bfc281d45.png";
import impactVisuelImage from "figma:asset/3b84ba38260c298f926e24e4ee621b25e2c51e34.png";

export function Impact() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Notre Impact"
        subtitle="Mesurer et amplifier notre contribution à l'inclusion financière et au développement économique de la RDC"
        image="https://images.unsplash.com/photo-1548782033-3ac3a62ece8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tZW4lMjBncm91cCUyMG1pY3JvZmluYW5jZSUyMG1lZXRpbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcxNzc1NzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
      />

      {/* Impact financier */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Impact financier</h2>
            <p className="text-xl text-gray-600">
              Renforcement de la capacité financière des IFP partenaires
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Croissance du portefeuille",
                value: "+85%",
                description: "Augmentation moyenne du portefeuille de crédit des IFP accompagnées",
                color: "blue"
              },
              {
                icon: Users,
                title: "Nouveaux clients",
                value: "+120%",
                description: "Croissance de la base de clients après intervention",
                color: "green"
              },
              {
                icon: Target,
                title: "Amélioration PAR",
                value: "-45%",
                description: "Réduction du portefeuille à risque moyen",
                color: "purple"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-${metric.color}-50 to-white rounded-xl p-8 border-2 border-${metric.color}-200 shadow-lg`}
              >
                <div className={`w-14 h-14 bg-${metric.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <metric.icon className={`w-7 h-7 text-${metric.color}-600`} />
                </div>
                <div className={`text-4xl font-bold text-${metric.color}-600 mb-3`}>{metric.value}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact financier en chiffres */}
      <section className="py-20 bg-gradient-to-br from-[#00467F] via-[#1C398E] to-[#00AFEF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Impact en chiffres</h2>
            <p className="text-xl text-blue-100">
              Les résultats consolidés de nos interventions (FPM ASBL + FPM SA)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={130} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-blue-100">Total actifs sous gestion</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={126} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-blue-100">Décaissés depuis 2015</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <Award className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={204} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-blue-100">Capacité de couverture garantie</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={54} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-blue-100">Encours de crédit</div>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <PieChart className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={45} suffix="M+" prefix="$" />
              </div>
              <div className="text-sm text-blue-100">Plafond d'encours garantie</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={403} suffix="%" />
              </div>
              <div className="text-sm text-blue-100">Croissance du résultat net</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={97} suffix="%" />
              </div>
              <div className="text-sm text-blue-100">Croissance du bilan</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center border border-white/20">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2 text-white">
                <StatCounter end={80} suffix="%" />
              </div>
              <div className="text-sm text-blue-100">Croissance produit net bancaire</div>
            </div>
          </div>
        </div>
      </section>

      {/* Répartition par genre et secteur */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Analyse par genre et secteur d'activité</h2>
            <p className="text-xl text-gray-600">
              Répartition des bénéficiaires par genre selon les secteurs économiques
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Portefeuille Garanti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Portefeuille Garanti par Genre
              </h3>
              <p className="text-sm text-gray-600 mb-6 text-center">
                Répartition selon le secteur d'activité
              </p>

              <div className="space-y-4">
                {[
                  { sector: "Transport", women: 7, men: 93 },
                  { sector: "Tourisme et hôtellerie", women: 13, men: 87 },
                  { sector: "Services", women: 19, men: 81 },
                  { sector: "Santé et social", women: 20, men: 80 },
                  { sector: "Industrie textile", women: 13, men: 87 },
                  { sector: "Commerce", women: 27, men: 73 },
                  { sector: "BTP", women: 32, men: 68 },
                  { sector: "Artisanat", women: 100, men: 0 },
                  { sector: "Agriculture et élevage", women: 10, men: 90 },
                  { sector: "Autres", women: 100, men: 0 }
                ].map((data, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-sm font-medium text-gray-700">{data.sector}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden flex">
                        <div
                          className="bg-[#00467F] flex items-center justify-center text-white text-xs font-bold"
                          style={{ width: `${data.women}%` }}
                        >
                          {data.women > 0 && `${data.women}%`}
                        </div>
                        <div
                          className="bg-[#00AFEF] flex items-center justify-center text-white text-xs font-bold"
                          style={{ width: `${data.men}%` }}
                        >
                          {data.men > 0 && `${data.men}%`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#00467F]"></div>
                  <span className="text-sm text-gray-700">Femmes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#00AFEF]"></div>
                  <span className="text-sm text-gray-700">Hommes</span>
                </div>
              </div>
            </motion.div>

            {/* Refinancement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
                Refinancement - Bénéficiaires Finaux
              </h3>
              <p className="text-sm text-gray-600 mb-6 text-center">
                Répartition par genre selon le secteur d'activité
              </p>

              <div className="space-y-4">
                {[
                  { sector: "Construction", women: 9, men: 91 },
                  { sector: "Services", women: 17, men: 83 },
                  { sector: "Énergie renouvelable", women: 25, men: 75 },
                  { sector: "Transport", women: 23, men: 77 },
                  { sector: "Santé", women: 31, men: 69 },
                  { sector: "Petite industrie", women: 15, men: 85 },
                  { sector: "HORECA", women: 33, men: 67 },
                  { sector: "Éducation", women: 35, men: 65 },
                  { sector: "Communication", women: 20, men: 80 },
                  { sector: "Commerce général", women: 37, men: 63 },
                  { sector: "Autres à préciser", women: 33, men: 67 },
                  { sector: "Agriculture", women: 37, men: 63 }
                ].map((data, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-sm font-medium text-gray-700">{data.sector}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden flex">
                        <div
                          className="bg-[#00467F] flex items-center justify-center text-white text-xs font-bold"
                          style={{ width: `${data.women}%` }}
                        >
                          {data.women > 0 && `${data.women}%`}
                        </div>
                        <div
                          className="bg-[#00AFEF] flex items-center justify-center text-white text-xs font-bold"
                          style={{ width: `${data.men}%` }}
                        >
                          {data.men > 0 && `${data.men}%`}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#00467F]"></div>
                  <span className="text-sm text-gray-700">Femmes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#00AFEF]"></div>
                  <span className="text-sm text-gray-700">Hommes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact territorial */}
      <section className="py-20 bg-gradient-to-br from-[#00467F] via-[#1C398E] to-[#00467F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Impact territorial</h2>
            <p className="text-xl text-blue-100">
              Une couverture nationale pour un développement inclusif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-cyan-300" />
                <h3 className="text-2xl font-bold text-white">Couverture géographique</h3>
              </div>
              <div className="space-y-4">
                {[
                  { region: "Kinshasa", ifp: 45, color: "blue" },
                  { region: "Provinces de l'Est", ifp: 38, color: "green" },
                  { region: "Provinces du Centre", ifp: 32, color: "purple" },
                  { region: "Provinces de l'Ouest", ifp: 25, color: "orange" },
                  { region: "Grand Katanga", ifp: 22, color: "red" }
                ].map((area) => (
                  <div key={area.region}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-blue-100">{area.region}</span>
                      <span className="text-sm font-bold text-white">{area.ifp} IFP</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#00AFEF] to-cyan-300 h-full rounded-full"
                        style={{ width: `${(area.ifp / 45) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-cyan-300" />
                <h3 className="text-2xl font-bold text-white">Résultats par type</h3>
              </div>
              <div className="space-y-6">
                {[
                  { type: "IMF", count: 16, description: "Institutions de microfinance accompagnées" },
                  { type: "COOPEC", count: 6, description: "Coopératives d'épargne et crédit" },
                  { type: "Banques", count: 7, description: "Banques de proximité" }
                ].map((type) => (
                  <div key={type.type} className="border-l-4 border-cyan-300 pl-4">
                    <div className="text-2xl font-bold text-cyan-300">{type.count}</div>
                    <div className="font-semibold text-white">{type.type}</div>
                    <div className="text-sm text-blue-100">{type.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Histoires de succès</h2>
            <p className="text-xl text-gray-600">
              Découvrez comment nos interventions transforment les institutions et les vies
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                institution: "COOPEC Akiba Yetu",
                location: "Bukavu, Sud-Kivu",
                intervention: "Assistance technique + Prêt subordonné",
                results: [
                  "Portefeuille passé de $800K à $2.1M",
                  "Membres passés de 2,500 à 6,800",
                  "Digitalisation complète des opérations",
                  "PAR30 réduit de 12% à 3.5%"
                ],
                image: akibaYetuImage,
                imageAlt: "Groupe de femmes entrepreneures africaines en réunion"
              },
              {
                institution: "IMF SMICO",
                location: "Lubumbashi, Haut-Katanga",
                intervention: "Formation + Prêt senior",
                results: [
                  "Expansion dans 3 nouvelles provinces",
                  "15,000 nouveaux clients en 18 mois",
                  "Lancement de produits agricoles",
                  "ROE amélioré de 8% à 15%"
                ],
                image: smicoImage,
                imageAlt: "Entrepreneur africain"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden ${
                  index % 2 === 0 ? 'lg:grid lg:grid-cols-2' : 'lg:grid lg:grid-cols-2'
                }`}
              >
                {/* Image à gauche pour la première carte, à droite pour la deuxième */}
                <div className={`relative ${index % 2 === 1 ? 'h-72 lg:h-96 lg:order-2' : 'h-64 lg:h-auto'}`}>
                  <ImageWithFallback
                    src={story.image}
                    alt={story.imageAlt}
                    className={`w-full h-full object-cover ${index % 2 === 1 ? 'object-top' : ''}`}
                  />
                  <div className={`absolute inset-0 ${index % 2 === 1 ? 'bg-gradient-to-b from-black/20 via-transparent to-black/30' : 'bg-gradient-to-t from-black/50 to-transparent'}`}></div>
                </div>
                
                {/* Contenu */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.institution}</h3>
                      <p className="text-sm text-gray-600">{story.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {story.intervention}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {story.results.map((result) => (
                      <div key={result} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0"></div>
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicateurs ESG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Performance ESG</h2>
            <p className="text-xl text-gray-600">
              Notre engagement envers les critères Environnementaux, Sociaux et de Gouvernance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Environnement",
                color: "green",
                items: [
                  "Financement vert : 18% du portefeuille",
                  "Formation sur les risques climatiques",
                  "Promotion de l'agriculture durable"
                ]
              },
              {
                category: "Social",
                color: "blue",
                items: [
                  "58% de bénéficiaires femmes",
                  "35% de jeunes entrepreneurs",
                  "Protection des clients renforcée"
                ]
              },
              {
                category: "Gouvernance",
                color: "purple",
                items: [
                  "100% des IFP avec CA actif",
                  "Transparence et reporting",
                  "Conformité réglementaire"
                ]
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-${pillar.color}-50 rounded-xl p-8 border-2 border-${pillar.color}-200`}
              >
                <h3 className={`text-2xl font-bold mb-6 text-${pillar.color}-700`}>{pillar.category}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color}-600 mt-2 shrink-0`}></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution aux ODD */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Contribution aux ODD</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos interventions contribuent directement à l'atteinte des Objectifs de Développement Durable
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { number: 1, title: "Pas de pauvreté", color: "red" },
              { number: 2, title: "Faim zéro", color: "yellow" },
              { number: 5, title: "Égalité entre les sexes", color: "orange" },
              { number: 8, title: "Travail décent", color: "purple" },
              { number: 10, title: "Inégalités réduites", color: "pink" }
            ].map((odd, index) => (
              <motion.div
                key={odd.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-colors text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-3">
                  {odd.number}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{odd.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}