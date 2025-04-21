import Link from "next/link";
import newLogo from "@/app/assets/logoNew.png"
import Image from "next/image";


export default function Logo({ width, height }: { width?: number, height?: number }) {
    return (
        <Link href={"/"}>
            <Image src={newLogo} alt="" width={width ?? 150} height={height ?? 150} />
        </Link>
    )
}
