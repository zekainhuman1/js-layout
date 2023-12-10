import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const NAV_LIST = [
  {
    text: 'База знань',
    active: false,
  },
  {
    text: 'Інформація',
    active: true,
  },
]

const createNav = () => {
  const navBar = createElement('nav', 'nav')

  NAV_LIST.forEach((navData) => {
    const navBtn = createElement(
      'button',
      navData.active
        ? 'nav__button--active'
        : 'nav__button',
      navData.text,
    )

    navBar.append(navBtn)
  })

  return navBar
}

const nav = createNav()
page.append(nav)

const INFO_LIST = [
  {
    title: 'Що таке база знань?',
    info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    textBtn: "Перейти до ком'юніті у Телеграм",
  },
]

const createBlock = () => {
  const infoBlock = createElement('div', 'block')

  INFO_LIST.forEach((infoData) => {
    const banner = createElement('img', 'block__banner')

    const info = createElement('div', 'block__info')

    const infoTitle = createElement(
      'h2',
      'block__info--title',
      infoData.title,
    )

    const infoText = createElement(
      'p',
      'block__info--text',
      infoData.info,
    )

    const infoBtn = createElement(
      'button',
      'block__button',
      infoData.textBtn,
    )

    info.append(infoTitle, infoText)

    infoBlock.append(banner, info, infoBtn)
  })

  return infoBlock
}

const block = createBlock()
page.append(block)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.10',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний паксамопрезентацій.',
    date: '15.12',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--vieved'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )

    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

const post = createPost()
// page.append(post)
