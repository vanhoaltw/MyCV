import html from '../asset/image/html.png'
import css from '../asset/image/css.png'
import javascript from '../asset/image/javascript.png'
import scss from '../asset/image/sass.png'
import reactjs from '../asset/image/reactjs.png'
import nextjs from '../asset/image/nextjs.png'
import github from '../asset/image/github.png'
import mongodb from '../asset/image/mongodb.png'
import nodejs from '../asset/image/nodejs.png'
import redux from '../asset/image/redux.png'
import slack from '../asset/image/slack.png'
import typescript from '../asset/image/typescript.png'
import php from '../asset/image/php.png'
import figma from '../asset/image/figma.png'
import wordpress from '../asset/image/wordpress.png'
import bootstrap from '../asset/image/bootstrap.png'
import mysql from '../asset/image/mysql.png'

const SKILL = [
    {
        title:'Front end',
        skills:[
            {name:'HTML',image:html},
            {name:'CSS',image:css},
            {name:'Javasript',image:javascript},
            {name:'PHP',image:php},
            {name:'Bootstrap',image:bootstrap},
            {name:'SCSS',image:scss},
            {name:'ReactJS',image:reactjs},
            {name:'NextJS',image:nextjs},
            {name:'Typescript',image:typescript},
            {name:'Redux',image:redux},
        ]
    },
    {
        title:'Back end',
        skills:[
            {name:'Mongodb',image:mongodb},
            {name:'Mysql',image:mysql},
            {name:'NodeJS',image:nodejs},
        ]
    },
    {
        title:'Tools',
        skills:[
            {name:'Github',image:github},
            {name:'Slack',image:slack},
            {name:'Figma',image:figma},
            {name:'Wordpress',image:wordpress},
        ]
    }
]

export default SKILL