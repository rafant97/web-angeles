import Image from "next/image"
import Link from "next/link";

const Footer = () => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return (
    <div className='text-primary w-auto align-middle'>
        <Link href="https://www.instagram.com/angelesconejero888/" className="flex items-center px-8 xl:justify-center">
          <Image src="/instagram.png" width={50} height={100} alt="logo" className=""/>
          <p className="text-2xl my-auto ml-2">@angelesconejero888</p>
        </Link>
        <div className="mt-5">
          <p className="text-center">@Libérate{añoActual}</p>
        </div>

    </div>
  )
}

export default Footer
