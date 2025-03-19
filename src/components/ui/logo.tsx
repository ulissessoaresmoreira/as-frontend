import  Link  from "next/link"

type Props = {
  size: number;
}

export const Logo = ({} : Props) => {
  return (
    <Link href="/">
      <div className="flex items-center w-{size} h-{size}">
        Logo
      </div>
    </Link>
  )
}