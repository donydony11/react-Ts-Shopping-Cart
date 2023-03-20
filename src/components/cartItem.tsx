import { useShoppingCart } from "../context/shoppingCartContent"
import storeItems from "../data/items.json"
import { Stack, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities"

type CartItemProps ={
    id: number
    quantity: number
}


export function CartItem({id, quantity}: CartItemProps){
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if(!item) return null
    
    return(
        <Stack direction="horizontal" gap={2} className="d-flex
        align-items-center">
            <img src={item.imgUrl} style = {{
                width: "125px",
                height:"75px",
                objectFit:"cover"
            }}/>
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                     {quantity > 1 && (<span 
                     className="text-muted}" 
                     style={{fontSize: ".65rem"}}>
                        x{quantity}
                        </span>)}
                </div>
                <div className="text-muted">
                    <div>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div>
                {formatCurrency(item.price * quantity)}
                <Button variant="outline-danger" size="sm" onClick={()  => 
                    removeFromCart(item.id)}>&times;</Button>

                </div>
            </div>
            
        </Stack>
    )

}