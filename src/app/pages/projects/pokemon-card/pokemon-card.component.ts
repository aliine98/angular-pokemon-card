import { Component, Input } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
    selector: 'app-pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
    @Input() pokemonName: string = '';
    pokemonData: PokemonData = {
        id: 0,
        name: '',
        sprites: { front_default: '' },
        types: [{ type: { name: '' } }],
    };

    constructor(private service: PokemonService) {
        this.getPokemon('sylveon');
    }

    getPokemon(pokemonName: string) {
        this.service.getPokemon(pokemonName).subscribe({
            next: (res) => {
                this.pokemonData = {
                    id: res.id,
                    name: res.name,
                    sprites: { front_default: res.sprites.front_default },
                    types: res.types,
                };
            },
        });
    }
}
