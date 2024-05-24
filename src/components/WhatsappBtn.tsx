import whatsapp from "../assets/whatsapp.png";

export const WhatsappBtn = ({ lang }: { lang: "en" | "es" }) => {
  const messages = {
    es: "Hola!%20Estoy%20interesado%20en%20uno%20de%20sus%20servicios.%20¿Podemos%20hablar%20al%20respecto?",
    en: "Hello!%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20further?",
  };
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://wa.me/573002781618?text=${messages[lang]}`}
      className=" fixed bottom-12 right-12 z-50"
    >
      <img
        src={whatsapp.src}
        alt="WhatsApp Logo"
        className="w-[60px] h-[60px] cursor-pointer opacity-75 hover:opacity-100 
        transition-opacity duration-200"
      />
    </a>
  );
};
