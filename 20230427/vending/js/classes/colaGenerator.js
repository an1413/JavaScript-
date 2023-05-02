class ColaGenerator {  // 콜라만 생성하는 클래스
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {  // 출발점이 되는 메소드..
        const response = await this.loadData();
        this.colaFactory(response);
    }

    // async loadData() {
    //     const response = fetch('./items.json');  //json

    //     try {
    //         if(response.ok) {
    //         return response.json();
    //     } else {
    //         throw new Error(response.status);
    //     }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
        
    


    async loadData() { // items.json을 불러오는 메소드
        try {
            const response = await fetch('./items.json');  //json으로부터 받는 데이터

            if (response.ok) { // 서버의 응답 코드가 200 ~ 299 일 경우
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            docFrag.append(item);
        })
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;