// Libraries
import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from "react";

interface IUseForm {
  register: (name: string, options: IOptions) => IOptions | void;
  validateAll: () => void;
  formData: IFormData;
  error: IError;
  isValid: boolean;
  reset: () => void;
  onMount?: any;
}
interface IError {
  [key: string]: IErrorTypes | string | undefined;
}

export interface IOptions {
  type?:
    | "text"
    | "password"
    | "number"
    | "email"
    | "file"
    | "select"
    | "radio"
    | "checkbox"
    | "textarea";
  pattern?: any;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  defaultValue?: string;
  checked?: any;
}

export type IFormData = {
  [property: string]: {
    error?: IErrorTypes;
    value: string | number;
    files?: FileList;
  };
};

export type IErrorTypes =
  | "Required field"
  | "Invalid value"
  | "maxLength"
  | "minLength"
  | "min"
  | "max";

function useForm(): IUseForm {
  /**
   * States
   */
  const [initialValues, setInitialValues] = useState<any>({});
  const [formData, setFormData] = useState<IFormData>({});
  const [formSettings, setFormSettings] = useState<any>({});
  const schemaRef = useRef<any>({});

  /**
   * Validation function
   */
  const onValidate = (
    name: string,
    value: number | string
  ): IErrorTypes | null => {
    if (!name) return null;
    if (!formSettings[name]?.validation) return null;

    const { pattern, required, maxLength, minLength, min, max } =
      formSettings[name];

    // Required
    if (required === true) {
      if (
        (!value && typeof value !== "boolean") ||
        (Array.isArray(value) && !value.length)
      ) {
        return "Required field";
      }
    }

    // Pattern
    if (pattern) {
      if (typeof value === "string") {
        if (!value.toLowerCase().match(pattern) && value !== "")
          return "Invalid value";
      }

      if (value === undefined && required === true) return "Invalid value";
    }

    // Max Length
    if (maxLength) {
      if (typeof value === "string")
        if (value.length > maxLength) return "maxLength";
    }

    // min Length
    if (minLength) {
      if (typeof value === "string")
        if (value.length < minLength) return "minLength";
      if (value === undefined) return "minLength";
    }

    // Min
    if (min) {
      if (value < min) return "min";
    }

    // Max
    if (max) {
      if (value > max) return "max";
    }

    return null;
  };

  const validateAll = () => {
    const keys = Object.keys(formData);

    keys.forEach((key) => {
      const err = onValidate(key, formData[key].value);
      setFormData((prev: any) => ({
        ...prev,
        [key]: { ...prev[key], error: err },
      }));
    });
  };

  /**
   * Handlers
   */
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target || e;
    const err = onValidate(name, value);

    setFormData((prev: any) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value: type === "checkbox" ? checked : value,
        files: type === "file" ? files : undefined,
        error: err,
      },
    }));
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const err = onValidate(name, value);

    setFormData((prev: any) => ({
      ...prev,
      [name]: { ...prev[name], value, error: err },
    }));
  };

  /**
   * Register new input
   */
  const register = (name: string, options: IOptions) => {
    const {
      required,
      type,
      pattern,
      maxLength,
      minLength,
      defaultValue,
      min,
      max,
    } = options || {};

    const enableValidation =
      required || pattern || maxLength || minLength || min || max
        ? true
        : false;

    const value = formData[name]?.value || "";

    // Set Schema
    if (schemaRef.current) {
      schemaRef.current = {
        ...schemaRef.current,
        [name]: {
          value: defaultValue,
          error: undefined,
          required: required || false,
          pattern: pattern,
          maxLength: maxLength,
          minLength: minLength,
          min: min,
          max: max,
          validation: enableValidation,
        },
      };
    }

    return { type, name, onChange, onBlur, value };
  };

  /**
   * Reset
   */
  const reset = () => {
    setFormData(initialValues);
  };

  /**
   * Initialize schema
   */
  useEffect(() => {
    const schema = schemaRef.current;

    // Settings
    setFormSettings({ ...schema });

    const properties = Object.keys(schema);
    // Filter properties

    // Form values
    const formValues = properties.reduce((obj: any, key: any) => {
      const defaultValue = schema[key].value;
      const currentValue = { value: defaultValue };

      obj[key] = {
        value: schema[key].validation
          ? currentValue === undefined
            ? defaultValue
            : currentValue?.value || ""
          : "",
        error: undefined,
      };
      return obj;
    }, {});

    setInitialValues(formValues);
    setFormData(formValues);
  }, [schemaRef]);

  /**
   * Check form validity
   */
  let isValid = false;
  const errValue = Object.values(formData);

  if (errValue.length) {
    isValid = errValue.every(
      (err) => err.error === null || err.error === undefined
    );
  }

  /**
   * Will set all errors for each key
   */
  const error: IError = {};
  Object.keys(formData)?.forEach((data: string) => {
    error[data] = formData?.[data]?.error;
  });

  return {
    validateAll,
    formData,
    error,
    isValid,
    reset,
    register,
  };
}

export default useForm;
