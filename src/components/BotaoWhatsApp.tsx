import { LogoWhatsapp } from "@/components/icones/LogoWhatsapp";

interface BotaoWhatsAppProps {
  numeroTelefone: string;
  mensagem?: string;
}

export function BotaoWhatsApp({ numeroTelefone, mensagem = "" }: BotaoWhatsAppProps) {
  const handleClick = () => {
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <LogoWhatsapp className="h-8 w-8" />
    </button>
  );
}