import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface CartaoServicoProps {
  titulo: string;
  descricao: string;
  icone: ReactNode;
  recursos: string[];
}

export function CartaoServico({ titulo, descricao, icone, recursos }: CartaoServicoProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-teal-100 p-4 rounded-full">
            {icone}
          </div>
          <div>
            <CardTitle>{titulo}</CardTitle>
            <CardDescription>{descricao}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {recursos.map((recurso, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
              <span>{recurso}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}