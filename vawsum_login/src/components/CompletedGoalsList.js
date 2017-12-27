import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
//import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    // completeGoalRef.on('value', snap => {
    //   let completeGoals = [];
    //   snap.forEach(completeGoal => {
    //     const { email, title } = completeGoal.val();
    //     completeGoals.push({email, title})
    //   })
    //   this.props.setCompleted(completeGoals);
    // })
    let userData = [];
    const url = "https://institution.vawsum.com/api/feed_list?feed_type=all&group_id=all&school_id=325737&feed_fav=no&position_feed_id=0&user_id=325903&feed_position=top&limit=12 HTTP/1.1";
    fetch(url, 
    {
      method: "GET"
    })
    .then(response => response.json())
    .then(res => 
    {//console.log("this.props", this.props);
         
        res.data.forEach(function(el, i){
          console.log("for each", el);
         // const { }
          // userData.push({
          //   feed: el.Feed.feed, 
          //   time:  el.Feed.formatted_time,
          //   userDesignation: el.User.designation,
          //   userName: el.User.name,
          //   profilePhoto: el.User.profile_photo
          // });
        });
       this.props.setCompleted(userData);
    });
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);