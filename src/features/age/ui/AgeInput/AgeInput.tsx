import { FC, useCallback, useEffect, useState } from "react";

import { Input } from "@vkontakte/vkui";
import { FormItem } from "@vkontakte/vkui/dist/components/FormItem/FormItem";
import { debounce } from "@vkontakte/vkui/dist/lib/utils";
import { useGetAgeMutation } from "src/etities/age/api/useGetAgeMutation";
import { getYearWord } from "src/shared/utils/getYearWord";

type AgeInputProps = {};

export const AgeInput: FC<AgeInputProps> = () => {
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const { mutate: getAge, data } = useGetAgeMutation(nameInput);
  const [bottomText, setBottomText] = useState("");
  const [receivedNames] = useState<Record<string, number>>({});
  const debounceNameInput = useCallback(
    debounce((value) => {
      if (!receivedNames[value]) getAge();
      else
        setBottomText(
          `Вам ${receivedNames[value]} ${getYearWord(receivedNames[value])}`,
        );
    }, 3000),
    [],
  );
  const onChangeNameInput = (value: string) => {
    setNameInput(value);
    debounceNameInput(value);
    setBottomText("");
  };
  useEffect(() => {
    if (/[^\p{L}]/u.test(nameInput)) {
      setError("Можно вводить только буквы");
    } else {
      setError("");
    }
  }, [nameInput]);
  useEffect(() => {
    if (data?.age) {
      receivedNames[nameInput] = data?.age;
      setBottomText(`Вам ${data?.age} ${getYearWord(data?.age)}`);
    }
  }, [data?.age]);

  return (
    <FormItem
      top="Введите имя"
      bottom={error || bottomText}
      status={error ? "error" : "default"}
    >
      <Input
        value={nameInput}
        onChange={(event) => onChangeNameInput(event.target.value)}
        placeholder="Мне нравится твое имя"
      />
    </FormItem>
  );
};
