import Head from "next/head"


type Props = {
    title: string,
    children?: any,
}

const PageHead = ({title, children}: Props) => {
    return (
        <Head>
          <title>LendSqr - {title}</title>
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
          {children}
        </Head>
    )
}

export default PageHead;