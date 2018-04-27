import React from 'react'
import Buyticket from '../../containers/Buyticket'
import { Link } from 'react-router-dom'
 
class Listing extends React.Component {

    render() {
        
        var currentDate = function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!

            var yyyy = today.getFullYear();
            if(dd<10){
                dd='0'+dd;
            } 
            if(mm<10){
                mm='0'+mm;
            } 
            var today = yyyy+''+mm+''+dd
            return today
        }

        let movieName = this.props.events.EventTitle        
        let imageUrl = this.props.events.ChildEvents[0].EventImageCode
        let buyticketEventTitle = this.props.events.EventURLTitle+''
        let buyticketEventCode = this.props.events.EventCode
        let imagePathURL = imageUrl != '' ? 'IMAGE_URL'+imageUrl+'.jpg' : 'IMAGE_URL'
        let buyticketURL = '/buyticket/'+buyticketEventTitle+'/movie-mumbai-'+buyticketEventCode+'/'+currentDate()
    


        return(
            <div className="card">
                <div className="img">
                    <img src={imagePathURL} alt="now showing" />
                    <br />
                    <div className="movie-name">
                        <p>{movieName}</p>
                    </div>
                    <div className="_btn">
                        <Link className="book-now" to={ buyticketURL } alt="book now">Book now</Link>
                    </div>
                </div>
                <style jsx global>{`   
                    .card {
                        text-align: center;
                        display: inline-block;
                        padding: 40px;
                    }
                    .book-now {
                        padding: 10px;
                        width: 94%;
                        background: #c02c39;
                        color: #fff;
                        text-decoration: none;
                        display: inline-block;
                    }                 
                `}
                </style>
            </div>
        )
    }
}

export default Listing