import { Component, OnInit } from '@angular/core';
import { skills, projects } from 'src/data';
import { skillsType,projectType } from 'src/skillsType';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
mySkills:skillsType[]=[];
myProjects:projectType[]=[];
  constructor() { }

  ngOnInit(): void {
    this.mySkills=skills;
    this.myProjects=projects
  }

}
