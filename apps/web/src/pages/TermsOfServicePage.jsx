
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Términos de Servicio - JMdigitall</title>
        <meta name="description" content="Términos y condiciones de los servicios de fotografía y video de JMdigitall." />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="luxury-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h1 className="font-serif text-3xl md:text-4xl mb-8 text-foreground border-b border-border pb-6">Términos de Servicio</h1>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">1. Compromisos de JMdigitall</h2>
                <p>En JMdigitall nos comprometemos a entregar servicios audiovisuales de la más alta calidad, respetando los tiempos de entrega acordados y manteniendo una comunicación clara y profesional durante todo el proceso creativo y de producción.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">2. Derechos y Responsabilidades del Cliente</h2>
                <p>El cliente se compromete a proporcionar la información necesaria para la realización del proyecto, así como a respetar los horarios de llamado y locaciones acordadas. Cualquier cambio de fecha o locación deberá notificarse con al menos 48 horas de anticipación.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">3. Términos de Pago</h2>
                <p>Para confirmar la reserva de cualquier servicio, se requiere un anticipo del 50% del costo total. El 50% restante deberá ser liquidado el día del evento o sesión, previo a la entrega del material final. Los pagos pueden realizarse mediante transferencia bancaria o efectivo.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">4. Política de Cancelación y Reembolso</h2>
                <p>En caso de cancelación por parte del cliente con más de 15 días de anticipación, se reembolsará el 50% del anticipo. Cancelaciones con menos de 15 días no son reembolsables, pero el saldo podrá ser utilizado como crédito para un servicio futuro dentro de los siguientes 6 meses.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">5. Propiedad Intelectual</h2>
                <p>JMdigitall retiene los derechos de autor sobre todo el material capturado. El cliente recibe una licencia de uso personal o comercial (según el paquete contratado). JMdigitall se reserva el derecho de utilizar el material para fines de promoción en su portafolio y redes sociales, a menos que se acuerde un contrato de confidencialidad (NDA).</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-foreground mb-4">6. Términos Específicos por Servicio</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Fotografía y Video:</strong> Los tiempos de entrega estándar son de 15 a 20 días hábiles posteriores al evento o sesión.</li>
                  <li><strong>Recuperación de Video Análogo:</strong> JMdigitall tratará las cintas con el máximo cuidado, sin embargo, no nos hacemos responsables por daños preexistentes en el material magnético debido a humedad, hongos o desgaste por el tiempo.</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default TermsOfServicePage;
