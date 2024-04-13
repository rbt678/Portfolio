import { Component, inject, signal, WritableSignal } from '@angular/core';
import prj from '../../../../../assets/json/projetos.json'
import { IProject } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  // constructor(private dialog: MatDialog){}
  #dialog =  inject(MatDialog)
  projetos: WritableSignal<IProject[]> = signal(Object.values(prj))

  openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}