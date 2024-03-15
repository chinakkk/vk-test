import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosGetFact = async (): Promise<string> => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");

    return data || "";
  } catch (error) {
    console.error("Ошбика при получении веселого факта", error);
    throw error;
  }
};
export const useFactQuery = () => {
  return useQuery({
    queryFn: axiosGetFact,
    queryKey: ["fact"],
  });
};
