import StoryFeed from '@/components/StoryFeed';
import CreateStory from '@/components/CreateStory';
import UserProfile from '@/components/UserProfile';
import Sidebar from '@/components/Sidebar';
import TrendingTopics from '@/components/TrendingTopics';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="hidden md:block md:col-span-3">
          <Sidebar />
        </div>
        <div className="md:col-span-6 border-x border-gray-200 dark:border-gray-800">
          <h1 className="text-xl font-bold mb-4 px-4">Home</h1>
          <CreateStory />
          <StoryFeed />
        </div>
        <div className="hidden md:block md:col-span-3">
          <UserProfile />
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
}