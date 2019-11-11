import { HEROES } from "./../mock-heroes";
import { Hero } from "../Hero";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[] = HEROES;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
