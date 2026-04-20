import { motion } from "motion/react";
import { Mail, Phone, MapPin, Building, Users, DollarSign } from "lucide-react";
import { PageHero } from "../components/PageHero";
import heroImage from "figma:asset/767484d8709ad11ba5bfd82a9886af6a8340cda7.png";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        title="Contactez-nous"
        subtitle="Notre équipe est à votre écoute pour répondre à vos questions et accompagner vos projets"
        image={heroImage}
        gradient="from-[#00467F]/70 via-[#00AFEF]/60 to-transparent"
        height="medium"
        imagePosition="center 35%"
      />

      {/* Contact Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Building,
                title: "Institutions Financières",
                description: "Demandez un financement",
                cta: "Devenir partenaire",
                color: "green"
              },
              {
                icon: DollarSign,
                title: "Bailleurs & Investisseurs",
                description: "Explorez les opportunités de partenariat",
                cta: "En savoir plus",
                color: "blue"
              },
              {
                icon: Users,
                title: "Demandes générales",
                description: "Information, presse, ou autres questions",
                cta: "Nous contacter",
                color: "purple"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 border-${card.color}-200 hover:shadow-xl transition-shadow`}
              >
                <div className={`w-12 h-12 bg-${card.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <card.icon className={`w-6 h-6 text-${card.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                <span className={`text-sm font-semibold text-${card.color}-600`}>{card.cta} →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Nos coordonnées</h2>
            
            {/* Siège social */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200 mb-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Siège social</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">FPM | Immeuble Ecobank | 5ᵉ étage | 2, avenue Kasa-Vubu croisement Boulevard du 30 Juin | Kinshasa | RDC<br /><br /></div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">+243 976 596 005<br /></div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">
                      <a href="mailto:contact@fpm-rdc.org" className="text-blue-600 hover:underline">administration@fpmsa-rdc.com</a><br />
                      <a href="mailto:info@fpm-rdc.org" className="text-blue-600 hover:underline"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contacts spécifiques */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Contacts spécifiques</h3>
              
              {/* FPM SA et Presse */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">FPM SA - Financement</h4>
                    <p className="text-sm text-gray-600 mb-2">Pour toute demande de financement</p>
                    <a href="mailto:sa@fpm-rdc.org" className="text-sm font-semibold text-blue-600 hover:underline">
                      sa@fpmsa-rdc.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Presse & Médias</h4>
                    <p className="text-sm text-gray-600 mb-2">Pour toute demande médiatique</p>
                    <a href="mailto:presse@fpm-rdc.org" className="text-sm font-semibold text-purple-600 hover:underline">
                      presse@fpmsa-rdc.com
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Horaires */}
              <div className="pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Horaires d'ouverture</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-semibold">8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi - Dimanche</span>
                    <span className="font-semibold">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Que vous soyez une institution financière, un bailleur ou un partenaire technique, nous sommes là pour vous accompagner
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:contact@fpm-rdc.org"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Envoyez un email
            </a>
            <a
              href="tel:+243XXXXXXXX"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors border border-blue-500"
            >
              <Phone className="w-5 h-5" />
              Appelez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}