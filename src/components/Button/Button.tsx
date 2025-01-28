import style from "./Button.module.scss";
import clsx from "clsx";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  error?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  error,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={clsx(style.main, style[variant], { [style.error]: error })}
      {...props}
    >
      {children}
    </button>
  );
};
