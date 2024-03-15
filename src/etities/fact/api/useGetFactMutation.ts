import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface IFact {
  fact: string;
  length: number;
}

const axiosGetFact = async (): Promise<IFact> => {
  const { data } = await axios.get("https://catfact.ninja/fact");
  return data;
};
export const useGetFactMutation = () => {
  return useMutation({
    mutationFn: axiosGetFact,
  });
};
