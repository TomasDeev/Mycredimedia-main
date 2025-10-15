import React, { useEffect, useState } from "react";
import { X, Clock, Phone } from "lucide-react";

const OpenStatusWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();
      setNow(current);

      const day = current.getDay(); // 0=Dom, 1=Lun, ... 6=Sab
      const hour = current.getHours();

      let open = false;
      if (day >= 1 && day <= 5) {
        open = hour >= 9 && hour < 18; // Lun-Vie 9-18
      } else if (day === 6) {
        open = hour >= 9 && hour < 13; // Sáb 9-13
      } // Dom cerrado

      setIsOpen(open);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  const statusColor = isOpen ? "bg-green-500" : "bg-red-500";
  const statusText = isOpen ? "Estamos Abiertos" : "Cerrado";
  const helpText = isOpen
    ? "Atendemos ahora mismo"
    : "Horario: Lun-Vie 9AM-6PM, Sáb 9AM-1PM";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative w-[280px] rounded-2xl border border-border bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2.5 h-2.5 rounded-full ${statusColor} animate-pulse`} />
            <span className="text-sm font-semibold text-gray-800">{statusText}</span>
          </div>
          <button
            aria-label="Cerrar widget de estado"
            className="p-1 rounded-md hover:bg-gray-100"
            onClick={() => setVisible(false)}
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Body donde tenemos el Code*/}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              {now.toLocaleDateString()} • {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-3">{helpText}</p>

          <div className="flex gap-2">
            <a
              href="tel:+18095967222"
              className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition"
            >
              <Phone className="w-4 h-4" /> Llamar
            </a>
            <a
              href="/contact"
              className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl border border-border text-sm font-semibold hover:bg-primary/10 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenStatusWidget;