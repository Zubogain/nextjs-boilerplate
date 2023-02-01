import { getStaticPaths, getI18nProps } from '@Libs/getStatic';

import ErrorPageContainer from "@Containers/ErrorPage";

export { getStaticPaths }
export const getStaticProps = async ctx => {
    return {
        props: {
            ...(await getI18nProps(ctx, ['error-page'])),
        },
    }
}

export default ErrorPageContainer;
