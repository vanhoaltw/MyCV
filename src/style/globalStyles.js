import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 15px;
        line-height: 19px;
    }
    section:not(section:first-child){
      min-height: 100vh;
      padding: 5px 0 25px 0;
      &:nth-child(odd){
        background-color: ${({theme})=> theme.bgSection};
      }
    }
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    min-height: 100vh;
  }
  body {    
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bg};
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .side-bar-menu{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background:#050d18;
  }
  #main-content{
    h1,h2,h3,h4,h5,h6,p,label{
      color:${({ theme }) => theme.text};
    }
    color:${({ theme }) => theme.text};
    #title{
      h1{
        color:${({ theme }) => theme.title};
        &::after{
          background-color: ${({ theme }) => theme.title};
        }
      }
    }
    .about{
      h3{
        color:${({ theme }) => theme.title};
      }
      ul li, a{
        color:${({ theme }) => theme.text};
      }
      .education{
        background-color: ${({ theme }) => theme.main};
        ul li, a, label, p ,h1{
          color:#fff;
        }
      }
    }
    .skill{
      &-row > span{
        color:${({ theme }) =>
          theme.text === "#333333" ? "#fff" : theme.text};
        background-color: ${({ theme }) => theme.title};
      }
      &-wrap{
        border: 2px solid ${({ theme }) => theme.title};
      }
    }
    .resume{
      &-item{
        border-left: 2px solid ${({ theme }) => theme.title};
        &::before{
          border: 2px solid ${({ theme }) => theme.title};
        }
        &:hover{
          &::before{
            background: ${({ theme }) => theme.title};
          }
        }
        h5{
          color:${({ theme }) => theme.title}
        }
        svg{
          fill:${({ theme }) => theme.text}
        }
        svg>path{
          fill:${({ theme }) => theme.text}
        }
      }
    }
    .certificate{
      a{
        color:${({ theme }) => theme.title}
      }
    }
    .contact{
      input,textarea{
        background-color: transparent;
        color: ${({ theme }) => theme.text};
      }
      .info{
        background:${({ theme }) => theme.bg};
        box-shadow:${({ theme }) => theme.shadow};
      }
      .php-email-form{
        background:${({ theme }) => theme.bg};
        box-shadow:${({ theme }) => theme.shadow};
        label{
          svg > path{
            fill:${({ theme }) => theme.text}
          }
        }
      }
    }
    .portfolio{
      &-wrap{
        &::before{
          background: ${({theme})=> theme.bgOpacity};
        }
        p{
          svg{
            fill:${({theme})=> theme.text}
          }
        }
      }
      &-links{
        &::-webkit-scrollbar-thumb{
          background: ${({theme})=> theme.title};
        }
        h1{
          color:${({theme})=> theme.title}
        }
        a{
          background: ${({theme})=> theme.title};
        }
      }
    }
  }
`;

export default GlobalStyles;
