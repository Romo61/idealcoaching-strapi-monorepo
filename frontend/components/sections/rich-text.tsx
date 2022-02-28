import MarkdownRender from 'utils/MarkdownRender'
type RichTextProps = {
  data: {
    content: string
  }
}
const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <div className="mx-auto py-12 selection:bg-primary-300 selection:text-primary-900">
      {/* <Markdown>{data.content}</Markdown> */}
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}
export default RichText
