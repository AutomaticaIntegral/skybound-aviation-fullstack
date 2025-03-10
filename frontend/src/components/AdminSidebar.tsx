
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  LayoutDashboard, 
  FileText, 
  Settings, 
  Users, 
  Image, 
  Globe, 
  Database, 
  Menu, 
  LogOut
} from 'lucide-react';

interface AdminSidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
  onLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ collapsed, toggleSidebar, onLogout }) => {
  const { t } = useLanguage();
  
  return (
    <div className={`admin-sidebar transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="admin-sidebar-header justify-between">
        {!collapsed && (
          <span className="text-xl font-bold whitespace-nowrap">Olmo CMS</span>
        )}
        <button 
          onClick={toggleSidebar} 
          className="p-1 rounded-md hover:bg-charcoal"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-3 py-2">
          {!collapsed && (
            <p className="text-xs uppercase text-gray-500 mb-2 px-2">{t('admin.navigation')}</p>
          )}
          <nav className="space-y-1">
            <a href="#" className="admin-nav-item active">
              <LayoutDashboard size={20} />
              {!collapsed && <span>Dashboard</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <FileText size={20} />
              {!collapsed && <span>{t('admin.content')}</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <Image size={20} />
              {!collapsed && <span>{t('admin.media')}</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <Users size={20} />
              {!collapsed && <span>{t('admin.users')}</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <Globe size={20} />
              {!collapsed && <span>{t('admin.language')}</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <Database size={20} />
              {!collapsed && <span>{t('admin.database')}</span>}
            </a>
            <a href="#" className="admin-nav-item">
              <Settings size={20} />
              {!collapsed && <span>{t('admin.settings')}</span>}
            </a>
          </nav>
        </div>
      </div>
      
      <div className="border-t border-gray-700 p-3">
        <button 
          onClick={onLogout} 
          className="admin-nav-item w-full justify-center md:justify-start"
        >
          <LogOut size={20} />
          {!collapsed && <span>{t('admin.logout')}</span>}
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
