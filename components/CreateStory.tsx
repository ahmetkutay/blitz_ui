"use client"

import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImagePlus, Smile, MapPin, Calendar } from 'lucide-react';

const categories = [
  "Dating",
  "Anxiety",
  "Depression",
  "Career",
  "Relationships",
  "Self-Improvement",
  "Health",
  "Finance",
];

export default function CreateStory() {
  const [story, setStory] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    // Here you would typically send the story and category to your backend
    console.log('Submitting story:', { content: story, category });
    setStory('');
    setCategory('');
  };

  return (
    <Card className="mb-6 border-none shadow-none">
      <CardContent className="pt-6">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-grow space-y-4">
            <Textarea
              placeholder="What's happening?"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="min-h-[100px] border-none text-xl resize-none"
            />
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t">
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="text-blue-500">
            <ImagePlus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-500">
            <Smile className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-500">
            <MapPin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-blue-500">
            <Calendar className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">Preview</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Story Preview</DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="font-semibold">Category: {category}</p>
                <p className="mt-2">{story}</p>
              </div>
            </DialogContent>
          </Dialog>
          <Button 
            onClick={handleSubmit} 
            disabled={!story || !category}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full"
          >
            Post
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}