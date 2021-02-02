import React, { FC } from 'react'
import './css/card-item'

interface CardProps {
    title: string
    itemText: Array<Array<string>>
    width?: string
}

const CardItem: FC<CardProps> = (props: CardProps) => {
    const style = {
        width: props.width,
    }

    return (
        <div id="CardItem" style={style}>
            <div className="card-title">{props.title}</div>
            <div className="card-content">
                {props.itemText.map((item, index) => {
                    return (
                        <div className="card-item" key={index}>
                            <div className="item-front">{item[0]}</div>
                            <div className="item-end">{item[1]}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardItem
