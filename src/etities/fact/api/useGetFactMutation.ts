import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface IFact {
  fact: string;
  length: number;
}

const axiosGetFact = async (): Promise<IFact> => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    return data;
  } catch (error) {
    console.error("Ошбика при получении факта", error);
    throw error;
  }
};
export const useGetFactMutation = () => {
  return useMutation({
    mutationFn: axiosGetFact,
  });
};
