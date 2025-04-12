const name = "Anupam"
const num1 = 5
const num2 = 10
const userData = {"name":"john",
                  "age":55,
                 "mob_number":"8998898989"
                }
const fruits = ["Apple", "mango"]
function add(num1, num2){
    return num1 + num2
}
let path="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/3/22/0/shutterstock_national-puppy-day-224423782.jpg.rend.hgtvcom.616.462.suffix/1521744674350.jpeg"
function Header(){
    return (
        <div>
            <h1> Header </h1>
            <h2> Header {name}</h2>
            <h2> Sum = {add(num1, num2)}</h2>
            <h2> user name = {userData.name} </h2>
            <h2> user age = {userData.age} </h2>
            <h2> user mobile number = {userData.mob_number} </h2>
            <h2> 1st fruit = {fruits[0]}</h2>
            <img src={path}/>
        </div>
    )
}

export default Header;