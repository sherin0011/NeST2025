import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';

import { Products } from './Pages/products/products';

import { Contacts } from './Pages/contacts/contacts';
import { SingleviewComponent } from './Pages/singleview/singleview';

export const routes: Routes = [
                {path:'',redirectTo:'home',pathMatch:'full'},
                {path:'home',component:Home},
                {path:'products',component:Products},
                {path:'contacts',component:Contacts},
                {path:'singleview/:id',component:SingleviewComponent}
    ];
