import Markdown from 'react-markdown'
type RichTextProps = {
  data?: {
    content?: string
  }
}
const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <div className="container py-12 prose prose-lg selection:bg-primary-300 selection:text-primary-900">
      <Markdown>{data.content}</Markdown>
    </div>
  )
}
export default RichText
