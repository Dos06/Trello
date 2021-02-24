import {connect} from "react-redux";
import Cards from "./Cards";
import {searchCreator} from "../../_services/reducers/cards-reducer";

const mapStateToProps = (state) => {
    return {
        cards: state.cardsPage.cards,
        search: state.cardsPage.search,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchCards: (text) => {
            let action = searchCreator(text)
            dispatch(action)
        }
    }
}

const CardsContainer = connect(mapStateToProps, mapDispatchToProps)(Cards)

export default CardsContainer
