import Sidebar from '../components/sidebar';
import SidebarToggle from '../components/sidebar-toggle';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="relative flex-grow bg-gray-600">
        <SidebarToggle />
      </main>
    </div>
  );
}
