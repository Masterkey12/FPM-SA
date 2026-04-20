import { motion } from "motion/react";
import { Target, Users, Award, History, Shield, TrendingUp, MapPin, Building2, FileText } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { FPM_COLORS } from "../utils/colors";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import mapRDC from "figma:asset/affdb6833e2dacc89c7aeca0073848969463be69.png";
import heroImage from "figma:asset/e642c19943598e8d1e2b225fd12d312b59fb13ee.png";
import patrickNkongoImage from "figma:asset/90f85cad7e163bec6e9082d6a7355cd2b1af83c3.png";
import seraphinMukutaImage from "figma:asset/e73cdbdc0c86fb7dc5406afdd61cc8fcf2e97600.png";
import freddyKatenguImage from "figma:asset/b3706653627dc4c976cf64fd4ecec522bbb07477.png";
import firminNyalulerhaImage from "figma:asset/6b7f6034acbcfac0b9fc7b02d694512d95e16435.png";
import magalieMukadiImage from "figma:asset/b9bbc62a3a83018a19c050c47bee5b53bad45b75.png";
import christianTshiteyaImage from "figma:asset/c5694017d81242fe231ea2d46266d7a1033b5aed.png";
import governanceStructureImage from "figma:asset/a26417e3ef6aed2388e0a738014d8c6992e28678.png";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="À propos du FPM"
        subtitle="Plus de 15 ans d'engagement au service de l'inclusion financière en République Démocratique du Congo"
        image={heroImage}
        gradient="from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
        imagePosition="center 30%"
      />

      {/* Vision, Mission & Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Vision",
                description: "Notre vision est celle d'un système financier inclusif et responsable au service des micro, petites et moyennes entreprises, ainsi que des populations actives à faibles revenus, leur permettant d'augmenter leurs revenus et de réduire la pauvreté.",
                color: "#194DDC",
                bgColor: "#EEF2FF",
                borderColor: "#C7D2FE"
              },
              {
                icon: TrendingUp,
                title: "Mission",
                description: "La mission du FPM est de promouvoir l'inclusion financière en République Démocratique du Congo, en apportant un appui technique et financier aux institutions financières qui ciblent les MPME et les populations actives à faibles revenus, généralement exclues du système financier.",
                color: "#004075",
                bgColor: "#EFF6FF",
                borderColor: "#BFDBFE"
              },
              {
                icon: Award,
                title: "Rôle",
                description: "Au regard de sa vision d'un système financier inclusif et responsable, et de sa mission de promotion de l'inclusion financière en RDC, le FPM joue un rôle central d'acteur catalyseur, structurant et transformateur du secteur financier.",
                color: "#194DDC",
                bgColor: "#EEF2FF",
                borderColor: "#C7D2FE"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 shadow-lg"
                style={{ borderColor: item.borderColor }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: item.bgColor }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre parcours</h2>
            <p className="text-xl text-gray-600">
              Une évolution stratégique au service du secteur financier congolais
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2007–2010",
                  title: "PASMIF – FPM",
                  subtitle: "AT (Assistance Technique)",
                  description: "Phase programme • Focus sur la microfinance"
                },
                {
                  year: "2010–2013",
                  title: "FPM ASBL",
                  subtitle: "AT (Assistance Technique)",
                  description: "Phase d'institutionnalisation • Mutualisation des bailleurs"
                },
                {
                  year: "2014–2023",
                  title: "FPM SA + ASBL",
                  subtitle: "AT + Financement",
                  description: "Création de FPM SA • Diversification de l'actionnariat • Augmentation de la capacité de financement • Diversification des activités"
                },
                {
                  year: "2024–2028",
                  title: "FPM SA + ASBL",
                  subtitle: "AT + Financement",
                  description: "Renforcement des capacités • Financements spécialisés • Impact renforcé"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 1 ? 'lg:text-right' : ''}`}
                >
                  <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {milestone.year.includes('–') ? milestone.year.split('–')[0].slice(-2) : milestone.year.slice(-2)}
                        </div>
                        <div className="text-xl font-bold text-blue-600">{milestone.year}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{milestone.title}</h3>
                      <p className="text-sm font-semibold text-blue-600 mb-2">{milestone.subtitle}</p>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className={index % 2 === 0 ? 'hidden lg:block' : 'hidden lg:block lg:order-1'}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modèle FPM */}
      {/* Section removed - Notre modèle unique (FPM ASBL, Synergie, FPM SA) */}

      {/* Gouvernance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Gouvernance</h2>
            <p className="text-xl text-gray-600">
              Une structure de gouvernance solide et transparente
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto mb-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Conseil d'Administration FPM SA</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { name: "Dimitry Van Raemdonck", role: "Président, administrateur indépendant" },
                { name: "Michèle Husson", role: "Administratrice non exécutive" },
                { name: "Yvonne Chika", role: "Administratrice indépendante" },
                { name: "Bruno Kambaja", role: "Administrateur indépendant" },
                { name: "Bruno Degoy", role: "Administrateur non exécutif" },
                { name: "Vincent De Brouwer", role: "Administrateur indépendant" },
                { name: "Bertrand Mignot", role: "Administrateur non exécutif" },
                { name: "Aimée Kahindo", role: "Administratrice indépendante" },
                { name: "Patrick Nkongo", role: "Administrateur exécutif" },
                { name: "Séraphin Mukuta", role: "Administrateur exécutif" }
              ].map((member, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="font-bold text-gray-900">{member.name}</div>
                  <div className="text-sm text-gray-600">{member.role}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Équipe dirigeante</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Patrick Nkongo", role: "Directeur Général", image: patrickNkongoImage },
                { name: "Séraphin Mukuta", role: "Directeur Général Adjoint", image: seraphinMukutaImage },
                { name: "Freddy Katengu Mena", role: "Directeur Financier", image: freddyKatenguImage },
                { name: "Firmin Nyalulerha Zagabe", role: "Directeur de la Gestion des Risques et de la Conformité", image: firminNyalulerhaImage },
                { name: "Magalie Mukadi Masengu", role: "Directrice des Investissements", image: magalieMukadiImage },
                { name: "Christian Tshiteya", role: "Directeur des Garanties Partielles de Portefeuille", image: christianTshiteyaImage }
              ].map((leader, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="font-bold text-gray-900">{leader.name}</div>
                  <div className="text-sm text-gray-600">{leader.role}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {[
              "Comité d'Audit",
              "Comité de Crédit",
              "Comité des Risques",
              "Comité ESG"
            ].map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-semibold text-gray-900 text-sm">{committee}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure de gouvernance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <Building2 className="w-16 h-16 mx-auto mb-4" style={{ color: FPM_COLORS.blueDark }} />
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Structure de gouvernance du FPM SA</h2>
            <p className="text-xl text-gray-600">
              Une organisation structurée pour garantir l'excellence opérationnelle et la gestion rigoureuse
            </p>
          </div>

          {/* Organigramme visuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border-2 mb-12"
            style={{ borderColor: FPM_COLORS.blueDark }}
          >
            <img 
              src={governanceStructureImage} 
              alt="Structure de gouvernance du FPM SA" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          {/* Description des organes de gouvernance */}
          {/* Section removed - Assemblée Générale & CA + Comités Spécialisés */}

          {/* Direction Générale */}
          {/* Section removed - Direction Générale boxes */}

          {/* Directions opérationnelles */}
          {/* Section removed - Direction des Engagements and Direction des Finances et Administration */}

          {/* Fonctions supports */}
          {/* Section removed - Direction des Risques et Conformité, Département Contrôle Interne, Département Informatique */}
        </div>
      </section>

      {/* Présence nationale */}
      <section className="py-20" style={{ background: `linear-gradient(to bottom right, ${FPM_COLORS.blueDark}, ${FPM_COLORS.cyan})` }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Présence nationale</h2>
            <p className="text-xl text-blue-100">
              Une couverture complète des 26 provinces de la RDC
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br rounded-xl flex items-center justify-center border-2 overflow-hidden" style={{ 
                  borderColor: FPM_COLORS.cyan,
                  backgroundImage: `linear-gradient(to bottom right, ${FPM_COLORS.blueDarkLight}, ${FPM_COLORS.cyanLight})`
                }}>
                  <img 
                    src={mapRDC} 
                    alt="Carte de la RDC" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8" style={{ color: FPM_COLORS.blueDark }}>
                  Un réseau étendu au service de l'inclusion financière en RDC
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                      <span className="font-bold text-xl" style={{ color: FPM_COLORS.blueDark }}>26</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">Provinces couvertes</div>
                      <div className="text-gray-600">Présence dans toutes les provinces de la RDC</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.cyanLight }}>
                      <span className="font-bold text-xl" style={{ color: FPM_COLORS.cyan }}>35+</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">Institutions locales</div>
                      <div className="text-gray-600">IMF, COOPEC, Banques de proximité</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-16 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: FPM_COLORS.blueDarkLight }}>
                      <span className="font-bold text-xl" style={{ color: FPM_COLORS.blueDark }}>2.5M+</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">Bénéficiaires finaux</div>
                      <div className="text-gray-600">PME, entrepreneurs, ménages</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires & Bailleurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos Actionnaires</h2>
            <p className="text-xl text-gray-600">
              Avec le soutien d'institutions financières internationales de premier plan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { name: "KfW", description: "Banque de développement allemande" },
              { name: "BIO", description: "Société belge d'investissement pour les pays en développement" },
              { name: "Cordaid", description: "Organisation de développement néerlandaise" },
              { name: "M. Loïc De Cannière", description: "Investisseur engagé dans la finance à impact" }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900 mb-2">{partner.name}</div>
                  {partner.description && (
                    <div className="text-sm text-gray-600">{partner.description}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconnaissances */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Reconnaissances & Labels</h2>
            <p className="text-xl text-gray-600">
              Notre engagement et notre excellence reconnus au niveau international
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Best Asset Management Company Congo",
                year: "2024",
                certification: "Certification par the Global Banking & Finance Awards®",
                description: "Ce prix récompense les institutions qui démontrent un leadership reconnu dans la gestion d'actifs"
              },
              {
                title: "Best Asset Management Company Congo",
                year: "2026",
                certification: "Certification par the Global Banking & Finance Awards®",
                description: "Ce prix récompense les institutions qui démontrent un leadership reconnu dans la gestion d'actifs"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">{award.year}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{award.certification}</p>
                <p className="text-sm text-gray-600">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}