"use client";

import React from "react";
import {
  CldUploadButton,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";

type Props = {
  onUploadImage: (
    result: CloudinaryUploadWidgetResults
  ) => void;
};

export default function ImageUploadButton({
  onUploadImage,
}: Props) {
  return (
    <CldUploadButton
      options={{ maxFiles: 1 }}
      onSuccess={onUploadImage}
      signatureEndpoint="/api/sign-image"
      uploadPreset="unidate-demo"
      className={`flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500
        to-pink-500 text-white font-medium px-6 py-2 shadow-md transition-all duration-200 
        hover:scale-105 hover:shadow-lg active:scale-95`}
    >
      <HiPhoto size={22} className="opacity-90" />
      <span>Upload Image</span>
    </CldUploadButton>
  );
}
