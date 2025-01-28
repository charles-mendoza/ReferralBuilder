import clsx from "clsx";
import style from "./Input.module.scss";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
  error?: boolean;
}

export const Input = ({ id, placeholder, error, ...props }: IInput) => {
  return (
    <div className={clsx(style.main, { [style.error]: error })}>
      {placeholder && <label>{placeholder}</label>}
      <input {...props} />
    </div>
  );
};
