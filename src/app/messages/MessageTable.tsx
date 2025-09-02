// 

"use client";

import { MessageDto } from "@/types";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Spinner,
} from "@nextui-org/react";
import React from "react";
import MessageTableCell from "./MessageTableCell";
import { useMessages } from "@/hooks/useMessages";

type Props = {
  initialMessages: MessageDto[];
  nextCursor?: string;
};

export default function MessageTable({
  initialMessages,
  nextCursor,
}: Props) {
  const {
    columns,
    isOutbox,
    isDeleting,
    deleteMessage,
    selectRow,
    messages,
    loadMore,
    loadingMore,
    hasMore,
  } = useMessages(initialMessages, nextCursor);

  return (
    <div className="flex flex-col h-[80vh]">
      <Card className="bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl overflow-hidden">
        <Table
          aria-label="Messages table"
          selectionMode="single"
          onRowAction={(key: React.Key) => selectRow(key)}
          shadow="none"
          className="flex flex-col h-full"
          classNames={{
            base: "h-full flex flex-col",
            table: "min-h-[500px]",
            wrapper: "bg-transparent rounded-none shadow-none flex-grow",
            th: "bg-gray-50/80 backdrop-blur-sm text-gray-700 font-semibold text-sm border-b border-gray-200",
            td: "border-b border-gray-100",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                width={column.key === "text" ? "50%" : undefined}
                className="px-6 py-4"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          
          <TableBody
            items={messages}
            emptyContent={
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <div className="text-lg font-medium mb-2">No messages</div>
                <div className="text-sm">No messages found in this folder</div>
              </div>
            }
            loadingContent={<Spinner label="Loading..." />}
          >
            {(item) => (
              <TableRow
                key={item.id}
                className="cursor-pointer transition-all duration-150 hover:bg-gray-50/50"
              >
                {(columnKey) => (
                  <TableCell
                    className={`px-6 py-4 ${
                      !item.dateRead && !isOutbox
                        ? "bg-blue-50/50 font-semibold"
                        : ""
                    }`}
                  >
                    <MessageTableCell
                      item={item}
                      columnKey={columnKey as string}
                      isOutbox={isOutbox}
                      deleteMessage={deleteMessage}
                      isDeleting={isDeleting.loading && isDeleting.id === item.id}
                    />
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Load More Button */}
        {hasMore && (
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-4">
            <div className="flex justify-center">
              <Button
                color="default"
                variant="flat"
                isLoading={loadingMore}
                isDisabled={!hasMore}
                onClick={loadMore}
                className="bg-white border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
              >
                {loadingMore ? "Loading..." : "Load more messages"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}