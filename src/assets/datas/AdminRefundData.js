import img from '../images/tempitemimg.png'

const List = [

    {id:0, user: "dpang1", type: "환불", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "단순변심", state: "반품요청", content: "진짜 죄송한데 인간적으로 너무하신거 아니에요? 정말 화가 나네요. 제가 이 상품을 얼마나 기다렸는데 이렇게까지 느려지시면 저 정말 못되게 굴 수가 있어요"},
    {id:1, user: "dpang2", type: "취소", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "취소", state: "취소요청", content: "진짜 죄송한데 인간적으로 너무하신거 아니에요? 정말 화가 나네요. 제가 이 상품을 얼마나 기다렸는데 이렇게까지 느려지시면 저 정말 못되게 굴 수가 있어요"}, 
    {id: 2, user: "dpang3", type: "환불", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, , {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "단순변심", state: "회수중", content: "진짜 죄송한데 인간적으로 너무하신거 아니에요? 정말 화가 나네요. 제가 이 상품을 얼마나 기다렸는데 이렇게까지 느려지시면 저 정말 못되게 굴 수가 있어요"},  
    
]



export default List;