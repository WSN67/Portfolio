import Image from "next/image";

export default function Avatar() {
    return (
        <Image
            className="AvatarContainerSubstitute"
            src="/programming-dark.svg"
            alt="Image replacing Avatar"
            width={100}
            height={100}
            />
    );
}
