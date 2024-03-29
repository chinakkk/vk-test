import { FC } from "react";

import { Panel } from "@vkontakte/vkui/dist/components/Panel/Panel";
import { View } from "@vkontakte/vkui/dist/components/View/View";
import { useRouterState } from "src/app/router/routerSlice";
import styles from "src/app/styles/AppRouter.module.scss";
import { exercisePages } from "src/pages";

const { FirstExercisePage, SecondExercisePage } = exercisePages;
export const panelNames = {
  FIRST_EXERCISE: "firstExercise",
  SECOND_EXERCISE: "secondExercise",
};
export const panelElements = [
  { id: panelNames.FIRST_EXERCISE, element: FirstExercisePage },
  { id: panelNames.SECOND_EXERCISE, element: SecondExercisePage },
];

export const AppRouter: FC = () => {
  const { activePanel } = useRouterState();
  return (
    <div className={styles.container}>
      <View activePanel={activePanel}>
        {panelElements.map((panel) => (
          <Panel className={styles.panel} key={panel.id} id={panel.id}>
            <panel.element />
          </Panel>
        ))}
      </View>
    </div>
  );
};
