import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface IAge {
  age: number;
  count: number;
  name: string;
}

const axiosGetAge = async (name: string): Promise<IAge | undefined> => {
  try {
    if (/[^\p{L}]/u.test(name) || !name) return undefined;
    const { data } = await axios.get(`https://api.agify.io/?name=${name}`);
    return data;
  } catch (error) {
    console.error("Ошбика при получении возраста", error);
    throw error;
  }
};
export const useGetAgeMutation = (name: string) => {
  return useMutation({
    mutationFn: () => axiosGetAge(name),
  });
};
