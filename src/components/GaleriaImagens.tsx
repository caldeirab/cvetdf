import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Imagens da galeria com os casos ortopédicos e radiológicos
const imagensGaleria = [
  { id: 1, src: "/imagens/casos-ortopedicos/imagem-01.jpeg", alt: "Pata de gato com bandagem" },
  { id: 2, src: "/imagens/casos-ortopedicos/imagem-02.jpeg", alt: "Raio-X de fratura em cão" },
  { id: 3, src: "/imagens/casos-ortopedicos/imagem-03.jpeg", alt: "Gato com colar elisabetano" },
  { id: 4, src: "/imagens/casos-ortopedicos/imagem-04.jpeg", alt: "Cão em recuperação pós-cirúrgica" },
  { id: 5, src: "/imagens/casos-ortopedicos/imagem-05.jpeg", alt: "Raio-X de implante ortopédico" },
  { id: 6, src: "/imagens/casos-ortopedicos/imagem-06.jpeg", alt: "Coelho com bandagem na pata" },
  { id: 7, src: "/imagens/casos-ortopedicos/imagem-07.jpeg", alt: "Raio-X de coluna de cão" },
  { id: 8, src: "/imagens/casos-ortopedicos/imagem-08.jpeg", alt: "Cachorro com bandagem na perna" },
  { id: 9, src: "/imagens/casos-ortopedicos/imagem-09.jpeg", alt: "Raio-X de fixação com pinos" },
  { id: 10, src: "/imagens/casos-ortopedicos/imagem-10.jpeg", alt: "Cão recuperado após cirurgia" },
  { id: 11, src: "/imagens/casos-ortopedicos/imagem-11.jpeg", alt: "Cão recuperado após cirurgia" },
  { id: 12, src: "/imagens/casos-ortopedicos/imagem-12.jpeg", alt: "Cão recuperado após cirurgia" },
  { id: 13, src: "/imagens/casos-ortopedicos/imagem-13.jpeg", alt: "Cão recuperado após cirurgia" },
  { id: 14, src: "/imagens/casos-ortopedicos/imagem-14.jpeg", alt: "Cão recuperado após cirurgia" },
];

export function GaleriaImagens() {
  const [imagemSelecionada, setImagemSelecionada] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const abrirLightbox = (id: number) => {
    setImagemSelecionada(id);
    document.body.style.overflow = "hidden";

    // Inicia rotação automática
    const idInterval = setInterval(() => {
      setImagemSelecionada((prevId) => {
        const nextId = prevId === null ? 1 : (prevId % imagensGaleria.length) + 1;
        return nextId;
      });
    }, 3000); // 3 segundos para a rotação

    setIntervalId(idInterval);
  };

  const fecharLightbox = () => {
    setImagemSelecionada(null);
    document.body.style.overflow = "auto";

    // Limpa o intervalo quando o lightbox for fechado
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const getImagemSelecionada = () => {
    return imagensGaleria.find((img) => img.id === imagemSelecionada);
  };

  useEffect(() => {
    // Limpar o intervalo se o componente for desmontado ou imagemSelecionada for alterada
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {imagensGaleria.map((imagem) => (
          <div
            key={imagem.id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity shadow-md"
            onClick={() => abrirLightbox(imagem.id)}
          >
            <img
              src={imagem.src}
              alt={imagem.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {imagemSelecionada !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={fecharLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={fecharLightbox}
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getImagemSelecionada()?.src}
              alt={getImagemSelecionada()?.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
