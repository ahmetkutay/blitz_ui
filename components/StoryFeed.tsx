"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Repeat2, Heart, BarChart2, MoreHorizontal } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const dummyStories = [
  {
    id: 1,
    author: "Jane Doe",
    username: "@janedoe",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "Just had a breakthrough in my anxiety management! Meditation and deep breathing exercises are game-changers. #MentalHealth #Anxiety",
    timestamp: "2h",
    category: "Anxiety",
    comments: 12,
    retweets: 5,
    likes: 24,
    views: 1200,
  },
  {
    id: 2,
    author: "John Smith",
    username: "@johnsmith",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Landed my dream job today! Hard work and persistence really do pay off. Don't give up on your career goals! #CareerAdvice #Success",
    timestamp: "4h",
    category: "Career",
    comments: 8,
    retweets: 15,
    likes: 45,
    views: 2300,
  },
  {
    id: 3,
    author: "Emily Brown",
    username: "@emilybrown",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Relationship tip: Communication is key! Had a great talk with my partner about our future goals. It's amazing how much closer we feel now. #Relationships #Love",
    timestamp: "6h",
    category: "Relationships",
    comments: 6,
    retweets: 3,
    likes: 32,
    views: 1800,
  },
  {
    id: 4,
    author: "Michael Lee",
    username: "@michaellee",
    avatar: "https://i.pravatar.cc/150?img=4",
    content: "Started a new savings challenge today! Cutting out unnecessary expenses and putting that money towards my future. Who's with me? #Finance #SavingMoney",
    timestamp: "8h",
    category: "Finance",
    comments: 10,
    retweets: 8,
    likes: 37,
    views: 2100,
  },
  {
    id: 5,
    author: "Sarah Johnson",
    username: "@sarahjohnson",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Feeling down lately? Remember, it's okay to not be okay. Reach out to friends or a professional if you need support. You're not alone. #Depression #MentalHealthAwareness",
    timestamp: "10h",
    category: "Depression",
    comments: 15,
    retweets: 20,
    likes: 56,
    views: 3000,
  },
];

export default function StoryFeed() {
  const [stories, setStories] = useState(dummyStories);
  const [visibleStories, setVisibleStories] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const loadMoreStories = () => {
    setVisibleStories((prevVisible) => prevVisible + 5);
  };

  const IconButton = ({ icon: Icon, count, label }) => (
    <button className="flex items-center text-gray-500 group">
      <div className="p-2 rounded-full group-hover:bg-opacity-10 group-hover:bg-blue-500 group-hover:text-blue-500 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      {count !== undefined && (
        <span className="ml-1 text-sm group-hover:text-blue-500">{count}</span>
      )}
      <span className="sr-only">{label}</span>
    </button>
  );

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <ScrollArea className="h-[calc(100vh-200px)]">
      <div className="space-y-4">
        {stories.slice(0, visibleStories).map((story) => (
          <Card key={story.id} className="w-full border-b border-gray-200 dark:border-gray-800 shadow-none rounded-none last:border-none">
            <CardHeader className="flex flex-row items-start justify-between p-4 pb-0">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={story.avatar} alt={story.author} />
                  <AvatarFallback>{story.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-1">
                    <h3 className="font-bold text-sm">{story.author}</h3>
                    <span className="text-sm text-muted-foreground">{story.username}</span>
                    <span className="text-sm text-muted-foreground">· {story.timestamp}</span>
                  </div>
                  <Badge variant="secondary" className="mt-1 text-xs">{story.category}</Badge>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <p className="mb-2 text-sm">{story.content}</p>
            </CardContent>
            <CardFooter className="px-4 py-2">
              <div className="flex justify-between w-full">
                <IconButton icon={MessageCircle} count={story.comments} label="Reply" />
                <IconButton icon={Repeat2} count={story.retweets} label="Repost" />
                <IconButton icon={Heart} count={story.likes} label="Like" />
                <IconButton icon={BarChart2} count={story.views} label="View" />
              </div>
            </CardFooter>
          </Card>
        ))}
        {visibleStories < stories.length && (
          <Button onClick={loadMoreStories} className="w-full mt-4">
            Load More Stories
          </Button>
        )}
      </div>
    </ScrollArea>
  );
}