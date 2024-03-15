import { FC, useCallback, useEffect, useState } from "react";

import { Input } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui/dist/components/Button/Button";
import { FormItem } from "@vkontakte/vkui/dist/components/FormItem/FormItem";
import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { debounce } from "@vkontakte/vkui/dist/lib/utils";
import { panelNames } from "src/app/router/AppRouter";
import { useRouterActions } from "src/app/router/routerSlice";
import { useGetAgeMutation } from "src/etities/age/api/useGetAgeMutation";
import { getYearWord } from "src/shared/utils/getYearWord";

import styles from "./SecondExercisePage.module.scss";

type SecondExercisePageProps = {};

export const SecondExercisePage: FC<SecondExercisePageProps> = () => {
  const { setActivePanel } = useRouterActions();
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const { mutate: getAge, data } = useGetAgeMutation(nameInput);
  const [receivedNames] = useState<Record<string, number>>({});
  const debounceNameInput = useCallback(
    debounce(() => {
      if (!receivedNames[nameInput]) getAge();
    }, 1000),
    [],
  );
  const onChangeNameInput = (value: string) => {
    setNameInput(value);
    debounceNameInput();
  };
  const onClickSendName = () => {};
  const formBottom = () => {
    if (error) return error;
    if (data?.age) return `Вам ${data?.age} ${getYearWord(data?.age)}`;
    return "";
  };
  useEffect(() => {
    if (/[^\p{L}]/u.test(nameInput)) {
      setError("Вводите только буквы");
    } else {
      setError("");
    }
  }, [nameInput]);
  useEffect(() => {
    if (data?.age) receivedNames[nameInput] = data?.age;
  }, [data?.age]);

  return (
    <div className={styles.container}>
      <PanelHeader>Узнай свой возраст</PanelHeader>
      {receivedNames.chin}
      <FormItem
        top="Введите имя"
        bottom={formBottom()}
        status={error ? "error" : "default"}
      >
        <Input
          value={nameInput}
          onChange={(event) => onChangeNameInput(event.target.value)}
          placeholder="Мне нравится твое имя"
        />
      </FormItem>
      <div className={styles.buttons}>
        <Button
          className={styles.nextPageButton}
          onClick={() => {
            setActivePanel(panelNames.FIRST_EXERCISE);
          }}
        >
          Прошлое задание
        </Button>
        <Button className={styles.getFactButton} onClick={onClickSendName}>
          Отправить имя
        </Button>
      </div>
    </div>
  );
};
