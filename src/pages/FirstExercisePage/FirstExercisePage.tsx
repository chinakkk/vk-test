import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@vkontakte/vkui/dist/components/Button/Button";
import { FormItem } from "@vkontakte/vkui/dist/components/FormItem/FormItem";
import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { Textarea } from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import { panelNames } from "src/app/router/AppRouter.tsx";
import { useRouterActions } from "src/app/router/routerSlice";
import { useGetFactMutation } from "src/etities/fact/api/useGetFactMutation";

import styles from "./FirstExercisePage.module.scss";

type FirstExercisePageProps = {};

export const FirstExercisePage: FC<FirstExercisePageProps> = () => {
  const { setActivePanel } = useRouterActions();
  const { mutate: getFact, data } = useGetFactMutation();
  const [factTextarea, setFactTextarea] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusAfterFirstWord = useCallback(() => {
    if (!textareaRef.current) return;
    const text = textareaRef?.current?.value || "";
    const firstSpaceIndex = text.search(/\s/);
    if (firstSpaceIndex) {
      textareaRef.current.selectionStart = firstSpaceIndex;
      textareaRef.current.selectionEnd = firstSpaceIndex;
      textareaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (data?.fact) {
      setFactTextarea(data?.fact);
      setTimeout(() => focusAfterFirstWord(), 0);
    }
  }, [data?.fact]);

  return (
    <div className={styles.container}>
      <PanelHeader>Забавный факт</PanelHeader>
      <FormItem top="Факт дня">
        <Textarea
          getRef={textareaRef}
          value={factTextarea}
          onChange={(event) => setFactTextarea(event.target.value)}
          rows={5}
          placeholder="Любопытно..."
        />
      </FormItem>
      <div className={styles.buttons}>
        <Button className={styles.getFactButton} onClick={() => getFact()}>
          Получить Факт
        </Button>
        <Button
          className={styles.nextPageButton}
          onClick={() => {
            setActivePanel(panelNames.SECOND_EXERCISE);
          }}
        >
          Следующее задание
        </Button>
      </div>
    </div>
  );
};
