

interface IModelPostItemProps {
    postTitle: string
    postContent: string
    author?: string
}

export interface IPostPageProps {
    posts: Array<IModelPostItemProps>
}
