"use client";

import PresenceDot from "@/components/PresenceDot";
import { calculateAge } from "@/lib/util";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { Member } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  member: Member;
  navLinks: { name: string; href: string }[];
};

export default function MemberSidebar({
  member,
  navLinks,
}: Props) {
  const pathname = usePathname();

  return (
    <Card className="w-full h-fit bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl overflow-hidden">
      {/* Profile Header */}
      <div className="flex flex-col items-center p-6 pb-4">
        <div className="relative mb-4">
          <Image
            height={160}
            width={160}
            src={member.image || "/images/user.png"}
            alt="User profile main image"
            className="rounded-full aspect-square object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md">
            <PresenceDot member={member} />
          </div>
        </div>
        
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">
            {member.name}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="text-lg text-gray-600">
              {calculateAge(member.dateOfBirth)}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">
              {member.city}, {member.country}
            </span>
          </div>
        </div>
      </div>

      <Divider className="bg-gray-200" />

      {/* Navigation Links */}
      <CardBody className="p-6">
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === link.href
                  ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="font-medium text-sm">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </CardBody>

      <Divider className="bg-gray-200" />

      {/* Footer Button */}
      <CardFooter className="p-6 pt-4">
        <Button
          as={Link}
          href="/members"
          fullWidth
          size="lg"
          className="bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
        >
          Go back to matches
        </Button>
      </CardFooter>
    </Card>
  );
}
