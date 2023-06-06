import Item from "./Item"
import { memo } from "react";

const List = ({ items, removeItem }) => {

    const renderItems = items.map((item) => <Item key={item.id} item={item} removeItem={removeItem} />)
    return (
        <div className="mt-5">
            {renderItems}
        </div>
    )
}

export default memo(List)
