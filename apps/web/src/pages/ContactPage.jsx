
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BookingForm from '@/components/BookingForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contacto - JMdigitall</title>
        <meta name="description" content="Ponte en contacto con JMdigitall para solicitar tu cotización de servicios de fotografía, video y digitalización." />
      </Helmet>

      <Header />

      <main className="pt-24 bg-background">
        {/* Page Header */}
        <section className="editorial-spacing">
          <div className="luxury-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif mb-6 text-foreground">Hablemos de tu proyecto</h1>
              <p className="luxury-text text-muted-foreground max-w-2xl mx-auto">
                Estamos listos para escuchar tus ideas y convertirlas en realidad. Solicita tu cotización sin compromiso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="pb-12">
          <div className="luxury-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Mail,
                  title: 'Correo',
                  content: 'contacto@jmdigitall.com'
                },
                {
                  icon: Phone,
                  title: 'Teléfono / WhatsApp',
                  content: '55 1353 8825'
                },
                {
                  icon: MapPin,
                  title: 'Ubicación',
                  content: 'Gustavo A. Madero, CDMX'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-card border border-border rounded-2xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-sm tracking-wider uppercase mb-2 text-muted-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="pb-24">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
            >
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl mb-4 text-foreground">Solicita tu cotización</h2>
                <p className="text-muted-foreground">
                  Completa el formulario y nos comunicaremos contigo a la brevedad.
                </p>
              </div>

              <BookingForm />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
