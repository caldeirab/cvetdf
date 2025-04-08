import { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail,
  Dog,
  Cat,
  Rabbit,
  Bone,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { GaleriaImagens } from "@/components/GaleriaImagens";
import { CartaoServico } from "@/components/CartaoServico";
import { LogoWhatsapp } from "@/components/icones/LogoWhatsapp";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <header className="z-50 bg-white shadow-sm">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    <div className="flex items-center">
      <div className="h-12 w-48 flex items-center">
        <img src="/logo.svg" alt="VET DF Logo" className="h-full" />
      </div>
    </div>
    
    {/* Botão WhatsApp no Cabeçalho */}
    <Button 
      className="bg-green-500 hover:bg-green-600 flex items-center gap-2"
      onClick={() => window.open(`https://wa.me/5561999999999?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
    >
      <LogoWhatsapp className="h-5 w-5" />
      WhatsApp
    </Button>
  </div>
</header>


      <main className="flex-grow">
        {/* Seção Hero */}
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-3xl mx-auto">
              {/* Imagem Destacada */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-xl mx-auto w-64">
              <img 
                src="src/vet-dog.jpeg" 
                 alt="Veterinário cuidando de um cão" 
                 className="w-full h-auto"
                        />
               </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Ortopedia e Radiologia Veterinária Especializada</h1>
              <p className="text-xl mb-8 text-center">Cuidados avançados para cães, gatos e animais silvestres com tecnologia de ponta e especialistas experientes.</p>
              <div className="flex justify-center">
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 flex items-center gap-2"
                  onClick={() => window.open(`https://wa.me/5561999999999?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
                >
                  <LogoWhatsapp className="h-6 w-6" />
                  Fale Conosco no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Tipos de Animais */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Cuidamos de Todos os Animais</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Nossos serviços especializados em ortopedia e radiologia estão disponíveis para diversos tipos de animais.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Dog className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Cães</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Cuidados ortopédicos especializados para todas as raças de cães, de pequeno a grande porte.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Cat className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Gatos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Tratamentos suaves e eficazes para condições ortopédicas felinas.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    <Rabbit className="h-10 w-10 text-teal-600" />
                  </div>
                  <CardTitle className="mt-4">Animais Silvestres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Cuidados especializados para animais silvestres com necessidades ortopédicas únicas.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção Serviços - Simplificada */}
        <section id="servicos" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços Especializados</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Oferecemos serviços abrangentes de ortopedia e radiologia com as mais recentes tecnologias e técnicas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CartaoServico 
                titulo="Cirurgia Ortopédica"
                descricao="Procedimentos cirúrgicos avançados para fraturas, lesões ligamentares e problemas articulares."
                icone={<Bone className="h-10 w-10 text-teal-600" />}
                recursos={[
                  "Reparo e fixação de fraturas",
                  "Cirurgia de ligamento cruzado",
                  "Tratamento de displasia de quadril e cotovelo",
                  "Cirurgia de coluna",
                  "Cirurgia de face",
                  "Cirurgia de mandíbula e maxilar",
                  "Neurocirurgia geral"
                ]}
              />
              
              <CartaoServico 
                titulo="Radiologia Diagnóstica"
                descricao="Imagens de última geração para diagnóstico preciso de condições ortopédicas."
                icone={<Activity className="h-10 w-10 text-teal-600" />}
                recursos={[
                  "Raios-X digitais",
                  "Diagnóstico por ultrassom"
                ]}
              />
            </div>
          </div>
        </section>

        {/* Seção Galeria - Com as novas imagens */}
        <section id="galeria" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Galeria de Casos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Conheça nossos casos de sucesso em ortopedia e radiologia veterinária.</p>
            </div>
            
            <GaleriaImagens />
          </div>
        </section>

        {/* Seção Contato - Sem endereço */}
        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Entre em Contato</h2>
              <p className="text-gray-600 mb-8 text-center">Tem dúvidas sobre nossos serviços ortopédicos ou radiológicos? Entre em contato hoje para agendar uma consulta.</p>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">+55 (61) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">contato@vetdf.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800">Horário de Funcionamento</h3>
                    <p className="text-gray-600">
                      Segunda - Sexta: 8:00 - 18:00<br />
                      Sábado: 9:00 - 14:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white text-lg py-6 px-8 flex items-center gap-2"
                    onClick={() => window.open(`https://wa.me/5561999999999?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta para meu pet.")}`, "_blank")}
                  >
                    <LogoWhatsapp className="h-6 w-6" />
                    Agendar Consulta via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé - Simplificado e otimizado para celular */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img src="/logo-white.svg" alt="VET DF Logo" className="h-16 mb-4" />
            <p className="text-gray-400 text-center max-w-xl">Cuidados veterinários especializados em ortopedia e radiologia, atendendo cães, gatos e animais silvestres.</p>
            
            <div className="border-t border-gray-700 mt-6 pt-6 text-center w-full">
              <p className="text-gray-400 text-base md:text-lg">&copy; {new Date().getFullYear()} VET DF. Todos os direitos reservados. Desenvolvido por britodeiv.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp */}
      <BotaoWhatsApp numeroTelefone="5561999999999" mensagem="Olá, gostaria de agendar uma consulta para meu pet." />
    </div>
  );
};

export default Index;
