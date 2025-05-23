import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirigir a la página principal después de un breve retraso
    const timer = setTimeout(() => {
      setLocation("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">Redirigiendo...</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Serás redirigido a la página principal en unos segundos.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
