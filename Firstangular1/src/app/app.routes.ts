import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Service } from './Pages/service/service';
import { Contact} from './Pages/contact/contact';
import { Cybersecurity } from './Pages/cybersecurity/cybersecurity';
import { Webdevelopment } from './Pages/webdevelopment/webdevelopment';
import { Mobileapp } from './Pages/mobileapp/mobileapp';
import { Marketing } from './Pages/marketing/marketing';
import { Ai } from './Pages/ai/ai';
import { Cloud } from './Pages/cloud/cloud';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Service },
  { path: 'contact', component: Contact },
  { path: 'cybersecurity', component: Cybersecurity },
  { path: '', redirectTo: '/services', pathMatch: 'full' },
  {path: 'webdevelopment', component: Webdevelopment},
  { path: '', redirectTo: '/services', pathMatch: 'full' },
  {path: 'mobileapp', component: Mobileapp},
  { path: '', redirectTo: '/services', pathMatch: 'full' },
  {path: 'marketing', component: Marketing},
    { path: '', redirectTo: '/services', pathMatch: 'full' },
  {path: 'ai', component: Ai},
    { path: '', redirectTo: '/services', pathMatch: 'full' },
  {path:'cloud',component:Cloud}
  

];
