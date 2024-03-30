'use client';

import { useRef, useState } from 'react';
import useToggleStore from '../stores/sidebarStore';

export default function SidebarToggle() {
  const { sidebarOpen, toggleSidebar } = useToggleStore();
  const [show, setShow] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShow(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setShow(false);
  };

  return (
    <div className="absolute left-0 -translate-y-1/2 top-1/2">
      <button
        onClick={toggleSidebar}
        aria-describedby="SidebarToggleTooltip"
        className={`group ${sidebarOpen ? "" : "rotate-180"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>
          <div className="flex items-center justify-center w-8 h-[4.5rem]">
            <div className="flex flex-col items-center size-6">
              <div className="w-1 h-3 translate-y-[0.15rem] rounded-full bg-[#9b9b9b] transition group-hover:bg-[#ececec] group-hover:rotate-[15deg]" />
              <div className="w-1 h-3 -translate-y-[0.15rem] rounded-full bg-[#9b9b9b] transition group-hover:bg-[#ececec] group-hover:-rotate-[15deg]" />
            </div>
          </div>
        </span>
        <span className="sr-only">{sidebarOpen ? "Close sidebar" : "Open sidebar"}</span>
      </button>

      <div id="SidebarToggleTooltip" role="tooltip" className={`absolute max-w-xs p-1 -translate-y-1/2 rounded-lg shadow-xs left-11 border-white/10 bg-gray-950 top-1/2 ${show ? '' : 'hidden'}`}>
        <span className="flex items-center px-2 py-1 text-sm font-medium text-center text-gray-100 normal-case whitespace-nowrap">{sidebarOpen ? "Close sidebar" : "Open sidebar"}</span>
        <div className="absolute left-0 rotate-45 -translate-x-1/2 -translate-y-1/2 size-2 top-1/2 bg-gray-950" />
      </div>
    </div>
  );
}

