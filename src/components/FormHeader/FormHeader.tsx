import style from "./FormHeader.module.scss";

export interface IFormHeader {
  children: React.ReactNode;
}

export const FormHeader = ({ children }: IFormHeader) => {
  return <div className={style.main}>{children}</div>;
};
