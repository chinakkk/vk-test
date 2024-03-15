import { FC, RefObject } from "react";

import { FormItem } from "@vkontakte/vkui/dist/components/FormItem/FormItem";
import { Textarea } from "@vkontakte/vkui/dist/components/Textarea/Textarea";

type FactTextareaProps = {
  textareaRef: RefObject<HTMLTextAreaElement>;
  value: string;
  setValue: (value: string) => void;
};

export const FactTextarea: FC<FactTextareaProps> = ({
  textareaRef,
  value,
  setValue,
}) => {
  return (
    <FormItem top="Факт дня">
      <Textarea
        getRef={textareaRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        rows={5}
        placeholder="Любопытно..."
      />
    </FormItem>
  );
};
