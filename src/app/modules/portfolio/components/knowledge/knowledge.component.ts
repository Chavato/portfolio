import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'dotnet icon',
    },
    {
      src: 'assets/icons/knowledge/mysql.svg',
      alt: 'mysql icon',
    },
    {
      src: 'assets/icons/knowledge/sqlserver.svg',
      alt: 'sqlserver icon',
    },
    {
      src: 'assets/icons/knowledge/mongodb.svg',
      alt: 'mongodb icon',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'docker icon',
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: 'aws icon',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'javascript icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'angular icon',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'css3 icon',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'html5 icon',
    },
  ])
}
