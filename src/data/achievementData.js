import postman from '../assets/png/postman.png';
import python from '../assets/png/python.png';
import flutter from '../assets/png/flutter.png';
import ml from '../assets/png/ml.png';
import web from '../assets/png/web.png';

export const achievementData = {
    bio : "I don't always code, but when I do, the world gets a little better. Crafting digital experiences, one line of code at a time.",
    achievements : [
        {
            id : 1,
            title : 'Postman API Student Expert Fundamentals',
            details : 'A comprehensive course on Rest APIs',
            date : 'August July 2024',
            field : 'APIs',
            image : postman
        },
        {
            id : 2,
            title : 'The Complete 2024 Web Development Bootcamp',
            details : 'Full-Stack Web Development with HTML, CSS, Javascript, Node, React and PostgreSQL',
            date : 'October 2022',
            field : 'Web Development',
            image : web
        },
        {
            id : 3,
            title : '100 Days of Code: Python Pro Bootcamp',
            details : 'Mastery in Data Science, Web Automation, Games and App Development',
            date : 'November 2023',
            field : 'Python Programming',
            image : python
        },
        {
            id : 3,
            title : 'Data Science & Machine Learning',
            details : 'Tensorflow, Deep Learning, Regression, Classification, Neural Networks, Artificial Intelligence Course',
            date : 'April 2023',
            field : 'Data Science',
            image : ml
        },
        {
            id : 4,
            title : 'Flutter & Dart - The Complete Guide ',
            details : 'A Complete Guide to the Flutter SDK &amp; Flutter Framework for building native iOS and Android apps',
            date : 'June 2024',
            field : 'Mobile Development',
            image : flutter
        }

    ]
}
