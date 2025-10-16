import PresenceAvatar from "@/components/PresenceAvatar";
import { truncateString } from "@/lib/util";
import { MessageDto } from "@/types";
import { Button } from "@nextui-org/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  item: MessageDto;
  columnKey: string;
  isOutbox: boolean;
  deleteMessage: (message: MessageDto) => void;
  isDeleting: boolean;
};

export default function MessageTableCell({
  item,
  columnKey,
  isOutbox,
  deleteMessage,
  isDeleting,
}: Props) {
  switch (columnKey) {
    case "recipientName":
    case "senderName":
      const nameValue = isOutbox ? item.recipientName : item.senderName;
      const imageValue = isOutbox ? item.recipientImage : item.senderImage;
      const userId = isOutbox ? item.recipientId : item.senderId;
      
      return (
        <div className="flex items-center gap-3 cursor-pointer group">
          <PresenceAvatar
            userId={userId}
            src={imageValue || undefined}
            className="transition-transform group-hover:scale-105"
          />
          <span className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
            {nameValue}
          </span>
        </div>
      );
    case "text":
      return (
        <div className="text-gray-700 line-clamp-2 leading-relaxed">
          {truncateString(item.text, 80)}
        </div>
      );
    case "created":
      return (
        <div className="text-sm text-gray-500 font-medium">
          {new Date(item.created).toLocaleDateString()}
        </div>
      );
    default:
      return (
        <div className="flex justify-end">
          <Button
            isIconOnly
            variant="flat"
            size="sm"
            className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all group"
            onClick={() => deleteMessage(item)}
            isLoading={isDeleting}
          >
            {!isDeleting && (
              <AiFillDelete
                size={18}
                className="text-gray-500 group-hover:text-danger transition-colors"
              />
            )}
          </Button>
        </div>
      );
  }
}