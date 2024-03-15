import { FC, useRef, useState } from "react";

import { PanelHeader } from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import { factFeaturesUi } from "src/features/fact";

import styles from "./FirstExercisePage.module.scss";

const { FactButtons, FactTextarea } = factFeaturesUi;

type FirstExercisePageProps = {};

export const FirstExercisePage: FC<FirstExercisePageProps> = () => {
  const [factTextarea, setFactTextarea] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className={styles.container}>
      <PanelHeader className={styles.header}>Факты</PanelHeader>
      <FactTextarea
        value={factTextarea}
        setValue={setFactTextarea}
        textareaRef={textareaRef}
      />

      <FactButtons textareaRef={textareaRef} setTextArea={setFactTextarea} />
    </div>
  );
};
