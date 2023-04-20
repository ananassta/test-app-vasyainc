import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// @ts-ignore
import InputMask from "react-input-mask";
import cx from "classnames";

import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

import backImage from "./image.png";
import { ReactComponent as SuccessImage } from "./success.svg";
import styles from "./FormBlock.module.css";

type Inputs = {
  name: string;
  telephone: string;
  mail: string;
  message: string;
  agreement: boolean;
};

export const FormBlock: FC = () => {
  const [submitionAlert, setSubmitionAlert] = useState({ opacity: "0" });
  const {
    register,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSubmitionAlert({ opacity: "1" });
    setTimeout(() => setSubmitionAlert({ opacity: "0" }), 5000);
    console.log(data);
  };

  return (
    <div id="form_section" className={styles.block}>
      <img src={backImage} className={styles.image} />
      <div className={styles.formBlock}>
        <Typography Variant="h2">Форма с приветами</Typography>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input
            type="text"
            id="name"
            placeholder="Ваше имя"
            className={styles.input}
            {...register("name")}
          />
          <InputMask
            className={cx(
              styles.input,
              styles.inputRequired,
              errors.telephone ? styles.error : null
            )}
            id="telephone"
            mask="+7\ 999 999 99 99"
            maskChar=" "
            placeholder="Телефон"
            {...register("telephone", {
              onChange: () => {
                if (errors.telephone) {
                  clearErrors("telephone");
                }
              },
              required: true,
              pattern: {
                value: /(?:\+7)[\d\-\(\) ]{13,}\d/g,
                message: "Телефон указан в неверном формате",
              },
            })}
          />
          {errors.telephone && (
            <Typography
              Variant="p"
              size="S"
              color="error"
              style={{ margin: "-24px 10px" }}
            >
              {errors.telephone.message || "Это поле обязательное"}
            </Typography>
          )}
          <input
            type="email"
            id="email"
            placeholder="Электронная почта"
            className={cx(
              styles.input,
              styles.inputRequired,
              errors.mail ? styles.error : null
            )}
            {...register("mail", {
              onChange: () => {
                if (errors.mail) {
                  clearErrors("mail");
                }
              },
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Почта указана в неверном формате",
              },
            })}
          />
          {errors.mail && (
            <Typography
              Variant="p"
              size="S"
              color="error"
              style={{ margin: "-24px 10px" }}
            >
              {errors.mail.message || "Это поле обязательное"}
            </Typography>
          )}
          <textarea
            id="message"
            placeholder="Сообщение"
            className={cx(
              styles.input,
              styles.inputRequired,
              errors.message ? styles.error : null
            )}
            {...register("message", {
              onChange: () => {
                if (errors.message) {
                  clearErrors("message");
                }
              },
              required: true,
            })}
          />
          {errors.message && (
            <Typography
              Variant="p"
              size="S"
              color="error"
              style={{ margin: "-24px 10px" }}
            >
              Это поле обязательное
            </Typography>
          )}
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              id="agreement"
              className={cx(
                styles.checkbox,
                errors.agreement ? styles.error : null
              )}
              {...register("agreement", {
                onChange: () => {
                  if (errors.agreement) {
                    clearErrors("agreement");
                  }
                },
                required: true,
              })}
            />
            <span>
              <Typography
                Variant="p"
                color={errors.agreement ? "error" : "default"}
              >
                Согласен с правилами обработки моих персональных данных
              </Typography>
            </span>
          </label>
          {errors.agreement && (
            <Typography
              Variant="p"
              size="S"
              color="error"
              style={{ margin: "-24px 10px" }}
            >
              Это поле обязательное
            </Typography>
          )}
          <div className={styles.button}>
            <Button
              type="submit"
              text="Отправить сообщение"
              disabled={!isDirty || !isValid}
            />
          </div>
        </form>
      </div>
      <div className={styles.alert} style={submitionAlert}>
        <SuccessImage />
        <Typography Variant="p">
          Письмо для активации аккаунта успешно отправлено на адрес электронной
          почты, который вы указали при регистрации.
        </Typography>
      </div>
    </div>
  );
};
