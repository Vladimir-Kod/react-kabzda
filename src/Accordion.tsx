import React from 'react';

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
    onClick: (boolean:boolean)=> void
}

const Accordion = (props: AccordionPropsType) => {
    return (

            <div>
                <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
    )
};

export default Accordion;

type AccordionTitleType = {
    title: string
    onClick: (boolean:boolean)=> void
    collapsed: boolean
}
const AccordionTitle = (props:AccordionTitleType) => {
    return (
        <div>
            <h2 onClick={()=>props.onClick(!props.collapsed)}>{props.title}</h2>
        </div>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}