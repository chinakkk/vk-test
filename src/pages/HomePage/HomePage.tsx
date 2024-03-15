import { FC, useState } from "react";

import { CellButton } from "@vkontakte/vkui/dist/components/CellButton/CellButton";
import { Panel } from "@vkontakte/vkui/dist/components/Panel/Panel";
import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { Textarea } from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import { View } from "@vkontakte/vkui/dist/components/View/View";

import styles from "./HomePage.module.scss";

type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
  const [activePanel, setActivePanel] = useState("firstExercise");
  return (
    <div className={styles.container}>
      <View activePanel={activePanel}>
        <Panel id="firstExercise">
          <PanelHeader>VK Internship 1</PanelHeader>
          <div className={styles.firstExercise}>
            <Textarea rows={1} placeholder="Once upon a time" />
            <CellButton onClick={() => setActivePanel("secondExercise")}>
              Второе задание
            </CellButton>
          </div>
        </Panel>
        <Panel id="secondExercise">
          <PanelHeader>VK Internship 2</PanelHeader>
          <div className={styles.secondExercise}>
            <CellButton onClick={() => setActivePanel("firstExercise")}>
              Первое задание
            </CellButton>
          </div>
        </Panel>
      </View>
    </div>
  );
};
