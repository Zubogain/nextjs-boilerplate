import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import HelloContainer from "@Containers/Hello";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['common'])),
        },
    }
}

export default HelloContainer;
