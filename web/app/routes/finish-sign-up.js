import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FinishSignUpRoute extends Route {
  @service session;
  @service firebaseApp;
  @service toast;
  @service router;

  async beforeModel() {
      const auth = await this.firebaseApp.auth();
      if(auth.isSignInWithEmailLink(window.location.href)) {
          let email = window.localStorage.getItem('emailForSignIn');
          if(!email) {
              email = window.prompt("Email missing, you probably opened the link from a different device/browser. Please provide your email for confirmation");
          }

          auth.signInWithEmailLink(email, window.location.href).then(res => {
              console.log(res);
              window.localStorage.removeItem('emailForSignIn');
              this.toast.success("You are signed in", "Success");
              this.router.transitionTo("channels");
          }).catch(err => {
              if(err) {
                  this.toast.error('Something went wrong', "Error");
                  console.error(err);
                  this.router.transitionTo("index");
              }
          })
      }
  }
}
