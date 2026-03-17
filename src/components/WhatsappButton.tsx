import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "919876543210"; // Replace with your number
  const message = "Hello! I want to know more about your services.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 bg-black border-white/10 hover:text-white text-orange-400 p-4 rounded-full shadow-white shadow-md flex items-center justify-center transition-all duration-300 z-50"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;