import React from "react";
import "./CTAButton.css";

export type CTAButtonSize = "small" | "medium" | "large";
export type CTAButtonVariant = "primary" | "secondary";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  size?: CTAButtonSize;
  variant?: CTAButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  size = "medium",
  variant = "primary",
  className = "",
  target = "_self",
  rel
}) => {
  const classes = [
    "cta-button",
    `cta-button--${size}`,
    `cta-button--${variant}`,
    className
  ].filter(Boolean).join(" ");

  return (
    <a
      href={href}
      className={classes}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default CTAButton;