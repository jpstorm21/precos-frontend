// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  authApi: "https://precos-backend.herokuapp.com/auth/",
  usersApi:"https://precos-backend.herokuapp.com/api/",
  patientsApi:"https://precos-backend.herokuapp.com/api/",
  ccrPatientsApi:"https://precos-backend.herokuapp.com/api/",
  ccrSchedulingApi:"https://precos-backend.herokuapp.com/api/",
  cbpPatientsApi:"https://precos-backend.herokuapp.com/api/",
  administrativeApi:"https://precos-backend.herokuapp.com/api/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
