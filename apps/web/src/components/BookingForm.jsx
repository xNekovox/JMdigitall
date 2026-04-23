
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    client_name: '',
    email: '',
    phone: '',
    service_type: '',
    additional_service: '',
    notes: '',
    booking_date: new Date().toISOString().split('T')[0], // Default to today to satisfy DB requirement
    booking_time: '12:00' // Default time to satisfy DB requirement
  });

  const serviceOptions = [
    'Fotografía Social',
    'Video Social',
    'Fotografía Profesional',
    'Video Profesional',
    'Fotografía de Producto',
    'Video de Producto',
    'Fotografía Corporativa',
    'Video Corporativa',
    'Recuperación de Video Análogo',
    'Paquete Personalizado'
  ];

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
      await pb.collection('bookings').create(formData, { $autoCancel: false });
      
      toast.success('Cotización solicitada exitosamente. Nos pondremos en contacto pronto.');
      
      setFormData({
        client_name: '',
        email: '',
        phone: '',
        service_type: '',
        additional_service: '',
        notes: '',
        booking_date: new Date().toISOString().split('T')[0],
        booking_time: '12:00'
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      toast.error('Error al enviar la solicitud. Por favor, inténtelo de nuevo.');
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
              {serviceOptions.map((service) => (
                <SelectItem key={service} value={service} className="focus:bg-primary focus:text-primary-foreground">
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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
        className="w-full md:w-auto px-12 py-6 text-base font-semibold transition-all duration-200 active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? 'Enviando...' : 'Solicita tu cotización'}
      </Button>
    </form>
  );
}

export default BookingForm;
