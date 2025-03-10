import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { StatsGrid } from '@/components/molecules/Stats';

const StatsSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  // Animation duration in ms
  const ANIMATION_DURATION = 2000;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const stats = [
      { count: 500 }, // Projects
      { count: 120 }, // Engineers
      { count: 30 },  // Countries
      { count: 25 }   // Awards
    ];
    
    const intervals = stats.map((stat, index) => {
      const stepTime = Math.floor(ANIMATION_DURATION / stat.count);
      
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.count) {
            newCounts[index] += 1;
          }
          return newCounts;
        });
      }, stepTime);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  const stats = [
    {
      icon: CheckCircle,
      count: 500,
      label: t('stats.projectsCompleted')
    },
    {
      icon: Users,
      count: 120,
      label: t('stats.expertEngineers')
    },
    {
      icon: Globe,
      count: 30,
      label: t('stats.countriesServed')
    },
    {
      icon: Award,
      count: 25,
      label: t('stats.industryAwards')
    }
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-skyblue to-skyblue-dark text-white py-20">
      <div className="container mx-auto px-4">
        <StatsGrid 
          stats={stats}
          isVisible={isVisible}
          counts={counts}
        />
      </div>
    </section>
  );
};

export default StatsSection; 