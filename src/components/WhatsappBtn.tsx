import whatsapp from "../assets/whatsapp.png";

export const WhatsappBtn = () => {
  const handleClick = () => {
    console.log("Whatsapp");
  };
  return (
    <a target="_blank" href="https://wa.me/573002781618?text=I'm%20interested%20in%20your%20car%20for%20sale "
     className=" fixed bottom-12 right-12 z-50">
      <img
        src={whatsapp.src}
        alt="WhatsApp Logo"
        className="w-[60px] h-[60px] cursor-pointer opacity-75 hover:opacity-100 
        transition-opacity duration-200"
      />
    </a>
  );
};
