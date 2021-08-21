import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'skills', component: SkillsComponent , pathMatch:'full' },
  {path:'' , component:ProfileComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
