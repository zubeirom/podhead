import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FinishSignUpRoute extends Route {
  @service session;
  @service firebaseApp;
  @service toast;

  async beforeModel() {
      const auth = await this.firebaseApp.auth();
      if(auth.isSignInWithEmailLink(window.location.href)) {
          let email = window.localStorage.getItem('emailForSignIn');
          if(!email) {
              email = window.prompt("Email missing! Please provide your email for confirmation");
          }

          auth.signInWithEmailLink(email, window.location.href).then(res => {
              console.log(res);
              window.localStorage.removeItem('emailForSignIn');
              this.toast.success("niiiice", "Success");
          }).catch(err => {
              if(err) {
                  this.toast.error('Something went wrong', "Error");
                  console.error(err);
              }
          })
      }
  }
}
