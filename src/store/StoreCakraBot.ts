import { ref } from "vue";
import { defineStore } from "pinia";
import { HandleFetchApi } from "../composable/FetchApi";

export interface Message {
  message: string;
}

export const useCakraBotStore = defineStore("cakraBot", () => {
  const isLoading = ref(false);
  const response = ref<string | null>(null);
  const error = ref<string | null>(null);

  const sendMessage = async (body: Message) => {
    isLoading.value = true;
    error.value = null;
    response.value = null;

    try {
      const url = "http://192.168.18.177:8082/v1/message";
      const { response, error: apiError } = await HandleFetchApi(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: body,
      });  

      if (apiError.value) {
        throw apiError.value;
      }

      const {message} = response.value
      response.value = message
      return response.value;
    } catch (err) {
      const messages = err instanceof Error ? err.message : "Request failed";
      error.value = messages;
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    response,
    error,
    sendMessage,
  };
});

export const CakraBot = async (body: Message) => {
  const store = useCakraBotStore();
  return store.sendMessage(body);
};
