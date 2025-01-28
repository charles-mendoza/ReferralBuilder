export interface IReferralBuilderForm {
  title: string;
  data: IFormGroup[];
  onCreate?: () => void;
}

export interface IFormGroup {
  title?: string;
  fields: IField[];
}

export interface IField {
  name: string;
  label: string;
  type: IFieldType;
  required: boolean;
}

export type IFieldType = "text" | "email" | "file" | "submit";