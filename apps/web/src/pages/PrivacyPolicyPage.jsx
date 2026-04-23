
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PageHeaderDivider from '@/components/PageHeaderDivider.jsx';

function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - JMdigitall</title>
        <meta name="description" content="Política de privacidad y manejo de datos personales de JMdigitall." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background min-h-screen">
        <PageHeaderDivider />
        <section className="relative overflow-hidden pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="luxury-container relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Política de Privacidad</h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                Transparencia y cuidado en el manejo de la información que compartes con nosotros.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">1. Recopilación de Datos</h2>
                  <p>En JMdigitall recopilamos información personal únicamente cuando usted nos la proporciona voluntariamente a través de nuestros formularios de contacto o al solicitar una cotización. Esta información incluye: nombre completo, correo electrónico, número de teléfono y detalles específicos de su proyecto.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">2. Uso de la Información</h2>
                  <p>Los datos recopilados se utilizan exclusivamente para:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Proveer cotizaciones y responder a sus consultas.</li>
                    <li>Coordinar y ejecutar los servicios contratados.</li>
                    <li>Enviar facturación y comprobantes de pago.</li>
                    <li>Mejorar la calidad de nuestra atención al cliente.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">3. Protección de Datos</h2>
                  <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sus datos son almacenados en bases de datos seguras y solo el personal autorizado tiene acceso a ellos.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">4. Servicios de Terceros</h2>
                  <p>Nuestro sitio web puede utilizar servicios de terceros como Google Maps para ubicación y WhatsApp para comunicación directa. Estos servicios tienen sus propias políticas de privacidad. JMdigitall no comparte, vende ni alquila su información personal a terceros para fines de marketing.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">5. Derechos del Usuario</h2>
                  <p>Usted tiene derecho a acceder, rectificar, actualizar o solicitar la eliminación de sus datos personales de nuestros registros en cualquier momento. Para ejercer estos derechos, por favor contáctenos a través de nuestro correo electrónico: contacto@jmdigitall.com.</p>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground mb-4">6. Cambios a esta Política</h2>
                  <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
