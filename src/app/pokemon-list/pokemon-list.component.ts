import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  currentPage = 1;

  constructor(private pokemonService: PokemonService){}

  ngOnInit(): void {
      this.loadPage(this.currentPage);
  }

  loadPage(page: number): void{
    this.pokemonService.getPokemonPage(page).subscribe((data)=>{
        this.pokemons = data.results;
        this.currentPage = page;
      });
  }

  nextPage(): void{
    this.loadPage(this.currentPage + 1);
  }

  prevPage(): void{
    if(this.currentPage > 1){
      this.loadPage(this.currentPage - 1);
    }
  }

}
