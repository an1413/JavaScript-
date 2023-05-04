import './TripList.css'

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
    ];


function TripList() {
    let areas = list.map((v) => {
        return (
            <li key={v.no} className ={v.visited ? 'list-area-item active' : 'list-area-item'}>{v.area}</li>
        )
    })

    return <ul className='list-area'>{areas}</ul>

}

export default TripList;