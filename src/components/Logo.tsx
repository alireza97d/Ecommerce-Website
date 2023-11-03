import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link
                href={{
                    pathname: "/"
                }}
                className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200"
            >
                <h3 className="">smart.</h3>
            </Link>
        </>
    );
}

export default Logo;