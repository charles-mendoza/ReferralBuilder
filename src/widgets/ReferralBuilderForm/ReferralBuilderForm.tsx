import ReferralsService from "../../apis/referrals.service";
import { Button } from "../../components/Button";
import { FormHeader } from "../../components/FormHeader";
import { Input } from "../../components/Input/Input";
import useForm from "../../hooks/useForm";
import {
  IField,
  IFormGroup,
  IReferralBuilderForm,
} from "../../models/IReferralBuilderForm.interface";
import style from "./ReferralBuilderForm.module.scss";

export const ReferralBuilderForm = ({
  title,
  data,
  onCreate,
}: IReferralBuilderForm) => {
  const { register, formData, error, isValid, validateAll, reset } = useForm();

  const emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const submitHandler = async (event: any) => {
    event.preventDefault();
    validateAll();

    if (isValid) {
      try {
        let avatarUrl = "";
        if (formData.avatar.files) {
          const file = formData.avatar.files[0];
          avatarUrl = await ReferralsService.uploadAvatar(file);
        }

        const data = Object.fromEntries(
          Object.entries(formData).map(([key, value]) => [key, value.value])
        );
        await ReferralsService.createReferral({
          ...data,
          avatar: avatarUrl,
        });

        reset();
        if (onCreate) onCreate();
      } catch (err: any) {
        if (err.details) {
          alert(err.details);
        } else if (err.message) {
          alert(err.message);
        }
        console.error(err);
      }
    }
  };

  const renderInputType = (
    type: string,
    name: string,
    label: string,
    required?: boolean,
    error?: boolean,
    maxLength?: number
  ) => {
    switch (type) {
      case "text":
        return (
          <Input
            name={name}
            placeholder={label}
            required={required}
            error={error}
            {...register(name, { type, required, maxLength })}
          />
        );
      case "email":
        return (
          <Input
            name={name}
            placeholder={label}
            required={required}
            error={error}
            {...register(name, {
              type,
              required,
              maxLength,
              pattern: emailPattern,
            })}
          />
        );
      case "file":
        return (
          <>
            <input
              id="fileInput"
              style={{ display: "none" }}
              {...register(name, { type, required })}
            />
            <Button
              type="button"
              variant="secondary"
              error={error}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {label}
            </Button>
          </>
        );
      case "submit":
        return (
          <Button type="submit" variant="primary">
            {label}
          </Button>
        );
    }
  };

  return (
    <div className={style.main}>
      <div className={style.container}>
        <h1>{title}</h1>
        <form onSubmit={submitHandler}>
          {data.map((group: IFormGroup, i: number) => {
            return (
              <div className={style.group} key={`form-group-${i}`}>
                {group.title && <FormHeader>{group.title}</FormHeader>}
                <div className={style.fields}>
                  {group.fields.map((field: IField, j: number) => {
                    return (
                      <div key={`form-fields-${i}${j}`}>
                        {renderInputType(
                          field.type,
                          field.name,
                          field.label,
                          field.required,
                          !!error[field.name],
                          100
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};
