<template>
    <div>
        <CharacterCard
        :id="data.character.id"
        :name="data.character.name"
        :image="data.character.image"
        :status="data.character.status"
        :species="data.character.species"
        :location="data.character.location.name"
        />
    </div>
</template>

<script type="ts" setup>

// type Character = {
//      character: {
//         id: string;
//         name: string;
//         image: string;
//         status: string;
//         species: string;
//         location: {
//             name: string;
//         };
//      };
// };

const route = useRoute();

const query = gql`
  query getCharacter {
    character(id: ${route.params.id}) {
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
`;

const { data } = await useAsyncQuery(query);
</script>
