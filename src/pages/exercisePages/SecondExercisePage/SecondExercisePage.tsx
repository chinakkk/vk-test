import { FC } from "react";

import { Button } from "@vkontakte/vkui/dist/components/Button/Button";
import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { panelNames } from "src/app/router/AppRouter";
import { useRouterActions } from "src/app/router/routerSlice";
import { ageFeaturesUi } from "src/features/age";

import styles from "./SecondExercisePage.module.scss";

const { AgeInput } = ageFeaturesUi;

type SecondExercisePageProps = {};

export const SecondExercisePage: FC<SecondExercisePageProps> = () => {
  const { setActivePanel } = useRouterActions();

  return (
    <div className={styles.container}>
      <PanelHeader>Узнай свой возраст</PanelHeader>
      <AgeInput />
      <div className={styles.buttons}>
        <Button
          className={styles.lastPageButton}
          onClick={() => {
            setActivePanel(panelNames.FIRST_EXERCISE);
          }}
        >
          Прошлое задание
        </Button>
      </div>
    </div>
  );
};
