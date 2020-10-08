import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class ApplicationController extends Controller {

    @service firebaseApp
    @service toast;
    @service session;

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    @action
    async login() {

        set(this, "emailSent",  true);
        set(this, "isValidEmail", false)

        const id = ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );

        const { loginEmail } = this;

        const actionCodeSettings = {
            url: `http://localhost:4200/finishSignUp?id=${id}`,
            handleCodeInApp: true
        }

        console.log("sdcs");


        // const auth = await this.firebaseApp.auth();
        //
        // return auth.sendSignInLinkToEmail(loginEmail, actionCodeSettings).then(() => {
        //     window.localStorage.setItem('emailForSignIn', loginEmail);
        // }).catch(err => {
        //     if(err) {
        //         this.toast.error("Something went wrong", "Error")
        //     }
        // });
    }

    @action
    invalidate() {
        this.session.invalidate();
    }

    @action
    checkEmail() {
        set(this, "emailSent",  false);
        set(this, "isValidEmail", this.validateEmail(this.loginEmail))
    }
}
