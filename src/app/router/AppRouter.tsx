import { FC, useEffect } from "react";

import { Panel } from "@vkontakte/vkui/dist/components/Panel/Panel";
import { View } from "@vkontakte/vkui/dist/components/View/View";
import {
  useRouterActions,
  useRouterState,
} from "src/app/router/routerSlice.tsx";
import styles from "src/app/styles/AppRouter.module.scss";
import { FirstExercisePage } from "src/pages/FirstExercisePage/FirstExercisePage";
import { SecondExercisePage } from "src/pages/SecondExercisePage/SecondExercisePage";

export const panelNames = {
  FIRST_EXERCISE: "firstExercise",
  SECOND_EXERCISE: "secondExercise",
};
export const panelElements = [
  { id: panelNames.FIRST_EXERCISE, element: FirstExercisePage },
  { id: panelNames.SECOND_EXERCISE, element: SecondExercisePage },
];

export const AppRouter: FC = () => {
  const { setActivePanel } = useRouterActions();
  const { activePanel } = useRouterState();
  useEffect(() => {
    setActivePanel(panelNames.FIRST_EXERCISE);
  }, []);
  return (
    <div className={styles.container}>
      <View activePanel={activePanel}>
        {panelElements.map((panel) => (
          <Panel id={panel.id}>
            <panel.element />
          </Panel>
        ))}
      </View>
    </div>
  );
};
