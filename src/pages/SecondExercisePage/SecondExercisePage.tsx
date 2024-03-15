import { FC, useState } from "react";

import { Input } from "@vkontakte/vkui";
import { Button } from "@vkontakte/vkui/dist/components/Button/Button";
import { FormItem } from "@vkontakte/vkui/dist/components/FormItem/FormItem";
import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { panelNames } from "src/app/router/AppRouter.tsx";
import { useRouterActions } from "src/app/router/routerSlice.tsx";

import styles from "./SecondExercisePage.module.scss";

type SecondExercisePageProps = {};

export const SecondExercisePage: FC<SecondExercisePageProps> = () => {
  const { setActivePanel } = useRouterActions();
  const [factTextarea, setFactTextarea] = useState("");

  const onClickSendName = () => {};
  return (
    <div className={styles.container}>
      <PanelHeader>Узнай свой возраст</PanelHeader>
      <FormItem top="Введите имя">
        <Input
          value={factTextarea}
          onChange={(event) => setFactTextarea(event.target.value)}
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
