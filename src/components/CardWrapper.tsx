import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

type Props = {
  body?: ReactNode;
  headerIcon: IconType;
  headerText: string;
  subHeaderText?: string;
  action?: () => void;
  actionLabel?: string;
  footer?: ReactNode;
  cardProps?: any;
  headerIconProps?: any;
  headerTextProps?: any;
  subHeaderProps?: any;
  actionButtonProps?: any;
};

export default function CardWrapper({
  body,
  footer,
  headerIcon: Icon,
  headerText,
  subHeaderText,
  action,
  actionLabel,
  cardProps = {},
  headerIconProps = {},
  headerTextProps = {},
  subHeaderProps = {},
  actionButtonProps = {},
}: Props) {
  return (
    <Card 
      className={`backdrop-blur-md bg-white/80 border border-white/20 shadow-xl rounded-2xl overflow-hidden ${cardProps.className || ''}`}
      {...cardProps}
    >
      <CardHeader className="flex flex-col items-center justify-center p-8 pb-4">
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg ${headerIconProps.className || ''}`}>
            <Icon size={28} />
          </div>
          
          <div className="space-y-2 w-full">
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-700 bg-clip-text text-transparent ${headerTextProps.className || ''}`}>
              {headerText}
            </h1>
            {subHeaderText && (
              <p className={`text-neutral-600 text-sm ${subHeaderProps.className || ''}`}>
                {subHeaderText}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      
      {body && (
        <CardBody className="p-8 pt-2">
          {body}
        </CardBody>
      )}
      
      {(action || footer) && (
        <CardFooter className="flex flex-col justify-center p-8 pt-4 gap-4">
          {action && (
            <Button
              onClick={action}
              fullWidth
              size="lg"
              className={`bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${actionButtonProps.className || ''}`}
              variant="solid"
              {...actionButtonProps}
            >
              {actionLabel}
            </Button>
          )}
          {footer && <div className="w-full">{footer}</div>}
        </CardFooter>
      )}
    </Card>
  );
}