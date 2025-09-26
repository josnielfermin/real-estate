import React, { forwardRef } from "react";

export type InputSize = "sm" | "md" | "lg";
export type InputRadius = "none" | "sm" | "md" | "lg" | "full";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode | string;
  rightElement?: React.ReactNode;
  leftElement?: React.ReactNode;
  size?: InputSize;
  radius?: InputRadius;
  fullWidth?: boolean;
  containerClassName?: string;
  bgTransparent?: boolean; // when true uses var(--color-transparent-1) as background
}

const sizeStyles: Record<InputSize, string> = {
  sm: "h-10 text-sm px-3",
  md: "h-12 text-base px-4",
  lg: "h-24 max-md:h-[70px] text-sm px-5",
};

const radiusStyles: Record<InputRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-[20px]",
  full: "rounded-full",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      leftIcon,
      rightIcon,
      size = "md",
      radius = "full",
      fullWidth = false,
      containerClassName = "",
      bgTransparent = true,
      className = "",
      type = "text",
      leftElement,
      rightElement,
      ...props
    },
    ref
  ) => {
    const containerBase = `inline-flex items-center gap-3 ${
      radiusStyles[radius]
    } overflow-hidden ${fullWidth ? "w-full" : ""}`;

    const inputBase = `bg-transparent placeholder:text-white/50 text-white leading-none focus:outline-none w-full flex-shrink-2 ${sizeStyles[size]} ${className}`;

    const containerStyle = bgTransparent
      ? { background: "var(--color-transparent-1)" }
      : undefined;

    return (
      <div
        className={`${containerBase} ${containerClassName}`}
        style={containerStyle}
      >
        {leftElement && <>{leftElement}</>}
        {leftIcon && (
          <span
            className={`pl-3 pr-1 text-base-6 ${
              typeof leftIcon === "string" ? leftIcon : ""
            }`}
            aria-hidden
          >
            {typeof leftIcon !== "string" ? leftIcon : null}
          </span>
        )}
        <input ref={ref} className={inputBase} type={type} {...props} />
        {rightElement && <>{rightElement}</>}
        {rightIcon && (
          <span
            className={`pr-3 pl-1 text-base-6 ${
              typeof rightIcon === "string" ? rightIcon : ""
            }`}
            aria-hidden
          >
            {typeof rightIcon !== "string" ? rightIcon : null}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
