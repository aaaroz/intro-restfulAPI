import axios from "axios";

export const APIProducts = {
  getProducts: async () => {
    try {
      const result = await axios.get(
        "https://651a2054340309952f0ce26a.mockapi.io/api/v1/products"
      );
      console.log(result);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};
