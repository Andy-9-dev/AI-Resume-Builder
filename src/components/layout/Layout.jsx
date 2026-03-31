import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  FileCheck,
  Mail,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Resumes', href: '/resumes', icon: FileText },
  { name: 'Cover Letters', href: '/cover-letters', icon: Mail },
  { name: 'AI Tools', href: '/ai-tools', icon: Sparkles },
  { name: 'Job Match', href: '/job-match', icon: FileCheck },
];

const secondaryNav = [
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="fixed left-0 top-0 h-screen bg-black border-r border-charcoal z-40 flex flex-col hidden lg:flex"
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-charcoal/50">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-crimson flex items-center justify-center shadow-lg shadow-crimson/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-lg font-bold text-offwhite"
              >
                ResumeForge
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative',
                isActive
                  ? 'bg-crimson/10 text-crimson'
                  : 'text-neutral-200 hover:bg-charcoal/50 hover:text-offwhite'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-crimson/10 rounded-xl -z-10"
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
              <Icon className={clsx(
                'w-5 h-5 flex-shrink-0',
                isActive ? 'text-crimson' : 'text-neutral-200 group-hover:text-offwhite'
              )} />
              <AnimatePresence mode="wait">
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={clsx(
                      'text-sm font-medium',
                      isActive && 'text-crimson'
                    )}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}

        <div className="pt-4 mt-4 border-t border-charcoal/50">
          {secondaryNav.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                  isActive
                    ? 'bg-crimson/10 text-crimson'
                    : 'text-neutral-200 hover:bg-charcoal/50 hover:text-offwhite'
                )}
              >
                <Icon className={clsx(
                  'w-5 h-5 flex-shrink-0',
                  isActive ? 'text-crimson' : 'text-neutral-200 group-hover:text-offwhite'
                )} />
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-sm font-medium"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User Section */}
      <div className="p-3 border-t border-charcoal/50">
        {user && (
          <div className={clsx(
            'flex items-center gap-3 px-3 py-2.5 rounded-xl',
            'hover:bg-charcoal/50 transition-colors cursor-pointer group'
          )}>
            <div className="w-9 h-9 rounded-full bg-crimson flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-semibold text-offwhite">
                {user.name?.charAt(0) || 'U'}
              </span>
            </div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 min-w-0"
                >
                  <p className="text-sm font-medium text-offwhite truncate">{user.name}</p>
                  <p className="text-xs text-neutral-200 truncate">{user.email}</p>
                </motion.div>
              )}
              {!isCollapsed && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleLogout}
                  className="p-1.5 text-neutral-200 hover:text-crimson hover:bg-crimson/10 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-charcoal border border-charcoal/50 rounded-full shadow-sm flex items-center justify-center hover:bg-crimson/20 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-neutral-200" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-neutral-200" />
        )}
      </button>
    </motion.aside>
  );
};

export const Header = ({ title, subtitle, actions }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-charcoal/50">
      <div className="flex items-center justify-between h-16 px-6">
        <div>
          <h1 className="text-xl font-semibold text-offwhite">{title}</h1>
          {subtitle && <p className="text-sm text-neutral-200">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          {actions}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 text-neutral-200 hover:bg-charcoal/50 hover:text-offwhite rounded-lg"
          >
            {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export const Layout = ({ children, sidebar = true }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {sidebar && (
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />
      )}
      <main
        className={clsx(
          'min-h-screen transition-all duration-300',
          sidebar ? (isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-[260px]') : ''
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
