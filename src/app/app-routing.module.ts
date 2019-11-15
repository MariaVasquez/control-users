import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ConsultaComponent } from "./consulta/consulta.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "consulta",
    component: ConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
