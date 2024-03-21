// styles.tsx
import { css, Global } from '@emotion/react'

export const globalStyles = (
    <Global
        styles={css`
            body,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            ol,
            ul,
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
                margin: 0;
                padding: 0;
                font-family: 'Roboto', sans-serif;
            }
            /* 기타 전역 스타일 */
            .blind {
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                border: 0;
            }
        `}
    />
)
