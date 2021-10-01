import { ProductComment } from '../interfaces/types'
import { differenceDays } from '../utils/utils'

function commentItem(comment: ProductComment): string {
  if (!comment) return `<h3>There was an error loading the comments :(</h3>`

  const daysAgo: number = differenceDays(comment.date)

  return `
  <li class="comments-item">
    <div class="comments-pic">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="4" fill="white"/>
        <path d="M33.433 30.8381C34.2129 33.4072 32.2904 36 29.6055 36L10.3945 36C7.70962 36 5.78709 33.4072 6.56701 30.8381L8.41948 24.7358C8.78496 23.5319 9.69558 22.5701 10.8777 22.1394L16.0867 20.2417C16.5255 20.0818 16.9868 20 17.4538 20C18.8641 20 22.0073 20 23.25 20C24.3349 20 27.4256 21.2585 29.3603 22.0951C30.4089 22.5486 31.1899 23.449 31.5218 24.5423L33.433 30.8381Z" fill="black"/>
        <circle cx="20" cy="12" r="7" fill="black"/>
      </svg>
    </div>
    <div class="comments-content">
      <div class="comments-header">
        <p class="comments-user">${comment.username}</p>
        <p class="comments-since">${daysAgo} days ago</p>
      </div>
      <p class="comments-comment">${comment.message}</p>
    </div>
  </li>
  `
}

export default commentItem