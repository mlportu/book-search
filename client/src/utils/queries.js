import gql from 'graphql-tag';

export const ME_QUERY = gql `
    query {
        me{
        _id
        username
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
            }
        
        }
    }
`