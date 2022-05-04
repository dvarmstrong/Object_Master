const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
    console.log(bListPkmn);

    // return an array of of all pokemons where the id's are divisible by 3
    const divisibleBy3 = pokemon  => pokemon.filter( p => p.id % 3 === 0 );
    console.log(divisibleBy3(pokémon));

    //an array of pokémon objects that are "fire" type
    const fireType = pokemon => pokemon.filter( p => p.types.includes("fire") );
    console.log(fireType(pokémon));

    const nameOfPokemon = pokemon => pokemon.map( p => p.name);
    console.log(nameOfPokemon(pokémon));

    // sort the pokemon by id in ascending order
    const sortPokemon = pokemon => [...pokemon].sort( (a, b) => a.id - b.id );
    console.log(sortPokemon(pokémon));

    const poisonType = pokemon => pokemon.filter( p => p.types.includes("poison") );
    console.log(poisonType(pokémon));

    const pokemonFlying = pokemon => pokemon.filter( p => p.types.includes("flying") );
    console.log(pokemonFlying(pokémon));

    //a count of the number of pokémon that are "normal" type
    const normalType = pokemon => pokemon.filter( p => p.types.includes("normal") ).length;
    console.log(normalType(pokémon));