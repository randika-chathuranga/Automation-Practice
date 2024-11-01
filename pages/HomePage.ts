
class HomePage{
    page: any;
    menu: string;
    logout: string;

    constructor(page){
        this.page = page;
        this.menu = "//img[@alt='menu']";
        this.logout = "//button[contains(.,'Sign out')]";
    }

    async logOutFromApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.logout);
    }
}

module.exports = HomePage;