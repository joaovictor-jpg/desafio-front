import { Mail, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-md dark:shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Classificador Inteligente de Emails
            </h1>
            <p className="text-gray-600 flex items-center gap-1.5 mt-1 dark:text-gray-300">
              <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              Automatize a triagem de emails com IA
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
