import { Shield, Info } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg dark:bg-blue-900">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 dark:text-gray-100">
                Como funciona?
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-300">
                O sistema utiliza análise de linguagem natural para identificar
                padrões, palavras-chave e contexto, classificando emails
                automaticamente e gerando respostas personalizadas baseadas no
                conteúdo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg dark:bg-green-900">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1 dark:text-gray-100">
                Privacidade e Segurança
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed ">
                Esta é uma demonstração que processa dados localmente no
                navegador. Nenhum email ou informação é enviada para servidores
                externos. Todos os dados são mantidos em memória durante a
                sessão.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2026 Classificador Inteligente de Emails - Desenvolvido para
            otimizar processos empresariais
          </p>
        </div>
      </div>
    </footer>
  );
}
