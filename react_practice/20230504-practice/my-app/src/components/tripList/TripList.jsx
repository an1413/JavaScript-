import './TripList.css'

let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

const items = [
    { id: 1, name: 'Apple', desc: '빨간건 사과' },
    { id: 2, name: 'Banana', desc: '바나나는 길어' },
    { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

function TripList() {
    
    let areas = list.map((item, index) => {
        return (
            <li key={index} className={item.visited ? "list-area-item acive" : "list-area-item"}>{list.area}</li>
        )
    });

    return (
        <ul className='list-area'>{areas}</ul>
    );
}

export default TripList;