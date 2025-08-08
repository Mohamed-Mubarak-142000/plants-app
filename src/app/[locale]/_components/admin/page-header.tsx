import React from "react";
import clsx from "clsx";

interface ActionHeader {
  label: string;
  onClick: () => void;
  className?: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "default" | "destructive" | "outline";
  disabled?: boolean;
  loading?: boolean;
}

interface PageHeaderProps {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  actions?: ActionHeader[];
}

const variantStyles: Record<NonNullable<ActionHeader["variant"]>, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
  secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300",
  default:
    "bg-green-400 border border-green-400 text-green-700 hover:bg-green-500 focus:ring-green-200",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
  outline:
    "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  icon,
  className,
  actions,
}) => {
  return (
    <div
      className={clsx(
        "w-full flex items-center justify-between bg-green-200 rounded-xl p-6 my-6",
        className
      )}
    >
      {/* Left: Title + Icon */}
      <div className="flex items-center gap-3">
        <div className="text-2xl">{icon}</div>
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      {/* Right: Actions */}
      {actions && actions.length > 0 && (
        <div className="flex gap-3 flex-wrap">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={clsx(
                "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all",
                variantStyles[action.variant || "default"],
                action.className
              )}
            >
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
