import {ReactComponent as IconHome} from '../asset/icons/home.svg'
import {ReactComponent as IconIntroduce} from '../asset/icons/resume.svg'
import {ReactComponent as IconExperience} from '../asset/icons/experience.svg'
import {ReactComponent as IconProject} from '../asset/icons/my-project.svg'
import {ReactComponent as IconCertificate} from '../asset/icons/certificate.svg'
import {ReactComponent as IconSkill} from '../asset/icons/skill.svg'
import {ReactComponent as IconContact} from '../asset/icons/contact.svg'
import {ReactComponent as IconFeedBack} from '../asset/icons/feedback.svg'
import {ReactComponent as IconFacebook} from '../asset/icons/IconFacebook.svg'
import {ReactComponent as IconLinked} from '../asset/icons/IconLinked.svg'
import {ReactComponent as IconGithub} from '../asset/icons/IconGithub.svg'
import {ReactComponent as IconCV} from '../asset/icons/IconCV.svg'

//
export const SOCIAL_ROUTES = {
    CV:{
        icon:<IconCV/>,
        name:"CV",
        href:"https://drive.google.com/file/d/113Rc9NS5kwlKBiIcrOhvy8eau7wInu6D/view?usp=sharing"
    },
    GITHUB:{
        icon:<IconGithub/>,
        name:'Github',
        href:'https://github.com/vanhoaltw'
    },
    FB:{
        icon:<IconFacebook/>,
        name:'Facebook',
        href:'https://www.facebook.com/hoahv01/'
    },
    LINKED:{
        icon:<IconLinked/>,
        name:'Linked',
        href:'https://www.linkedin.com/in/vanhoaltw/'
    }
}

const ROUTES = {
    HOME:{
        name:'menuHome',
        href:'hero',
        title:'titleHome',
        description:'',
        icon:<IconHome/>,
    },
    ABOUT:{
        name:'menuAbout',
        href:'about',
        title:'titleAbout',
        description:'',
        icon:<IconIntroduce/>,
    },
    SKILL:{
        name:'menuSkill',
        href:'skill',
        title:'titleSkill',
        description:'descriptionSkill',
        icon:<IconSkill/>,
    },
    EXPRIENCE:{
        name:'menuExperience',
        href:'education',
        title:'titleExperience',
        description:'descriptionExperience',
        icon:<IconExperience/>,
    },
    PROJECT:{
        name:'menuProjects',
        href:'project',
        title:'titleProjects',
        description:'descriptionPortfolio',
        icon:<IconProject/>,
    },
    CERTIFICATE:{
        name:'menuCertificate',
        href:'certificate',
        title:'titleCertificate',
        description:'descriptionCertificate',
        icon:<IconCertificate/>,
    }
    ,
    CONTACT:{
        name:'menuContact',
        href:'contact',
        title:'titleContact',
        description:'descriptionContact',
        icon:<IconContact/>,
    },
    FEEDBACK:{
        name:'Feedback',
        href:'feeback',
        icon:<IconFeedBack/>,
    }
}

export const MENU_ROUTES= {
    HOME:ROUTES.HOME,
    ABOUT:ROUTES.ABOUT,
    SKILL:ROUTES.SKILL,
    EXPRIENCE:ROUTES.EXPRIENCE,
    PROJECT:ROUTES.PROJECT,
    CERTIFICATE:ROUTES.CERTIFICATE,
    CONTACT:ROUTES.CONTACT,
}