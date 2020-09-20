export interface Session {
  isAuthenticated: boolean,
  data: Object,
  attemptedTransition: any,
  session: any,
  store: any
}
