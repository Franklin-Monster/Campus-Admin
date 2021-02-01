import React, { FC } from 'react'
import './css/list-item'

interface ListProps {
    title: string,
    content: string,
    width?: string,
    
}

const ListItem: FC<ListProps> = (props: ListProps) => {
    const style = {
        width: props.width
    }
    
    return (
        <div id="ListItem" style={style}>
            <div className="item-title">
                {props.title}
            </div>
            <div className="item-content">
                {props.content}
            </div>
        </div>
    )
}

export default ListItem