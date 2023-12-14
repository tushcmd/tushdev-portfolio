interface Constants {
    greet: string;
    name: string;
    paragraph: string;
}

const constants: Constants = {
    greet: 'Hi there, I am',
    name: 'Muturi David',
    paragraph: 'I build web and mobile apps',
};

interface About {
    paragraph: string;
    paragraph2: string;
}

const about: About = {
    paragraph: 'I&apos;m highly passionate <br> of creating cool and reliable software.',
    paragraph2: 'I aim at perfecting in building scalable products with high perfomance experinces.',
};

interface Skills {
    paragraph: string;
}

const skills: Skills = {
    paragraph: 'Here&apos;s a few technologies I&apos;ve been working with lately',
}

export default constants;
export default about;
export default skills;