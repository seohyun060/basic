import { createGlobalStyle } from 'styled-components';
import 'pretendard/dist/web/static/pretendard.css';

const GlobalStyle = createGlobalStyle`        
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'Pretendard';
        font-weight: 400;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    a{
    	cursor:pointer;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

   
`;

export default GlobalStyle;

//  /* ====================
//         CUSTOM RESET CSS
//     ==================== */
//     * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
// }

// html, body {
//     width: 100%;
//     height: 100%;
//     margin: 0;
//     padding: 0;
//     font: 1rem/1.5 'Noto Sans KR', sans-serif;
//     font-weight: 400;
//     color: #212121;
//     letter-spacing: -0.5px;
// }

// a,
// button {
//     text-decoration: none;
//     color: #212121;
//     cursor: pointer;
// }

// button {
//     background-color: transparent;
//     cursor: pointer;
//     border: none;
// }

// input,
// textarea {
//     border: 0;
// }

// button,
// input,
// textarea,
// input::placeholder,
// textarea::placeholder {
//     font-family: 'Noto Sans KR', sans-serif;
// }

// input:focus,
// textarea:focus,
// input:active,
// textarea:active {
//     outline: none;
// }

// strong {
//     font-weight: 700;
// }

// ul, ol, li {
//     list-style: none;
// }

//     /*
//     ::-webkit-scrollbar {
//             width: 3px;  // 스크롤바의 너비
//             height: 8px;
//     }
//     ::-webkit-scrollbar-thumb {
//             margin-top: 28px;
//             height: 8px; // 스크롤바의 길이
//             background: #86869B; // 스크롤바의 색상
//             border-radius: 10px;
//     }
//     ::-webkit-scrollbar-track {
//             background: #F7F7F7;  //스크롤바 뒷 배경 색상
//     }
//     textarea::-webkit-input-placeholder {color:#D9D9D9;}
//     .inp::placeholder{color:#D9D9D9;}
//     input::-webkit-input-placeholder {
//             color:#D9D9D9;
//     }
//     ::-webkit-input-placeholder { // Chrome/Opera/Safari
//             color: #D9D9D9;
//     }
//     ::-moz-placeholder { // Firefox 19+
//             color: #D9D9D9 !important;
//     }
//     :-ms-input-placeholder { // IE 10+
//             color: #D9D9D9 !important;
//     }
//     */
