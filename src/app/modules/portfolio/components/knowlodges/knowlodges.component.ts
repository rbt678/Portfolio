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
      data_alt: "Conhecimento de Angular",
    },
    {
      src: "assets/icons/knowledge/css.svg",
      alt: "Ícone de conhecimento de css",
      data_alt: "Conhecimento de CSS",
    },
    {
      src: "assets/icons/knowledge/html.svg",
      alt: "Ícone de conhecimento de html",
      data_alt: "Conhecimento de HTML",
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "Ícone de conhecimento de javascript",
      data_alt: "Conhecimento de JavaScript",
    },
    {
      src: "assets/icons/knowledge/react.svg",
      alt: "Ícone de conhecimento de react",
      data_alt: "Conhecimento de React",
    },
    {
      src: "assets/icons/knowledge/python.svg",
      alt: "Ícone de conhecimento de python",
      data_alt: "Conhecimento de Python",
    },
    {
      src: "assets/icons/knowledge/typescript.svg",
      alt: "Ícone de conhecimento de typescript",
      data_alt: "Conhecimento de TypeScript",
    },
    {
      src: "assets/icons/knowledge/aws.svg",
      alt: "Ícone de conhecimento de aws",
      data_alt: "Conhecimento de AWS",
    },
    {
      src: "assets/icons/knowledge/nextjs.svg",
      alt: "Ícone de conhecimento de nextjs",
      data_alt: "Conhecimento de NextJS",
    }
  ]);
}
