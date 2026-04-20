import { motion } from "motion/react";
import { Briefcase, Users, Target, TrendingUp, Heart, CheckCircle, ArrowRight, FileText, Search, FileCheck, MessageSquare, Handshake } from "lucide-react";
import { Link } from "react-router";
import { PageHero } from "../components/PageHero";

const jobOpenings = [
  {
    id: 1,
    title: "Chargé(e) d'Assistance Technique Senior",
    department: "FPM ASBL",
    location: "Kinshasa",
    type: "CDI",
    experience: "5+ ans",
    description: "Accompagnement des IFP dans leur développement institutionnel et opérationnel",
    requirements: [
      "Master en finance, gestion ou équivalent",
      "5 ans d'expérience en microfinance",
      "Excellentes capacités d'analyse",
      "Maîtrise du français et anglais"
    ]
  },
  {
    id: 2,
    title: "Analyste Crédit",
    department: "FPM SA",
    location: "Kinshasa",
    type: "CDI",
    experience: "3-5 ans",
    description: "Analyse des demandes de financement et due diligence des institutions partenaires",
    requirements: [
      "Licence en finance ou comptabilité",
      "3 ans d'expérience en analyse crédit",
      "Connaissance des normes prudentielles",
      "Rigueur et sens de l'analyse"
    ]
  },
  {
    id: 3,
    title: "Expert(e) en Transformation Digitale",
    department: "FPM ASBL",
    location: "Kinshasa (dplacements fréquents)",
    type: "CDI",
    experience: "4+ ans",
    description: "Accompagnement des IFP dans leur transformation digitale et adoption de technologies",
    requirements: [
      "Formation en informatique ou systèmes d'information",
      "Expérience en digital banking",
      "Connaissance des solutions fintech",
      "Capacité à former et coacher"
    ]
  },
  {
    id: 4,
    title: "Responsable Suivi & Évaluation",
    department: "Direction Générale",
    location: "Kinshasa",
    type: "CDI",
    experience: "5+ ans",
    description: "Pilotage du système de suivi-évaluation et mesure de l'impact des interventions",
    requirements: [
      "Master en S&E, statistiques ou économie",
      "Expérience en gestion de projets",
      "Maîtrise des outils statistiques",
      "Excellentes capacités rédactionnelles"
    ]
  },
  {
    id: 5,
    title: "Gestionnaire des Risques",
    department: "FPM SA",
    location: "Kinshasa",
    type: "CDI",
    experience: "4+ ans",
    description: "Gestion du portefeuille de prêts et supervision des risques de crédit",
    requirements: [
      "Formation en gestion des risques",
      "Connaissance des normes Bâle",
      "Expérience en institution financière",
      "Maîtrise Excel et outils analytiques"
    ]
  },
  {
    id: 6,
    title: "Stagiaire - Assistant(e) Communication",
    department: "Direction Générale",
    location: "Kinshasa",
    type: "Stage (6 mois)",
    experience: "Débutant",
    description: "Support aux activités de communication et gestion des réseaux sociaux",
    requirements: [
      "Étudiant(e) en communication ou marketing",
      "Créativité et maîtrise réseaux sociaux",
      "Bonnes capacités rédactionnelles",
      "Maîtrise outils graphiques (bonus)"
    ]
  }
];

export function Careers() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Carrières"
        subtitle="Rejoignez une équipe dynamique et contribuez à transformer le paysage de l'inclusion financière en RDC"
        image="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFscyUyMGJ1c2luZXNzJTIwbWVldGluZyUyMGNhcmVlciUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MjAyNzM5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
        gradient="from-[#00AFEF]/70 via-[#00467F]/60 to-transparent"
        height="medium"
      />

      {/* Culture organisationnelle */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Pourquoi nous rejoindre ?</h2>
            <p className="text-xl text-gray-600">
              Une culture d'excellence, d'innovation et d'impact social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Mission impactante",
                description: "Contribuez directement à l'inclusion financière de millions de Congolais"
              },
              {
                icon: TrendingUp,
                title: "Développement professionnel",
                description: "Formation continue et opportunités d'évolution de carrière"
              },
              {
                icon: Users,
                title: "Équipe multiculturelle",
                description: "Travaillez avec des experts nationaux et internationaux"
              },
              {
                icon: Heart,
                title: "Équilibre vie pro/perso",
                description: "Environnement de travail flexible et bienveillant"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 text-center"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages & bénéfices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nos avantages</h2>
            <p className="text-xl text-gray-600">
              Un package compétitif et des avantages attractifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Rémunération compétitive",
              "Formation continue",
              "Mobilité interne",
              "Prime de performance",
              "Transport pris en charge",
              "Environnement moderne",
              "Équipements fournis",
              "Télétravail flexible"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-200"
              >
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de recrutement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Notre processus de recrutement</h2>
            <p className="text-xl text-gray-600">
              Un processus transparent et efficace en 5 étapes
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Candidature", duration: "En ligne", icon: FileText },
              { step: "2", title: "Présélection", duration: "", icon: Search },
              { step: "3", title: "Test technique", duration: "", icon: FileCheck },
              { step: "4", title: "Entretiens", duration: "", icon: MessageSquare },
              { step: "5", title: "Offre", duration: "", icon: Handshake }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 text-center border-2 border-blue-200"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <phase.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {phase.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{phase.title}</h3>
                {phase.duration && <p className="text-sm text-gray-600">{phase.duration}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusion & Diversité */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Diversité & Inclusion</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le FPM est un employeur inclusif qui valorise la diversité. Nous encourageons les candidatures de tous les profils, sans distinction de genre, d'origine, de religion ou de handicap.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Femmes dans l'équipe", value: "45%" },
                  { label: "Âge moyen", value: "35 ans" },
                  { label: "Taux de rétention", value: "92%" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-gray-700">{stat.label}</span>
                    <span className="text-2xl font-bold text-purple-600">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl p-8">
              <Users className="w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Notre engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Égalité des chances pour tous</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Environnement de travail inclusif</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Formation anti-discrimination</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>Politique de tolérance zéro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offres d'emploi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Postes ouverts</h2>
            <p className="text-xl text-gray-600">
              {jobOpenings.length} opportunités disponibles
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    
                    <details className="text-sm">
                      <summary className="cursor-pointer text-blue-600 font-semibold mb-2">Voir les exigences</summary>
                      <ul className="space-y-1 mt-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                  
                  <div className="lg:text-right">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Postuler
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vous ne trouvez pas le poste idéal ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Envoyez-nous votre candidature spontanée. Nous gardons les profils intéressants dans notre vivier de talents.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Candidature spontanée
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}