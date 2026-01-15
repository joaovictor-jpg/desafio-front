import { GenericCard } from '@/component/GenericCard';
import { Brain, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export function InfoSection() {
  const features = [
    {
      icon: Brain,
      title: 'Classificação Inteligente',
      description: 'IA analisa o conteúdo e classifica automaticamente entre produtivo e improdutivo.',
      iconStyle: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      icon: CheckCircle,
      title: 'Respostas Automáticas',
      description: 'Geração de respostas personalizadas baseadas no contexto do email.',
      iconStyle: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
    },
    {
      icon: Clock,
      title: 'Economia de Tempo',
      description: 'Reduza o tempo gasto em triagem manual de emails em até 80%.',
      iconStyle: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Histórico e Estatísticas',
      description: 'Acompanhe todas as análises realizadas com métricas detalhadas.',
      iconStyle: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {features.map((feature, index) => (
        <GenericCard
          key={index}
          title={feature.title}
          icon={feature.icon}
          iconStyle={feature.iconStyle}
          className="h-full" 
        >
          {feature.description}
        </GenericCard>
      ))}
    </div>
  );
}