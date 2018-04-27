import React from 'react'
import { connect } from 'react-redux'
import { nowShowingFetch } from '../actions/action'
import Listing from '../components/homepage/Listing'

class HomePage extends React.Component {

    constructor(props){
        super(props)        
    }

    componentDidMount() {
        this.props.dispatch(nowShowingFetch())
    }

    render() {

        let carDom = []
        cardsData.forEach(function (value, key) {            
            carDom.push(<Listing key={ key } events = { value } />)
        });

        return (
            <div>
                <h1>Now Showing</h1>
                <div className="border-space"></div>                
                <div className="cards">
                    {carDom}
                </div>
                <style jsx global>{`
                    h1{
                        text-align: center;
                        border-bottom: 1px solid #d1d1d1;
                        padding-bottom: 10px;
                    }
                    .cards {
                        width: 100%;
                        display: inline-block;
                    }
                    .border-space{
                        padding-bottom:10px;
                    }
                `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nowShowingData: state
    }
}

export default connect(mapStateToProps)(HomePage)
