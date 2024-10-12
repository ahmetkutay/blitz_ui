import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';

const trendingCategories = [
  { category: 'Career', posts: '15.2K' },
  { category: 'Relationships', posts: '12.8K' },
  { category: 'Anxiety', posts: '10.5K' },
  { category: 'Self-Improvement', posts: '9.7K' },
  { category: 'Finance', posts: '8.3K' },
];

export default function TrendingTopics() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center">
          <TrendingUp className="mr-2 h-5 w-5" />
          Trending Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {trendingCategories.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium text-primary hover:underline cursor-pointer">
                #{item.category}
              </span>
              <span className="text-sm text-muted-foreground">{item.posts} posts</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}