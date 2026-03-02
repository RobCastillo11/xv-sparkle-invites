import Portada from "@/components/invitation/Portada";
import CuentaRegresiva from "@/components/invitation/CuentaRegresiva";
import MencionesEspeciales from "@/components/invitation/MencionesEspeciales";
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
      <CeremoniaReligiosa />
      <Itinerario />
      <CodigoVestimenta />
      <MesaRegalos />
      <SesionFotos />
      <FotosInvitados />
      <Confirmacion />

      {/* Footer */}
      <footer className="py-10 bg-cream text-center">
        <p className="font-elegant text-lg text-gold">Rebecca</p>
        <p className="font-body text-xs text-muted-foreground mt-1">
          Mis XV Años · 25 de Abril, 2025
        </p>
      </footer>
    </main>
  );
};

export default Index;
