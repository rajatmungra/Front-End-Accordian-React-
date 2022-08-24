import {useState} from 'react';

const arr = [{
    index: 0,
    title: 'What is React?',
    content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'
},
{
    index: 1,
    title: 'Is react frontend or backend?',
    content: 'js/React is an open-source frontend framework that is based on JavaScript, developed by Facebook, and best known for its virtual DOM feature. With React, we recommend Express. js/Express as a backend service.'
},
{
    index: 2,
    title: 'What is react best for?',
    content: 'React JS is the most popular JS library in todays times. Even after years of its release, it is consistently used by web developers. It is the best JavaScript UI library for creating and maintaining views. The two main features that make React more than just a library are JSX and Virtual DOMs.'
},
{
    index: 3,
    title: 'What is ReactJS vs Angular?',
    content: 'Angular is a Javascript framework built using Typescript, while Reactjs is a Javascript library and built using JSX. Angular is mostly used to build complex enterprise-grade apps like single-page apps and progressive web apps, while React is used to build UI components in any app with frequently variable data.'
},
{
    index: 4,
    title: 'Is React a framework or library?',
    content: 'React is an open source JavaScript framework, that isnt actually a framework. But it is currently the most commonly used front-end development technology in the world. React, originally developed by and still maintained by Facebook and supported by an active open source community, is in fact a JS library.'
},
];

const List = () => {

    

    const [ai, setAi] = useState(0);
    

    const data = arr.map(details => {
        
        if (details.index === ai) {
            // console.log(ai);
            return (
                <>
                    <div className='title active' onClick={() => { setAi(details.index) }}>
                        <i className="dropdown icon"></i>
                        {details.title}
                    </div>
                    <div className=' content active'>
                        <p>
                            {details.content}
                        </p>
                    </div>
                </>
            )
        }
        
            return (
                <>
                    <div className='title' onClick={() => { setAi(details.index) }}>
                        <i className="dropdown icon"></i>
                        {details.title}
                    </div>
                    <div className=' content'>
                        <p>
                            {details.content}
                        </p>
                    </div>
                </>
            )
        
    })

    return (

        <div className='ui styled accordion'>
            {data}
        </div>

    );
}

export default List;