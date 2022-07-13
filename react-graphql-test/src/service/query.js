import { gql } from "@apollo/client";

export const ALL_ANIME = gql`
  query allAnime($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media {
        id
        coverImage {
          medium
        }
        genres
        title {
          english
          romaji
        }
        format
        seasonYear
        duration
        popularity
        startDate {
          year
          month
          day
        }
        trending
        episodes
      }
    }
  }
`;
