import mobx, { observable, action, computed, autorun } from 'mobx';
const url = "https://www.apiopen.top/journalismApi"
class HomeList {
    @observable homeData = [];
    @action getlist(title) {
        fetch(url).then(response => {
            return response.json()

        }).then(data => {
            this.homeData = data.data.auto

            console.log(data.data.auto);

        })

    }
}

export const homeList = new HomeList();
