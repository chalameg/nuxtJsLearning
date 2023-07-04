<template>
  <div class="flex flex-wrap p-4 mb-4">
    <CharacterCard
      v-for="{ id, name, image, status, species, location } in data.characters.results"
      :key="id"
      :id="id"
      :name="name"
      :image="image"
      :status="status"
      :species="species"
      :location="location.name"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
    />
  </div>
</template>

<script lang="ts" setup>
type CharactersResults = {
  characters: {
    results: {
      id: string;
      name: string;
      image: string;
      status: string;
      species: string;
      location: {
        name: string;
      };
    }[];
  };
};

const query = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
      }
    }
  }
`;

const { data } = await useAsyncQuery<CharactersResults>(query);
</script>
