// Write your JS code here
import './index.css'

import BlogItem from '../BlogItem'

const BlogList = prop => {
  const {blogsList} = prop

  return (
    <ul className="blog-list-container">
      {blogsList.map(each => (
        <BlogItem key={each.id} blogsDetails={each} />
      ))}
    </ul>
  )
}
export default BlogList
