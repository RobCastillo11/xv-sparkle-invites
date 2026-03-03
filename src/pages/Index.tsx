import Portada from "@/components/invitation/Portada";
import CuentaRegresiva from "@/components/invitation/CuentaRegresiva";
import MencionesEspeciales from "@/components/invitation/MencionesEspeciales";
import Galeria from "@/components/invitation/Galeria";
import CeremoniaReligiosa from "@/components/invitation/CeremoniaReligiosa";
import Itinerario from "@/components/invitation/Itinerario";
import CodigoVestimenta from "@/components/invitation/CodigoVestimenta";
import MesaRegalos from "@/components/invitation/MesaRegalos";
import SesionFotos from "@/components/invitation/SesionFotos";
import FotosInvitados from "@/components/invitation/FotosInvitados";
import Confirmacion from "@/components/invitation/Confirmacion";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Portada />
      <CuentaRegresiva />
      <MencionesEspeciales />
      <Galeria />
      <CeremoniaReligiosa />
      <Itinerario />
      <CodigoVestimenta />
      <MesaRegalos />
      <SesionFotos />
      <FotosInvitados />
      <Confirmacion />

      {/* Footer */}
      <footer className="py-10 bg-cream-dark text-center">
        <p className="font-elegant text-lg text-gold">Rebecca</p>

        <p className="font-body text-xs text-muted-foreground mt-1">
          Mis XV Años · 25 de Abril, 2026
        </p>

        {/* Enlace a Facebook */}
        <div className="mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61578280057595"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/70 transition-colors text-sm"
          >
            Síguenos en Facebook
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
