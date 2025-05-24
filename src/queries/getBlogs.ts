
export const GET_BLOGS = `
  {
    blogs(orderBy: createdAt_DESC, stage: PUBLISHED) {
      id
      title
      content {
        html
      }
      image {
        url
      }
      relatedImages {
        url
      }
      tags
      technologies
    }
  }
`
