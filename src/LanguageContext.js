import React from 'react';
export const TranslationContext = React.createContext('en');

export const translations = {
    en: {
        quote: 'If you have any troubles feel free to write on:',
        namePh: 'Full Name',
        postPh: 'Position',
        emailPh: 'E-mail',
        phonePh: 'Phone number',
        button: 'Download',
        mob: 'Mob.: '
    },
    ru: {
        quote: 'Если у вас возникают ошибки, пишите на почту:',
        namePh: 'Имя Фамилия',
        postPh: 'Должность',
        emailPh: 'E-mail',
        phonePh: 'Номер телефона',
        button: 'Скачать',
        mob: 'Моб.: '
    },

}