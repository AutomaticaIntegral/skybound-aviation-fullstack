
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FileText, Users, Globe, Award } from 'lucide-react';

const AdminStats: React.FC = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      icon: <FileText className="h-8 w-8 text-skyblue" />,
      value: '25',
      label: t('stats.projectsCompleted'),
      change: '+12%',
      trend: 'up'
    },
    {
      icon: <Users className="h-8 w-8 text-skyblue" />,
      value: '42',
      label: t('stats.expertEngineers'),
      change: '+5%',
      trend: 'up'
    },
    {
      icon: <Globe className="h-8 w-8 text-skyblue" />,
      value: '18',
      label: t('stats.countriesServed'),
      change: '+2',
      trend: 'up'
    },
    {
      icon: <Award className="h-8 w-8 text-skyblue" />,
      value: '9',
      label: t('stats.industryAwards'),
      change: '0',
      trend: 'neutral'
    }
  ];
  
  return (
    <div className="admin-dashboard-grid mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="admin-stat-card">
          <div className="flex justify-between items-start mb-4">
            {stat.icon}
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              stat.trend === 'up' 
                ? 'bg-green-100 text-green-800' 
                : stat.trend === 'down' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-gray-100 text-gray-800'
            }`}>
              {stat.change}
            </span>
          </div>
          <div className="admin-stat-value">{stat.value}</div>
          <div className="admin-stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AdminStats;
