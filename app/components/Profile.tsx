import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

interface ProfileProps {
  username: string;
  bio?: string;
}

const ProfileSection: React.FC<ProfileProps> = ({ username, bio }) => {
  return (
    <div className="drop-shadow-2xl mt-8 w-full h-full relative">
      {" "}
      {/* Added relative positioning */}
      <Card className="flex">
        <Avatar
          style={{ marginLeft: "1.5rem", marginTop: "1.5rem" }}
          className="w-14 h-14"
        >
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <CardContent style={{ marginTop: "1.5rem" }}>
          <h3 className="text-lg line-clamp-2 font-bold justify-center">
            {username}
          </h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
            {bio || "No bio available"}
          </p>
        </CardContent>
        <a
          href={`https://github.com/${username}`}
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10"
          style={{ marginRight: "0.75rem", marginTop: "1.5rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} /> {/* GitHub icon */}
        </a>
        <a
          href={`https://www.linkedin.com/in/zaidchbani/`}
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10"
          style={{ marginRight: "3rem", marginTop: "1.5rem", color: "#0077B5" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} /> {/* linkedin icon */}
        </a>
      </Card>
    </div>
  );
};

export default ProfileSection;
