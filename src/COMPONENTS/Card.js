import React from 'react'
import { myDatabase } from '../firebase.js'

function Card() {
    const [productsData, setProductsData] = React.useState([])
    React.useEffect(function () {
        myDatabase.collection("products").onSnapshot(function (snapshot) {
            setProductsData(snapshot.docs.map(function (i) {
                return i.data()
            }))
        })
    })
    function collectData(event) {
        if (localStorage.getItem("cart") == null) {
            var cart = {}
        }
        else {
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        let myId = event.target.id
        if (cart[myId] == undefined) {
            var name = document.getElementById("myname" + myId).innerText
            var price = Number(document.getElementById("myprice" + myId).innerText) 
            var quantity=1
            cart[myId] = [quantity, name, price]
        } else {
            quantity = cart[myId][0] + 1
            cart[myId][0] = quantity
            price = Number(document.getElementById("myprice" + myId).innerText) * quantity
            cart[myId][2] = price
        }
        localStorage.setItem("cart", JSON.stringify(cart))

        displayCart(cart)
        function displayCart(mycart){
            var cartData =""
            for(let i in mycart){
                 cartData = cartData + "QTY:" + mycart[i][0] + "NAME:" + mycart[i][1] + "PRICE:" + mycart[i][2] + "<br/>"
            }
            cartData = cartData + "<a href = 'productData.html' class='btn btn-success'>Continue</a>"
            document.getElementById("mypopover").setAttribute("data-content", cartData)
           // $('[data-toggle="popover"]').popover()

        }

        
    }
    return (
        <div className="all" style={{ display: "flex" }}>
            {

                productsData.map(function (i) {

                    return <div key={i.slno} className="card" style={{ width: 350, margin: 30, padding: 30 }}>
                        <h2>{i.slno}</h2>
                        <img src={i.imageurl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" id={"myname" + i.slno}>{i.name}</h5>
                            <del><h5 className="card-title">{i.originalprice}</h5></del>
                            <h5 className="card-title" id={"myprice" + i.slno}>{i.discountedprice}</h5>

                            <p className="card-text">{i.description}</p>
                            <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add to Cart</a>
                        </div>
                    </div>
                })
            }


        </div>
    )
}

export default Card