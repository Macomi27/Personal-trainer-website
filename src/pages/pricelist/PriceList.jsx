import React from "react";
import DietryConsult from "../../components/pricecategory/DietryConsult";
import TrainingPack from "../../components/pricecategory/TrainingPack";
import Option from "../../components/pricecategory/option/Option";

const PriceList = () => {
    return(
        <div>
            <TrainingPack/>
            <DietryConsult/>
            <Option/>
        </div>
    )
}

export default PriceList;
