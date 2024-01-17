import img from '../images/tempitemimg.png'

const List = [

    {type: "환불", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "단순변심", state: "환불요청"},
    {type: "취소", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "단순변심", state: "환불요청"}, 
    {type: "환불", date: "2023.11.13", ordernum: 112232, item: [{img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}, , {img: img, name: "한국시리즈 후드 105", money: 160000, refund: 157000, amt: 2}], category: "단순변심", state: "환불요청"},  
    
]

export default List;