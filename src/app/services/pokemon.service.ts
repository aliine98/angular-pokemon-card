import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../models/pokemonData';

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    private baseUrl: string = environment.pokeApiUrl;
    constructor(private http: HttpClient) {}

    getPokemon(pokemonName: string): Observable<PokemonData> {
        return this.http.get<PokemonData>(`${this.baseUrl}${pokemonName}`);
    }
}
