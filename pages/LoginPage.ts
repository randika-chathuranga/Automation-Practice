
class LoginPage {
    page: any;
    userName: string;
    password: string;
    loginButton: string

    constructor(page: any){
        this.page = page;
        this.userName = "#email1";
        this.password = "#password1"
        this.loginButton = "//button[normalize-space()='Sign in']"
    }

    async loginToApplication(){
        await this.page.fill(this.userName, "randikachathuranga219@gmail.com");
        await this.page.fill(this.password, "Ra12ndika@");
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;