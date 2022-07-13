import { apolloClient } from "../graphql";
import { ALL_ANIME } from "./query";

class AnimeService {
  async getAnimePage(page = 1, perPage = 200) {
    try {
      const response = await apolloClient.query({
        query: ALL_ANIME,
        variables: { page, perPage },
      });

      if (!response || !response.data)
        throw new Error("Can not get anime List!");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default new AnimeService();
