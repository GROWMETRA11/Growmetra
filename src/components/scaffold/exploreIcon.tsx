import Link from "next/link";
import exploreIcon from "../../app/assets/Icon.png";
import Image from "next/image";


export default function ExploreIcon({ width, height }: { width?: number, height?: number }) {
    return (

        <Image src={exploreIcon} alt="" width={width ?? 8} height={height ?? 8} />

    )
}
