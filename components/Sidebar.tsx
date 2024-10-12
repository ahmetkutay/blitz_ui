import { Home, Search, Bell, Mail, Bookmark, User, Settings, PenSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <div className="space-y-2 py-4">
      {menuItems.map((item, index) => (
        <Button key={index} variant="ghost" className="w-full justify-start text-xl font-semibold">
          <item.icon className="mr-4 h-6 w-6" />
          {item.label}
        </Button>
      ))}
      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full py-6 text-xl font-bold">
        <PenSquare className="mr-2 h-6 w-6" />
        Post
      </Button>
    </div>
  );
}