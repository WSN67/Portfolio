import Image from "next/image";

export default function AvatarDark() {
    return (
        <Image
            className="AvatarContainerSubstitute"
            src="/programming-light.svg"
            alt="Image replacing Avatar"
            width={100}
            height={100}
            priority={true}
            />
    );
}