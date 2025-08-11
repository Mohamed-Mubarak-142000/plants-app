"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface FormInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  name: string;
  wrapperClassName?: string;
  className?: string;
  type?: "text" | "number" | "email" | "password";
  labelClassName?: string;
}

const FormInput = ({
  label,
  name,
  wrapperClassName,
  className,
  labelClassName,
  type = "text",
  ...props
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <div className={cn("flex flex-col gap-1", wrapperClassName)}>
      {label && (
        <label
          htmlFor={name}
          className={cn("text-sm font-medium text-gray-700", labelClassName)}
        >
          {label}
        </label>
      )}

      <Input
        id={name}
        type={type}
        {...register(name, {
          setValueAs: (value) =>
            type === "number"
              ? value === "" || value === null || isNaN(Number(value))
                ? 0
                : Number(value)
              : value,
        })}
        className={cn(
          fieldError && "border-red-800 focus-visible:ring-red-800",
          className
        )}
        {...props}
      />

      {fieldError && (
        <span className="text-md text-red-800">
          {(fieldError as { message?: string })?.message}
        </span>
      )}
    </div>
  );
};

export default FormInput;
