import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Redirect automatically after 5 seconds
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname, navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
      <Card className="max-w-md w-full mx-4 p-8 text-center shadow-xl">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Home className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
          <p className="text-gray-600 mb-6">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600">
              Serás redirigido automáticamente en <span className="font-bold text-primary">{countdown}</span> segundos
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <Button 
            onClick={handleGoHome}
            className="w-full bg-primary hover:bg-primary/90"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ir al Inicio Ahora
          </Button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            MyCredimedia - Tu socio financiero de confianza
          </p>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
