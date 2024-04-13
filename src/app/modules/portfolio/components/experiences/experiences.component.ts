import { Component, WritableSignal, signal } from '@angular/core';
import exp from '../../../../../assets/json/experiencias.json';
import { IExperience } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences: WritableSignal<IExperience[]> = signal(Object.values(exp))

}