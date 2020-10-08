import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {

  @service firebaseApp
  @service toast;
  @service session;

  @action
  async login() {

      const id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );

      const { loginEmail } = this;

      const actionCodeSettings = {
          url: `http://localhost:4200/finishSignUp?id=${id}`,
          handleCodeInApp: true
      }


      const auth = await this.firebaseApp.auth();

      return auth.sendSignInLinkToEmail(loginEmail, actionCodeSettings).then(() => {
          window.localStorage.setItem('emailForSignIn', loginEmail);
      }).catch(err => {
          if(err) {
              this.toast.error("Something went wrong", "Error")
          }
      });
  }
}
