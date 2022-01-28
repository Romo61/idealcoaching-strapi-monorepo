import * as React from 'react'
import CustomLink from '../elements/custom-link'
import CustomImage from '../elements/image'

interface ILinkWrapper {
  link: ILink
  children: JSX.Element | JSX.Element[]
}

const LinkWrapper: React.FC<ILinkWrapper> = ({ children, link }) => {
  if (link) return <CustomLink link={link}>{children}</CustomLink>

  return <div>{children}</div>
}

interface IBorderWrapper {
  image_border: boolean
  children: JSX.Element | JSX.Element[]
}

const BorderWrapper: React.FC<IBorderWrapper> = ({
  children,
  image_border,
}) => {
  return (
    <div>
      {image_border ? (
        <div className="border-2 border-primary-400 rounded shadow shadow-primary-600">
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  )
}
interface IImageSectionProps {
  data: {
    __component: string
    id: number
    small_image: boolean
    image_border: boolean
    link: ILink
    picture: IMedia
  }
}

const ImageSection: React.FC<IImageSectionProps> = ({ data }) => {
  return (
    <div className="container grid grid-cols-1 justify-items-center mx-auto max-w-prose md:max-w-screen-md lg:max-w-screen-lg my-0 sm:my-4 md:my-8">
      <LinkWrapper link={data?.link}>
        <BorderWrapper image_border={data.image_border}>
          {data.small_image ? (
            <CustomImage
              media={data?.picture}
              width={333}
              height={250}
              className="object-contain mx-auto w-full"
            />
          ) : (
            <CustomImage
              media={data?.picture}
              width={500}
              height={375}
              className="object-contain mx-auto w-full"
            />
          )}
        </BorderWrapper>
      </LinkWrapper>
    </div>
  )
}

export default ImageSection
