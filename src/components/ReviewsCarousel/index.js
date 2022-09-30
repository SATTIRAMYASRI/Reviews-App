import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexOfReviewInList: 0}

  onLeftBtnClicked = () => {
    const {indexOfReviewInList} = this.state

    if (indexOfReviewInList > 0) {
      this.setState(prevState => ({
        indexOfReviewInList: prevState.indexOfReviewInList - 1,
      }))
    }
  }

  onRightBtnClicked = () => {
    const {indexOfReviewInList} = this.state
    const {reviewsList} = this.props

    if (indexOfReviewInList < reviewsList.length - 1) {
      this.setState(prevState => ({
        indexOfReviewInList: prevState.indexOfReviewInList + 1,
      }))
    }
  }

  render() {
    const {indexOfReviewInList} = this.state
    const {reviewsList} = this.props

    const {imgUrl, username, companyName, description} = reviewsList[
      indexOfReviewInList
    ]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="userDetailsCard-container">
          <button
            type="button"
            className="button"
            onClick={this.onLeftBtnClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="userDetails-container">
            <img src={imgUrl} className="user-image" alt={username} />
            <p className="user-name">{username}</p>
            <p className="user-para">{companyName}</p>
            <p className="user-para">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onRightBtnClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
