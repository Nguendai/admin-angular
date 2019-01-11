import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ NewComponentComponent} from './new-component/new-component.component'

const materialWidgetRoutes: Routes = [
  	{ path: 'new-component', component: NewComponentComponent , data: { animation: 'new-component' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class NewModuleRouter {}