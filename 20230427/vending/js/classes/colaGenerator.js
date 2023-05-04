class ColaGenerator {  // ColaGenerator 생성기 (클래스를 먼저 만든다.)
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }



    async loadData() { // item.json에서 데이터 받아오는 함수 await를 사용하기 때문에 async 작성 필수.
        try {  // then이 없기 때문에 try, catch 구문 사용필수다 ~!
            // const response = await fetch('./items.json');
            const response = await fetch('./items.json');

            if (response.ok) { // 서버의 응답 코드가 200 ~ 299 일 경우
                return response.json(); // response 값 줘야지! json 파일로 준다~~
            } else {
                throw new Error(response.status);   // 에러 발생시 리스폰스 상태 반환.
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
        
    