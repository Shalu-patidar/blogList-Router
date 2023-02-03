// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {title, description, publishedDate} = blogsDetails

  return (
    <li className="blog-item-container">
      <div className="head">
        <h1 className="blog-title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
