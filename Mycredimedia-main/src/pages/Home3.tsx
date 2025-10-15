import { useEffect, useRef } from "react";

const Home3 = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc) return;

        // Mapeo de páginas HTML del template a rutas de la app React
        const routeMap: Record<string, string> = {
          "index.html": "/",
          "contact.html": "/contact",
          "faq.html": "/faq",
          // Puedes extender este mapa según agreguemos más páginas
          // "team.html": "/careers",
          // "price.html": "/solicitar-prestamo",
        };

        const anchors = Array.from(doc.querySelectorAll<HTMLAnchorElement>('a[href]'));
        anchors.forEach((a) => {
          const href = a.getAttribute('href') || '';
          const normalized = href.trim().toLowerCase();
          const targetRoute = routeMap[normalized];
          if (targetRoute) {
            a.setAttribute('href', targetRoute);
            a.setAttribute('target', '_parent');
            // Asegura navegación en el parent sin intentar cargar dentro del iframe
            a.addEventListener('click', (e) => {
              e.preventDefault();
              window.top!.location.href = targetRoute;
            });
          }
        });
      } catch (err) {
        console.error('No se pudo reescribir enlaces del iframe:', err);
      }
    };

    iframe.addEventListener('load', onLoad);
    return () => iframe.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="w-full h-screen bg-background">
      <iframe
        ref={iframeRef}
        title="Home3 Fibank"
        src="/legacy/fibank/index-3.html"
        className="w-full h-full border-0"
      />
    </div>
  );
};

export default Home3;