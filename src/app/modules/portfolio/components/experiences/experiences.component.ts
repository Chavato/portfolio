import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Desenvolvedor Junior/Pleno Backend',
        p: 'B2ML Sistemas | 2021 - Atualmente',
      },
      text: '<ul><li>Desenvolvimento e manutenção de um projeto com API Rest com Clean Architecture utilizando C#, MySQL, Docker, S3, EC2, SignalR e OPC-UA.</li><li>Desenvolvimento de testes automatizados.</li><li>Documentação do projeto.</p></li></ul>'
      ,
    },
    {
      summary: {
        strong: 'Estágio Backend',
        p: 'B2ML Sistemas | 2020 - 2021',
      },
      text: '<ul><li>Desenvolvimento e manutenção de API Restutilizando C#, SQLServer e Docker, o qual fazia parte de um sistema de bilhetagem eletrônica.</li><li>Documentação do projeto.</li></ul>'
      ,
    },
  ]);
}
