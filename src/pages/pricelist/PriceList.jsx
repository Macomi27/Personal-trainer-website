import React from "react";
import DietryConsult from "../../components/pricecategory/DietryConsult";
import TrainingPack from "../../components/pricecategory/TrainingPack";

const PriceList = () => {
    return(
        <div>
            <p>This is price list page</p>
            <TrainingPack/>
            <DietryConsult/>
        </div>
    )
}

export default PriceList;
