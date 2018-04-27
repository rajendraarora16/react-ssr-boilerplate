import React from 'react'
import { connect } from 'react-redux'
import { getShowtimesFetch } from '../actions/action'

class Buyticket extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getShowtimesFetch())
    }

    render() {
        return (
            <div>
                <h1 className="main-header">Buyticket page</h1>
                <style jsx>{`
                    .main-header {
                        text-align:center;
                    }
                `}
                </style>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        getShowtimesFetch: state
    }
}

export default connect(mapStateToProps)(Buyticket)
