import { FC, RefObject, useCallback, useEffect } from "react";

import { Button } from "@vkontakte/vkui/dist/components/Button/Button";
import { panelNames } from "src/app/router/AppRouter";
import { useRouterActions } from "src/app/router/routerSlice";
import { useGetFactMutation } from "src/etities/fact/api/useGetFactMutation";

import styles from "./FactButtons.module.scss";

type FactButtonsProps = {
  onClickFact?: () => void;
  textareaRef: RefObject<HTMLTextAreaElement>;
  setTextArea: (value: string) => void;
};

export const FactButtons: FC<FactButtonsProps> = ({
  textareaRef,
  setTextArea,
}) => {
  const { setActivePanel } = useRouterActions();
  const { mutate: getFact, data } = useGetFactMutation();

  const focusAfterFirstWord = useCallback(() => {
    if (!textareaRef?.current) return;
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
      setTextArea(data?.fact);
      setTimeout(() => focusAfterFirstWord(), 0);
    }
  }, [data?.fact]);

  return (
    <div className={styles.container}>
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
  );
};
