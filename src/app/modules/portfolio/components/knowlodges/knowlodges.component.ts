import { Component, signal } from '@angular/core';
import { IKnowlodges } from '../../interface/IKnowlodges.interface';

@Component({
  selector: 'app-knowlodges',
  standalone: true,
  imports: [],
  templateUrl: './knowlodges.component.html',
  styleUrl: './knowlodges.component.scss'
})
export class KnowlodgesComponent {
  knowlodges = signal<IKnowlodges[]>([
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "Ícone de conhecimento de angular",
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "Ícone de conhecimento de css3",
    },
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "Ícone de conhecimento de html5",
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "Ícone de conhecimento de javascript",
    },
    {
      src: "assets/icons/knowledge/nodejs.svg",
      alt: "Ícone de conhecimento de nodejs",
    },
    {
      src: "assets/icons/knowledge/sass.svg",
      alt: "Ícone de conhecimento de sass",
    }
  ]);
}
