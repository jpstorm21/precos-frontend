var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"LoggedInLayoutComponent","canActivate":["AuthGuard"],"children":[{"path":"","component":"MainMenuComponent"},{"path":"users","loadChildren":"./features/users-management/users-management.module#UsersManagementModule","data":{"feature":"USER_MANAGEMENT"},"canLoad":["AccessGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/users-management/users-management-routing.module.ts","module":"UsersManagementRoutingModule","children":[{"path":"","component":"UsersComponent"}],"kind":"module"}],"module":"UsersManagementModule"}]},{"path":"colon-rectal","loadChildren":"./features/colon-rectal/colon-rectal.module#ColonRectalModule","data":{"speciality":"CCR"},"canLoad":["SpecialityGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/colon-rectal/colon-rectal-routing.module.ts","module":"ColonRectalRoutingModule","children":[{"path":"","component":"CCRMainComponent"}],"kind":"module"}],"module":"ColonRectalModule"}]},{"path":"bronchopulmonary","loadChildren":"./features/bronchopulmonary/bronchopulmonary.module#BronchopulmonaryModule","data":{"speciality":"CBP"},"canLoad":["SpecialityGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/features/bronchopulmonary/bronchopulmonary-routing.module.ts","module":"BronchopulmonaryRoutingModule","children":[{"path":"","component":"CBPMainComponent"}],"kind":"module"}],"module":"BronchopulmonaryModule"}]}]},{"path":"","component":"LoginLayoutComponent","children":[{"path":"login","component":"LoginComponent"}]},{"path":"**","component":"LoggedInLayoutComponent","canActivate":["AuthGuard"],"children":[{"path":"**","component":"PageNotFoundComponent"}]},{"path":"**","redirectTo":""}],"kind":"module"}]}