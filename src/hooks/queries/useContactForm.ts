import { useMutation } from "@tanstack/react-query";
import api from "@services/api";
import type { ContactFormData, ContactResponse } from "@types";

export const useContactForm = () => {
  return useMutation<ContactResponse, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      const response = await api.post<ContactResponse>("/contact", data);
      return response.data;
    },
  });
};
