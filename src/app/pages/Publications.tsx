import { useState } from "react";
import { motion } from "motion/react";
import { FileText, Download, Search, Filter } from "lucide-react";
import { PageHero } from "../components/PageHero";
import heroImage from "figma:asset/cc913e638b6d943b203eda79a72671509e6607ed.png";

const publications = [
  {
    id: 1,
    title: "Rapport Annuel 2025",
    category: "Rapport annuel",
    year: 2026,
    date: "Janvier 2026",
    pillar: "Gouvernance",
    description: "Bilan complet des activités et résultats de l'année 2025",
    downloads: 1250
  },
  {
    id: 2,
    title: "État du secteur de la microfinance en RDC",
    category: "Étude sectorielle",
    year: 2025,
    date: "Décembre 2025",
    pillar: "Analyse",
    description: "Analyse approfondie des tendances et défis du secteur",
    downloads: 890
  },
  {
    id: 3,
    title: "Impact des innovations digitales",
    category: "Rapport d'impact",
    year: 2025,
    date: "Novembre 2025",
    pillar: "Digital",
    description: "Évaluation de l'adoption des technologies dans les IFP",
    downloads: 720
  },
  {
    id: 4,
    title: "Guide de la gouvernance pour les IMF",
    category: "Guide pratique",
    year: 2025,
    date: "Octobre 2025",
    pillar: "Gouvernance",
    description: "Bonnes pratiques de gouvernance pour les institutions",
    downloads: 1450
  },
  {
    id: 5,
    title: "Financement agricole : opportunités et défis",
    category: "Livre blanc",
    year: 2025,
    date: "Septembre 2025",
    pillar: "Sectoriel",
    description: "Analyse du financement du secteur agricole en RDC",
    downloads: 630
  },
  {
    id: 6,
    title: "Factsheet FPM Q3 2025",
    category: "Factsheet",
    year: 2025,
    date: "Septembre 2025",
    pillar: "Performance",
    description: "Indicateurs clés de performance du troisième trimestre",
    downloads: 540
  },
  {
    id: 7,
    title: "Rapport Annuel 2024",
    category: "Rapport annuel",
    year: 2025,
    date: "Janvier 2025",
    pillar: "Gouvernance",
    description: "Activités et résultats de l'année 2024",
    downloads: 2100
  },
  {
    id: 8,
    title: "Les femmes dans la microfinance congolaise",
    category: "Étude sectorielle",
    year: 2024,
    date: "Novembre 2024",
    pillar: "Social",
    description: "Étude sur l'inclusion financière des femmes",
    downloads: 980
  }
];

const categories = ["Tous", "Rapport annuel", "Étude sectorielle", "Rapport d'impact", "Guide pratique", "Livre blanc", "Factsheet"];
const years = ["Toutes", "2026", "2025", "2024"];

export function Publications() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedYear, setSelectedYear] = useState("Toutes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publications.filter((pub) => {
    const matchesCategory = selectedCategory === "Tous" || pub.category === selectedCategory;
    const matchesYear = selectedYear === "Toutes" || pub.year.toString() === selectedYear;
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Publications"
        subtitle="Accédez à nos rapports, études sectorielles, guides pratiques et analyses de l'écosystème financier congolais"
        image={heroImage}
        gradient="from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
      />

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une publication..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Year Filter */}
            <div className="lg:w-40">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredPublications.length} publication{filteredPublications.length > 1 ? 's' : ''} trouvée{filteredPublications.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                    {publication.category}
                  </span>
                  <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {publication.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {publication.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{publication.date}</span>
                  <button className="inline-flex items-center gap-2 text-sm text-blue-600 font-semibold hover:gap-3 transition-all">
                    <Download className="w-4 h-4" />
                    Télécharger
                  </button>
                </div>
                
                <div className="mt-2 text-xs text-gray-400">
                  {publication.downloads.toLocaleString()} téléchargements
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Aucune publication trouvée</p>
              <p className="text-gray-500 text-sm">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Restez informés de nos publications
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Abonnez-vous à notre newsletter pour recevoir nos dernières publications et analyses sectorielles
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}