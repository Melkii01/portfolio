// Import images
import Image1 from '../images/freelance-studio/1.png';
import Image2 from '../images/freelance-studio/2.png';
import Image3 from '../images/freelance-studio/3.png';
import Image4 from '../images/freelance-studio/4.png';
import Image5 from '../images/freelance-studio/5.png';
import Image6 from '../images/freelance-studio/6.png';
import Image7 from '../images/freelance-studio/7.png';
import Image8 from '../images/freelance-studio/8.png';
import Image9 from '../images/freelance-studio/9.png';

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

import IncomeExpenseImageMain from "../images/spa-expense-income/main.png";
import HookahImageMain from "../images/hookah/main.png";
import TeaImageMain from "../images/tea/main.png";
import ClubImageMain from "../images/club_4_horse/main.png";

export const freelanceStudioProjectData = {
	ProjectHeader: {
		title: 'Freelance Studio',
		publishDate: '10 Февраля, 2024',
		tags: 'Админка',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Картинка',
			img: Image1,
		},
		{
			id: 2,
			title: 'Картинка',
			img: Image2,
		},
		{
			id: 3,
			title: 'Картинка',
			img: Image3,
		},
		{
			id: 4,
			title: 'Картинка',
			img: Image4,
		},
		{
			id: 5,
			title: 'Картинка',
			img: Image5,
		},
		{
			id: 6,
			title: 'Картинка',
			img: Image6,
		},
		{
			id: 7,
			title: 'Картинка',
			img: Image7,
		},
		{
			id: 8,
			title: 'Картинка',
			img: Image8,
		},
		{
			id: 9,
			title: 'Картинка',
			img: Image9,
		},
	],
	ProjectInfo: {
		ClientHeading: 'О проекте',
		CompanyInfo: [
			{
				id: 1,
				title: 'Ссылка на GIT',
				details: 'репозиторий',
				url: 'https://github.com/Melkii01/freelance_studio_SPA',
			},
			{
				id: 2,
				title: 'Ссылка на сайт',
				details: 'отсутствует',
				url: '',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		Technologies: [
			{
				title: 'Инструменты',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Webpack',
					'AdminLte'
				],
			},
		],
		ProjectDetailsHeading: 'Описание',
		ProjectDetails: [
			{
				id: 1,
				details: 'SPA приложение для управления заказами для фрилансеров.'
			},
			{
				id: 2,
				details:'Можно добавлять/редактировать/удалять заказы и фрилансеров. Следить по календарю процесс работы'
			},
			{
				id: 3,
				details:'Проект создан на основе дашборда AdminLte, и действия на нативном JS. Есть адаптив.'
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter/>,
				url: 'https://twitter.com/real',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram/>,
				url: 'https://instagram.com/real',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook/>,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin/>,
				url: 'https://linkedin.com/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube/>,
				url: 'https://www.youtube.com/c/Studio',
			},
		],
	},
	RelatedProject: {
		title: 'Другие проекты',
		Projects: [
			{
				id: 1,
				title: 'Клуб 4 коней',
				img: ClubImageMain,
				url: 'club-4-horse',
			},
			{
				id: 3,
				title: 'Чай',
				img: TeaImageMain,
				url: 'tea',
			},
			{
				id: 3,
				title: 'Кальянная',
				img: HookahImageMain,
				url: 'hookah',
			},
			{
				id: 4,
				title: 'Доходы и расходы',
				img: IncomeExpenseImageMain,
				url: 'income-expense',
			},
		],
	},
};
