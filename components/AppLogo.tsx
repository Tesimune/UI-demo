import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';


interface Props {
    w?: string,
    h?: string,
    className?: any
}

const AppLogo: FunctionComponent<Props> = props => {

    const {w, h, className} = props;

    return (
        <Link href="/">
            <a className={className}>
                <Image src="/images/logo.svg" alt="Application Logo" width={w ?? 200} height={h ?? 50} />
            </a>
        </Link>
    )
}

export default AppLogo;