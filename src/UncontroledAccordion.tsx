import React, {useState} from 'react';

type AccordionPropsType ={
    titleValue: string
}


const UncontrolledAccordion = (props:AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

  

    return (
        <div>
            <div>
                <AccordionTitle title={props.titleValue} onClock={()=>setCollapsed(!collapsed)}/>
                {!collapsed && <AccordionBody/>}
            </div>
        </div>
    );
};

export default UncontrolledAccordion;

type AccordionTitleType = {
    title: string
    onClock: ()=> void

}
const AccordionTitle = (props:AccordionTitleType) => {

    return (
        <div>
            <h2 onClick={()=> props.onClock()}>{props.title}</h2>
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