import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function UserProfile() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">@johndoe</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-center mb-4">Passionate storyteller | Tech enthusiast | Coffee lover</p>
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <span>Stories: 42</span>
          <span>Followers: 1.2k</span>
          <span>Following: 365</span>
        </div>
        <Button className="w-full">Edit Profile</Button>
      </CardContent>
    </Card>
  );
}