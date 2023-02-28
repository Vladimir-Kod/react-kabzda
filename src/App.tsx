import React, {useState} from 'react';
import './App.css';
import UncontroledRating from "./UncontroledRating";
import UncontroledAccordion from "./UncontroledAccordion";
import Rating, {RatingValueType} from "./Rating";
import Accordion from "./Accordion";

function App() {

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(false)



  return (
    <div>
      <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} />
        Article 1
        <Rating value={ratingValue} onClick={SetRatingValue}/>
        <UncontroledAccordion titleValue={"Menu"}  />
        <UncontroledAccordion titleValue={"Users"} />
        Article 2
        <Accordion titleValue="Accordion" collapsed={accordionCollapsed} onClick={setaccordionCollapsed}/>
        <UncontroledRating />

    </div>
  );
}

export default App;

type PageTitleType = {
    title: string
}

const PageTitle = (props: PageTitleType) => {
    return (
        <h1>{props.title}</h1>
    )
}