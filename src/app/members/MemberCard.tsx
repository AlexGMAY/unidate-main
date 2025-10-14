"use client";

import LikeButton from "@/components/LikeButton";
import PresenceDot from "@/components/PresenceDot";
import { calculateAge } from "@/lib/util";
import {
  Card,
  CardFooter,
  Image,
  Chip,
  Button,
} from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import React from "react";

type Props = {
  member: Member;
  likeIds: string[];
};

export default function MemberCard({
  member,
  likeIds,
}: Props) {
  const hasLiked = likeIds.includes(member.userId);

  const preventLinkAction = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Card
      as={Link}
      href={`/members/${member.userId}`}
      isPressable
      className="group relative w-full bg-white border-1 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-400 hover:scale-[1.02] rounded-2xl overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="flex flex-col h-full">
        {/* Image Container with Overlay Elements */}
        <div className="relative overflow-hidden aspect-square">
          <Image
            alt={member.name}
            src={member.image || "/images/user.png"}
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            removeWrapper
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          
          {/* Top Action Bar */}
          <div 
            onClick={preventLinkAction}
            className="absolute top-3 left-3 right-3 flex justify-between items-start z-20"
          >
            {/* Presence Indicator */}
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
              <PresenceDot member={member} />
            </div>
            
            {/* Like Button */}
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
              <LikeButton
                targetId={member.userId}
                hasLiked={hasLiked}
              />
            </div>
          </div>

        </div>

        {/* Info Section - Clean and Modern */}
        <div className="p-4 flex flex-col gap-2">
          {/* Name and Age Row */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 text-lg truncate">
              {member.name}
            </h3>
            <Chip 
              size="sm" 
              variant="flat"
              className="bg-pink-100 text-pink-700 font-medium text-xs"
            >
              {calculateAge(member.dateOfBirth)}
            </Chip>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <svg 
              className="w-4 h-4 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium truncate">{member.city}</span>
          </div>

          {/* Optional: Short Bio Preview */}
          {member.description && (
            <p className="text-gray-500 text-xs line-clamp-2 mt-1">
              {member.description}
            </p>
          )}

          {/* View Profile Button */}
          <Button
            as="div"
            size="sm"
            className="mt-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium text-sm w-full hover:shadow-md transition-all"
          >
            View Profile
          </Button>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    </Card>
  );
}