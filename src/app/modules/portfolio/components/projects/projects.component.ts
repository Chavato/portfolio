import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interfaces/IProject.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProject[]>([{
    src: 'assets/img/projects/lista-de-tarefas.png',
    alt: 'Projeto ToDoList',
    title: 'Projeto ToDoList',
    description: '<p>Projeto de uma ToDoList utilizando .Net 7, Clean Architecture, TDD e Angular.</p><p>Em desenvolvimento.</p>',
    height: '',
    width: '',
    links: [{
      name: 'Conheca o Projeto',
      href: 'https://github.com/Chavato/ToDoList'
    }]
  }
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data: data,
      panelClass: EDialogPanelClass.PROJECTS
    });
  }
}
