
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { bookingServiceOptions } from '@/lib/portfolioAssets.js';

const WHATSAPP_NUMBER = '525513538825';

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    client_name: '',
    email: '',
    phone: '',
    service_type: '',
    event_date: '',
    additional_service: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.client_name || !formData.email || !formData.phone || !formData.service_type) {
      toast.error('Por favor, complete todos los campos obligatorios');
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappMessage = [
        'Hola, quiero solicitar una cotizacion.',
        '',
        `Nombre: ${formData.client_name}`,
        `Correo: ${formData.email}`,
        `Telefono: ${formData.phone}`,
        `Servicio principal: ${formData.service_type}`,
        `Fecha del evento: ${formData.event_date || 'No especificada'}`,
        `Servicio adicional: ${formData.additional_service || 'No especificado'}`,
        `Notas: ${formData.notes || 'Sin notas adicionales'}`
      ].join('\n');

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      toast.success('Te estamos redirigiendo a WhatsApp para enviar tu cotizacion.');
      
      setFormData({
        client_name: '',
        email: '',
        phone: '',
        service_type: '',
        event_date: '',
        additional_service: '',
        notes: '',
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      toast.error('Error al preparar el mensaje de WhatsApp. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="client_name" className="text-sm font-medium text-muted-foreground">
            Nombre Completo *
          </Label>
          <Input
            id="client_name"
            name="client_name"
            type="text"
            value={formData.client_name}
            onChange={handleChange}
            required
            placeholder="Ej. Juan Pérez"
            className="bg-input text-foreground border-border focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
            Correo Electrónico *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ejemplo@correo.com"
            className="bg-input text-foreground border-border focus-visible:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
            Teléfono *
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="55 1234 5678"
            className="bg-input text-foreground border-border focus-visible:ring-primary"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service_type" className="text-sm font-medium text-muted-foreground">
            Tipo de Servicio *
          </Label>
          <Select value={formData.service_type} onValueChange={handleServiceChange} required>
            <SelectTrigger className="bg-input text-foreground border-border focus-visible:ring-primary">
              <SelectValue placeholder="Seleccione un servicio principal" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {bookingServiceOptions.map((service) => (
                <SelectItem key={service} value={service} className="focus:bg-primary focus:text-primary-foreground">
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="event_date" className="text-sm font-medium text-muted-foreground">
          Fecha del evento
        </Label>
        <Input
          id="event_date"
          name="event_date"
          type="date"
          value={formData.event_date}
          onChange={handleChange}
          className="bg-input text-foreground border-border focus-visible:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="additional_service" className="text-sm font-medium text-muted-foreground">
          ¿Necesitas otro servicio? (Opcional)
        </Label>
        <Input
          id="additional_service"
          name="additional_service"
          type="text"
          value={formData.additional_service}
          onChange={handleChange}
          placeholder="Ej. También requiero tomas con dron"
          className="bg-input text-foreground border-border focus-visible:ring-primary"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes" className="text-sm font-medium text-muted-foreground">
          Notas Adicionales
        </Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos más sobre tu proyecto, fechas tentativas, ubicación, etc."
          className="bg-input text-foreground border-border focus-visible:ring-primary resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full overflow-hidden rounded-full border border-primary/20 bg-gradient-to-r from-primary via-blue-500 to-cyan-400 px-12 py-6 text-base font-semibold text-primary-foreground shadow-[0_14px_35px_rgba(37,99,235,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(37,99,235,0.4)] active:scale-[0.98] disabled:hover:translate-y-0"
      >
        <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_15%,rgba(255,255,255,0.28)_50%,transparent_85%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative flex items-center justify-center gap-3">
          <span>{isSubmitting ? 'Enviando...' : 'Solicita tu cotización'}</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 ring-1 ring-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </span>
      </Button>
    </form>
  );
}

export default BookingForm;
