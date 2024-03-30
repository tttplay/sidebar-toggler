'use client';

import useToggleStore from '../stores/sidebarStore';

export default function Sidebar() {
  const { sidebarOpen } = useToggleStore();

  return (
    <nav className={`transition-all duration-300 overflow-x-hidden bg-gray-800 ${sidebarOpen ? 'w-64' : 'w-0'}`}>
      {/* Navigation content */}
    </nav >
  );
}