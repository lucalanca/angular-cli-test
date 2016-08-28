import { Home } from './home';
import { NoContent } from './no-content';
export var ROUTES = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: '**', component: NoContent },
];
//# sourceMappingURL=../../../src/app/app.routes.js.map